function toggleContent(button) {
    const extraContent = button.closest('article').querySelector('.extra-content'); // Seleciona o próximo elemento (o conteúdo extra)
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block"; // Mostra o conteúdo extra
    } else {
        extraContent.style.display = "none"; // Esconde o conteúdo extra
    }
}

