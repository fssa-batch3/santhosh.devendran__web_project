// take data from URL    ///////

const post_feed = JSON.parse(localStorage.getItem("post_feedd"));
const user_records = JSON.parse(localStorage.getItem("user_list"));

const params = new URLSearchParams(window.location.search);
const postId = params.get("post_id");
// find post

const post_details = post_feed.find(e => e.post_id == postId);
console.log(post_details);
// for profile photo in post

const p_profile_img = document.getElementById("post_profile_img");
// finding user data 
let userr_Id = post_details.unic_id;
const user_data = user_records.find(e => e.user_name == userr_Id);
console.log(user_data);
// for profile image
if (user_data.user_dp === "") {
    p_profile_img.src =
     "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg";
 } else {
    p_profile_img.src = user_data.user_dp;
 }



// get or create notification array
const notificationData = JSON.parse(localStorage.getItem("notificationData")) || [];


// post img ////////////////
const img_post = post_details.post_img.src;

if (img_post) {
    const img_a = document.createElement("img");
    img_a.setAttribute("src", post_details.post_img.src);
    img_a.setAttribute("alt", "post");

    document.querySelector(".post_img").append(img_a);
}

document.getElementById("title").innerText = post_details.user_name;
document.getElementById("user_name").innerText = post_details.user_name;
document.getElementById("post_content").innerText =
    post_details.post_content;

// store comment data in local storage///

const comment_list = JSON.parse(localStorage.getItem("comment_list")) || [];

function comment() {
    if (document.getElementById("comment_content").value.length == 0) {
        alert("write a comment");
    } else {
        const unic_id = JSON.parse(localStorage.getItem("user_id"));


        function login_data(e) {
            return e.user_name == unic_id;
        }
        const user_data = user_records.find(login_data);

        console.log(user_data);

        const name = `${user_data.first_name} ${user_data.last_name}`;
        const comment_id = uuidv4();
        const user_name = unic_id;
        const comment_content = document.getElementById("comment_content").value;
        const date = new Date();
        const Notification = false;
        const formattedDate = `${date
            .getDate()
            .toString()
            .padStart(2, "0")} ${date.toLocaleString("default", {
                month: "short",
            })} ${date.getFullYear()}`;

        console.log(comment_content);

        comment_list.push({
            name,
            unic_id: comment_id,
            user_name,
            comment_content,
            date_time: formattedDate,
            comment_post_id: postId,
        });
        notificationData.push(
            comment_id,
            user_name,
            postId,
            Notification

        )
        localStorage.setItem("comment_list", JSON.stringify(comment_list));

        location.reload();
    }
}

//  add comand count in post details

const filtercomment = comment_list.filter(
    (comment) => comment.comment_post_id == postId
);
const post_feedd = JSON.parse(localStorage.getItem("post_feedd"));

const find_post = post_feedd.find((e) => e.post_id === postId);
find_post.comand = filtercomment.length;

localStorage.setItem("post_feedd", JSON.stringify(post_feedd));

const unic_id = JSON.parse(localStorage.getItem("user_id"));
// create card for coment ///////////////////

for (let i = 0; i <= filtercomment.length; i++) {
    // div coment list//
    div_comment_list = document.createElement("div");
    div_comment_list.setAttribute("class", "comment_list");

    // div_user list///
    div_user_list = document.createElement("div");
    div_user_list.setAttribute("class", "user_list");
    div_comment_list.append(div_user_list);

    // div_img///
    div_img = document.createElement("div");
    div_img.setAttribute("class", "img");
    div_user_list.append(div_img);

    // img profile////
    img_profile = document.createElement("img");
    img_profile.setAttribute("alt", "profile_photo");
    img_profile.setAttribute("class", "profile_img");

    const coment_user_id = filtercomment[i].user_name;
    const findElementUser = user_records.find(element => element.user_name === coment_user_id);
    console.log(coment_user_id);
    if (findElementUser.user_dp === "") {
        img_profile.setAttribute("src", "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg");
    } else {
        img_profile.setAttribute("src", findElementUser.user_dp);
    }
    div_img.append(img_profile);

    // div_user///
    div_user = document.createElement("div");
    div_user.setAttribute("class", "user");
    div_user_list.append(div_user);

    ///div for user and delete
    div_delete = document.createElement("div");
    div_delete.setAttribute("class", "name_delete");
    div_user.append(div_delete);

    // p tag user_name
    p_user_name = document.createElement("p");
    p_user_name.setAttribute("class", "user_name");
    p_user_name.innerText = filtercomment[i].name;
    div_delete.append(p_user_name);

    // i delete for delete////

    if (unic_id === filtercomment[i].user_name) {
        const i_delete = document.createElement("i");
        i_delete.setAttribute("class", "fa fa-trash-o");
        i_delete.setAttribute("style", "font-size:15px;color:red");
        i_delete.setAttribute("id", filtercomment[i].unic_id);
        div_delete.append(i_delete);

        i_delete.addEventListener("click", function () {
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

    //p tag post comment

    p_post_cuntent = document.createElement("p");
    p_post_cuntent.setAttribute("class", "post_cuntent");
    p_post_cuntent.innerText = filtercomment[i].comment_content;
    div_user.append(p_post_cuntent);

    // div like//
    // div_like = document.createElement("div");
    // div_like.setAttribute("class", "like");
    // div_comment_list.append(div_like);

    // // i tag cration//
    // i_heart = document.createElement("i");
    // i_heart.setAttribute("class", "fa fa-heart-o");
    // i_heart.setAttribute("style", "font-size:18px;color: black;")
    // div_like.append(i_heart);

    //span like_count//
    // span_count = document.createElement("span");
    // span_count.setAttribute("class", "like_count");
    // span_count.innerText = filtercomment[i].like_count;
    // div_like.append(span_count);

    document.querySelector(".post_details").append(div_comment_list);
}
