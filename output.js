// let a=[4,3,17,10,11,12];
// let sandy=0;
// let k=3;
// let max=0

//  3rd sum ////////////////


// for (let i=0;i<a.length;i++){
//      if(a[i]%2==0){
//         sandy= sandy+a[i]
//      }
// }
// console.log(sandy)

//  4th sum /////////////////////

// let b=[4,5,10,11,1]

// for (let i=0;i<k;i++){
//     for(let j=i;j<i+k;j++){
//       sandy+=b[j];
//       if(sandy > max){
//         max = sandy
//     }
//     } 
//     sandy=0;
// }console.log(max)

// 1st sum    ////////

// let n=5
// let str
// // for(let i=1;i<11;i++){
// //     str=i+"*"+n+"="+ i*n;
// //     console.log(str)
// // }

// for(let i=1;i<11;i++){
//   if(i!==n){
//     str=i
//   }
// }
// console.log(str)



// let pad=[' ','',"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz",]


// let input="36";
// let output=[];
// let pushdata="";

//   for(let i=0;i<pad[input[0]].length;i++){
//       for(let j=0;j<pad[input[1]].length;j++){
//         pushdata+=pad[input[0]][i]+pad[input[1]][j];
//         output.push(
//           pushdata
//         )
//         pushdata="";
//       }

//   }

//   console.log(output);




  let pad=[' ','',"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
let output=[];
let pushdata="";
    let input="23"
 

  for(let i=0;i<pad[input[0]].length;i++){
      for(let j=0;j<pad[input[1]].length;j++){
        pushdata+=pad[input[0]][i]+pad[input[1]][j];
        output.push(
          pushdata
        )
        pushdata="";
      }

  }
    let ans= output.replaceAll("'",'"');
    console.log(ans)
// return output
