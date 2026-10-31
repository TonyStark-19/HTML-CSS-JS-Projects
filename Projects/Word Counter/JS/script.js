const textInput = document.querySelector('#text-input');
const wordCount = document.querySelector('#word-count');
const characterCount = document.querySelector('#character-count');
const noSpaceCount = document.querySelector('#character-no-space-count');
const clearButton = document.querySelector('#clear-button');

function updateCounts() {
  const text = textInput.value;
  const words = text.trim();

  wordCount.textContent = words ? words.split(/\s+/u).length : 0;
  characterCount.textContent = Array.from(text).length;
  noSpaceCount.textContent = Array.from(text.replace(/\s/gu, '')).length;
}

textInput.addEventListener('input', updateCounts);
clearButton.addEventListener('click', () => {
  textInput.value = '';
  updateCounts();
  textInput.focus();
});

updateCounts();
