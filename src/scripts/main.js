document.addEventListener('DOMContentLoaded', () => {
    console.log('js is processed');
})

var faqs = document.querySelectorAll('.js-faq');
for (var i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", function(e) {
    var current = this;
    var content = current.querySelector('.js-faq-content')
    for (var i = 0; i < faqs.length; i++) {
        if (current != faqs[i]) {
        faqs[i].classList.remove('active');
        faqs[i].querySelector('.js-faq-content').style.maxHeight = null;
        } else if (current.classList.contains('active') === true) {
        current.classList.remove('active');
        content.style.maxHeight = null;
        } else {
        current.classList.add('active')
        content.style.maxHeight = content.scrollHeight + "px";
        }
    }
    e.preventDefault();
    });
}; 
