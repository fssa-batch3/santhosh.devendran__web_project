// variables for getitem from localstorage

const comment_list=JSON.parse(localStorage.getItem("comment_list"))||[];
let post_feedd = JSON.parse(localStorage.getItem("post_feedd")) || [];
// variable what I asigned

let for_row=1;
let post_content_input="";
new_post = false;

// variables for get element from document
const delete_img=document.getElementById("delete_img");
const create_post_user_dp=document.getElementById("create_post_user_dp"); 

const create_post_input=document.getElementById("create_post_input"); 
const post_bn=document.getElementById("post_bn"); 

// create profile div
    // userdp
    if(log_in_user_data.user_dp==""){
        create_post_user_dp.src="https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg"
      }
      else{
        create_post_user_dp.src=log_in_user_data.user_dp;
      }


    //  text area
    
    create_post_input.addEventListener("input", function posttextarea() {
        post_content_input = document.getElementById("create_post_input").value;
    const content_count = post_content_input.length;
    let length_for_row=43;
   
    switch (true) {
        case length_for_row * for_row === content_count:
          for_row++;
          create_post_input.setAttribute("rows", for_row);
          break;
        case for_row > 1 && content_count === length_for_row * (for_row - 1):
          for_row--;
          create_post_input.setAttribute("rows", for_row);
          break;
      }
    
  });


//    create post image upload


//  API for store image in cloud
// post image Upload API
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dvb2bkrx9/upload";
const CLOUDINARY_UPLOAD_PRESET = "sk3iuzma";

// const img_pre_div = document.getElementById("img_pre_div");
const imgPreview = document.getElementById("imgBox2");
const fileUpload = document.getElementById("post_img_upload");
let post_img = "";

fileUpload.addEventListener("change", function (event) {
    imgPreview.style.display = "block";
    imgPreview.src="https://media.tenor.com/hlKEXPvlX48AAAAC/loading-loader.gif"
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
      img_pre()
      // Store the URL in localStorage
      post_img = res.data.secure_url;
      console.log(post_img);
    })
    .catch(function (err) {
      console.error(err);
    });
   
});

function img_pre(){
    imgPreview.style.display = "block";
    delete_img.style.display = "block";
    console.log(post_img);
}

delete_img.addEventListener("click",function(){
    post_img=""
    imgPreview.style.display = "none";
    delete_img.style.display = "none";
})

// submit post

post_bn.addEventListener("click",function () {

    // push_content = post_textarea.value;
  
    if (post_content_input.length === 0||post_content_input.length === 1) {
      alert("fill anything in the post field");
    }else {
      const user_name = log_in_user_data.first_name+" "+log_in_user_data.last_name;
      const post_content = post_content_input;
      const post_img_src = post_img;
      const like_count = 0;
      const post_id = uuidv4();
      const post_date=new Date();
      const unic_id=logged_user;
  
      post_feedd.push({
        post_id,
        unic_id,
        user_name,
        post_content,
        post_img: {
          src: post_img_src,
          alt: "",
        },
        like: like_count,
        delete_bn: post_id,
        post_date
      });

      create_post_input.value="";
      imgPreview.style.display = "none";
    delete_img.style.display = "none";
  
      post_img="";
      localStorage.setItem("post_feedd", JSON.stringify(post_feedd));
      new_post = true;
      post_feedd.splice(0, post_feedd.length - 1);
      create_post_card(post_feedd);
      post_feedd = JSON.parse(localStorage.getItem("post_feedd"));
    }
  }
)

//  post card list
create_post_card(post_feedd)

