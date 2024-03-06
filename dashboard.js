document.addEventListener("DOMContentLoaded", function () {
    const players = window.players;
    const teams = window.teams

    // Display top 5 goal scorers
    const sortedGoalPlayers = players.sort((a, b) => {
        const goalsDiff = b.monthlyData[0].goals - a.monthlyData[0].goals;
        if (goalsDiff === 0) {
            const goalsPerGameDiff = (b.monthlyData[0].goals / b.monthlyData[0].apps) - (a.monthlyData[0].goals / a.monthlyData[0].apps);
            return goalsPerGameDiff
        }
        return goalsDiff
})


    const top5Scorers = sortedGoalPlayers.slice(0, 5);
    const goalContainer = document.querySelector(".goal-container");
    const dashboardGoals = top5Scorers.map((scorer, index) => {
        const isTopScorer = index === 0;
        const backgroundColor = isTopScorer ? "gold" : "";
    
        return `
            <div class="statistic-container dash-divide" style="background-color: ${backgroundColor}">
                <div class="stat-bold">${index + 1}. ${scorer.name}</div>
                <div class="stat-num">${scorer.monthlyData[0].goals} - ${(scorer.monthlyData[0].goals / scorer.monthlyData[0].apps).toFixed(2)} p/game</div>
            </div>
        `;
    });
    
    const scorersHTMLString = dashboardGoals.join('');
    goalContainer.innerHTML = scorersHTMLString;



// Display top 5 assisters
const sortedAssistPlayers = players.sort((a, b) => {
    const assistsDiff = b.monthlyData[0].assists - a.monthlyData[0].assists;
    
    // If the total assists are the same, use assists per game ratio as the secondary criterion
    if (assistsDiff === 0) {
        const assistsPerGameDiff = (b.monthlyData[0].assists / b.monthlyData[0].apps) - (a.monthlyData[0].assists / a.monthlyData[0].apps);
        return assistsPerGameDiff;
    }
    
    return assistsDiff;
});

const top5Assisters = sortedAssistPlayers.slice(0, 5);
const assistContainer = document.querySelector(".assist-container");
const dashboardAssists = top5Assisters.map((scorer, index) => {
    const isTopAssister = index === 0;
    const backgroundColor = isTopAssister ? "gold" : "";
    
    return `
        <div class="statistic-container dash-divide" style="background-color: ${backgroundColor}">
            <div class="stat-bold">${index + 1}. ${scorer.name}</div>
            <div class="stat-num stat-dash">${scorer.monthlyData[0].assists} - ${(scorer.monthlyData[0].assists / scorer.monthlyData[0].apps).toFixed(2)} p/game</div>
        </div>
    `;
});

const assistersHTMLString = dashboardAssists.join('');
assistContainer.innerHTML = assistersHTMLString;




    // Display top 5 Clean Sheets
    const sortedCleanSheetPlayers = players.sort((a, b) => {
       const cleanSheetDiff = b.monthlyData[0].clean_sheets - a.monthlyData[0].clean_sheets;
       if (cleanSheetDiff === 0) {
        const cleanSheetPerGame = b.monthlyData[0].clean_sheets / b.monthlyData[0].apps - a.monthlyData[0].clean_sheets / a.monthlyData[0].apps;
        return cleanSheetPerGame
       }
       return cleanSheetDiff
    })


    const top5CleanSheets = sortedCleanSheetPlayers.slice(0, 5);
    const cleanSheetContainer = document.querySelector(".cleansheet-container");
    const dashboardCleanSheets = top5CleanSheets.map((scorer, index) => {
    const isTopCleanSheetPlayer = index === 0;
    const backgroundColor = isTopCleanSheetPlayer ? "gold" : "";
    
    return `
        <div class="statistic-container dash-divide" style="background-color: ${backgroundColor}">
            <div class="stat-bold">${index + 1}. ${scorer.name}</div>
            <div class="stat-num stat-dash">${scorer.monthlyData[0].clean_sheets}</div>
        </div>
    `;
});

const cleanSheetHTMLString = dashboardCleanSheets.join('');
cleanSheetContainer.innerHTML = cleanSheetHTMLString;

    //Display top 5 Points
    const sortedPoints = teams.sort((a, b) => {
       const pointsDiff = b.monthlyData[0].points - a.monthlyData[0].points;
       if (pointsDiff === 0) {
        const pointsPerGame = b.monthlyData[0].points / b.monthlyData[0].gamesPlayed - a.monthlyData[0].points / a.monthlyData[0].gamesPlayed
        return pointsPerGame
       }

       return pointsDiff
    })

    const top5Points = sortedPoints.slice(0, 5);
    const pointsContainer = document.querySelector(".point-container");
    const dashboardPoint = top5Points.map((scorer, index) => {
        const isTopPoints = index === 0
        const backgroundColor = isTopPoints ? "gold" : ""
    return `
        <div class="statistic-container dash-divide" style="background-color: ${backgroundColor}">
            <div class="stat-bold">${index + 1}. ${scorer.name}</div>
            <div class="stat-num stat-dash">${scorer.monthlyData[0].points} - ${(scorer.monthlyData[0].points / scorer.monthlyData[0].gamesPlayed).toFixed(2)} p/game</div>
            </div>
    `;

    })
    const pointHTMLString = dashboardPoint.join('');
    pointsContainer.innerHTML = pointHTMLString;

    // Display top goal contributions = goals + assists

    const sortedGoalContributor = players.sort((a, b) => (b.monthlyData[0].goals + b.monthlyData[0].assists) - (a.monthlyData[0].goals + a.monthlyData[0].assists));
const top5Contributors = sortedGoalContributor.slice(0, 5);
const contributorContainer = document.querySelector(".contributor-container");

const dashboardContributors = top5Contributors.map((scorer, index) => {
    const isTopContributor = index === 0;
    const backgroundColor = isTopContributor ? "gold" : "";
    const totalGoalsAndAssists = scorer.monthlyData[0].goals + scorer.monthlyData[0].assists;
    const totalGamesPlayed = scorer.monthlyData[0].apps

    return `
        <div class="statistic-container dash-divide" style="background-color: ${backgroundColor}">
            <div class="stat-bold">${index + 1}. ${scorer.name}</div>
            <div class="stat-num stat-dash">${totalGoalsAndAssists} - ${(totalGoalsAndAssists / totalGamesPlayed).toFixed(2)}  p/game</div>
            </div>
    `;
});

const contributorsHTMLString = dashboardContributors.join('');
contributorContainer.innerHTML = contributorsHTMLString;


//Display top 5 Unbeaten %
const MIN_GAMES_PLAYED = 5;

const filteredUnbeaten = players.filter(player => player.monthlyData[0].apps >= MIN_GAMES_PLAYED);

const sortedUnbeaten = filteredUnbeaten.sort((a, b) => {
    const unbeatenA = parseFloat(a.monthlyData[0].unbeaten_percentage);
    const unbeatenB = parseFloat(b.monthlyData[0].unbeaten_percentage);

    if (unbeatenA === unbeatenB) {
        // If unbeaten percentages are the same, compare games played in reverse order
        return b.monthlyData[0].apps - a.monthlyData[0].apps;
    }

    // Otherwise, sort by unbeaten percentage in descending order
    return unbeatenB - unbeatenA;
});

const top5Unbeaten = sortedUnbeaten.slice(0, 5);
const unbeatenContainer = document.querySelector(".unbeaten-container");

const dashboardUnbeaten = top5Unbeaten.map((scorer, index) => {
    const isTopUnbeaten = index === 0;
    const backgroundColor = isTopUnbeaten ? "gold" : "";
    return `
        <div class="statistic-container dash-divide" style="background-color: ${backgroundColor}">
            <div class="stat-bold">${index + 1}. ${scorer.name}</div>
            <div class="stat-num stat-dash">${scorer.monthlyData[0].unbeaten_percentage} (${scorer.monthlyData[0].apps})</div>
        </div>
    `;
});

const unbeatenHTMLString = dashboardUnbeaten.join('');
unbeatenContainer.innerHTML = unbeatenHTMLString;


// top app'd players
const sortedAppPlayers = players.sort((a, b) => b.monthlyData[0].apps - a.monthlyData[0].apps);
const top5Apps = sortedAppPlayers.slice(0, 5);
const appContainer = document.querySelector(".app-container");
const dashboardApps = top5Apps.map((scorer, index) => {
    const isTopAppPlayer = index === 0;
    const backgroundColor = isTopAppPlayer ? "gold" : "";

return`
<div class="statistic-container dash-divide" style="background-color: ${backgroundColor}">
        <div class="stat-bold">${index + 1}. ${scorer.name}</div>
        <div class="stat-num">${scorer.monthlyData[0].apps} - ${(scorer.monthlyData[0].apps * 45)} mins</div>
    </div>
`});
const appHTMLString = dashboardApps.join('');
appContainer.innerHTML = appHTMLString;



// Display top 5 carded players
const sortedCardPlayers = players.sort((a, b) => {
    const cardsDiff = (b.monthlyData[0].yellow + b.monthlyData[0].red) - (a.monthlyData[0].yellow + a.monthlyData[0].red);
    if (cardsDiff === 0) {
        const cardsPerGameDiff = ((b.monthlyData[0].yellow + b.monthlyData[0].red) / b.monthlyData[0].apps) - ((a.monthlyData[0].yellow + a.monthlyData[0].red) / a.monthlyData[0].apps);
        return cardsPerGameDiff;
    }
    return cardsDiff;
});

const top5Carders = sortedCardPlayers.slice(0, 5);
const cardContainer = document.querySelector(".card-container");
const dashboardCards = top5Carders.map((scorer, index) => {
    const isTopScorer = index === 0;
    const backgroundColor = isTopScorer ? "gold" : "";

    return `
        <div class="statistic-container dash-divide" style="background-color: ${backgroundColor}">
            <div class="stat-bold">${index + 1}. ${scorer.name}</div>
            <div class="stat-num">
                <i class='bx bxs-card' style='color:#fbff00'></i>${scorer.monthlyData[0].yellow}
                <i class='bx bxs-card' style='color:#ff1f00'></i>${scorer.monthlyData[0].red}
                - ${((scorer.monthlyData[0].yellow + scorer.monthlyData[0].red) / scorer.monthlyData[0].apps).toFixed(2)} p/game
            </div>           
        </div>
    `;
});

const cardsHTMLString = dashboardCards.join('');
cardContainer.innerHTML = cardsHTMLString;





});

