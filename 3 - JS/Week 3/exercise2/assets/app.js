document
  .getElementById("number-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("numbers").value;
    const numbers = input.split(",").map(Number);

    const finalSum = numbers
      .filter((number) => number % 2 === 0)
      .reduce((acc, curr) => acc + curr, 0);

    document.getElementById(
      "result"
    ).innerHTML = `The sum of even numbers is: ${finalSum}`;
  });
