const intervalId = setInterval(() => {
  console.log("loading analytics...");
}, 2000);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
