const btn = document.querySelector(".off");

function toggle_btn() {
  if (btn.textContent.includes("off")) {
    btn.textContent = "Machine is on";
  } else if (btn.textContent.includes("on")) {
    btn.textContent = "Machine is off";
  }
}

btn.addEventListener("click", toggle_btn);
