
//  let n = 4;
//  let string = "";
//  for (let i = 1; i <= n; i++) {
//    for (let j = 1; j <= n - i; j++) {
//      string += " ";
//    }
//    for (let k = 1; k <= i; k++) {
//      string += i + " ";
//    }
//    string += "\n";
//  }
//  for (let i = n - 1; i >= 1; i--) {
//    for (let j = 1; j <= n - i; j++) {
//      string += " ";
//    }
//    for (let k = 1; k <= i; k++) {
//      string += i + " ";
//    }
//    string += "\n";
//  }
//  console.log(string);



// let n = 4;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     string += " ".repeat(n-i);
//     for (let j = 1; j <= i; j++) {
//         string += j + " ";
//     }
//     string += "\n";
// }
// for (let i = n - 1; i >= 1; i--) {
//     string += " ".repeat(n-i);
//     for (let j = 1; j <= i; j++) {
//         string += j + " ";
//     }
//     string += "\n";
// }
// console.log(string);

// let n = 15;
// for (let i = 1; i <= n; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Superstar Rajnikanth");
//   } else if (i % 3 === 0) {
//     console.log("Superstar");
//   } else if (i % 5 === 0) {
//     console.log("Rajnikanth");
//   } else {
//     console.log(i);
//   }
// }

// 1st sum //

// let n = 5;
// let string = "";
// for ( let i = 1; i <= n; i++){
//      string += i + " ";
// }
//     console.log(string);


// // 2nd sum //
//  let n = 5;
//  let string = "";
//  for (let i = 5; i>=1; i--){
//      string += i + " ";
//  }
//      console.log(string)


// // 3rd sum //
// n=7;
// for (let i=1; i<=n; i=i+2){
//     console.log(i)
// }


// // 4th sum //
// let n = 5;
// let string = "";
// for ( let i = 1; i<=n; i++){
//     string += i + " ";
// }
// for ( let j = n-1 ; j>=1; j--){
//     string += j + " ";c
// }
//     console.log(string);

let n = 4;
let string = "";
for(let i=1; i<=n ;i++){
  for(let j=1 ;j<=n-i ;j++){
   string+=" ";
  }
  for(let k=1;k<=i;k++){
   string+=i +" ";
  }
  string+="/n";

}
for(let i=n-1; i<=1 ;i--){
  for(let j= 1 ;j <= n-i ;j++){
   string+=" ";
  }
  for(let k=1;k<=i;k++){
   string+=i +" ";
  }
  string+="/n";

}
console.log("string")

