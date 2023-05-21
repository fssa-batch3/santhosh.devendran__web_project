const params = new URLSearchParams(window.location.search);
const unic_id = params.get("unic_id");

// get data from localstorage
const post_feedd=JSON.parse(localStorage.getItem("post_feedd"));
const comment_list=JSON.parse(localStorage.getItem("comment_list"))||[];

const user_data_params=user_list.find((e)=>e.user_name===unic_id)


//  set cover photo

const cover_photo=document.getElementById("cover_photo");

    if(user_data_params.user_cover_img==""){
        cover_photo.src="https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684567732/wqoszgoorljdovwdevph.png"
      }
      else{
        cover_photo.src=user_data_params.user_cover_img;
      }


// set  user dp

const pro_user_dp=document.getElementById("pro_user_dp");

if(user_data_params.user_dp==""){
    pro_user_dp.src="https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg"
  }
  else{
    pro_user_dp.src=user_data_params.user_dp;
  }

// set user full name

const pro_user_f_name=document.getElementById("pro_user_f_name");

pro_user_f_name.innerText=user_data_params.first_name+" "+user_data_params.last_name;

// set user name

const pro_user_name=document.getElementById("pro_user_name");

pro_user_name.innerText="@"+user_data_params.user_name;

//  bio data 

const user_bio_content=document.getElementById("user_bio_content");

if(logged_user===unic_id){
    if(user_data_params.user_bio==""){
        user_bio_content.innerText="write something about you...."
      }
      else{
        user_bio_content.innerText=user_data_params.user_bio;
      }
}
else{
    user_bio_content.innerText=user_data_params.user_bio;
}


//  show follow edit button

const edit_button_pro=document.getElementById("edit_button_pro");
const follow_button_pro=document.getElementById("follow_button_pro");

if(logged_user===unic_id){
    edit_button_pro.style.display="block";
    follow_button_pro.style.display="none"
}
else{
    edit_button_pro.style.display="none";
    follow_button_pro.style.display="block"
}


// follower folowing count

let follower_count_pro=follow_data.filter(e=>e.following==unic_id).length;
let following_count_pro=follow_data.filter(e=>e.followee==unic_id).length;
document.getElementById("follower_count_pro").innerText=follower_count_pro;
document.getElementById("following_count_pro").innerText=following_count_pro;




//  user post list show

//  filter user post


const filtered_post=post_feedd.filter(e=>e.unic_id===unic_id);

//  create card for post

