

//import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/events.js';
const { getEvents, getEvent, createEvent, updateEvent, likeEvent, deleteEvent } = require("../controllers/events.js");
const router = require("express").Router();

router.get('/', getEvents);
router.post('/', createEvent);
router.get('/:id', getEvent);
router.patch('/:id', updateEvent);
router.delete('/:id', deleteEvent);
router.patch('/:id/likeEvent', likeEvent);

module.exports = router;