
const colorShow = document.getElementById('color-code');
const getColor = () => {
  //Hex Code
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  console.log(randomNumber, randomCode);
  document.body.style.backgroundColor = randomCode;
  colorShow.innerHTML = randomCode;
}

document.getElementById('btn').addEventListener('click', getColor);

// setInterval(getColor, 1000);