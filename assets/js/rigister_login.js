function rigister(){


    let first_name =  document.getElementById("firstname").value
         last_name =  document.getElementById("lastname").value
         user_name =  document.getElementById("username").value
         dob =  document.getElementById("dob").value
         email =  document.getElementById("email").value
         mobile_number =  document.getElementById("mobilenumber").value
         password =  document.getElementById("password").value
         confirm_password =  document.getElementById("confirmpassword").value;
    
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.email!==email})&&user_records.some((v)=>{return v.mobile_number!==mobile_number})&&user_records.some((v)=>{return v.user_name!==user_name}))
    {
        user_records.push({
      "first_name":first_name,
      "last_name":last_name,
      "user_name":user_name,
      "dob":dob,
      "email":email,
      "mobile_number":mobile_number,
      "password":password,
      "confirm_password":confirm_password,
      
    
    })
        alert("your account has been created")
        localStorage.setItem("users",JSON.stringify(user_records));
        location.href ="../../index.html";
    }
    else if(user_records.some((v)=>{return v.email==email})){
        alert("Email alredy exciseted use another Email");
       window.location.href = "./create new.html";
    }
    else if( user_records.some((v)=>{return v.mobile_number==mobile_number})){
        alert("mobile number alredy exciseted use another mobile number");
        window.location.href = "./create new.html";
    }
    
    else if (user_records.some((v)=>{return v.user_name==user_name})){
        alert("user name alredy exciseted use another user name")
        window.location.href = "./create new.html";
    }
    
    
    
    }


function submit()
{
let mobile_number,password;

mobile_number = document.getElementById("mobile_number").value,
password = document.getElementById("password").value;


let user_details=new Array();

user_details =JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

if(user_details.some((v)=>{return v.mobile_number==mobile_number && v.password == password}))
{
  alert("Successfully Logined ");
  let current_user=user_details.filter((v)=>{return v.mobile_number == mobile_number && v.password == password})[0]
 localStorage.setItem('mobile_number',current_user.mobile_number);
 localStorage.setItem('pw',current_user.password);
  location.href="./pages/home.html"
}
else
{
  alert('Please Check your details');
}
}
