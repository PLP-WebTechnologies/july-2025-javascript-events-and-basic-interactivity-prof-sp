// Event: Update slider value in real-time
const slider = document.getElementById("intensitySlider");
const sliderValue = document.getElementById("sliderValue");

slider.addEventListener("input", () => {
  sliderValue.textContent = slider.value;
});

// Event: Toggle flavor description visibility
const toggleBtn = document.getElementById("toggleBtn");
const description = document.getElementById("description");

toggleBtn.addEventListener("click", () => {
  const isVisible = description.style.display === "block";
  description.style.display = isVisible ? "none" : "block";
  toggleBtn.textContent = isVisible ? "Show Description" : "Hide Description";
});

// Event: Custom form validation and submission handling
const form = document.getElementById("flavorForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  const flavorName = document.getElementById("flavorName").value.trim();
  const intensity = document.getElementById("intensity").value;

  // Custom validation logic
  if (flavorName === "") {
    message.textContent = "Flavor name cannot be empty.";
    message.style.color = "red";
    return;
  }

  if (intensity < 1 || intensity > 10) {
    message.textContent = "Intensity must be between 1 and 10.";
    message.style.color = "red";
    return;
  }

  // Success message
  message.textContent = `Flavor "${flavorName}" with intensity ${intensity} submitted!`;
  message.style.color = "green";

  // Reset form
  form.reset();
  slider.value = 5;
  sliderValue.textContent = "5";
});