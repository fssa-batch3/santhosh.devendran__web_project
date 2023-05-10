
function signUp(e) {
    e.preventDefault();
    const first_name = document.getElementById("firstname").value;
    const last_name = document.getElementById("lastname").value;
    const user_name = document.getElementById("username").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const mobile_number = document.getElementById("mobilenumber").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirmpassword").value;
    const user_bio = "";
    const user_dp = "";
    const user_cover_img = "";
    const uuid = uuidv4();
  
    function checkPassword() {
      if (password !== confirm_password) {
        alert("Re-enter the Password");
        confirm_password.value = reset();
      }
    }
    checkPassword();
    const user_list = JSON.parse(localStorage.getItem("user_list")) || [];
  
    const exist =
      user_list.length &&
      JSON.parse(localStorage.getItem("user_list")).some(
        (data) =>
          data.user_name.toLowerCase() == user_name.toLowerCase() ||
          data.mobile_number.toLowerCase() == mobile_number.toLowerCase()
      );
  
    if (!exist) {
      user_list.push({
        first_name,
        last_name,
        user_name,
        dob,
        email,
        mobile_number,
        password,
        confirm_password,
        user_bio,
        uuid,
        user_dp,
        user_cover_img,
      });
  
      localStorage.setItem("user_list", JSON.stringify(user_list));
  
      console.log(localStorage.getItem("user_list"));
  
      document.querySelector("form").reset();
      document.getElementById("user_email");
      alert("Account created Successfully");
      window.location.href = "../../index.html";
    } else {
      localStorage.setItem("unic_id", JSON.stringify(user_name));
      alert("Sorry the User already Exist!!");
      document.querySelector("form").reset();
    }
  }