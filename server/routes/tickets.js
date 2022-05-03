const router = require("express").Router();
const { getTickets,createTicket } = require("../controllers/tickets.js");

router.get('/', getTickets);
router.post('/', createTicket);

module.exports = router;