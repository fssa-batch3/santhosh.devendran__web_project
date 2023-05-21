const rootPath = window.location.origin;

const unic_user_id2 = JSON.parse(localStorage.getItem("user_id"));

const header =`
<header>
        <div class="header_flex">
            <div class=" align_row">
                <img src="${rootPath}/assets/img/doorstep_logo.png" alt="dore step logo" class="logo_img">

                <input type="text" class="explore_input" id="explore_input">
                <i class="fa fa-search search_icon" style="font-size: 18px;"></i>
            </div>
            <div class="align_row navbar">
                <div class="align_row">
                    <img src="${rootPath}/assets/img/home.png" alt="home icon" class="home_icon" />
                    <a href="${rootPath}/pages/home_page.html"><p>Homepage</p></a>
                </div>
                <div class="align_row">
                    <img src="${rootPath}/assets/img/notification.png" alt="notification icon" class="notification_icon" />
                    <a href="${rootPath}/pages/notification.html"><p>Notification</p></a>
                    <span id="notification_dot"
                        style="width: 10px; height: 10px; background-color: red; border-radius: 50%; margin-top:-9px;"></span>
                </div>
            </div>
            <div class="f_se">
                <div class="align_row dropdown_pro" id="click_dropdown">
                    <img class="profile_img" id="header_profile_img" alt="user profile">
                    <div class="dropdown">
                        <div class="pro_drop">
                            <p class="user_name" id="header_user_name"></p>
                            <img src="${rootPath}/assets/img/down.png" alt="drop down" class="drop_down_i">
                        </div>

                        <div class="dropdown-content" style="display: none;" id="dropdown_list">
                            <ul>
                                <li class="selected" id="header_pro_link">profile</li>
                                <li class="selected" id="logout_bn">log out</li>
                                <li class="delete_op" id="delete_bn">delete account</li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </header>
`


document.body.insertAdjacentHTML("afterbegin", header);
