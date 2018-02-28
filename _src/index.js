// CSS and SASS files
import './index.scss';

(function() {
  var updateButton = document.getElementById('updateDetails');
  var cancelButton = document.getElementById('cancel');

  // Update button opens a modal dialog
  updateButton.addEventListener('click', function() {
    document.getElementById('favDialog').showModal();
    document.getElementById('favDialog').classList.add('dialog-scale');
  });

  // Bouton pour fermer la boîte de dialogue
  cancelButton.addEventListener('click', function() {
    document.getElementById('favDialog').close();
    document.getElementById('favDialog').classList.remove('dialog-scale');
  });

})();
