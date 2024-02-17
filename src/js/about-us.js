(function () {
    const teamGrid = document.getElementById('teamGrid');
    teamGrid.members = teamMembers;

    // get the contact form and add a submit event listener
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // add the is-validated class to the form so we can apply styles
        contactForm.classList.add('is-validated');

        // check if the form is valid and abort if it isn't
        if (!contactForm.checkValidity()) {
            event.stopPropagation();
            contactForm.reportValidity();
            return;
        }

        const alert = document.getElementById('contactFormSuccessAlert');
        alert.classList.remove('hidden');

        /*
        // replace content of contactModalBody with a thank you message
        const resultContainer = document.getElementById('contactFormResultContainer');

        resultContainer.innerHTML = `
            <div class="alert alert-success" role="alert">
                Thank you for your message!
                We'll get back to you as soon as possible.
            </div>
        `;
        */
    });
})();
