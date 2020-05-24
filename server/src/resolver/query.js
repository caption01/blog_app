const Query = {
  posts(parent, args, { prisma }, info) {
    const opArgs = {};

    return prisma.query.posts(opArgs, info);
  },
};

export { Query as default };
