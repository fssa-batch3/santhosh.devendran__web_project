// getting user lists from localstorage
const user_records = JSON.parse(localStorage.getItem("user_list"));

const unic_user_id = JSON.parse(localStorage.getItem("user_id"));
if (unic_user_id == "") {
  window.location.href = "../../index.html";
}

const params = new URLSearchParams(window.location.search);
const user_Id = params.get("user_id");

const edit_bn = document.getElementsByClassName("edit_bn");
const follow_bn = document.getElementsByClassName("follow_bn");
// finding user data 
const user_data = user_records.find(e=>e.user_name == user_Id);
 // for profile image

 const imgPreview = document.getElementById("profile_image");
 const cover_imgPreview = document.getElementById("cover_img");
 if (user_data.user_dp === "") {
    console.log(imgPreview);
      imgPreview.src =
     "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg";
 } else {
   imgPreview.src = user_data.user_dp;
 }

 if (user_data.user_cover_img === "") {
   cover_imgPreview.src = "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662366/bmmblyyloqiulwfbmt3x.png";
 } else {
   cover_imgPreview.src = user_data.user_cover_img;
 }



if (unic_user_id !== user_Id) {
  edit_bn[0].style.display = "none";
  follow_bn[0].style.display = "block";
}
//  for other user profile/////////////
if (user_Id !== unic_user_id) {
 

  const name = `${user_data.first_name} ${user_data.last_name}`;

  document.getElementById("tname").innerHTML = name;
  document.getElementById("name").innerHTML = name;
  document.getElementById("user_name").innerHTML = user_data.user_name;
  document.getElementById("bio").innerHTML = user_data.user_bio;
  document.getElementById("dob").innerHTML = `Born in ${user_data.dob}`;

  const logout = document.getElementsByClassName("logout_bn");
  if (logout.length > 0) {
    logout[0].style.display = "none";
  }
  const delete_bn = document.getElementsByClassName("delete_bn");
  if (delete_bn.length > 0) {
    delete_bn[0].style.display = "none";
  }
}

//  for login user///////////

if (user_Id == unic_user_id) {
  const user_records = JSON.parse(localStorage.getItem("user_list"));

  const name = `${user_data.first_name} ${user_data.last_name}`;

  document.getElementById("tname").innerHTML = name;
  document.getElementById("name").innerHTML = name;
  document.getElementById("user_name").innerHTML = user_data.user_name;
  document.getElementById("bio").innerHTML = user_data.user_bio;
  document.getElementById("dob").innerHTML = `Born in ${user_data.dob}`;

  if (follow_bn.length > 0) {
    follow_bn[0].style.display = "none";
  }
  if (edit_bn.length > 0) {
    edit_bn[0].style.display = "block";
  }
}

// for follow unfollow button show  //

const follow_bn_function = document.getElementById("follow_bn");
const follow_data = JSON.parse(localStorage.getItem("follow_data"));
let user_f_data;
if(follow_data!==null){
     user_f_data = follow_data.find(
        (e) => e.followee == unic_user_id && e.following == user_Id
      );
}


if (user_f_data == undefined) {
  follow_bn_function.innerText = "follow";
} else {
  follow_bn_function.innerText = "Unfollow";
}

// for follow and Unfollow button feature  ////

follow_bn_function.addEventListener("click", function () {
  const following = user_Id;
  const followee = unic_user_id;

  const follow_bn = document.getElementById(following);
  const follow_data =
    JSON.parse(localStorage.getItem("follow_data")) || [];
  if (follow_data.length === 0) {
    follow_data.push({
      following,
      followee,
      notification: false,
    });
    console.log(follow_data);
    follow_bn_function.innerHTML = "Unfollow";
    localStorage.setItem("follow_data", JSON.stringify(follow_data));
  } else {
    const user_f_data = follow_data.find(
      (e) => e.followee == unic_user_id && e.following == following
    );
    const indexOfuser_f = follow_data.indexOf(user_f_data);
    if (user_f_data == undefined) {
      follow_data.push({
        following,
        followee,
        notification: false,
      });
      follow_bn_function.innerText = "Unfollow";
      localStorage.setItem("follow_data", JSON.stringify(follow_data));
    } else {
      follow_data.splice(indexOfuser_f, 1);
      localStorage.setItem("follow_data", JSON.stringify(follow_data));
      follow_bn_function.innerText = "follow";
    }
  }
});

