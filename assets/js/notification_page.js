
// const user_list=JSON.parse(localStorage.getItem("user_list"));
const for_notify_pge=JSON.parse(localStorage.getItem("for_notify"));
// const follow_data=JSON.parse(localStorage.getItem("follow_data"));
// const notification_data=JSON.parse(localStorage.getItem("notification_data"));
const unic_id= JSON.parse(localStorage.getItem("user_id"));
let div_list;
let div_profile;
let a;
let image_a;
let div_content;
let p;
let a_1;
let b;
let span_0;
let span_1;
let div_follow;
let button;

let notification_user;

let find_user;
let user_name;
let content;
let follow=false;




for (let i = 0; i <for_notify_pge.length; i++) {

      console.log(i);
      if (for_notify_pge[i].type == "like") {
            notification_user=for_notify_pge[i].who_liked;
             find_user=user_list.find(e=>e.user_name==notification_user);
             content=" liked your";
        }
        if (for_notify_pge[i].type == "comment") {
            notification_user=for_notify_pge[i].user_name;
             find_user=user_list.find(e=>e.user_name==notification_user);
             content=" commented on your";
            }
        if(for_notify_pge[i].type == "follow") {
             follow =true
            notification_user=for_notify_pge[i].following;
            find_user=user_list.find(e=>e.user_name==notification_user);  
            content=" started following you"
      }  
      let  user_dp=find_user.user_dp===""?"https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg":find_user.user_dp;
        user_name=find_user.first_name+" "+find_user.last_name;
  //  <div class="list"> </div>
div_list = document.createElement("div");
div_list.setAttribute("class", "list");
console.log(div_list);

//  <div class="profile"> </div>
div_profile = document.createElement("div");
div_profile.setAttribute("class", "profile");
div_list.append(div_profile);

//<a href="./details.html"></a>
a = document.createElement("a");
a.setAttribute("href", "./profile_page.html?unic_id="+find_user.user_name);
div_profile.append(a);

//  <img src="../../assets/img/user/elon musk.jpg" alt=""/>
img_a = document.createElement("img");
img_a.setAttribute("src", user_dp);
img_a.setAttribute("alt", "profile");
img_a.setAttribute("width", "50px");
img_a.setAttribute("height", "50px");
a.append(img_a);

//  <div class="list"> </div>
div_content = document.createElement("div");
div_content.setAttribute("class","content");
div_list.append(div_content);

//  <p> </p>
p = document.createElement("p");
div_content.append(p);

//<a href="./details.html"></a>
a_1 = document.createElement("a");
a_1.setAttribute("href", "./profile_page.html?unic_id="+find_user.user_name);
p.append(a_1);

//  <b> </b>
b = document.createElement("b");
b.innerText = user_name;
a_1.append(b);

//  <span>1 </span>
span_0 = document.createElement("span");

let post_unic_id=for_notify_pge[i].comment_post_id!==undefined?for_notify_pge[i].comment_post_id:for_notify_pge[i].liked;
span_0.setAttribute("id",post_unic_id)
span_0.innerHTML =follow===true?content:content+"  "+`<span style="font-weight: bold;text-decoration: underline;cursor: pointer;" onclick="goto_post(post_unic_id)">post</span>`;
p.append(span_0);

span_0.addEventListener("click",function (){

    let find_post_id=this.id
    location.href="./post_comment.html?post_id="+find_post_id
})


//  <span> </span>
// span_1 = document.createElement("span");
// span_1.innerText = notification_list[i].time;
// span_1.setAttribute("class", "time");
// p.append(span_1);

//  <div class="follow"> </div>
div_follow = document.createElement("div");
div_follow.setAttribute("class", "follow");
div_list.append(div_follow);
if(follow===true){
//  <button> </button>
button = document.createElement("button");
button.setAttribute("id","ff"+find_user.user_name);
const user_f_data = follow_data.find(
      (e) => e.followee == unic_id && e.following == find_user.user_name
    );
  
    if (user_f_data == undefined) {
      button.innerText = "follow back";
    } else {
      button.innerText = "Unfollow";
    }
div_follow.append(button);

// for follow
button.addEventListener("click", function () {
      const following = this.id.replace(/"ff"/,"");
      const followee = unic_id;
  
      const follow_bn = document.getElementById("ff"+following);
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
          (e) => e.followee == unic_id && e.following == following
        );
        const indexOfuser_f = follow_data.indexOf(user_f_data);
        if (user_f_data == undefined) {
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
          follow_bn.innerText = "Unfollow";
          localStorage.setItem("follow_data", JSON.stringify(follow_data));
        } else {
          follow_data.splice(indexOfuser_f, 1);
          localStorage.setItem("follow_data", JSON.stringify(follow_data));
          follow_bn.innerText = "follow back";
        }
      }
    });
}
follow=false;

// changestatus(for_notify_pge[i].unic_id)


document.querySelector(".notification_list").append(div_list);
}

// function changestatus(unicid){
// let notify_array=JSON.parse(localStorage.getItem(notification_data));
// let find_object=notify_array.find(e=>e.unic_id==unicid)

// find_object.notification=true;

// localStorage.setItem(("notification_data"),JSON.stringify(notify_array))

// }