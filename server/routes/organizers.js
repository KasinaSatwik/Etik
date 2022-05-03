const router = require("express").Router();
const { Organizer, validate } = require("../models/organizer");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const organizer = await Organizer.findOne({ email: req.body.email });
		if (organizer)
			return res
				.status(409)
				.send({ message: "Organizer with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new Organizer({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "Organizer created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;