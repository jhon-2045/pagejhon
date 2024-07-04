function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Cargar el header y footer
document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header", "partials/header.html");
    loadHTML("footer", "partials/footer.html");
});