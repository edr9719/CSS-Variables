const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}

function updateSliderBackground(slider) {
  const min = slider.min || 0;
  const max = slider.max || 100;
  const value = slider.value;
  const percent = ((value - min) / (max - min)) * 100;

  slider.style.background = `linear-gradient(to right, var(--color) ${percent}%, #ccc ${percent}%)`;
}

// Select all range sliders and bind the update
const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach((slider) => {
  updateSliderBackground(slider); // initial fill
  slider.addEventListener('input', function () {
    updateSliderBackground(this);
  });
});

inputs.forEach((input) => input.addEventListener('input', handleUpdate));
