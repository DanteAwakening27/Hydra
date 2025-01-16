document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".acordion-slide");
  let currentSlideIndex = 0;

  function updateBackgroundImage() {
    const body = document.body;
    const slideImage = slides[currentSlideIndex].querySelector(
      ".accordion-slide-images img"
    );
    if (slideImage) {
      body.style.setProperty("--background-image", `url(${slideImage.src})`);
    }
  }

  function autoSlide() {
    // Remove active class from all slides
    slides.forEach((slide) => slide.classList.remove("active-acardion"));

    // Add active class to the current slide
    slides[currentSlideIndex].classList.add("active-acardion");

    // Update background image
    updateBackgroundImage();

    // Increment the slide index
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  }

  // Initialize background image
  updateBackgroundImage();

  // Start auto-slide
  setInterval(autoSlide, 10000);
});

const nav = document.querySelector(".header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    nav.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !nav.classList.contains("scroll-down")) {
    nav.classList.remove("scroll-up");
    nav.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    nav.classList.contains("scroll-down")
  ) {
    nav.classList.remove("scroll-down");
    nav.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
  // Toggle dark mode classes
  body.classList.toggle("dark-mode");
  themeToggle.classList.toggle("dark-mode");

  // Save theme preference
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

document.addEventListener("DOMContentLoaded", () => {
  // Arrays for rotating words
  const words1 = [
    "دنیای گیمینگ",
    "بازی‌های ویدیویی",
    "کنسول‌های بازی",
    "بازی‌های کامپیوتری",
    "تورنمنت‌های گیمینگ",
    "گیمر حرفه‌ای",
    "بازی‌های آنلاین",
    "پلتفرم استریم",
    "گرافیک بازی",
    "کنترلر بازی",
    "بازی‌های واقعیت مجازی",
    "موسیقی بازی",
    "ژانرهای گیمینگ",
    "شخصیت‌های بازی",
    "داستان بازی",
    "محیط‌های بازی",
    "چالش‌های بازی",
    "بازی‌های موبایل",
    "آپدیت بازی‌ها",
    "دنیای چندنفره"
  ];
  
  const words2 = [
    "بازی‌های ویدیویی",
    "دنیای گیمینگ",
    "بازی‌های آنلاین",
    "تورنمنت‌های گیمینگ",
    "گرافیک بازی",
    "کنسول‌های بازی",
    "شخصیت‌های بازی",
    "داستان بازی",
    "چالش‌های بازی",
    "گیمر حرفه‌ای",
    "ژانرهای گیمینگ",
    "پلتفرم استریم",
    "کنترلر بازی",
    "محیط‌های بازی",
    "بازی‌های موبایل",
    "موسیقی بازی",
    "آپدیت بازی‌ها",
    "بازی‌های واقعیت مجازی",
    "دنیای چندنفره",
    "بازی‌های کامپیوتری"
  ];  

  // Elements to update
  const animatedWord1 = document.getElementById("animated-word-1");
  const animatedWord2 = document.getElementById("animated-word-2");

  // Initial indices
  let wordIndex1 = 0;
  let wordIndex2 = 0;

  // Set intervals for independent animations
  setInterval(() => {
    wordIndex1 = (wordIndex1 + 1) % words1.length;
    animatedWord1.textContent = words1[wordIndex1];
  }, 3000);

  setInterval(() => {
    wordIndex2 = (wordIndex2 + 1) % words2.length;
    animatedWord2.textContent = words2[wordIndex2];
  }, 3000);
});

// Add this to your script.js file
document.addEventListener("DOMContentLoaded", function () {
  const chatbotToggle = document.querySelector(".chatbot-toggle");
  const chatbotContainer = document.querySelector(".chatbot-container");
  const closeChat = document.querySelector(".close-chat");
  const chatInput = document.querySelector(".chatbot-input input");
  const chatSubmit = document.querySelector(".chatbot-input button");
  const chatMessages = document.querySelector(".chatbot-messages");

  // Toggle chatbot
  chatbotToggle.addEventListener("click", () => {
    chatbotContainer.classList.add("active");
  });

  closeChat.addEventListener("click", () => {
    chatbotContainer.classList.remove("active");
  });

  // Handle chat submission
  function handleChatSubmit() {
    const message = chatInput.value.trim();
    if (message) {
      // Add user message
      const userMessage = document.createElement("div");
      userMessage.className = "chat-message user-message";
      userMessage.textContent = message;
      chatMessages.appendChild(userMessage);

      // Clear input
      chatInput.value = "";

      // Simulate bot response (replace with actual chatbot logic)
      setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "chat-message bot-message";
        botMessage.textContent =
          "این یک پاسخ خودکار است. لطفاً با پشتیبانی تماس بگیرید.";
        chatMessages.appendChild(botMessage);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
    }
  }

  chatSubmit.addEventListener("click", handleChatSubmit);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleChatSubmit();
    }
  });
});
