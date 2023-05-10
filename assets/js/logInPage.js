function signIn(e) {
  e.preventDefault();
  const user_name = document.getElementById("user_name").value;
  const password = document.getElementById("password").value;
  const user_list = JSON.parse(localStorage.getItem("user_list")) || [];

  const exist =
    user_list.length &&
    JSON.parse(localStorage.getItem("user_list")).some(
      (data) => data.user_name == user_name && data.password == password
    );

          console.log(user_name, password);
          console.log(exist);

  if (!exist) {
            alert("Incorrect login credentials");
            document.querySelector("form").reset();
  } else {
            localStorage.setItem("user_id", JSON.stringify(user_name));
            alert("Your login in successful");
            location.href = "./pages/home.html";
  }
}