//1-masala
// function myFunction(a: any, b: any): boolean {
//   return a === b ? true : false;
// }
// console.log(myFunction(1, "1"));

//2-masala
// function myFunction(a: any): string {

//   return typeof a;
// }

// console.log(myFunction(1));

//3-masala
// function myFunction(a: string, n: number): string {
//   return a.charAt(n - 1);
// }

// console.log(myFunction("absd", 1));

//4-masala
// function myFunction(a: string): string {
//   return a.slice(3, a.length );
// }
// console.log(myFunction("abcdefg"));

//5-masala
// function myFunction(str: string): string {
//   return str.slice(str.length - 3, str.length);
// }
// console.log(myFunction("abcdefg"));

//6-masala
// function myFunction(a: string): string {
//   return a.slice(0,3);
// }

// console.log(myFunction("abcdefg"));

//7-masala
// function myFunction(a: string): number {
//   return a.search("is");
// }

// console.log(myFunction("praise"));

//8-masala
// function myFunction(a: string): string {
//   let resoult: string = a.slice(0, a.length / 2);
//   return resoult;
// }
// console.log(myFunction("1234"));

//9-masala
// function myFunction(a: string): string {
//   return a.slice(0, a.length - 3);
// }
// console.log(myFunction("abcdefg"));

//10-masala
// function myFunction(a: number, b: number): number {
//   return (a * b) / 100;
// }

// console.log(myFunction(100, 50));

//11-masala
// function myFunction(
//   a: number,
//   b: number,
//   c: number,
//   d: number,
//   e: number,
//   f: number
// ): number {
//   return ((a + b - c) * d) / e ** f;
// }
// console.log(myFunction(6, 2, 1, 4, 2, 3));

//12-masala
// function myFunction(a: string, b: string): string {
//   return a.includes(b) ? b + a : a + b;
// }
// console.log(myFunction("cheese", "cake"));

//13-masala
// function myFunction(a: number): boolean {
//   return a % 2 == 0 ? true : false;
// }
// console.log(myFunction(11));

//14-masala
// function myFunction(a: string, b: string): number {
//   const arr = b.split("");
//   let raqam: number = 0;
//   arr.forEach((c) => {
//     c === a ? raqam++ : raqam;
//   });
//   return raqam;
// }
// console.log(
//   myFunction('h', 'how many times does the character occur in this sentence?')
// );

//15-masala
// function myFunction(a: number): boolean {
//   return Math.ceil(a) === a;
// }
// console.log(myFunction(4.3));

//16-masala
// function myFunction(a: number, b: number): number {
//   let num: number;
//   if (b > a) {
//      num = a / b;
//   } else {
//      num = a * b;
//   }
//   return num;
// }
// console.log(myFunction(10, 100));

//17-masala
// function myFunction(a: number): number {
//   return Math.fround(a);
// }
// console.log(myFunction(2.12397));

//18-masala
// function myFunction(a: number): number[] {
//   let str:number[] = a.toString().split("").map(s=>Number(s));

//   return str;
// }
// console.log(myFunction(10));

//19-masala
// function myFunction(a:number[]): number[] {
//   return a.slice(3);
// }
// console.log(myFunction([1,2,3,4]));

//20-masala
// function myFunction(a: number[]): number[] {
//   return a.slice(a.length - 3, a.length);
// }

//21-masala
// function myFunction(a: number[]): number[] {
//   return a.slice(0,3);
// }
// console.log(myFunction([1,2,3,4]));

//22-masala
// function myFunction(a: any, b: number): any {
//   return a.slice(0, b);
// }
// console.log(myFunction([1, 2, 3], 2));

//23-masala
// function myFunction(a: number[]): number {
//   let num: number = 0;
//   a.forEach((e) => (e < 0 ? num++ : num));

//   return num;
// }
// console.log(myFunction([0, 9, 1]));

//24-masala
// function myFunction(arr: string[]): string[] {
//   return arr.sort();
// }
// console.log(myFunction(['b', 'c', 'd', 'a']));

//25-masala
// function myFunction(a: number[]): number {
//   return a.reduce((acc, el) => acc + el, 0);
// }

//26-masala
// function myFunction(arr: number[]): number {
//   const sum = arr.reduce((acc, curr) => acc + curr, 0);
//   return sum / arr.length;
// }
// console.log(myFunction([10, 100, 40]));

//27-masala
// function myFunction(arr: string[]): string {
//   return arr.reduce(
//     (longest, current) => (current.length > longest.length ? current : longest),
//     arr[0]
//   );
// }
// console.log(myFunction(["help", "me"]));

//28-masala
// function myFunction(arr:any[]): boolean {

//   return arr.every(element => element === arr[0]);
// }

//29-masala
// function myFunction(...arrays: any[]) {
//   return arrays.reduce((acc:any[], el:any[]) =>acc.concat(el) , []);
// }
// console.log(myFunction([1, 2, 3], [4, 5, 6]));

//30-masala
// function myFunction(a: number[], b: number[]): number[] {
//   const mergedArray = [...new Set([...a, ...b])];
//   return mergedArray.sort((a, b) => a - b);
// }

// console.log(myFunction([1, 2, 3], [3, 4, 5]));

//31-masala
// function myFunction(obj: { "prop-2": number; one: number }): number | string {
//   return obj["prop-2"];
// }
// console.log(myFunction({ one: 1, "prop-2": 2 }));



