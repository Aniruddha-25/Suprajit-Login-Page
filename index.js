document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const user_id = document.getElementById("user_id").value;
    const password = document.getElementById("password").value;

    const userId_data = {
      admin: 0,
      admin12: 1,
      admin23: 2,
      admin24: 3,
      a:4
    };

    const password_data = ["admin", "admin12", "admin23", "admin24"];
    let condition1 = userId_data[user_id];

    if (condition1 != null && password_data[condition1] == password) {
      window.location.href = "https://www.youtube.com/";
    } else {
      alert("Invalid User ID or Password");
    }

  });
