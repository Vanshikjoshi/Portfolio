const form = document.getElementById("ContactForm");
const thankYouMsg = document.getElementById("thankYouMsg");
const mobileInput = document.getElementById("num");
const mobileError = document.getElementById("mobileError");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent actual form submission

  const mobileValue = mobileInput.value.trim();

  // Validate mobile number
  if (mobileValue.length !== 10 || !/^\d{10}$/.test(mobileValue)) {
    mobileError.style.display = "inline"; // show error
    return; // stop here if invalid
  } else {
    mobileError.style.display = "none"; // hide error if valid
  }

  form.reset(); // reset form fields

  // Show thank you message
  thankYouMsg.style.display = "block";
  thankYouMsg.style.opacity = 1;

  // Hide the message and scroll to home after 1.2 seconds
  setTimeout(() => {
    thankYouMsg.style.opacity = 0; // fade out

    setTimeout(() => {
      thankYouMsg.style.display = "none";
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    }, 500); // fade out duration
  }, 1200); // message display duration
});
// Show thank-you message
thankYouMsg.classList.add("show");
thankYouMsg.classList.remove("hide");

// Hide after 1.2 seconds
setTimeout(() => {
  thankYouMsg.classList.remove("show");
  thankYouMsg.classList.add("hide");

  // Scroll to home after fade
  setTimeout(() => {
    form.reset();
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  }, 500);
}, 1200);

// Optional: hide error as user types
mobileInput.addEventListener("input", () => {
  const val = mobileInput.value.trim();
  if (/^\d{0,10}$/.test(val)) {
    mobileError.style.display = "none";
    mobileInput.classList.remove("invalid");
  }
});
// Typing effect
const text = "Vanshika Joshi";
const typingSpan = document.querySelector(".typing");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingSpan.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.addEventListener("load", typeEffect);

