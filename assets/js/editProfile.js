
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
      
      if (unic_user_id == "") {
          window.location.href = "../../index.html";
      }
      
      const params = new URLSearchParams(window.location.search);
        const user_Id = params.get("user_id");
      
        const unic_id = JSON.parse(localStorage.getItem("user_id"));
        const user_records = JSON.parse(localStorage.getItem("user_list"));
      
        function login_data(e) {
          return e.user_name == unic_id;
        }
        const user_data = user_records.find(login_data);
      
      
        document.getElementById("email").innerHTML = user_data.email;
        document.getElementById("bio").innerHTML = user_data.user_bio;
        document.getElementById("mobile_number").innerHTML = user_data.mobile_number;
      
      function ubdate(e) {
        e.preventDefault();
      
          console.log(user_cover_img);
        
          const profile_img = user_dp;
          const cover_img = user_cover_img;
          const email = document.getElementById("email").value;
          const user_bio = document.getElementById("bio").value;
          const mobile_number = document.getElementById("mobile_number").value;
      
          if (email.length !== 0) {
            user_data.email = email;
          } else if (user_bio.length !== 0) {
            user_data.user_bio = user_bio;
          } else if (cover_img_change === true) {
            user_data.user_cover_img = cover_img;
          } else if (dp_change === true) {
            user_data.user_dp = profile_img;
          }else if(mobile_number.length !== 0){
          user_data.mobile_number = mobile_number;
        }
          localStorage.setItem("user_list", JSON.stringify(user_records));
          alert("updated successfully");
      
          window.location.href = `./profile.html?user_id=${user_Id}`;
      }
      
        if (user_data.user_dp == "") {
          imgPreview.src = "https://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662312/wyli3r0rjpxk5cnq2dze.jpg";
        } else {
          imgPreview.src = user_data.user_dp;
        }
      
        if (user_data.user_cover_img == "") {
          cover_imgPreview.src = "prhttps://res.cloudinary.com/dvb2bkrx9/image/upload/v1683662366/bmmblyyloqiulwfbmt3x.png";
        } else {
          cover_imgPreview.src = user_data.user_cover_img;
        }
              