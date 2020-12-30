// const a = (n1,n2) => n1+n2; 
// console.log(a);



/**
 * 
 * @param {*} target 装饰的目标
 * @param {*} key 装饰的key pi
 * @param {*} descriptor 属性描述
 */
function readonly(target, key, descriptor){
    descriptor.writable = false;
}
class Person {
   @readonly PI = 3.14
}

let p = new Person()
p.PI = 3.15
console.log(p);