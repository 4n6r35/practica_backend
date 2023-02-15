function dialogFromSignUp() {
    var add_button = document.getElementById('btnsignUp');
    var cancelButton = document.getElementById('exit');
    var favDialog = document.getElementById('dialogFromUp');

    // Update button opens a modal dialog
    add_button.addEventListener('click', function () {
        
        favDialog.showModal();
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener('click', function () {
        favDialog.close();
    });

}