//  follower following count
let follower_count
let following_count 
if(follow_data!==null){
 follower_count = follow_data.filter(
  (e) => e.following == user_Id
).length;
 following_count = follow_data.filter(
  (e) => e.followee == user_Id
).length;
}
document.getElementById("fr_count").innerText = follower_count;
document.getElementById("fg_count").innerText = following_count;
//  user edit page
const edit_button = document.getElementById("edit_bn_page");
console.log(edit_button);
edit_button.setAttribute(
  "href",
  `../profile page/edit profile.html?user_id=${unic_user_id}`
);

// function for delete

const delete_bn = document.getElementById("delete_bn");

delete_bn.addEventListener("click", function deletData(e) {
  const password_for_delete = prompt("Please enter your password:");
  let check = false;
  const user_records = JSON.parse(localStorage.getItem("user_list"));
  function login_data(e) {
    return e.user_name == unic_user_id;
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
    window.location.href = "../../index.html";
  }
});

// function for log out

const logout_bn = document.getElementById("logout_bn");

logout_bn.addEventListener(
  "click",

  function logout(e) {
    if (confirm("Are you sure")) {
      const user_id = "";
      localStorage.setItem("user_id", JSON.stringify(user_id));
      window.location.href = "../../index.html";
    }
  }
);

const post_feedd = JSON.parse(localStorage.getItem("post_feedd"));

//    filter data///////

const filterpost = post_feedd.filter((post) => post.unic_id == user_Id);

