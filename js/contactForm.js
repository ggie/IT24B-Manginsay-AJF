class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.messageInput = document.getElementById('message');
    }

    validateForm() {
        return this.nameInput.value && this.emailInput.value && this.messageInput.value;
    }

    resetForm() {
        this.form.reset();
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if (this.validateForm()) {
            alert('Thank you for reaching out! We will get back to you soon.');
            this.resetForm();
        } else {
            alert('Please fill in all fields.');
        }
    }
}
