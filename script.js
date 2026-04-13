document.addEventListener("DOMContentLoaded", () => {

  // =============================
  // SCROLL ANIMATIONS (PRO)
  // =============================
  const elements = document.querySelectorAll(".card, .review, .cta, .preview");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });

  // =============================
  // BUTTON CLICK EFFECT (SMOOTH)
  // =============================
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.style.transform = "scale(0.95)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 150);
    });
  });

  // =============================
  // FLOATING BUTTON (SUAVE)
  // =============================
  const floatingBtn = document.querySelector(".floating-btn");

  if (floatingBtn) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      floatingBtn.style.transform = `translateY(${scrollY * 0.05}px)`;
    });
  }

});
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // RESET
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  name.classList.remove("error-input", "success");
  email.classList.remove("error-input", "success");
  password.classList.remove("error-input", "success");

  // NAME VALIDATION
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    name.classList.add("error-input");
    isValid = false;
  } else {
    name.classList.add("success");
  }

  // EMAIL VALIDATION
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    email.classList.add("error-input");
    isValid = false;
  } else {
    email.classList.add("success");
  }

  // PASSWORD VALIDATION
  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    password.classList.add("error-input");
    isValid = false;
  } else {
    password.classList.add("success");
  }

  // SUCCESS
  if (isValid) {
    alert("Account created successfully! Welcome to Vitaal!");

    form.reset();

    name.classList.remove("success");
    email.classList.remove("success");
    password.classList.remove("success");
  }
});
