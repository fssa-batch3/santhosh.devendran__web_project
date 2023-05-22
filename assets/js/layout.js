// variables for getitem from localstorage
const user_check=JSON.parse(localStorage.getItem("user_id"));

const user_list=JSON.parse(localStorage.getItem("user_list"));
const logged_user=JSON.parse(localStorage.getItem("user_id"));
const follow_data = JSON.parse(localStorage.getItem("follow_data")) || [];
const notification_data=JSON.parse(localStorage.getItem("notification_data")) || [];

const notification=false;
// variable what I asigned
            //find use data 
            const log_in_user_data=user_list.find(e=>e.user_name===logged_user);

            // check for logineed or not
            if(user_check===""){
              location.href="../index.html"
            }
            

 // for notification feature

 // get or create notification array
const notificationData = JSON.parse(localStorage.getItem("notification_data")) || [];
const user_id = JSON.parse(localStorage.getItem("user_id"));
const post_feed=JSON.parse(localStorage.getItem("post_feedd"));

const unshowed = notificationData.filter(e => e.notification == false);

let for_notify =JSON.parse(localStorage.getItem("for_notify"))|| [];
let old_for_notify=for_notify.length;
unshowed.forEach(element => {
    if (element.type == "like") {
        let find_user=post_feed.find(e=>e.post_id===element.liked)
        if(find_user.unic_id===user_id){
            for_notify.push(element)
        }

    }
    if (element.type == "comment") {
        let find_user=post_feed.find(e=>e.post_id===element.comment_post_id)
        if(find_user.unic_id===user_id){
            for_notify.push(element)
        }
    }
    if(element.type == "follow") {

        if(element.following===user_id){
   
            for_notify.push(element)
        }
    }   
});
console.log(for_notify);
for_notify.splice(0,old_for_notify)
let notification_dot=document.getElementById("notification_dot");
console.log(for_notify);
if(for_notify.length>0){
    notification_dot.style.display="block"
    localStorage.setItem("for_notify",JSON.stringify(for_notify));

    for_notify=[];
}
else{
    notification_dot.style.display="none"
}

// 


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
 user_name_p.innerText="@"+log_in_user_data.user_name;
      // view profile
      view_profile.addEventListener("click", function () {
location.href="./profile_page.html?unic_id="+logged_user;
      })



      // function for log out

const logout_option = document.getElementById("logout_bn");

logout_option.addEventListener(
  "click",

  function logout(e) {
    if (confirm("Are you sure")) {
      const user_id = "";
      const for_notify=[]
      localStorage.setItem("for_notify", JSON.stringify(for_notify));
      localStorage.setItem("user_id", JSON.stringify(user_id));
    location.href = "../index.html";
    }
  }
);

const delete_bn = document.getElementById("delete_bn");

delete_bn.addEventListener("click", function deletData(e) {
  const password_for_delete = prompt("Please enter your password:");
  let check = false;
  const user_records = JSON.parse(localStorage.getItem("user_list"));
  function login_data(e) {
    return e.user_name == logged_user;
  }
  const user_data = user_records.find(login_data);
  if (password_for_delete == user_data.password) {
    check = true;
  } else {
    alert("password is incorect");
  }

  if (check === true) {
    const unic_user_id = JSON.parse(localStorage.getItem("user_id"));
    const user_records = JSON.parse(localStorage.getItem("user_list"));
    function login_data(e) {
      return e.user_name == unic_user_id;
    }
    const user_data = user_records.find(login_data);

    const indexOfUser = user_records.indexOf(user_data);
    user_records.splice(indexOfUser, 1);
    localStorage.setItem("user_list", JSON.stringify(user_records));
    const user_id = "";
    localStorage.setItem("user_id", JSON.stringify(user_id));
    location.href = "../index.html";
  }
});








const suggestion=user_list.filter((e)=>e.user_name!==logged_user);
let count=5;

