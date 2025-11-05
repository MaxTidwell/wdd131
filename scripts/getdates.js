
//const full = document.querySelector("#full");
//const currentYear = document.querySelector("#year");

//const today = new Date();

//full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
//"en-US", {dateStyle: "full"} ).format(today)}</span>`;

//year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;





document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;








// Get the current year
// const currentYear = new Date().getFullYear();

// Get the last modified date of the document
// const lastModified = document.lastModified;

// Insert current year into the first paragraph in the footer
// document.querySelector("footer p:nth-of-type(1)").textContent = `© ${currentYear}`;

// Insert last modified date into the second paragraph in the footer
// document.querySelector("footer p:nth-of-type(2)").textContent = `Last modified: ${lastModified}`;