function create_post_card(post_feedd){

    for(const element of post_feedd){
        // Create the main post_div element
var postDiv = document.createElement("div");
postDiv.setAttribute("class", "post_div");

// Create the post_user_details element
var postUserDetails = document.createElement("div");
postUserDetails.setAttribute("class", "post_user_details");

// Create the post_pro_flex element
var postProFlex = document.createElement("div");
postProFlex.setAttribute("class", "post_pro_flex");

// Create the post_user_dp element
var postUserDp = document.createElement("div");
postUserDp.setAttribute("class", "post_user_dp");

// Create the post_user_dp_img element
var postUserDpImg = document.createElement("img");
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
var postUserNameTime = document.createElement("div");
postUserNameTime.setAttribute("class", "post_user_name_time");

// Create the post_user_name element
var postUserName = document.createElement("p");
postUserName.setAttribute("class", "post_user_name");
postUserName.setAttribute("style", "cursor: pointer;");
postUserName.setAttribute("id",findElementUser.user_name);
postUserName.textContent = findElementUser.first_name+" "+findElementUser.last_name;

postUserName.addEventListener("click",function (){
  const user_name=this.id;
  location.href="./profile_page.html?unic_id="+user_name;
})
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
var menuSvgDiv = document.createElement("div");
menuSvgDiv.setAttribute("class", "menu_svg_div");

// Create the menu_svg element
var menuSvg = document.createElement("img");
menuSvg.setAttribute("class", "menu_svg");
menuSvg.setAttribute("src", "../assets/img/ellipsis-v-icon.svg");
menuSvg.setAttribute("alt", "menu");

// Append menuSvg to menuSvgDiv
menuSvgDiv.appendChild(menuSvg);

// Append postProFlex and menuSvgDiv to postUserDetails
postUserDetails.appendChild(postProFlex);
postUserDetails.appendChild(menuSvgDiv);

// Create the post_content element
var postContent = document.createElement("div");
postContent.setAttribute("class", "post_content");

// Create the post_content_p element
var postContentP = document.createElement("p");
postContentP.setAttribute("class", "post_content_p");
postContentP.textContent = element.post_content;

// Append postContentP to postContent
postContent.appendChild(postContentP);

// Create the post_img element
var postImg = document.createElement("div");
postImg.setAttribute("class", "post_img");

if(element.post_img.src!==""){
// Create the img element
var img = document.createElement("img");
img.setAttribute("src", element.post_img.src);
img.setAttribute("alt", "post image");

// Append img to postImg
postImg.appendChild(img);
}

// Create the like_comment element
var likeComment = document.createElement("div");
likeComment.setAttribute("class", "like_comment");

// Create the like_icon element
var likeIcon = document.createElement("div");
likeIcon.setAttribute("class", "like_icon");

// Create the heart icon
var i_like = document.createElement("i");
i_like.setAttribute("class", "fa fa-heart-o");
i_like.setAttribute("style", "font-size:24px");
i_like.setAttribute("id", element.post_id);

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

    i_like.addEventListener("click", function () {
      const liked = this.id;
      const who_liked = logged_user;

      const like_bn = document.getElementById(liked);
      const likeCount=document.getElementById("count"+liked);
      const like_data =
        JSON.parse(localStorage.getItem("like_data")) || [];
      if (like_data.length === 0) {
        like_data.push({
          liked,
          who_liked,
        });
        notification_data.push({
          liked,
          who_liked,
          notification,
          type:"like"
        });
        localStorage.setItem("notification_data", JSON.stringify(notification_data));
        console.log(like_data);
        like_bn.setAttribute("class", "fa fa-heart");
        like_bn.setAttribute("style", "font-size:24px;color: red;");
        localStorage.setItem("like_data", JSON.stringify(like_data));
        // instend add like count
        let find_post = post_feedd.find((e) => e.post_id === liked);
        const new_count = find_post.like + 1;
        likeCount.innerText = new_count;
      } else {
        const user_l_data = like_data.find(
          (e) => e.liked === liked && e.who_liked === logged_user
        );
        const indexOfuser_f = like_data.indexOf(user_l_data);
        if (user_l_data === undefined) {
          like_data.push({
            liked,
            who_liked,
          });
          notification_data.push({
            liked,
            who_liked,
            notification,
            type:"like"
          }
          );
          localStorage.setItem("notification_data", JSON.stringify(notification_data));
          like_bn.setAttribute("class", "fa fa-heart");
          like_bn.setAttribute("style", "font-size:24px;color: red;");
          localStorage.setItem("like_data", JSON.stringify(like_data));
          // instend add like count
          const find_post = post_feedd.find((e) => e.post_id === liked);
          const new_count = find_post.like + 1;
          likeCount.innerText = new_count;
        } else {
          like_data.splice(indexOfuser_f, 1);
          localStorage.setItem("like_data", JSON.stringify(like_data));
          like_bn.setAttribute("class", "fa fa-heart-o");
          like_bn.setAttribute("style", "font-size:24px;color: Black;");
          // instend add like count
          const find_post = post_feedd.find((e) => e.post_id === liked);
          if (find_post.like >= 1) {
            const new_count = find_post.like - 1;
            likeCount.innerText = new_count;
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





// Create the l_c_count span element for like count
var likeCount = document.createElement("span");
likeCount.setAttribute("class", "l_c_count");
likeCount.setAttribute("id", "count"+element.post_id);
likeCount.textContent = element.like;

// Append heartIcon and likeCount to likeIcon
likeIcon.appendChild(i_like);
likeIcon.appendChild(likeCount);

// Create the comment_icon element
var commentIconLink = document.createElement("a");
commentIconLink.setAttribute("href", "../pages/post_comment.html?post_id="+element.post_id);

var commentIcon = document.createElement("div");
commentIcon.setAttribute("class", "comment_icon");

// Create the comment icon
var commentSvg = document.createElement("i");
commentSvg.setAttribute("class", "fa fa-comment-o");
commentSvg.setAttribute("style", "font-size:24px");

// Create the l_c_count span element for comment count
var commentCount = document.createElement("span");
commentCount.setAttribute("class", "l_c_count");

let comment_count=comment_list.filter(e=>e.comment_post_id===element.post_id).length;
console.log(comment_count);
commentCount.textContent = comment_count;

// Append commentSvg and commentCount to commentIcon
commentIcon.appendChild(commentSvg);
commentIcon.appendChild(commentCount);

// Append likeIcon and commentIcon to likeComment
likeComment.appendChild(likeIcon);
likeComment.appendChild(commentIconLink);
commentIconLink.appendChild(commentIcon);

// Append all the elements to the postDiv
postDiv.appendChild(postUserDetails);
postDiv.appendChild(postContent);
postDiv.appendChild(postImg);
postDiv.appendChild(likeComment);

// Append the postDiv to the document body or another parent element
let parentElement = document.getElementById("post_list_div");


if (new_post) {
  parentElement.prepend(postDiv);
  new_post = false;
} else {
  parentElement.appendChild(postDiv);
}

    }
}





















