document.addEventListener("DOMContentLoaded", (event) => {
  const generatePassword = () => {
    let length = document.getElementById("length").value,
      charset = "abcdefghijklmnopqrstuvwxyz",
      retVal = "";
    if (document.getElementById("uppercase").checked) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("numbers").checked) {
      charset += "0123456789";
    }
    if (document.getElementById("special").checked) {
      charset += "!@#$%^&*()";
    }
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("password").innerText = retVal;
  };

  document.getElementById("length").oninput = function () {
    document.getElementById("length_value").innerText = this.value;
  };

  document.querySelector("button").onclick = generatePassword;
});