for(const element of filtered_post){

    // Create the post_div element
let postDiv = document.createElement("div");
postDiv.setAttribute("class", "post_div");

// Create the post_user_details element
let postUserDetails = document.createElement("div");
postUserDetails.setAttribute("class", "post_user_details");

// Create the post_pro_flex element
let postProFlex = document.createElement("div");
postProFlex.setAttribute("class", "post_pro_flex");

// Create the post_user_dp element
let postUserDp = document.createElement("div");
postUserDp.setAttribute("class", "post_user_dp");

// Create the post_user_dp_img element
let postUserDpImg = document.createElement("img");
postUserDpImg.setAttribute("class", "post_user_dp_img");
const post_user_id=element.unic_id;
    const findElementUser=user_list.find(element=>element.user_name===post_user_id);
    if(findElementUser.user_dp===""||findElementUser==undefined){
        postUserDpImg.setAttribute("src","https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg");
      }else{
        postUserDpImg.setAttribute("src",findElementUser.user_dp );
      }
postUserDpImg.setAttribute("alt", "post profile");

// Append postUserDpImg to postUserDp
postUserDp.appendChild(postUserDpImg);

// Create the post_user_name_time element
let postUserNameTime = document.createElement("div");
postUserNameTime.setAttribute("class", "post_user_name_time");

// Create the post_user_name element
let postUserName = document.createElement("p");
postUserName.setAttribute("class", "post_user_name");
postUserName.textContent = findElementUser.first_name+" "+findElementUser.last_name;

// Create the time_ago element
let timeAgo = document.createElement("p");
timeAgo.setAttribute("class", "time_ago");
calculateTimeDifference(element.post_date)

function calculateTimeDifference(postDate) {
  const currentDate = new Date();
  const postCreationDate = new Date(postDate);

  const timeDifference = currentDate.getTime() - postCreationDate.getTime();

  // Calculate the difference in seconds, minutes, hours, and days
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Determine the appropriate time unit to display
  let displayTime;
  if (days > 0) {
    timeAgo.innerText = `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    timeAgo.innerText = `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    timeAgo.innerText = `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else {
    timeAgo.innerText = `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }

  return displayTime;
}

// Append postUserName and timeAgo to postUserNameTime
postUserNameTime.appendChild(postUserName);
postUserNameTime.appendChild(timeAgo);

// Append postUserDp and postUserNameTime to postProFlex
postProFlex.appendChild(postUserDp);
postProFlex.appendChild(postUserNameTime);

// Create the menu_svg_div element
let menuSvgDiv = document.createElement("div");
menuSvgDiv.setAttribute("class", "menu_svg_div");

// Create the menu_svg element
let menuSvg = document.createElement("img");
menuSvg.setAttribute("class", "menu_svg");
menuSvg.setAttribute("src", "../assets/img/ellipsis-v-icon.svg");
menuSvg.setAttribute("alt", "menu");

// Append menuSvg to menuSvgDiv
menuSvgDiv.appendChild(menuSvg);

// Create the menu_delete element
let menuDelete = document.createElement("div");
menuDelete.setAttribute("class", "menu_delete");

// Create the ul element
let ul = document.createElement("ul");

// Create the li element
let li = document.createElement("li");
li.setAttribute("class", "post_delete");
li.setAttribute("id",element.delete_bn)
li.textContent = "Delete";
li.addEventListener("click", function () {
    if (confirm("Are you sure to Delete ?")) {
        const post_id=this.id;
      const post_feedd = JSON.parse(localStorage.getItem("post_feedd"));
      function find_post(e) {
        console.log(post_id);
        return (
          e.delete_bn == post_id
        );
      }
      let find_post_delete = post_feedd.find(find_post);
      const indexOfUser = post_feedd.indexOf(find_post_delete);
      post_feedd.splice(indexOfUser, 1);
      localStorage.setItem("post_feedd", JSON.stringify(post_feedd));
    }

    location.reload();
  });
// Append li to ul
ul.appendChild(li);

// Append ul to menuDelete
menuDelete.appendChild(ul);

// Append menuSvgDiv and menuDelete to postUserDetails
postUserDetails.appendChild(postProFlex);
postUserDetails.appendChild(menuSvgDiv);
menuSvgDiv.appendChild(menuDelete);

// Create the post_content element
let postContent = document.createElement("div");
postContent.setAttribute("class", "post_content");

// Create the post_content_p element
let postContentP = document.createElement("p");
postContentP.setAttribute("class", "post_content");
postContentP.textContent =element.post_content;

// Append postContentP to postContent
postContent.appendChild(postContentP);

// Create the post_img element
let postImg = document.createElement("div");
postImg.setAttribute("class", "post_img");

if(element.post_img.src!==""){
// Create the post_img_co element
let postImgCo = document.createElement("img");
postImgCo.setAttribute("class", "post_img_co");
postImgCo.setAttribute("src", element.post_img.src);
postImgCo.setAttribute("alt", "post image");

// Append postImgCo to postImg
postImg.appendChild(postImgCo);
}
// Create the like_comment element
let likeComment = document.createElement("div");
likeComment.setAttribute("class", "like_comment");

// Create the like_icon element
let likeIcon = document.createElement("div");
likeIcon.setAttribute("class", "like_icon");

// Create the heart icon
let i_like = document.createElement("i");
i_like.setAttribute("class", "fa fa-heart-o");
i_like.setAttribute("style", "font-size:24px");

const like_data = JSON.parse(localStorage.getItem("like_data")) || [];
    const like_icon = like_data.find(
      (e) => e.liked == element.post_id && e.who_liked == logged_user
    );
    if (like_icon == undefined) {
      i_like.setAttribute("class", "fa fa-heart-o");
      i_like.setAttribute("style", "font-size:24px;color: black;");
    } else {
      i_like.setAttribute("class", "fa fa-heart");
      i_like.setAttribute("style", "font-size:24px;color: red;");
    }

// Create the l_c_count span for like count
let likeCount = document.createElement("span");
likeCount.setAttribute("class", "l_c_count");
likeCount.setAttribute("id", "count"+element.post_id);
likeCount.textContent = element.like;

// Append heartIcon and likeCount to likeIcon
likeIcon.appendChild(i_like);
likeIcon.appendChild(likeCount);

// Create the comment_icon element
let commentIcon = document.createElement("div");
commentIcon.setAttribute("class", "comment_icon");

// Create the comment icon
let commentIconI = document.createElement("i");
commentIconI.setAttribute("class", "fa fa-comment-o");
commentIconI.setAttribute("style", "font-size:24px");

// Create the l_c_count span for comment count
let commentCount = document.createElement("span");
commentCount.setAttribute("class", "l_c_count");
let comment_count=comment_list.filter(e=>e.comment_post_id===element.post_id).length;
commentCount.textContent = comment_count;

// Append commentIconI and commentCount to commentIcon
commentIcon.appendChild(commentIconI);
commentIcon.appendChild(commentCount);

// Append likeIcon and commentIcon to likeComment
likeComment.appendChild(likeIcon);
likeComment.appendChild(commentIcon);

// Append postUserDetails, postContent, postImg, and likeComment to postDiv
postDiv.appendChild(postUserDetails);
postDiv.appendChild(postContent);
postDiv.appendChild(postImg);
postDiv.appendChild(likeComment);

// Append postDiv to the document body or another parent element
let parentElement = document.getElementById("user_post_list"); 
parentElement.prepend(postDiv);

}



