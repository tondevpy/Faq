// Adiciona um evento de clique a cada botão "open"
btnOpen.forEach((element, index) => {
  element.style.display = 'block';
  element.addEventListener('click', () => {
    faqContent[index].style.display = 'block';
  });
});
