'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    
    let isValid = true;

    // Validate Name
    const nameInput = document.getElementById("name");
    if (nameInput.value.trim() === "") {
      isValid = false;
      alert("Name is required.");
      nameInput.focus();
      return;
    }

    // Validate Email
    const emailInput = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      isValid = false;
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    // Validate Message
    const messageInput = document.getElementById("message");
    if (messageInput.value.trim() === "") {
      isValid = false;
      alert("Message is required.");
      messageInput.focus();
      return;
    }

    // If the form is valid, show a success message and redirect
    if (isValid) {
      alert("Contact form submitted successfully!");
      window.location.href = "index.html"; // Redirect to index.html
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Handle Login Form Submission
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Validate Email
    const emailInput = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      isValid = false;
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    // Validate Password
    const passwordInput = document.getElementById("password");
    if (passwordInput.value.trim() === "") {
      isValid = false;
      alert("Password is required.");
      passwordInput.focus();
      return;
    }

    // If the form is valid, show a success message and redirect
    if (isValid) {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to index.html
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Handle Register Form Submission
  const registerForm = document.querySelector(".register-form");

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Validate Name
    const nameInput = document.getElementById("name");
    if (nameInput.value.trim() === "") {
      isValid = false;
      alert("Name is required.");
      nameInput.focus();
      return;
    }

    // Validate Surname
    const surnameInput = document.getElementById("surname");
    if (surnameInput.value.trim() === "") {
      isValid = false;
      alert("Surname is required.");
      surnameInput.focus();
      return;
    }

    // Validate Email
    const emailInput = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      isValid = false;
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    // Validate Password
    const passwordInput = document.querySelectorAll("#password")[0];
    const confirmPasswordInput = document.querySelectorAll("#password")[1];

    if (passwordInput.value.trim() === "") {
      isValid = false;
      alert("Password is required.");
      passwordInput.focus();
      return;
    }

    // Validate Password Match
    if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
      isValid = false;
      alert("Passwords do not match. Please re-enter your passwords.");
      confirmPasswordInput.focus();
      return;
    }

    // If the form is valid, show a success message and redirect
    if (isValid) {
      alert("Registration successful!");
      window.location.href = "index.html"; // Redirect to index.html
    }
  });
});



