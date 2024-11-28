// Dynamically load services from JSON
document.addEventListener("DOMContentLoaded", () => {
    const servicesContainer = document.getElementById("services");

    if (servicesContainer) {
        fetch("js/data.json")
            .then(response => response.json())
            .then(data => {
                data.services.forEach(service => {
                    const serviceCard = document.createElement("div");
                    serviceCard.className = "col-md-4 text-center p-3";

                    serviceCard.innerHTML = `
                        <div class="card h-100">
                            <div class="card-body">
                                <h3>${service.icon}</h3>
                                <h5>${service.title}</h5>
                                <p>${service.description}</p>
                            </div>
                        </div>
                    `;

                    servicesContainer.appendChild(serviceCard);
                });
            })
            .catch(error => console.error("Error loading services:", error));
    }
});
