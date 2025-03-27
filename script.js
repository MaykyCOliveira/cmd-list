function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}
function searchCommands() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        let text = section.innerText.toLowerCase();
        section.style.display = text.includes(input) ? "block" : "none";
    });
}