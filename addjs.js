document.getElementById("search").addEventListener("input", function(e) {
    const query = e.target.value.toLowerCase();
    const gameTitles = document.querySelectorAll(".rgames-1 div h1");

    gameTitles.forEach((title) => {
        const gameTile = title.parentElement;
        const gameName = title.textContent.toLowerCase();

        if (gameName.includes(query)) {
            gameTile.style.display = "flex"; // Show the game tile
        } else {
            gameTile.style.display = "none"; // Hide the game tile
        }
    });
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const gameTiles = document.querySelectorAll('.rgames-1 div');
gameTiles.forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        tile.style.transform = 'scale(1.1)';
        tile.style.transition = 'transform 0.3s ease-in-out';
    });

    tile.addEventListener('mouseleave', () => {
        tile.style.transform = 'scale(1)';
    });
});

window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const scrollPosition = window.scrollY + window.innerHeight;

    elements.forEach((element) => {
        if (element.offsetTop < scrollPosition) {
            element.classList.add('visible');
        }
    });
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
