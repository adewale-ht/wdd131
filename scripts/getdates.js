
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    const modified = document.lastModified;
    lastModified.textContent = `Last modified: ${modified}`;
});
