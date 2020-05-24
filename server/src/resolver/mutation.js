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
  async updatePost(parent, args, { prisma }, info) {
    const postId = args.id;
    let opArgs = {};

    const postExits = await prisma.exists.Post({
      id: postId,
    });

    console.log(postExits);

    if (!postExits) {
      throw new Error("post not found");
    }

    opArgs = {
      where: {
        id: postId,
      },
      data: {
        ...args.data,
      },
    };

    return prisma.mutation.updatePost(opArgs, info);
  },
  async deletePost(parent, args, { prisma }, info) {
    const postId = args.id;

    const postExits = await prisma.exists.Post({
      id: postId,
    });

    if (!postExits) {
      throw new Error("post not found");
    }

    const opArgs = {
      where: {
        id: postId,
      },
    };

    return prisma.mutation.deletePost(opArgs, info);
  },
};

export { Mutation as default };
