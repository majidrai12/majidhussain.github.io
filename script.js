const text = "Web Development 💻";
let i = 0;
const speed = 100;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("passion").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
