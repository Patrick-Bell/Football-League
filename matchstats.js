document.addEventListener("DOMContentLoaded", function () {


const matches = [
    {
        id: 1,
        month: "january",
        match_number: 1,
        date: "01/01/2024",
        time: "13:30",
        condition: "Clear",
        team1_score: 1,
        team2_score: 0,
        team1: ["Boxer", "Puyol", "Pele", "Kroos", "Ramos", "Lewandowski"],
        team2: ["Stackers", "Van Dijk", "Meymar", "De Bruyne", "Berbatov", "Ronaldo"],
        scorers: ["Pele"],
        assisters: ["Lewandowski"],
        slingers: [],
        penalties: [],
        yellows: ["Boxer", "Lewandowski"],
        reds: [],
        cleansheets: ["Boxer", "Puyol", "Pele", "Kroos", "Ramos", "Lewandowski"],
        motm: "Pele"
    },
    {
        id: 2,
        month: "january",
        match_number: 2,
        date: "01/01/2024",
        time: "17:00",
        condition: "Clear",
        team1_score: 0,
        team2_score: 1,
        team1: ["Russian Keeper", "Van Dijk", "Mane", "Bastian", "Messi (ft)", "Zlatan"],
        team2: ["Stackers", "Caveman", "Neymar", "De Bruyne", "Robinho", "Muller"],
        scorers: ["De Bruyne"],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Zlatan", "Messi (ft)"],
        reds: [],
        cleansheets: ["Stackers", "Caveman", "Neymar", "De Bruyne", "Robinho", "Muller"],
        motm: "De Bruyne",
        events: ["De Bruyne free kick goal"]
    },
    {
        id: 3,
        month: "january",
        match_number: 3,
        date: "02/01/2024",
        time: "14:00",
        condition: "Clear",
        team1_score: 0,
        team2_score: 1,
        team1: ["Neuer", "Caveman", "Pele", "Kroos", "Ramos", "Suarez"],
        team2: ["Boxer", "Puyol", "Mane", "Pedri", "Carragher", "Zlatan"],
        scorers: ["Zlatan"],
        assisters: ["Mane"],
        slingers: [],
        penalties: [],
        yellows: ["Ramos"],
        reds: [],
        cleansheets: ["Boxer", "Puyol", "Mane", "Pedri", "Carragher", "Zlatan"],
        motm: ["Zlatan"],
        events: ["Zlatan disallowed slinger", "Zlatan bar and in not over"]
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