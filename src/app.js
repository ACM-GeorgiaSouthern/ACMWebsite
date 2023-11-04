fetch("header.html")
.then(response => response.text())
.then(headerContent => {
    document.getElementById("header").innerHTML = headerContent;
});
