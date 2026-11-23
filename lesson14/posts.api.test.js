const PostsController = require('./controllers/PostsController');


test("1. Get all posts", async () => {
  const response = await PostsController.getAllPosts();
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data).toHaveLength(100);
  response.data.forEach((post) => {
    expect(typeof post.userId).toBe('number');
    expect(typeof post.id).toBe('number');
    expect(typeof post.title).toBe('string');
    expect(typeof post.body).toBe('string');
  });
})

test("2. Get post1", async () => {
  const response = await PostsController.getPost(1);
  expect(response.status).toBe(200);
  expect(response.data.id).toBe(1);
  expect(typeof response.data.title).toBe('string');
  expect(typeof response.data.userId).toBe('number');
  expect(typeof response.data.body).toBe('string');
})

test("3. Get post1 comments", async () => {
  const response = await PostsController.getPostComments(1);
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data).toHaveLength(5);
  response.data.forEach((comment) => {
    expect(typeof comment.id).toBe('number');
    expect(typeof comment.name).toBe('string');
    expect(typeof comment.email).toBe('string');
    expect(comment.email).toContain('@');
    expect(typeof comment.body).toBe('string');
  });
})

test("4. Get comments?postId=1", async () => {
  const response = await PostsController.getCommentsByPostId(1);
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data).toHaveLength(5);
  response.data.forEach((comment) => {
    expect(comment.postId).toBe(1);
    expect(typeof comment.id).toBe('number');
    expect(typeof comment.name).toBe('string');
    expect(typeof comment.email).toBe('string');
    expect(comment.email).toContain('@');
    expect(typeof comment.body).toBe('string');
  });
})

test("5. Create post", async () => {
  const newPost = {
    title: 'Hi',
    body: 'I would like to create a post',
    userId: 1,
  };
  const response = await PostsController.createPost(newPost);
  expect(response.status).toBe(201);
  expect(response.data.title).toBe(newPost.title);
  expect(response.data.body).toBe(newPost.body);
  expect(response.data.userId).toBe(newPost.userId);
  expect(response.data.id).toBe(101);
})