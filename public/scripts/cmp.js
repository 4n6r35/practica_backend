(function dialogFrom() {
    var add_button = document.getElementById('btn_agregar');
    var cancelButton = document.getElementById('cancel');
    var favDialog = document.getElementById('dialogFrom');

    // Update button opens a modal dialog
    add_button.addEventListener('click', function () {
        favDialog.showModal();
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener('click', function () {
        favDialog.close();
    });

})()