for(let i=0;i<suggestion.length;i++){
if(i>count){
  break;
}
 // Create the suggestion item elements
 const suggestionItem = document.createElement("div");
 suggestionItem.classList.add("suggesions_pro");

 const userDp = document.createElement("div");
 userDp.classList.add("suggesions_user_dp");

 const userImg = document.createElement("img");
 userImg.classList.add("suggesions_user_img");
 if(suggestion[i].user_dp==""){
  userImg.src="https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg";
 }
 else{
  userImg.src=suggestion[i].user_dp;
 }
 userImg.alt = "";

 const userName = document.createElement("div");
 userName.classList.add("suggesions_user_name");

 const fullName = document.createElement("p");
 fullName.setAttribute("id",suggestion[i].user_name);
 fullName.setAttribute("style","cursor:pointer")
 fullName.classList.add("user_full_name");
 fullName.textContent =suggestion[i].first_name+" "+suggestion[i].last_name ;
 fullName.addEventListener("click",function(){
  const user_id=this.id;
window.location.href=`${rootPath}/pages/profile_page.html?unic_id=${user_id}`
 });
 

 const userNameP = document.createElement("p");
 userNameP.classList.add("user_name_p");
 userNameP.textContent = "@"+suggestion[i].user_name;

 const followBtn = document.createElement("div");
 followBtn.classList.add("suggesions_follow");


 const followBtnInner = document.createElement("button");
 followBtnInner.classList.add("suggesions_follow_bn");
 followBtnInner.setAttribute("id",suggestion[i].user_name)
 followBtnInner.textContent = "Follow";
 if(follow_data!==null){
  user_f_data = follow_data.find(
      (e) => e.followee == logged_user && e.following == suggestion[i].user_name
    );
}


if (user_f_data == undefined) {
  followBtnInner.innerText = "follow";
} else {
  followBtnInner.innerText = "Unfollow";
}

// follow function

followBtnInner.addEventListener("click", function () {
  const following = this.id;
  const followee = logged_user;

  const follow_bn = document.getElementById(following);
  const follow_data =
    JSON.parse(localStorage.getItem("follow_data")) || [];
  if (follow_data.length === 0) {
    follow_data.push({
      following,
      followee,
    });
    notification_data.push({
      unic_id:uuidv4(),
      following,
      followee,
      notification,
      type:"follow"
    });
    localStorage.setItem("notification_data", JSON.stringify(notification_data));
    console.log(follow_data);
    follow_bn.innerHTML = "Unfollow";
    localStorage.setItem("follow_data", JSON.stringify(follow_data));
  } else {
    const user_f_data = follow_data.find(
      (e) => e.followee == logged_user && e.following == following
    );
    const indexOfuser_f = follow_data.indexOf(user_f_data);
    if (user_f_data == undefined) {
      follow_data.push({
        following,
        followee
      });
      notification_data.push({
        unic_id:uuidv4(),
        following,
        followee,
        notification,
        type:"follow"
      });
      localStorage.setItem("notification_data", JSON.stringify(notification_data));
      follow_bn.innerText = "Unfollow";
      localStorage.setItem("follow_data", JSON.stringify(follow_data));
    } else {
      follow_data.splice(indexOfuser_f, 1);
      localStorage.setItem("follow_data", JSON.stringify(follow_data));
      follow_bn.innerText = "follow";
    }
  }
});


 // Append the elements to their respective parent elements
 userDp.appendChild(userImg);
 userName.appendChild(fullName);
 userName.appendChild(userNameP);
 followBtn.appendChild(followBtnInner);
 suggestionItem.appendChild(userDp);
 suggestionItem.appendChild(userName);
 suggestionItem.appendChild(followBtn);

 // Append the suggestion item to the container
 document.querySelector(".suggesions_user_list").append(suggestionItem);
}




// create function for element

