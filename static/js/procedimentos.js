// JavaScript para adicionar funcionalidade de ampliação de imagem quando clicada
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', function() {
            window.open(this.src, '_blank');
        });
    });
});
