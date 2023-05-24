document.getElementById("addNumber").addEventListener("click", () => {
  let number = document.getElementById("number").value;
  if (number !== "") {
    let numbers = localStorage.getItem("numbers");
    numbers = numbers ? JSON.parse(numbers) : [];
    numbers.push(parseFloat(number));
    localStorage.setItem("numbers", JSON.stringify(numbers));
    document.getElementById("number").value = "";
  }
});

document.getElementById("calculate").addEventListener("click", () => {
  let numbers = localStorage.getItem("numbers");
  if (numbers) {
    numbers = JSON.parse(numbers);
    let maxNumber = Math.max.apply(null, numbers);
    document.getElementById(
      "result"
    ).innerHTML = `The largest number is ${maxNumber}`;
  }
});
