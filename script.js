// Script simples para feedback no botão
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Em breve o download do eBook será liberado!");
    });
});
