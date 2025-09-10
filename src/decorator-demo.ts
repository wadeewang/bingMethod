/**
 * ts 装饰器执行顺序
 * 右 -> 左
 * 下 -> 上
 */

function logClassFactory1(prefix: string) {
  return function (target: any) {
    console.log(`${prefix}1 ${target}`);
  };
}

function logClassFactory2(prefix: string) {
  return function (target: any) {
    console.log(`${prefix}2 ${target}`);
  };
}

@logClassFactory1("Logging")
@logClassFactory2("Logging")
class Log {
  constructor() {
    console.log("constructor");
  }
}

const log = new Log();
