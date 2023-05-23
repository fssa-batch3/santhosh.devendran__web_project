
const userDOB = document.getElementById("dob");

userDOB.addEventListener("change", function() {
  const dob = userDOB.value;
  const twelveYearsAgo = new Date();
  twelveYearsAgo.setFullYear(twelveYearsAgo.getFullYear() - 12);
  const formattedDate = `${twelveYearsAgo.getFullYear()}-0${twelveYearsAgo.getMonth() + 1}-${twelveYearsAgo.getDate()}`;

  if (dob <= formattedDate) {
    console.log("DOB is valid");
  } else {
    userDOB.value = "";
    alert("Sorry, you must be at least 12 years old to proceed.");
    console.log("DOB is not valid (less than 12 years old).");
  }
});


const user_name = document.getElementById("username");

const user_name_s=""
user_name.addEventListener('input', function() {
   user_name_s=document.getElementById("username").value;
  const user_list = JSON.parse(localStorage.getItem("user_list"));
  const user_name_l = document.getElementById("user_name_l");
  const user_validation = document.getElementById("user_validation");

  const searchQuery = user_name.value;

  if (searchQuery.length >= 6 && searchQuery.length <= 12) {
    const find_user = user_list.filter(item => item.user_name === searchQuery);

    if (find_user.length > 0) {
      user_validation.style.display = "block";
      user_name_l.style.display = "none";
    } else {
      user_validation.style.display = "none";
      user_name_l.style.display = "none";
    }
  } else {
    user_name_l.style.display = "block";
    user_validation.style.display = "none";
  }

});


const passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", function() {
  const password = passwordInput.value;
  const passwordValidation = document.getElementById("password_validation");

  // Regex pattern to check for at least one number, one uppercase letter, one lowercase letter, and minimum length of 8 characters
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (passwordPattern.test(password)) {
    passwordValidation.style.color = "green";
  } else {
    passwordValidation.style.color = "red";
  }
});





function signUp(e) {
    e.preventDefault();
    const first_name = document.getElementById("firstname").value;
    const last_name = document.getElementById("lastname").value;
    const user_name = user_name_s;
   const dob=userDOB.value;
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


  


  