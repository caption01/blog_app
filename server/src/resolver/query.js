const Query = {
  hello(parent, args, ctx, info) {
    return "hello";
  },
  me(parent, args, ctx, info) {
    return "my name is Nutchapon(bom bay)";
  },
};

export { Query as default };
