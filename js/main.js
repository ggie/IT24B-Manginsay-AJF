document.addEventListener('DOMContentLoaded', () => {
    const teamFetcher = new TeamDataFetcher('js/data.json');
    teamFetcher.loadTeam();

    const serviceFetcher = new ServiceDataFetcher('js/data.json');
    serviceFetcher.loadServices();

    const contactForm = new ContactForm('contact-form');
    contactForm.form.addEventListener('submit', (event) => contactForm.handleSubmit(event));
});
