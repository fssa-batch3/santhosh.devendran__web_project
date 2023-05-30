// url params
const params = new URLSearchParams(window.location.search);
const post_id = params.get("post_id");

// get data from localstorage
const post_feedd=JSON.parse(localStorage.getItem("post_feedd"));
const comment_list=JSON.parse(localStorage.getItem("comment_list"))||[];

//  find post details
const find_post=post_feedd.find(e=>e.post_id===post_id)

// asign variables


const time_diff_post=document.getElementById("time_diff_post");



console.log(time_diff_post);
// for profile photo in post

const p_profile_img = document.getElementById("post_user_dp_img");
// finding user data 
let userr_Id = find_post.unic_id;
const user_data = user_list.find(e => e.user_name == userr_Id);
console.log(user_data);
// for profile image
if (user_data.user_dp === "") {
    p_profile_img.src =
     "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg";
 } else {
    p_profile_img.src = user_data.user_dp;
 }


 // post img ////////////////
const img_post = find_post.post_img.src;

if (img_post) {
    const img_a = document.createElement("img");
    img_a.setAttribute("src", find_post.post_img.src);
    img_a.setAttribute("alt", "post");

    document.querySelector(".post_img").append(img_a);
}

document.getElementById("post_user_name").innerText = user_data.first_name+" "+user_data.last_name;

document.getElementById("post_content_p").innerText =
find_post.post_content;

    // times ago 

 
    calculateTimeDifference(find_post.post_date);

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
    time_diff_post.innerText = `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    time_diff_post.innerText = `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    time_diff_post.innerText = `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else {
    time_diff_post.innerText = `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }

  return displayTime;
}

// for like function

const like_count= document.getElementById("like_count_nu");
const i_like=document.getElementById("heart_icon");

