const input = document.getElementById("input");
const btn = document.getElementById("generate");
const qrContainer = document.getElementById("qrcode");
const downloadBtn = document.getElementById("download");

btn.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter text or a URL");
    return;
  }

  qrContainer.innerHTML = ""; // Clear old QR

  new QRCode(qrContainer, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Wait a moment for the image to load
  setTimeout(() => {
    const image = qrContainer.querySelector("img");
    if (image) {
      downloadBtn.style.display = "block"; // Show download button
    }
  }, 100); // 100ms delay to ensure image is inserted
});

downloadBtn.addEventListener("click", () => {
  const image = qrContainer.querySelector("img");
  if (image) {
    let link = document.createElement("a");
    link.href = image.src;
    link.download = "QR-Code.png";
    link.click();
  } else {
    alert("Please Generate a QR Code First");
  }
});
