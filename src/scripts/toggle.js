export function toggleFunction(){
    const emToPx = 16;
    const faqs = document.querySelectorAll('.js-faq');
    for (let i = 0; i < faqs.length; i++) {
      faqs[i].addEventListener('click', function () {
        const current = this;
        const content = current.querySelector('.js-faq-content')
        for (let i = 0; i < faqs.length; i++) {
          if (current != faqs[i]) {
            faqs[i].classList.remove('active');
            faqs[i].querySelector('.js-faq-content').style.maxHeight = null;
          } else if (current.classList.contains('active') === true) {
            current.classList.remove('active');
            content.style.maxHeight = null;
          } else {
            current.classList.add('active')
            content.style.maxHeight = `${content.scrollHeight / emToPx}em`;
          }
        }
      });
    };
}