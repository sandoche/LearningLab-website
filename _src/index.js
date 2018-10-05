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
  'project idea': 'Describe the project idea',
  'project carried out': 'Project URL',
  'topic': 'Topic name'
};

modal.setContent(
  '<h2 id="modal-title"></h2>'
);

for (let i = 0; i < modalLinks.length; i++) {
  modalLinks[i].addEventListener("click", function() {
    const title = modalLinks[i].getAttribute('title');
    const modalTitle = document.getElementById('modal-title');
    const inputType = document.getElementById('form-input-type');
    const inputLabel = document.getElementById('form-input-label');
    // const inputValue = document.getElementById('form-input-value');

    modalTitle.innerHTML = 'New ' + title;
    inputType.value = title;
    inputLabel.innerHTML = inputLabels[title];
    // inputValue.placeholder = inputLabels[title];

    modalTitle.after(form);
    form.style.display = 'block';
    modal.open();
  });
}