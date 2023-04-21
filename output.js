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





















let products = document.querySelectorAll(".fa-sign-out-alt")
        products.forEach(function (check) {
            check.addEventListener("click", function () {
                let doctor_id = this.dataset.remove;
                localStorage.setItem("products_id", JSON.stringify(product_id));
                console.log(product_id);
                if (confirm("Are you sure to remove this product?")) {
                    let id = JSON.parse(localStorage.getItem("products_id"));
                    let all_products = JSON.parse(localStorage.getItem("cart_list"));
                    console.log(all_products);
                    let pdts = all_products.find(e => e.product_uuid == product_id && e.userId == user)
                    console.log(pdts); let indexOfProduct = all_products.indexOf(pdts);
                    all_products.splice(indexOfProduct, 1);
                    console.log(indexOfProduct);
                    localStorage.setItem("cart_list", JSON.stringify(all_products));
                }
                window.location.reload();
            });
        });




        delete_button.addEventListener("click", function () {
          if (confirm("Are you sure to Delete ?")) {
            let id = this.target.id;
            let doctors = JSON.parse(localStorage.getItem("doctors"));
            // Find the index of the post to delete
            const indexOfUser = doctors.find(e => e.id == id);
            // Remove the post from the array
            if (indexOfUser !== -1) {
              doctors.splice(indexOfUser, 1);
            }
            localStorage.setItem('doctors', JSON.stringify(doctors));
            location.reload();
          }
        });
