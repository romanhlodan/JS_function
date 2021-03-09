//--1
// let chuslo = {x:223,y:8,z:5};
// function fix () {
//     console.log(chuslo);
//     if (chuslo.x<chuslo.y && chuslo.x<chuslo.z){
//         console.log(chuslo.x);
//         return chuslo.x;
//     }if (chuslo.y<chuslo.x && chuslo.y<chuslo.z){
//         console.log(chuslo.y);
//         return chuslo.y;
//     }if (chuslo.z<chuslo.x && chuslo.z<chuslo.y){
//         console.log(chuslo.z);
//         return chuslo.z;
//     }
// }
// chuslo.fix = fix;
// chuslo.fix();

//---2
// let chus = {x:45,y:85,z:66};
// function rax() {
//     if (chus.x>chus.y && chus.x>chus.z){
//         console.log(chus.x);
//     }if (chus.y>chus.x && chus.y>chus.z){
//         console.log(chus.y);
//     }if (chus.z>chus.x && chus.z>chus.y){
//         console.log(chus.z)
//     }
// }
// chus.rax = rax;
// chus.rax();




//----1 Функция-приветстве. Функция принимает коллбек(любой) и исполняет его. Колбек выводит "ПРИВЕТ!"
// function hello(callback) {
//     callback();
// }
// hello(function () {
//     console.log("Hello world")
// });

//---2 Функция принимает аргумент и коллбек и выводит этот аргумент через колбек.
// function fun(xxx, callback) {
//     callback(xxx);
// }
// fun("0310",function (xxx) {
//     console.log(xxx);
// });

//----3  Функция принимает 2 числа и колбек, и выводит результат арифметического действия над этими числами, действие описывается в колбеке.
// function rah(a,b,callback) {
//     callback(a,b);
// }
// rah(45,5,function (a,b) {
//     let c = a/b;
//     console.log(c);
// });

//-----4 Функция принимает масиив и колбек. Вывести данный массив при помощи колбека (по возрастанию и по убыванию)
// function arr(arr,callback) {
//     callback(arr);
// }
// arr([5,8,2,9,3],function (arr) {
//     let ar = arr;
//     console.log(ar);
// });

//-------5 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr = arr1.concat(arr2);
// console.log(arr);

//------6 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 3, 'c', 5, 'e']
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,1,"a");
// arr.splice(2,0,"b");
// arr.splice(4,1,"c");
// arr.splice(6,0,"e");
// console.log(arr);



// function Person(name, surname,age,skill) {
//     this.name = name;
//     this.surname= surname;
//     this.age= age;
//     this.skill = skill;
// }
//
// let roman = new Person('Pedro', 'Hlodan', 24,['JS','Java','Spring']);
// // roman.greet = function(){
// //     // console.log("Hello my name is " + this.name);
// // };
// // // console.log(roman.greet());
//
// class User {
//
//     constructor(name, surname, age){
//         this.name=name;
//         this.surname=surname;
//         this.age=age;
//     }
//     grett(){
//         console.log(`hello my name is ${this.name}`);
//     }
//
// }
// let o8 = new User("Roman","Hlodan", 24);
// o8.grett.call(roman);

// function Person(name,age) {
//     this.name=name;
//     this.age=age;
// }
//
// function Dev(name,age,skill) {
//     Person.apply(this,arguments);
//     this.skill=skill;
// }
// let dev1 = new Dev("Oleg",20,['html']);
// console.log(dev1);

// class Person {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// function gret() {
//     console.log(`Hello my name is  ${this.name}`)
// }
//
// class Developer extends Person{
//     constructor(name,age,skill){
//         super(name,age);
//         this.skill=skill;
//     }
// }
// let dev2 =new Developer('Basula', 54,'JS');
