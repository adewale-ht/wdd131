// Dynamic footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle hidden message (DOM interaction + conditional)
const toggleBtn = document.getElementById("toggleMessageBtn");
const messageBox = document.getElementById("messageBox");

if (toggleBtn && messageBox) {
  toggleBtn.addEventListener("click", () => {
    if (messageBox.classList.contains("hidden")) {
      messageBox.classList.remove("hidden");
    } else {
      messageBox.classList.add("hidden");
    }
  });
}

// Contact form save to localStorage (form + localStorage + object)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      message: document.getElementById("message").value.trim()
    };

    localStorage.setItem("contactData", JSON.stringify(formData));
    alert("Message saved locally! Thank you.");
    contactForm.reset();
  });
}

// Populate projects using array + template literals
const projectList = document.getElementById("projectList");

if (projectList) {
  const projects = [
    { title: "Calculator App", desc: "Basic calculator using JavaScript." },
    { title: "To-Do List", desc: "Manage tasks interactively." },
    { title: "Weather API", desc: "Fetch weather with external API." }
  ];

    projects.forEach(proj =>ts(1109)) }
