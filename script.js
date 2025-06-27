const spacingInput = document.getElementById('spacing');
const spacingValue = document.getElementById('spacing-output');
const blurInput = document.getElementById('blur');
const blurValue = document.getElementById('blur-output');

const inputs = document.querySelectorAll('.container input');

spacingValue.textContent = spacingInput.value;
blurValue.textContent = blurInput.value;

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
