// Inheritance
class TeamDataFetcher extends DataFetcher {
    constructor(url) {
        super(url); // Inheriting 
    }

    async loadTeam() {
        const data = await this.fetchData(); // Using inherited method 
        const teamContainer = document.getElementById('team');
        
        // Encapsulation
        data.team.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = "col-md-4 text-center p-3";

            memberCard.innerHTML = `
                <div class="card h-100">
                    <img src="${member.image}" class="card-img-top" alt="${member.name}">
                    <div class="card-body">
                        <h5 class="card-title">${member.name}</h5>
                        <p><strong>${member.role}</strong></p>
                        <p>${member.bio}</p>
                    </div>
                </div>
            `;
            teamContainer.appendChild(memberCard);
        });
    }
}
