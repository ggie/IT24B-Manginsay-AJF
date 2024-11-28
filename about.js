fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
        const teamContainer = document.getElementById('team');
        const faqsContainer = document.getElementById('faqs');

        data.team.forEach(member => {
            const memberCard = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${member.image}" class="card-img-top" alt="${member.name}">
                        <div class="card-body">
                            <h5 class="card-title">${member.name}</h5>
                            <p class="card-text"><strong>${member.role}</strong></p>
                            <p>${member.bio}</p>
                        </div>
                    </div>
                </div>
            `;
            teamContainer.innerHTML += memberCard;
        });

        data.faqs.forEach(faq => {
            const faqItem = `
                <div class="faq-item">
                    <h5>${faq.question}</h5>
                    <p>${faq.answer}</p>
                </div>
            `;
            faqsContainer.innerHTML += faqItem;
        });
    });
