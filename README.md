### 绑定方法

---

TypeScript 中的透明方法绑定，用于持久化词法作用域this。用法：将@bound装饰器添加到方法中。

```ts
class Foo {
  private foo = "hello, foo";

  @bound public bar() {
    console.log(this.foo);
  }
}

var foo = new Foo();

setTimeout(foo.bar, 500); // "hello, foo"
```

### 原理

在实例方法上使用 `@bound` 将会使用 `getter` 覆盖改方法上的 `PropertyDescriptor`，该 getter 会在首次调用时将该方法的绑定版本注入到实例对象中。后续调用将使用实例对象上的方法，从而有效地隐藏原型对象上原始的未绑定方法。这样做的副作用是对原型方法的修改将不起作用。

在静态方法上使用 `@bound` 将简单地用构造函数本身的绑定版本覆盖它。
