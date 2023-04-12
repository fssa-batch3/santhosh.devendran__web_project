 let rootPath = window.location.origin;

 let unic_user_id2 = JSON.parse(localStorage.getItem("user_id"));

 const header =`<header>
 <div class="logo">
     <img src="${rootPath}/assets/img/logo/logo.jpg" alt="logo" /><span class="name">Door Step</span>
 </div>
 <div class="options">
     <a href="${rootPath}/pages/home.html">
         <div class="home">
             <p class="nav">Home</p>
         </div>
     </a>
     <a href="${rootPath}/pages/profile page/profile.html?user_id=${unic_user_id2}">
         <div class="profile">
             <p>Profile</p>
         </div>
     </a>
     <a href="${rootPath}/pages/explore/inspect people.html">
         <div class="inspect">
             <p>Explore</p>
         </div>
     </a>
     <a href="${rootPath}/pages/notification page/notification.html">
         <div class="inspect">
             <p>Notification</p>
         </div>
     </a>

 </div>
</header>`;


document.body.insertAdjacentHTML("afterbegin", header);

