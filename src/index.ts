import { bound } from "./bound";

class Foo {
  private foo = "hello, foo";

  @bound static staticBar() {
    console.log("Static method called");
  }

  @bound public bar() {
    console.log(this.foo);
  }
}

var foo = new Foo();

setTimeout(foo.bar, 500); // "hello, foo"

// 测试静态方法
Foo.staticBar(); // "Static method called"
