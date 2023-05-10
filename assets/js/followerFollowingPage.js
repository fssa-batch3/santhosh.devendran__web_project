
const params = new URLSearchParams(window.location.search);
const user_Id = params.get("user_id");

const  login_user_id=JSON.parse(localStorage.getItem("user_id"));

let follow_data= JSON.parse(localStorage.getItem("follow_data"));
let user_data=JSON.parse(localStorage.getItem("user_list"));

const followerListfilter=follow_data.filter((e)=>e.following===user_Id);
const followingListfilter=follow_data.filter((e)=>e.followee===user_Id);


const followerList=user_data.filter(user_data => {
const matchedItem = followerListfilter.find(followerListfilter => followerListfilter.followee === user_data.user_name);
return matchedItem});
const followingList=user_data.filter(user_data => {
const matchedItem = followingListfilter.find(followingListfilter => followingListfilter.following === user_data.user_name);
return matchedItem });

//  dynamic for user list follower

for(const element of followerList){

const user_name = `${element.first_name} ${element.last_name}`;
 //  <div class="top_user"> </div>
let  div_top_user = document.createElement("div");
div_top_user.setAttribute("class", "top_user");

//  <div class="img"> </div>
let  div_img = document.createElement("div");
div_img.setAttribute("class", "img");
div_top_user.append(div_img);

//  <img profile_img/>
let  img_profile_img = document.createElement("img");
if (element.user_dp === "") {
    img_profile_img.src =
     "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg";
 } else {
    img_profile_img.src = element.user_dp;
 }
img_profile_img.setAttribute("alt", "profile");
img_profile_img.setAttribute("class", "profile_img");
div_img.append(img_profile_img);

//  <div class="user_list"> </div>
let  div_user_list = document.createElement("div");
div_user_list.setAttribute("class", "user_list");
div_top_user.append(div_user_list);

// <p tag for user name
let  p_user_name = document.createElement("p");
p_user_name.setAttribute("class", "user_name");
p_user_name.innerText = user_name;
div_user_list.append(p_user_name);

//<span> tag for gray
let  span_gray = document.createElement("span");
span_gray.setAttribute("class", "gray");
span_gray.innerText = element.user_name;
div_user_list.append(span_gray);

//div_follow_button /////

let  div_follow_button = document.createElement("div");
div_follow_button.setAttribute("class", "follow_button");
div_top_user.append(div_follow_button);
if(user_Id===login_user_id){
// button_follow

let  button_follow = document.createElement("button");
button_follow.setAttribute("id", element.user_name);
const user_f_data = follow_data.find(
(e) => e.followee == user_Id && e.following == element.user_name
);

if (user_f_data == undefined) {
button_follow.innerText = "follow";
} else {
button_follow.innerText = "Unfollow";
}

div_follow_button.append(button_follow);

// follow function

button_follow.addEventListener("click", function () {
const following = this.id;
const followee = user_Id;

const follow_bn = document.getElementById(following);
const follow_data = JSON.parse(localStorage.getItem("follow_data")) || [];
if (follow_data.length === 0) {
follow_data.push({
following,
followee,
notification: false,
});
console.log(follow_data);
follow_bn.innerHTML = "Unfollow";
localStorage.setItem("follow_data", JSON.stringify(follow_data));
} else {
const user_f_data = follow_data.find(
(e) => e.followee == user_Id && e.following == following
);
const indexOfuser_f = follow_data.indexOf(user_f_data);
if (user_f_data == undefined) {
follow_data.push({
following,
followee,
notification: false,
});
follow_bn.innerText = "Unfollow";
localStorage.setItem("follow_data", JSON.stringify(follow_data));
} else {
follow_data.splice(indexOfuser_f, 1);
localStorage.setItem("follow_data", JSON.stringify(follow_data));
follow_bn.innerText = "follow";
}
}
});
}
document.querySelector(".followers").append(div_top_user);
}

for(const element of followingList){

const user_name = `${element.first_name} ${element.last_name}`;
 //  <div class="top_user"> </div>
let  div_top_user = document.createElement("div");
div_top_user.setAttribute("class", "top_user");

//  <div class="img"> </div>
let  div_img = document.createElement("div");
div_img.setAttribute("class", "img");
div_top_user.append(div_img);

//  <img profile_img/>
let  img_profile_img = document.createElement("img");
if (element.user_dp === "") {
    img_profile_img.src =
   "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg";
} else {
    img_profile_img.src = element.user_dp;
}
img_profile_img.setAttribute("alt", "profile");
img_profile_img.setAttribute("class", "profile_img");
div_img.append(img_profile_img);

//  <div class="user_list"> </div>
let  div_user_list = document.createElement("div");
div_user_list.setAttribute("class", "user_list");
div_top_user.append(div_user_list);

// <p tag for user name
let  p_user_name = document.createElement("p");
p_user_name.setAttribute("class", "user_name");
p_user_name.innerText = user_name;
div_user_list.append(p_user_name);

//<span> tag for gray
let  span_gray = document.createElement("span");
span_gray.setAttribute("class", "gray");
span_gray.innerText = element.user_name;
div_user_list.append(span_gray);

//div_follow_button /////

let  div_follow_button = document.createElement("div");
div_follow_button.setAttribute("class", "follow_button");
div_top_user.append(div_follow_button);

// button_follow

if(user_Id===login_user_id){

let  button_follow = document.createElement("button");
button_follow.setAttribute("id", element.user_name);
const user_f_data = follow_data.find(
(e) => e.followee == user_Id && e.following == element.user_name
);

if (user_f_data == undefined) {
button_follow.innerText = "follow";
} else {
button_follow.innerText = "Unfollow";
}

div_follow_button.append(button_follow);

// follow function

button_follow.addEventListener("click", function () {
const following = this.id;
const followee = user_Id;

const follow_bn = document.getElementById(following);
const follow_data = JSON.parse(localStorage.getItem("follow_data")) || [];
if (follow_data.length === 0) {
follow_data.push({
following,
followee,
notification: false,
});
console.log(follow_data);
follow_bn.innerHTML = "Unfollow";
localStorage.setItem("follow_data", JSON.stringify(follow_data));
} else {
const user_f_data = follow_data.find(
(e) => e.followee == user_Id && e.following == following
);
const indexOfuser_f = follow_data.indexOf(user_f_data);
if (user_f_data == undefined) {
follow_data.push({
following,
followee,
notification: false,
});
follow_bn.innerText = "Unfollow";
localStorage.setItem("follow_data", JSON.stringify(follow_data));
} else {
follow_data.splice(indexOfuser_f, 1);
localStorage.setItem("follow_data", JSON.stringify(follow_data));
follow_bn.innerText = "follow";
}
}
});
}

document.querySelector(".following").append(div_top_user);
} 


