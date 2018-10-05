// CSS and SASS files
import './index.scss';
// JS libraries
import tingle from 'tingle.js';

const modal = new tingle.modal({
  footer: false,
  stickyFooter: false,
  closeMethods: ['button'],
  closeLabel: "Close"
});

const modalLinks = document.getElementsByClassName('modal-link');
const form = document.getElementById('netlify-form');

for (let i = 0; i < modalLinks.length; i++) {
  modalLinks[i].addEventListener("click", function() {
    const title = modalLinks[i].getAttribute('title');
    modal.setContent(
      '<h2 id="modal-title">New '+ title +'</h2>'
    );
    const modalTitle = document.getElementById('modal-title');
    modalTitle.after(form);
    form.style.display = 'block';
    modal.open();
  });
}