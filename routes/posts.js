import express from "express";

import {getPosts, createPost, updatePost, deletePost, likePost, getNumberOfPosts } from '../controllers/posts.js';

const router = express.Router();

// http://localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

router.get("/countPosts", getNumberOfPosts);


export default router;