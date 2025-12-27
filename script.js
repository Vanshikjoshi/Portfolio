const form = document.getElementById("ContactForm");
const thankYouMsg = document.getElementById("thankYouMsg");
const mobileInput = document.getElementById("num");
const mobileError = document.getElementById("mobileError");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  const mobileValue = mobileInput.value.trim();

  if (mobileValue.length !== 10 || !/^\d{10}$/.test(mobileValue)) {
    mobileError.style.display = "inline"; 
    return; 
  } else {
    mobileError.style.display = "none"; 
  }

  form.reset(); 
  thankYouMsg.style.display = "block";
  thankYouMsg.style.opacity = 1;

  
  setTimeout(() => {
    thankYouMsg.style.opacity = 0;

    setTimeout(() => {
      thankYouMsg.style.display = "none";
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    }, 500); 
  }, 1200); 
});

thankYouMsg.classList.add("show");
thankYouMsg.classList.remove("hide");


setTimeout(() => {
  thankYouMsg.classList.remove("show");
  thankYouMsg.classList.add("hide");

  
  setTimeout(() => {
    form.reset();
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  }, 500);
}, 1200);

mobileInput.addEventListener("input", () => {
  const val = mobileInput.value.trim();
  if (/^\d{0,10}$/.test(val)) {
    mobileError.style.display = "none";
    mobileInput.classList.remove("invalid");
  }
});

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

