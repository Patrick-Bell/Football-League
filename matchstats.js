document.addEventListener("DOMContentLoaded", function () {


const matches = [
    {
        id: 1,
        match_number: 1,
        date: "01/01/2024",
        time: "16:00",
        condition: "Clear",
        team1_score: 0,
        team2_score: 0,
        team1: [],
        team2: [],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: [],
        motm: ""
    },
]







function renderMatches(matches) {
    const matchContainer = document.querySelector(".matches-container");

    const matchCardsHTML = matches.map(match => `
        <div class="match-card">
            <div class="match-details-container">
                <p class="matchday">Match ${match.match_number}</p>
                <i class='bx bx-calendar'>${match.date}</i>
                <i class='bx bx-football'>${match.time}</i>
                <i class='bx bx-cloud'>${match.condition}</i>
            </div>
            <div class="scores-container">
                <h2>Home Team  ${match.team1_score} - ${match.team2_score}  Away Team</h2>
            </div>
            <div class="view-stats"><i class='bx bxs-up-arrow-circle'></i>View Stats</div>
            <div class="full-stats">
                <div class="line-ups-text">Line ups</div>
                <div class="line-ups">
                    <div class="team">
                        ${match.team1.map(player => `<div class="player">${player}</div>`).join('')}
                    </div>
                    <div class="team">
                        ${match.team2.map(player => `<div class="player">${player}</div>`).join('')}
                    </div>
                </div>
                <div class="stats-text">
                    <div class="line-ups-text">Stats</div>
                    <div class="goals">Goals: ${match.scorers.join(', ')}</div>
                    <div class="assists">Assists: ${match.assisters.join(', ')}</div>
                    <div class="slingers">Slingers: ${match.slingers.join(', ')}</div>
                    <div class="penalties">Penalties: ${match.penalties.join(', ')}</div>
                    <div class="yellows">Yellow Cards: ${match.yellows.join(', ')}</div>
                    <div class="reds">Red Cards: ${match.reds.join(', ')}</div>
                    <div class="cleansheets">Clean Sheets: ${match.cleansheets.join(', ')}</div>
                    <div class="motm">MOTM: ${match.motm}</div>
                </div>
            </div>
        </div>
    `);

    const matchesHTMLString = matchCardsHTML.join('');
    matchContainer.innerHTML = matchesHTMLString;
}

renderMatches(matches);

let viewStats = document.querySelectorAll(".view-stats");
let playerStats = document.querySelectorAll(".full-stats");
let arrowIcons = document.querySelectorAll(".bxs-up-arrow-circle");

viewStats.forEach((viewStat, index) => {
    viewStat.addEventListener("click", () => {
        playerStats[index].classList.toggle("active");
        arrowIcons[index].className = playerStats[index].classList.contains("active") ? 'bxs-down-arrow-circle' : 'bxs-up-arrow-circle';
    });
});

});