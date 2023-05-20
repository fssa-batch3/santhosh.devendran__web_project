// variables for getitem from localstorage
const user_list=JSON.parse(localStorage.getItem("user_list"));
const logged_user=JSON.parse(localStorage.getItem("user_id"));




// variable what I asigned
            //find use data 
            const log_in_user_data=user_list.find(e=>e.user_name===logged_user);

            



// variables for get element from document
    // header
const header_profile_img=document.getElementById("header_profile_img"); 
const header_user_name=document.getElementById("header_user_name");
const header_pro_link=document.getElementById("header_pro_link");


// check for user log in
if (logged_user === ""||logged_user=== null) {
  window.location.href = "../../index.html";
}

    // left pro
const user_pro_lay=document.getElementById("user_pro_lay");
const user_full_name=document.getElementById("user_full_name");
const user_name_p=document.getElementById("user_name_p");
const view_profile=document.getElementById("view_profile");



//  for profile dropdown 

//  click dropdown call function
let dropdown_click=document.getElementById("click_dropdown");
let show_dropdown=document.getElementById("dropdown_list");
dropdown_click.addEventListener("click",function () {
    show_dropdown.style.display = show_dropdown.style.display === "none" ? "block" : "none";
}
)

//  close dropdown for profile whereever click
document.addEventListener("click", function (event) {
    if (!dropdown_click.contains(event.target)) {
      show_dropdown.style.display = "none";
    }
  });




//  for layout header;

// profile image
if(log_in_user_data.user_dp==""){
  header_profile_img.src="https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg"
}
else{
  header_profile_img.src=log_in_user_data.user_dp;
}

// user name
header_user_name.innerText=log_in_user_data.first_name+" "+log_in_user_data.last_name;

header_pro_link.addEventListener("click",function(){
  location.href="./profile_page.html?unic_id="+logged_user;
})






// for left section

      // profile div
      // profile dp
if(log_in_user_data.user_dp==""){
  user_pro_lay.src="https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg"
}
else{
  user_pro_lay.src=log_in_user_data.user_dp;
}
      // profile name & user name
 user_full_name.innerText=log_in_user_data.first_name+" "+log_in_user_data.last_name;
 user_name_p.innerText=log_in_user_data.user_name;
      // view profile
      view_profile.addEventListener("click", function () {
location.href="./profile_page.html?unic_id="+logged_user;
      })