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
    {
        id: 4,
        month: "january",
        match_number: 4,
        date: "03/01/2024",
        time: "12:30",
        condition: "Clear",
        team1_score: 0,
        team2_score: 2,
        team1: ["Neuer", "Caveman", "Bale", "Eriksen", "Berbatov", "Zlatan"],
        team2: ["Stackers", "Van Dijk", "Son", "Bastian", "Beckham", "Lewandowski"],
        scorers: ["Son", "Lewandowski"],
        assisters: ["Bastian"],
        slingers: [],
        penalties: [],
        yellows: ["Neuer"],
        reds: [],
        cleansheets: ["Stackers", "Van Dijk", "Son", "Bastian", "Beckham", "Lewandowski"],
        motm: ["Bastian"],
        events: ["Son scored by not giving honor", "motm decided by genetrator"]
    },
    {
        id: 5,
        month: "january",
        match_number: 5,
        date: "03/01/2024",
        time: "17:00",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Stackers", "Van Dijk", "Pele", "De Bruyne", "Van Persie (red)", "Jiminez"],
        team2: ["Neuer", "Puyol", "Mahrez", "Eriksen", "Berbatov", "Benzema"],
        scorers: ["De Bruyne"],
        assisters: ["Van Persie (red)"],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: ["Stackers", "Van Dijk", "Pele", "De Bruyne", "Van Persie (red)", "Jiminez"],
        motm: ["De Bruyne"],
        events: ["Neuer made loads of saves", "De Bruyne beat Van Persie (red) for motm on random generator"]
    },
    {
        id: "6",
        month: "january",
        match_number: "6",
        date: "04/01/2024",
        time: "13:00",
        condition: "Windy",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Stackers", "Van Dijk (red)", "Mbappe", "Maradonna", "Beckham", "Benzema"],
        team2: ["Boxer", "Van Dijk", "Mahrez", "Modric", "Robinho", "Zlatan"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Zlatan"],
        reds: [],
        cleansheets: ["Stackers", "Van Dijk (red)", "Mbappe", "Maradonna", "Beckham", "Benzema", "Boxer", "Van Dijk", "Mahrez", "Modric", "Robinho", "Zlatan"],
        motm: ["Boxer"],
        events: ["5 woodwork, no goals", "Boxer made some very good saves"]
    },
    {
        id: "7",
        month: "january",
        match_number: "7",
        date: "04/01/2024",
        time: "17:15",
        condition: "Windy",
        team1_score: 2, //home team
        team2_score: 0, //away team
        team1: ["Boxer", "Caveman", "Mane", "De Bruyne", "Messi (ft)", "Ronaldo"],
        team2: ["Russian Keeper", "Van Dijk", "Neymar", "Bastian", "Robinho", "Lewandowski"],
        scorers: ["Ronaldo", "Mane"],
        assisters: ["De Bruyne", "Messi (ft)"],
        slingers: ["Ronaldo"],
        penalties: [],
        yellows: ["Neymar", "Caveman", "Messi (ft)", "Robinho"],
        reds: [],
        cleansheets: ["Boxer", "Caveman", "Mane", "De Bruyne", "Messi (ft)", "Ronaldo"],
        motm: ["Mane"],
        events: ["First slinger scored by Ronaldo", "First time Messi (ft) and De Bruyne same team"]
    },
    {
        id: "8",
        month: "january",
        match_number: "8",
        date: "05/01/2024",
        time: "17:00",
        condition: "Sleet",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Stackers", "Puyol", "Pele", "Kroos", "Van Persie", "Suarez"],
        team2: ["Russian Keeper", "Caveman", "Neymar", "De Bruyne", "Ramos", "Zlatan"],
        scorers: ["Pele"],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Caveman", "Suarez", "Zlatan", "Ramos"],
        reds: [],
        cleansheets: ["Stackers", "Puyol", "Pele", "Kroos", "Van Persie", "Suarez"],
        motm: ["Pele"],
        events: ["Pele nice neymar touch", "Pele snake move on De Bruyne"]
    },
    {
        id: "9",
        month: "january",
        match_number: "9",
        date: "08/01/2024",
        time: "13:00",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 0, //away team
        team1: ["Boxer", "Caveman", "Mane", "Modric", "Van Persie", "Muller"],
        team2: ["Stackers", "Van Dijk (orange)", "Messi", "Kroos", "Messi (ft)", "Suarez"],
        scorers: ["Caveman", "Mane"],
        assisters: ["Muller"],
        slingers: [],
        penalties: [],
        yellows: ["Muller", "Messi", "Messi (ft)", "Kroos", "Modric"],
        reds: ["Messi"],
        cleansheets: ["Boxer", "Caveman", "Mane", "Modric", "Van Persie", "Muller"],
        motm: ["Caveman"],
        events: ["Caveman goal hit the ground then looped onto bar and in"]
    },
    {
        id: "10",
        month: "january",
        match_number: "10",
        date: "09/01/2024",
        time: "12:00",
        condition: "Windy",
        team1_score: 0, //home team
        team2_score: 1, //away team
        team1: ["Russian Keeper", "Caveman", "Son", "Kroos", "Van Persie", "Muller"],
        team2: ["Neuer", "Van Dijk (orange)", "Pele", "Modric", "Assunco", "Ronaldo"],
        scorers: ["Ronaldo"],
        assisters: ["Assunco"],
        slingers: ["Ronaldo"],
        penalties: [],
        yellows: ["Assunco", "Modric", "Muller"],
        reds: [],
        cleansheets: ["Neuer", "Van Dijk (orange)", "Pele", "Modric", "Assunco", "Ronaldo"],
        motm: ["Assunco"],
        events: ["Ronaldo header slinger from Assunco cross"]
    },
    {
        id: "11",
        month: "january",
        match_number: "11",
        date: "09/01/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 3, //away team
        team1: ["Russian Keeper", "Van Dijk", "Mane", "Eriksen", "Assunco", "Zlatan"],
        team2: ["Neuer", "Puyol", "Pele", "Maradonnna", "Van Persie", "Ronaldo"],
        scorers: ["Mane", "Puyol", "Ronaldo", "Pele"],
        assisters: ["Van Dijk", "Ronaldo", "Van Persie"],
        slingers: ["Puyol", "Ronaldo"],
        penalties: [],
        yellows: ["Ronaldo"],
        reds: [],
        cleansheets: [],
        motm: ["Ronaldo"],
        events: ["2 slingers", "Ronaldo first 3 goals, all slingers"]
    },
    {
        id: "",
        month: "january",
        match_number: "",
        date: "",
        time: "",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: [],
        team2: [],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: [],
        motm: [],
        events: []
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