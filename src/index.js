const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const btn = document.querySelector("button");
const colorsCnt = colors.length;

function changeBackgroundColor() {
  const first = Math.floor(Math.random() * colorsCnt);
  const second = Math.floor(Math.random() * colorsCnt);
  console.log(first, second);
  document.body.style.backgroundImage = `linear-gradient(0.25turn,${colors[first]},${colors[second]})`;
}

btn.addEventListener("click", changeBackgroundColor);
