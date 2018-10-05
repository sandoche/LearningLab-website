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
const inputLabels = {
  'resource': 'Resource URL',
  'experience': 'Experience URL of blog post',
  'project idea': 'Describe the project idea'
};

modal.setContent(
  '<h2 id="modal-title"></h2>'
);

for (let i = 0; i < modalLinks.length; i++) {
  modalLinks[i].addEventListener("click", function() {
    const title = modalLinks[i].getAttribute('title');

    let modalTitle = document.getElementById('modal-title');
    let inputType = document.getElementById('form-input-type');
    let inputLabel = document.getElementById('form-input-label');
    modalTitle.innerHTML = 'Add ' + title;
    inputType.value = title;
    inputLabel.innerHTML = inputLabels[title];

    modalTitle.after(form);
    form.style.display = 'block';
    modal.open();
  });
}