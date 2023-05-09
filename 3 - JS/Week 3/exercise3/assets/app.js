const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const convertText = () => {
  const inputText = document.getElementById("convert-box").value;
  const result = toTitleCase(inputText);
  document.getElementById("output").innerText = result;
};
