// nav bar for top navigation in mobile to desktop

const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
};

// news ticker
document.addEventListener("DOMContentLoaded", function () {
    const newsDiv = document.querySelector(".news");
    let newsItems = [];
    let currentIndex = 0;

    // Fetch the news items from news.txt
    fetch("news.txt")
        .then(response => response.text())
        .then(text => {
            newsItems = text.split("\n").filter(line => line.trim() !== "");
            if (newsItems.length > 0) {
                startNewsTicker();
            }
        })
        .catch(error => console.error("Error loading news:", error));

    function startNewsTicker() {
        if (newsItems.length === 0) return;

        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.textContent = newsItems[currentIndex];
        newsDiv.innerHTML = "";
        newsDiv.appendChild(newsItem);

        const newsContainerWidth = document.querySelector(".news-container").offsetWidth;
        const textWidth = newsItem.offsetWidth;

        // Set initial position outside the right side
        newsItem.style.transform = `translateX(${newsContainerWidth}px)`;

        // Calculate animation duration based on text length (longer text scrolls slower)
        const speed = Math.max(5, textWidth / 100) * 2; // Adjust timing factor as needed

        // Apply animation
        newsItem.style.transition = `transform ${speed}s linear`;
        requestAnimationFrame(() => {
            newsItem.style.transform = `translateX(-${textWidth}px)`;
        });

        // Move to the next news item after animation completes
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % newsItems.length;
            startNewsTicker();
        }, speed * 1000);
    }
});
