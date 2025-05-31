document.getElementById("theme-toggle").onclick = function () {
  document.body.classList.toggle("dark");
};
function copyCode(btn) {
  const code = btn.closest('div').querySelector('code').innerText;
  navigator.clipboard.writeText(code);
  btn.textContent = 'Copied!';
  setTimeout(() => (btn.textContent = 'Copy'), 1500);
}