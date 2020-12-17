const { AuthenticationError } = require('apollo-server');

const Post = require('../../../models/Post');
const checkAuth = require('../../../util/checkAuth');

module.exports = {
  Query: {
    getPosts: async () => {
      try {
        const posts = await Post.find().sort({ createdAt: -1 });

        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
    getPost: async (_, { id }) => {
      try {
        const post = await Post.findById(id);

        if (!post) throw new Error('Post not found.');

        return post;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    createPost: async (_, { body }, context) => {
      const user = checkAuth(context);

      const post = new Post({
        body,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      const savedPost = await post.save();

      return savedPost;
    },
    deletePost: async (_, { id }, context) => {
      try {
        const user = checkAuth(context);
        const post = await Post.findById(id);

        if (!user.username === post.username)
          throw new AuthenticationError(
            'Only the owner of the post can delete.'
          );

        await post.delete();
        return 'Post deleted successfuly.';
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
