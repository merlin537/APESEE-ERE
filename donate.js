const slider = document.getElementById("amountSlider");
const amountValue = document.getElementById("amountValue");
const feeDisplay = document.getElementById("feeDisplay");

slider.addEventListener("input", () => {
  amountValue.textContent = slider.value;
  feeDisplay.textContent = "$" + (slider.value * 0.05).toFixed(2); // 5% fee
});

document.querySelectorAll(".type-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
