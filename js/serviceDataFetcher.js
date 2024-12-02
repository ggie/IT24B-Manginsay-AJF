// Inheritance
class ServiceDataFetcher extends DataFetcher {
    constructor(url) {
        super(url); // Inheriting 
    }

    async loadServices() {
        const data = await this.fetchData(); // Using inherited method
        const servicesContainer = document.getElementById('service-list');
        
        // Encapsulation
        data.services.forEach(service => {
            const serviceCard = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${service.image}" class="card-img-top" alt="${service.title}">
                        <div class="card-body">
                            <h5 class="card-title">${service.title}</h5>
                            <p class="card-text">${service.description}</p>
                        </div>
                    </div>
                </div>
            `;
            servicesContainer.innerHTML += serviceCard;
        });
    }
}
