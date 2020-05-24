const Mutation = {
  async createPost(parent, args, { prisma }, info) {
    return prisma.mutation.createPost(
      {
        data: {
          ...args.data,
        },
      },
      info
    );
  },
};

export { Mutation as default };