// for edit profile pop up

const closePopup=document.getElementById("closePopup")

edit_button_pro.addEventListener("click", function () {
    myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});















// for edit cover photo
const edit_cover_img = document.getElementById("imgBox1");

if (user_data_params.user_cover_img === "") {
    edit_cover_img.src = "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1684567732/wqoszgoorljdovwdevph.png";
} else {
    edit_cover_img.src = user_data_params.user_cover_img;
}

// for edit dp img
const edit_dp_img = document.getElementById("imgBox2");

if (user_data_params.user_dp === "") {
    edit_dp_img.src = "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg";
} else {
    edit_dp_img.src = user_data_params.user_dp;
}
// Profile image Upload API
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dvb2bkrx9/upload";
const CLOUDINARY_UPLOAD_PRESET = "sk3iuzma";

let user_dp;
let dp_change = false;
const imgPreview = document.getElementById("imgBox2");
const fileUpload = document.getElementById("profile_upload");

fileUpload.addEventListener("change", function (event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData,
    })
        .then(function (res) {
            console.log(res);
            imgPreview.src = res.data.secure_url;
            dp_change = true;
            // Store the URL in localStorage
            userRecords = res.data.secure_url;
            user_dp = userRecords;
            // localStorage.setItem('profile_image', userRecords);
        })
        .catch(function (err) {
            console.error(err);
        });
});

// cover image Upload API
const CLOUDINARY_ = "https://api.cloudinary.com/v1_1/dvb2bkrx9/upload";
const CLOUDINARY_UPLOAD_PRESE = "sk3iuzma";

let user_cover_img;
let cover_img_change = false;
const cover_imgPreview = document.getElementById("imgBox1");
const coverfileUpload = document.getElementById("profile_upload_cover");

coverfileUpload.addEventListener("change", function (event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESE);

    axios({
        url: CLOUDINARY_,
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData,
    })
        .then(function (res) {
            console.log(res);
            cover_imgPreview.src = res.data.secure_url;
            cover_img_change = true;
            // Store the URL in localStorage
            userRecords = res.data.secure_url;
            user_cover_img = userRecords;
            // localStorage.setItem('profile_image', userRecords);
        })
        .catch(function (err) {
            console.error(err);
        });
});

const unic_user_id = JSON.parse(localStorage.getItem("user_id"));

// if (unic_user_id == "") {
//     window.location.href = "../../index.html";
// }

// const params = new URLSearchParams(window.location.search);
// const user_Id = params.get("user_id");

// const unic_id = JSON.parse(localStorage.getItem("user_id"));



// document.getElementById("email").innerHTML = user_data.email;
// document.getElementById("bio").innerHTML = user_data.user_bio;
// document.getElementById("mobile_number").innerHTML = user_data.mobile_number;

function proubdate(e) {


    const user_records = JSON.parse(localStorage.getItem("user_list"));

function login_data(e) {
    return e.user_name == logged_user;
}
const user_data = user_records.find(login_data);

    console.log(user_cover_img);

    const profile_img = user_dp;
    const cover_img = user_cover_img;
    const email = document.getElementById("email").value;
    const user_bio = document.getElementById("bio").value;
    const mobile_number = document.getElementById("mobile_number").value;

    if (email.length !== 0) {
        user_data.email = email;
    } if (user_bio.length !== 0) {
        user_data.user_bio = user_bio;
    } if (cover_img_change === true) {
        user_data.user_cover_img = cover_img;
    } if (dp_change === true) {
        user_data.user_dp = profile_img;
    } if (mobile_number.length !== 0) {
        user_data.mobile_number = mobile_number;
    }
    localStorage.setItem("user_list", JSON.stringify(user_records));
    alert("updated successfully");
}