for (const element of filterpost) {
  //  <div class="post"> </div>
  let div_post = document.createElement("div");

  div_post.setAttribute("class", "post");

  //  <div class="user_list"> </div>
  let div_user_list = document.createElement("div");
  div_user_list.setAttribute("class", "user_list");
  div_post.append(div_user_list);

  //  <div class="img"> </div>
  let div_img = document.createElement("div");
  div_img.setAttribute("class", "img");
  div_user_list.append(div_img);

  //<a href="./details.html"></a>
  // a_img = document.createElement("a");
  // a_img.setAttribute("href", "./profile page/user profile/elon musk.html");
  // div_img.append(a_img);

  //  <img user profile/>
  let img_a = document.createElement("img");
  const post_user_id=element.unic_id;
  const findElementUser=user_records.find(element=>element.user_name===post_user_id);
  console.log(findElementUser);
  console.log(element.unic_id);
  if(findElementUser.user_dp===""){
      img_a.setAttribute("src","https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg");
    }else{
      img_a.setAttribute("src",findElementUser.user_dp );
    }
  img_a.setAttribute("alt", "profile");
  img_a.setAttribute("class", "profile_img");
  div_img.append(img_a);

  //  <div class="user"> </div>
  let div_user = document.createElement("div");
  div_user.setAttribute("class", "user");
  div_user_list.append(div_user);

  // //<a href="./details.html"></a>
  // a_user = document.createElement("a");
  // a_user.setAttribute("href", "./profile page/user profile/elon musk.html");
  // div_user.append(a_user);

  //  <p> user name</p>
  let p_user_name = document.createElement("p");
  p_user_name.setAttribute("class", "user_name");
  p_user_name.innerText = element.user_name;
  div_user.append(p_user_name);

  //  span for delete button
  let span_delete = document.createElement("span");
  span_delete.setAttribute("class", "delete");
  div_user.append(span_delete);

  // button for delete
  const delete_bn = document.createElement("button");
  delete_bn.setAttribute("class", "deletebn");
  delete_bn.innerText = "delete";
  delete_bn.setAttribute("id", element.delete_bn + element.unic_id);
  span_delete.append(delete_bn);

  delete_bn.addEventListener("click", function () {
    if (confirm("Are you sure to Delete ?")) {
      const post_id = JSON.parse(localStorage.getItem("post_id"));
      const post_feedd = JSON.parse(localStorage.getItem("post_feedd"));
      function find_post(e) {
        console.log(post_id);
        return (
          e.post_id + e.unic_id == element.delete_bn + element.unic_id
        );
      }
      let user_data = post_feedd.find(find_post);
      const indexOfUser = post_feedd.indexOf(user_data);
      post_feedd.splice(indexOfUser, 1);
      localStorage.setItem("post_feedd", JSON.stringify(post_feedd));
    }

    location.reload();
  });

  //  <p> post cuntent</p>
  let p_post_cuntent = document.createElement("p");
  p_post_cuntent.setAttribute("class", "post_cuntent");
  p_post_cuntent.innerText = element.post_content;
  div_user.append(p_post_cuntent);

  if (element.post_img.src) {
    //  <div class="post_img"> </div>
    let post_post_img = document.createElement("div");
    post_post_img.setAttribute("class", "post_img");
    div_post.append(post_post_img);

    //  <img user post/>
    let img_post = document.createElement("img");
    img_post.setAttribute("src", element.post_img.src);
    img_post.setAttribute("alt", "post");
    post_post_img.append(img_post);
  }

  //  <div class="like_comand"> </div>
  let div_like_comand = document.createElement("div");
  div_like_comand.setAttribute("class", "like_comand");
  div_post.append(div_like_comand);

  //  <div class="like"> </div>
  let div_like = document.createElement("div");
  div_like.setAttribute("class", "like");
  div_like_comand.append(div_like);

  // <i for like
  let i_like = document.createElement("i");
  i_like.setAttribute("class", "fa fa-heart-o");
  i_like.setAttribute("id", element.post_id);
  i_like.innerText = element.like;
  const like_data = JSON.parse(localStorage.getItem("like_data")) || [];
  const like_icon = like_data.find(
    (e) => e.liked == element.post_id && e.who_liked == unic_user_id
  );
  if (like_icon == undefined) {
    i_like.setAttribute("class", "fa fa-heart-o");
    i_like.setAttribute("style", "font-size:16px;color: black;");
  } else {
    i_like.setAttribute("class", "fa fa-heart");
    i_like.setAttribute("style", "font-size:16px;color: red;");
  }

  div_like.append(i_like);

  i_like.addEventListener("click", function () {
    const liked = this.id;
    const who_liked = unic_user_id;

    const like_bn = document.getElementById(liked);
    const like_data = JSON.parse(localStorage.getItem("like_data")) || [];
    if (like_data.length === 0) {
      like_data.push({
        liked,
        who_liked,
        notification: false,
      });
      console.log(like_data);
      like_bn.setAttribute("class", "fa fa-heart");
      like_bn.setAttribute("style", "font-size:16px;color: red;");
      localStorage.setItem("like_data", JSON.stringify(like_data));
      // instend add like count
      const find_post = post_feedd.find((e) => e.post_id === liked);
      const new_count = find_post.like + 1;
      like_bn.innerText = new_count;
    } else {
      const user_l_data = like_data.find(
        (e) => e.liked == liked && e.who_liked == unic_user_id
      );
      const indexOfuser_f = like_data.indexOf(user_l_data);
      if (user_l_data == undefined) {
        like_data.push({
          liked,
          who_liked,
          notification: false,
        });
        like_bn.setAttribute("class", "fa fa-heart");
        like_bn.setAttribute("style", "font-size:16px;color: red;");
        localStorage.setItem("like_data", JSON.stringify(like_data));
        // instend add like count
        const find_post = post_feedd.find((e) => e.post_id === liked);
        const new_count = find_post.like + 1;
        like_bn.innerText = new_count;
      } else {
        like_data.splice(indexOfuser_f, 1);
        localStorage.setItem("like_data", JSON.stringify(like_data));
        like_bn.setAttribute("class", "fa fa-heart-o");
        like_bn.setAttribute("style", "font-size:16px;color: Black;");
        // instend add like count
        const find_post = post_feedd.find((e) => e.post_id === liked);
        if (find_post.like >= 1) {
          const new_count = find_post.like - 1;
          like_bn.innerText = new_count;
        }
      }
    }

    //  for like count set
    //  add comand count in post details

    const filterlike = like_data.filter((like) => like.liked == liked);

    const find_post = post_feedd.find((e) => e.post_id === liked);
    find_post.like = filterlike.length;

    localStorage.setItem("post_feedd", JSON.stringify(post_feedd));
  });

  //  a tag for  comment///////
  let a_div_cmt = document.createElement("a");
  a_div_cmt.setAttribute(
    "href",
    `../post details/elon musk/comment - post1.html?post_id=${element.post_id}`
  );
  div_like_comand.append(a_div_cmt);

  //  <div class="comand"> </div>
  let div_comand = document.createElement("div");
  div_comand.setAttribute("class", "comand");
  a_div_cmt.append(div_comand);

  // <i for comand
  let i_comand = document.createElement("i");
  i_comand.setAttribute("class", "fa fa-comment-o");
  i_comand.innerText = element.comand;
  i_comand.setAttribute("style", "font-size:18px;color: black;");
  div_comand.append(i_comand);

  document.querySelector(".left_side").append(div_post);
}

