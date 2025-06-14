document.addEventListener("DOMContentLoaded", () => {
  const text = ["Web Developer", "Mobile Developer", "Backend Engineer", "Cloud Enthusiast"];
  let i = 0;
  let j = 0;
  let currentText = '';
  let isDeleting = false;
  const typedText = document.getElementById("typed-text");

  function type() {
    if (!typedText) return;

    currentText = text[i];
    typedText.innerHTML = isDeleting
      ? currentText.substring(0, j--)
      : currentText.substring(0, j++);

    if (!isDeleting && j === currentText.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? 40 : 100);
    }
  }

  type();
});