function create_ele(follow_data,follow_er_ing){

  for(let i=0;i<follow_data.length;i++){
    let find_user=""
    if(follow_er_ing==="Followers_list"){
      find_user=user_list.find((e)=>e.user_name===follow_data[i].followee)
    }
    else{
      find_user=user_list.find((e)=>e.user_name===follow_data[i].following)
    }
  // Create the suggestion item container
const suggestionItem = document.createElement("div");
suggestionItem.classList.add("suggesions_pro");

// Create the user dp container
const userDp = document.createElement("div");
userDp.classList.add("suggesions_user_dp");

// Create the user image element
const userImg = document.createElement("img");
userImg.classList.add("suggesions_user_img");
if(find_user.user_dp==""){
  userImg.src="https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg";
 }
 else{
  userImg.src=find_user.user_dp;
 }
 userImg.alt = "";


// Append the user image to the user dp container
userDp.appendChild(userImg);

// Create the user name container
const userName = document.createElement("div");
userName.classList.add("suggesions_user_name");

// Create the full name paragraph element
const fullName = document.createElement("p");
fullName.setAttribute("id",find_user.user_name);
fullName.setAttribute("style","cursor:pointer")
fullName.classList.add("user_full_name");
fullName.textContent = find_user.first_name+" "+find_user.last_name;
fullName.addEventListener("click",function(){
  const user_id=this.id;
window.location.href=`${rootPath}/pages/profile_page.html?unic_id=${user_id}`
 });

// Create the username paragraph element
const userNameP = document.createElement("p");
userNameP.classList.add("user_name_p");
userNameP.textContent = "@"+find_user.user_name;

// Append the full name and username elements to the user name container
userName.appendChild(fullName);
userName.appendChild(userNameP);

// Create the follow button container
const followBtn = document.createElement("div");
followBtn.classList.add("suggesions_follow");

// Create the follow button element
const followBtnInne = document.createElement("button");
followBtnInne.classList.add("suggesions_follow_bn");
if(follow_er_ing==="Followers_list"){
  followBtnInne.setAttribute("id","follower"+find_user.user_name);
}
else{
  followBtnInne.setAttribute("id","following"+find_user.user_name);
}
// followBtnInne.textContent = "follow";
if(follow_data!==null){

if(follow_er_ing==="Followers_list"){
  user_f_data = follow_data.find(
    (e) => e.following == logged_user && e.followee == find_user.user_name
  );
}
  else{
    user_f_data = follow_data.find(
      (e) => e.followee == logged_user && e.following == find_user.user_name
    );
  }
  
    
}

if (user_f_data == undefined) {
  followBtnInne.innerText = "follow";
} else {
  followBtnInne.innerText = "Unfollow";
}

// follow function

followBtnInne.addEventListener("click", function () {
  let following2 = this.id;
  const followee = logged_user;
  let following="";
  if(following2=="follower"+following2.replace(/follower/,"")){
     following=following2.replace(/follower/,"");
  }else{
    following=following2.replace(/following/,"");
  }
  
  const follow_bn = document.getElementById(following2);
  const follow_data =
    JSON.parse(localStorage.getItem("follow_data")) || [];
  if (follow_data.length === 0) {
    follow_data.push({
      following,
      followee,
    });
    notification_data.push({
      unic_id:uuidv4(),
      following,
      followee,
      notification,
      type:"follow"
    });
    localStorage.setItem("notification_data", JSON.stringify(notification_data));
    console.log(follow_data);
    follow_bn.innerHTML = "Unfollow";
    localStorage.setItem("follow_data", JSON.stringify(follow_data));
  } else {
    const user_f_data = follow_data.find(
      (e) => e.followee == logged_user && e.following == following
    );
    const indexOfuser_f = follow_data.indexOf(user_f_data);
    if (user_f_data == undefined) {
      follow_data.push({
        following,
        followee
      });
      notification_data.push({
        unic_id:uuidv4(),
        following,
        followee,
        notification,
        type:"follow"
      });
      localStorage.setItem("notification_data", JSON.stringify(notification_data));
      follow_bn.innerText = "Unfollow";
      localStorage.setItem("follow_data", JSON.stringify(follow_data));
    } else {
      follow_data.splice(indexOfuser_f, 1);
      localStorage.setItem("follow_data", JSON.stringify(follow_data));
      follow_bn.innerText = "follow";
    }
  }
});

// Append the follow button to the follow button container
followBtn.appendChild(followBtnInne);

// Append the user dp, user name, and follow button containers to the suggestion item container
suggestionItem.appendChild(userDp);
suggestionItem.appendChild(userName);
suggestionItem.appendChild(followBtn);

// Append the suggestion item to the desired container in the HTML (e.g., using querySelector)
document.querySelector("."+follow_er_ing).appendChild(suggestionItem);

}
}

// follower list

const Followers_list="Followers_list";
const Followers=follow_data.filter((e)=>e.following===logged_user);

create_ele(Followers,Followers_list);


// following list

const Following_list="Following_list";
const Following=follow_data.filter((e)=>e.followee===logged_user);

create_ele(Following,Following_list)


// open drop down

const exploreInput = document.getElementById("explore_input");
const dropdownMenu = document.getElementById("dropdown-menu");

exploreInput.addEventListener("click",function () {
  dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
}
)

// Close the dropdown when the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.closest(".search_div")) {
    dropdownMenu.style.display = "none";
  }
});






function create_search_list(search_result){

  for(let i=0;i<search_result.length;i++){
const searchResultList = document.createElement('div');
searchResultList.className = 'search_result_list';

const imageContainer = document.createElement('div');
const image = document.createElement('img');
image.className = 'search_pro_img';

if(search_result[i].user_dp==""){
  image.src="https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg"
}
else{
  image.src=search_result[i].user_dp;
}

imageContainer.appendChild(image);

const textContainer = document.createElement('div');

const atag = document.createElement('a');
atag.setAttribute("href",`${rootPath}/pages/profile_page.html?unic_id=${search_result[i].user_name}`)


const fullName = document.createElement('p');
fullName.setAttribute("id",search_result[i].user_name)
fullName.className = 'search_user_full_name';
fullName.textContent = search_result[i].first_name+" "+search_result[i].last_name;

const userName = document.createElement('p');
userName.className = 'search_user_name';
userName.textContent = '@'+search_result[i].user_name;

textContainer.appendChild(atag);
atag.appendChild(fullName);
textContainer.appendChild(userName);

searchResultList.appendChild(imageContainer);
searchResultList.appendChild(textContainer);

// Append the search result list to its parent container
const parentContainer = document.querySelector('.search_result');
parentContainer.appendChild(searchResultList);

}
}


// for search function


exploreInput.addEventListener('input', function() {
  const searchQuery = exploreInput.value.toLowerCase();

  const find_user = user_list.filter(item => item.user_name.toLowerCase().includes(searchQuery));
  const parentContainer = document.querySelector('.search_result');
  parentContainer.innerHTML="";
  create_search_list(find_user);
  console.log(find_user);
});



