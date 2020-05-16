let progressValue = 0;
const progress = document.querySelector("#progress");
const titlePercent = document.createElement("span");

function setProgressValue(value) {
  console.log("Calling interval");
  progressValue = progressValue + value;
  progress.style.width = `${progressValue}%`;
}

document.addEventListener("goalLoad", function (obj) {
  console.log(obj.detail);
  const initialPercent =
    (obj.detail.amount.current / obj.detail.amount.target) * 100;
  titlePercent.html = initialPercent;
  document.querySelector("#title").innerText = obj.detail.title;
  document.querySelector("#title-percent").innerText = `${initialPercent}%`;
  setTimeout(() => {
    setProgressValue(initialPercent);
  }, 1000);
});

document.addEventListener("goalEvent", function (obj) {
  console.log(obj.detail);
  $("#goal-current").text(obj.detail.amount.current);
  const initialPercent =
    (obj.detail.amount.current / obj.detail.amount.target) * 100;
  setProgressValue(initialPercent);
});
