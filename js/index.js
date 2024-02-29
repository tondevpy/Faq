let btnOpen = document.querySelectorAll('.open');
let btnClosed = document.querySelectorAll('.closed');
let faqContent = document.querySelectorAll('.faqContent');


btnOpen.forEach((element, index) => {
  element.style.display = 'block';
    element.addEventListener('click', () => {
        
        element.style.display = 'none';
        
        btnClosed[index].style.display = 'block';
        
        faqContent[index].style.display = 'block';
    });
});

btnClosed.forEach((element, index) => {
    element.addEventListener('click', () => {
        
        element.style.display = 'none';
        
        btnOpen[index].style.display = 'block';
        
        faqContent[index].style.display = 'none';
    });
});