//  top user showing ///////
const top_user_2 = JSON.parse(localStorage.getItem("user_list"));
const top_user = top_user_2.filter((e) => e.user_name !== unic_user_id);

user_profile = "../assets/img/user/DS profile img.jpg";

for (const element of top_user) {
  const user_name = `${element.first_name} ${element.last_name}`;

  //  <div class="top_user"> </div>
  let div_top_user = document.createElement("div");
  div_top_user.setAttribute("class", "top_user");

  //  <div class="img"> </div>
  let div_img = document.createElement("div");
  div_img.setAttribute("class", "img");
  div_top_user.append(div_img);

  //  <img profile_img/>
  let img_profile_img = document.createElement("img");
  if(element.user_dp===""){
    img_profile_img.setAttribute("src","https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg");
  }else{
    img_profile_img.setAttribute("src",element.user_dp );
  }
  img_profile_img.setAttribute("alt", "profile");
  img_profile_img.setAttribute("class", "profile_img");
  div_img.append(img_profile_img);

  //  <div class="user_list"> </div>
  let div_user_list = document.createElement("div");
  div_user_list.setAttribute("class", "user_list");
  div_top_user.append(div_user_list);

  // <p tag for user name
  let p_user_name = document.createElement("p");
  p_user_name.setAttribute("class", "user_name");
  p_user_name.innerText = user_name;
  div_user_list.append(p_user_name);

  //<span> tag for gray
  let span_gray = document.createElement("span");
  span_gray.setAttribute("class", "gray");
  span_gray.innerText = element.user_name;
  div_user_list.append(span_gray);

  //div_follow_button /////

  let div_follow_button = document.createElement("div");
  div_follow_button.setAttribute("class", "follow_button");
  div_top_user.append(div_follow_button);

  // button_follow

  let button_follow = document.createElement("button");
  button_follow.setAttribute("id", element.user_name);
  let user_f_data;
  if(follow_data!==null){
    user_f_data = follow_data.find(
        (e) => e.followee == unic_user_id && e.following == element.user_name
      );
  }
  

  if (user_f_data == undefined) {
    button_follow.innerText = "follow";
  } else {
    button_follow.innerText = "Unfollow";
  }

  div_follow_button.append(button_follow);

  // follow function

  button_follow.addEventListener("click", function () {
    const following = this.id;
    const followee = unic_user_id;

    const follow_bn = document.getElementById(following);
    const follow_data =
      JSON.parse(localStorage.getItem("follow_data")) || [];
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
        (e) => e.followee == unic_user_id && e.following == following
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

  document.querySelector(".right_bottom").append(div_top_user);
}

//  follower following page
let followers = document.getElementById("follower_count");
let following = document.getElementById("following_count");

function rederectingfollow() {
  location.href =
    "../profile page/follower_following.html?user_id=" + user_Id;
}
following.addEventListener("click", rederectingfollow);
followers.addEventListener("click", rederectingfollow);
