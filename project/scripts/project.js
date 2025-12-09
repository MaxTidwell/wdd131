document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const armorStyles = [
    { name: "Chainmail", description: "Flexible rings linked together, lightweight defense popular from the 11th to 13th centuries.", image: "chainmail.webp" },
    { name: "Plate Armor", description: "Heavy steel plates covering the body, designed to deflect blows and arrows, dominant in the 15th century.", image: "plate.webp"},
    { name: "Brigandine", description: "Cloth or leather garments reinforced with small metal plates.", image: "brigandine.webp"},
    { name: "Scale Armor", description: "Overlapping scales sewn onto fabric or leather, resembling fish scales and providing layered protection.", image: "scale.webp"},
    { name: "Lamellar", description: "Rectangular plates laced together, used across Europe and Asia for its adaptability.", image: "lamellar.webp"},
    { name: "Gambeson", description: "A padded defensive jacket worn alone or beneath other armor, absorbing shock and preventing chafing.", image: "gambeson.webp" }
];

// Render armor cards
function renderArmorCards() {
    const grid = document.querySelector(".armor-grid");
    if (!grid) return; 

    grid.innerHTML = ""; 

    armorStyles.forEach(style => {
        const card = document.createElement("div");
        card.className = "armor-card";
        card.innerHTML = `
        <img src="images/${style.image}" alt="${style.name}" loading="lazy">
        <h3>${style.name}</h3>
        <p>${style.description}</p>
        `;
        grid.appendChild(card);
    });
}


// Handle form
function handleForm() {
    const form = document.querySelector("#armorForm");
    if (!form) return;

    form.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.querySelector("#armorName").value.trim();
        const desc = document.querySelector("#armorDesc").value.trim();
        const image = document.querySelector("#armorImage").value.trim();

        if (!name || !desc) {
            alert("Please fill in all required fields.");
            return;
        }

        // Build new armor object
        const newArmor = { name, description: desc, image };

        // Save to localStorage
        let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
        submissions.push(newArmor);
        localStorage.setItem("submissions", JSON.stringify(submissions));

        // Reset form
        form.reset();

        // Refresh list
        showSubmissions();
    });
}

// Display submitted styles
function showSubmissions() {
    const list = document.querySelector("#submittedList");
    if (!list) return;

    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    list.innerHTML = submissions.map(item => `
        <li>
            <strong>${item.name}</strong>: ${item.description}
            ${item.image ? `<br><img src="${item.image}" alt="${item.name}" loading="lazy" style="max-width:200px;">` : ""}
        </li>
    `).join("");
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderArmorCards();
  handleForm();
  showSubmissions();
});