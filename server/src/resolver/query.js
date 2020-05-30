const Query = {
  posts(parent, args, { prisma }, info) {
    const opArgs = {
      first: args.first,
      orderBy: args.orderBy,
      skip: args.skip,
      after: args.after,
    };

    if (args.query) {
      opArgs.where = {
        OR: [
          {
            title_contains: args.query,
          },
          {
            description_contains: args.query,
          },
        ],
      };
    }

    return prisma.query.posts(opArgs, info);
  },
};

export { Query as default };
