const stages = [
  document.querySelector("#stageQuestion"),
  document.querySelector("#stageWhy"),
  document.querySelector("#stageFinish"),
  document.querySelector("#stageNo"),
];

function showStage(index) {
  stages.forEach((stage, i) => stage.classList.toggle("is-active", i === index));
}

document.querySelector("#yesButton").addEventListener("click", () => {
  const photo = document.querySelector(".hero-photo");
  photo.src = "photo1.jpg.jpeg";
  photo.alt = "عکس مرحلهٔ آشتی";
  showStage(1);
});
document.querySelector("#whyButton").addEventListener("click", () => {
  const photo = document.querySelector(".hero-photo");
  photo.src = "photo2.jpg.png";
  photo.alt = "عکس مرحلهٔ آخر";
  showStage(2);
});
document.querySelector("#noButton").addEventListener("click", () => {
  const photo = document.querySelector(".hero-photo");
  photo.src = "photo3.jpg.jpg";
  photo.alt = "عکس پاسخ نه";
  showStage(3);
});
