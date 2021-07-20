module.exports = function () {
  let Compiler = this.Compiler,
    visitors = Compiler.prototype.visitors,
    original = visitors.image;

  visitors.image = function (node) {
    let self = this;

    // this is disgustingly aware of the implementation of remark-stringify as of v8.1.1
    // fortunately, its necessity should be temporary
    let proxy = {
      encode: (t, n) => self.encode.call(self, t, n),
      enterLink: () => self.enterLink.call(self),
      escape: (t, n) => t,
    };

    return original.apply(proxy, arguments);
  };
};
