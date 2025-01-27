const newsSection = document.getElementById("newsSection");
const clickerSection = document.getElementById("clickerSection");
const leaderboardSection = document.getElementById("leaderboardSection");

const newsTab = document.getElementById("newsTab");
const clickerTab = document.getElementById("clickerTab");
const leaderboardTab = document.getElementById("leaderboardTab");

const sections = {
  news: newsSection,
  clicker: clickerSection,
  leaderboard: leaderboardSection,
};
const tabs = {
  news: newsTab,
  clicker: clickerTab,
  leaderboard: leaderboardTab,
};

Object.keys(tabs).forEach((key) => {
  tabs[key].addEventListener("click", () => {
    Object.values(sections).forEach(
      (section) => (section.style.display = "none")
    );
    Object.values(tabs).forEach((tab) => tab.classList.remove("active"));

    sections[key].style.display = "block";
    tabs[key].classList.add("active");
  });
});

const tree = document.getElementById("tree");
const scoreDisplay = document.getElementById("scoreDisplay");
let score = parseInt(localStorage.getItem("score")) || 0;

scoreDisplay.textContent = `Score: ${score}`;

tree.addEventListener("click", () => {
  score++;
  localStorage.setItem("score", score);
  scoreDisplay.textContent = `Score: ${score}`;

  const leaf = document.createElement("div");
  leaf.className = "leaf";
  leaf.style.left = `${Math.random() * 80 + 10}%`;
  document.querySelector(".tree-container").appendChild(leaf);

  setTimeout(() => leaf.remove(), 2000);
});
