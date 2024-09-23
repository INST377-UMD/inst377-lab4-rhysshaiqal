// Alert Me Section
document.getElementById("alertForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    if (name) {
        alert(`Hi ${name}!`);
    }
});

// Change Color Section
let isBlue = true;
document.getElementById("changeColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = isBlue ? "green" : "blue";
    isBlue = !isBlue;
});

// Text Tester Section
document.getElementById("textTesterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const text = document.getElementById("textInput").value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?]+/;
    if (validation.test(text)) {
        alert("Text contains special characters!");
    } else {
        alert("Text is valid!");
    }
});

// Add Text Section
document.getElementById("addTextBtn").addEventListener("click", function() {
    const title = document.getElementById("page-title");
    title.textContent += " Add Text";
});
