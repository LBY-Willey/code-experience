Object.prototype.a = 'Object';   // 给object的原型添加一个属性a，值为Object（所有对象可以间接访问）

Function.prototype.a = 'Function';  // 给function的原型添加一个属性a，值为Function（所有函数可以间接访问）

function Person(){};  // 创建一个函数Person

var child = new Person();  // 创建Person的实例child


console.log(Object.constructor === Function) // true
// Object本身是函数，constructor 指向其构造函数 Function （但是 Object.prototype 是一个对象） 

console.log(Function.constructor === Function) // true
// Function 特殊：自身是自身的构造函数

console.log(Person.a); // Function
// Person 是函数 → 先找自身有没有 a → 没有就查 Function.prototype.a

console.log(child.a); // Object
// child 是对象 → 先找自身 → 没有 → 查 Person.prototype（空）→ 继续查 Object.prototype.a

console.log(
    child.__proto__.__proto__.constructor.constructor.constructor
); // Function
// 拆解步骤：
// child.__proto__ → Person.prototype（空对象）
// Person.prototype.__proto__ → Object.prototype
// Object.prototype.constructor → Object（函数）
// Object.constructor → Function（函数）
// Function.constructor → Function（自身）

console.log(Function.prototype); // 所有的prototype都是对象
// Function.prototype是对象，Function.prototype再向上是Object.prototype，再向上是nul
console.log(Function.prototype.__proto__ === Object.prototype); // true