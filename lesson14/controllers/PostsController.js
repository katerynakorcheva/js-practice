const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

class PostsController {
    async getAllPosts() {
        return await axios.get(`${BASE_URL}/posts`);
    }

    async getPost(id) {
        return await axios.get(`${BASE_URL}/posts/${id}`);
    }

    async getPostComments(id) {
        return await axios.get(`${BASE_URL}/posts/${id}/comments`);
    }

    async getCommentsByPostId(postId) {
        return await axios.get(`${BASE_URL}/comments?postId=${postId}`);
    }

    async createPost(post) {
        return await axios.post(`${BASE_URL}/posts`, post);
    }
}

module.exports = new PostsController();