const like_data = JSON.parse(localStorage.getItem("like_data")) || [];
    const like_icon_check = like_data.find(
      (e) => e.liked == post_id && e.who_liked == logged_user
    );
    if (like_icon_check == undefined) {
      i_like.setAttribute("class", "fa fa-heart-o");
      i_like.setAttribute("style", "font-size:24px;color: black;");
      
    } else {
      i_like.setAttribute("class", "fa fa-heart");
      i_like.setAttribute("style", "font-size:24px;color: red;");
    }

    like_count.innerText=find_post.like;

    i_like.addEventListener("click", function () {
      const liked = post_id;
      const who_liked = logged_user;
      const like_data =
        JSON.parse(localStorage.getItem("like_data")) || [];
      if (like_data.length === 0) {
        like_data.push({
          liked,
          who_liked,
        });
        notification_data.push({
          unic_id:uuidv4(),
          liked,
          who_liked,
          notification,
          type:"like"
        });
        localStorage.setItem("notification_data", JSON.stringify(notification_data));
        console.log(like_data);
        i_like.setAttribute("class", "fa fa-heart");
        i_like.setAttribute("style", "font-size:24px;color: red;");
        localStorage.setItem("like_data", JSON.stringify(like_data));
        // instend add like count
        let find_post = post_feedd.find((e) => e.post_id === liked);
        const new_count = find_post.like + 1;
        like_count.innerText = new_count;
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
            unic_id:uuidv4(),
            liked,
            who_liked,
            notification,
            type:"like"
          }
          );
          localStorage.setItem("notification_data", JSON.stringify(notification_data));
          i_like.setAttribute("class", "fa fa-heart");
          i_like.setAttribute("style", "font-size:24px;color: red;");
          localStorage.setItem("like_data", JSON.stringify(like_data));
          // instend add like count
          const find_post = post_feedd.find((e) => e.post_id === liked);
          const new_count = find_post.like + 1;
          like_count.innerText = new_count;
        } else {
          like_data.splice(indexOfuser_f, 1);
          localStorage.setItem("like_data", JSON.stringify(like_data));
          i_like.setAttribute("class", "fa fa-heart-o");
          i_like.setAttribute("style", "font-size:24px;color: Black;");
          // instend add like count
          const find_post = post_feedd.find((e) => e.post_id === liked);
          if (find_post.like >= 1) {
            const new_count = find_post.like - 1;
            like_count.innerText = new_count;
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


    //  comment count

    let comant_count=document.getElementById("comant_count");
    let comment_count_no=comment_list.filter(e=>e.comment_post_id===post_id).length;
    comant_count.innerText=comment_count_no;

//  create commant
const comment_post_bn=document.getElementById("comment_post_bn");

comment_post_bn.addEventListener("click",function () {
        if (document.getElementById("comment_input").value.length == 0) {
            alert("write a comment");
        } else {
            const unic_id = JSON.parse(localStorage.getItem("user_id"));
    
    
            function login_data(e) {
                return e.user_name == unic_id;
            }
            const user_data = user_list.find(login_data);
    
            console.log(user_data);
    
            const name = `${user_data.first_name} ${user_data.last_name}`;
            const comment_id = uuidv4();
            const user_name = unic_id;
            const comment_content = document.getElementById("comment_input").value;
            const newdate = new Date();
    
            console.log(comment_content);
    
            comment_list.push({
                name,
                unic_id: comment_id,
                user_name,
                comment_content,
                newdate,
                comment_post_id: post_id
            });
            notification_data.push({
                unic_id: comment_id,
                user_name,
                comment_post_id: post_id,
                notification,
                type:"comment"
            });
            localStorage.setItem("notification_data", JSON.stringify(notification_data));
            localStorage.setItem("comment_list", JSON.stringify(comment_list));
    
            location.reload();
        }
    }
    )

    // filter comment
    const filter_comment=comment_list.filter(e=>e.comment_post_id===post_id)


    for (const element of filter_comment){
        // Create the post_comment element
let postComment = document.createElement("div");
postComment.setAttribute("class", "post_comment");

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
const coment_user_id = element.user_name;
    const findElementUser = user_list.find(element => element.user_name === coment_user_id);
    console.log(coment_user_id);
    if (findElementUser.user_dp === "") {
        postUserDpImg.setAttribute("src", "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg");
    } else {
        postUserDpImg.setAttribute("src", findElementUser.user_dp);
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
calculateTimeDifference(element.newdate);

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

let menuSvgDiv = document.createElement("div");
menuSvgDiv.setAttribute("class", "menu_svg_div");

// Create the menu_svg element
if (logged_user === element.user_name) {
    let menuSvg = document.createElement("img");
menuSvg.setAttribute("class", "menu_svg");
menuSvg.setAttribute("id", element.unic_id);
menuSvg.setAttribute("src", "../assets/img/icons8-delete-48.png");
menuSvg.setAttribute("alt", "menu");

// Append menuSvg to menuSvgDiv
menuSvgDiv.appendChild(menuSvg);

menuSvg.addEventListener("click", function () {
        console.log("delete");
        if (confirm("Are you sure to Delete ?")) {
            const comment_id = this.id;
            const comment_list = JSON.parse(localStorage.getItem("comment_list"));
            function find_comment(e) {
                return e.unic_id == comment_id;
            }
            const user_comment = comment_list.find(find_comment);
            const indexOfUser = comment_list.indexOf(user_comment);
            comment_list.splice(indexOfUser, 1);
            localStorage.setItem("comment_list", JSON.stringify(comment_list));
        }

        let reloadPage = false;
        if (!reloadPage) {
            // Reload the page
            location.reload();
            reloadPage = true;
        }
    });
}





// Append menuSvgDiv to the parent element
postUserDetails.appendChild(menuSvgDiv);

// Append menuSvgDiv and menuDelete to postUserDetails
postUserDetails.appendChild(postProFlex);
postUserDetails.appendChild(menuSvgDiv);


// Create the post_content element
let postContent = document.createElement("div");
postContent.setAttribute("class", "post_content");

// Create the post_content_p element
let postContentP = document.createElement("p");
postContentP.setAttribute("class", "post_content_p");
postContentP.textContent =element.comment_content;

// Append postContentP to postContent
postContent.appendChild(postContentP);

// Append postUserDetails and postContent to postComment
postComment.appendChild(postUserDetails);
postComment.appendChild(postContent);

// Append the postComment to the document body or another parent element
let parentElement = document.getElementById("comment_list"); // Replace "parentElementId" with the actual ID of the parent element
parentElement.prepend(postComment);

}

