const fileInput = document.getElementById("file-input");
const dropzone = document.getElementById("dropzone");
const counter = document.getElementById("counter");

function updateCounter(files) {
    if (files.length === 0) {
        counter.textContent = "Nenhuma imagem adicionada";
    } else if (files.length === 1) {
        counter.textContent = "1 imagem adicionada";
    } else {
        counter.textContent = `${files.length} imagens adicionadas`;
    }
}

fileInput.addEventListener("change", () => {
    updateCounter(fileInput.files);
});

/* Drag & Drop */
dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.style.background = "rgba(255,255,255,0.25)";
});

dropzone.addEventListener("dragleave", () => {
    dropzone.style.background = "transparent";
});

dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.style.background = "transparent";

    const files = e.dataTransfer.files;
    updateCounter(files);
});
