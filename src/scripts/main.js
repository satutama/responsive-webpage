// FAQ toggle script starts here
const emToPx = 16;
const faqs = document.querySelectorAll('.js-faq');
for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener('click', function (e) {
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
    e.preventDefault();
  });
};
// FAQ toggle script ends here


//Modal pop up script starts here
const modal = document.getElementsByClassName('js-modal')[0];
const btn = document.getElementsByClassName('js-info-btn')[0];
const span = document.getElementsByClassName('js-close')[0];
const subHeader = document.getElementsByClassName('js-sub-header')[0];

btn.onclick = () => {
  subHeader.innerHTML = 'by sOmfy';
  modal.style.display = 'block';
}

span.onclick = () => {
  subHeader.innerHTML = 'by Warning';
  modal.style.display = 'none';
}

window.onclick = (event) => {
  if (event.target == modal) {
    subHeader.innerHTML = 'by Warning';
    modal.style.display = 'none';
  }
}
//Modal pop up script starts here