export function modalPopUp(){
    //Modal pop up script starts here
const modal = document.getElementsByClassName('js-modal')[0];
const infoButton = document.getElementsByClassName('js-info-btn')[0];
const closeButton = document.getElementsByClassName('js-close-info-btn')[0];
const subHeader = document.getElementsByClassName('js-sub-header')[0];

infoButton.onclick = () => {
  subHeader.innerHTML = 'by sOmfy';
  modal.style.display = 'block';
}

closeButton.onclick = () => {
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
}