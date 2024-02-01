document.addEventListener("DOMContentLoaded", function() {
   
    document.getElementById("player1").addEventListener("change", comparePlayers);
    document.getElementById("player2").addEventListener("change", comparePlayers);
    initializePage();
});

function initializePage() {
const overallCompareContainer = document.querySelector(".player-compare-container");
const compareText = document.querySelector(".compare-text");
overallCompareContainer.style.display = "none"
compareText.style.display = "block"
compareText.innerHTML = "Please select a player to start comparing stats!"
}


function comparePlayers() {
    initializePage();

    const player1Name = document.getElementById("player1").value;
    const player2Name = document.getElementById("player2").value;

    console.log("Player 1 Name:", player1Name);
    console.log("Player 2 Name:", player2Name);

    const player1 = window.players.find(player => player.name === player1Name);
    const player2 = window.players.find(player => player.name === player2Name);

    console.log("Player 1 Object:", player1);
    console.log("Player 2 Object:", player2);

    const overallCompareContainer = document.querySelector(".player-compare-container");
    const compareText = document.querySelector(".compare-text");

    if (player1 && player2) {
        // Check if the selected players are the same
        if (player1 !== player2) {
            displayPlayerStats(player1, "player1-container");
            displayPlayerStats(player2, "player2-container");
            overallCompareContainer.style.display = "block";
            compareText.style.display = "none";

            compareGoals(player1, player2);
            compareAssists(player1, player2);
        } else {
            overallCompareContainer.style.display = "none";
            compareText.style.display = "block";
            compareText.innerHTML = "You cannot compare the same players. Please choose another player.";
        }
    } else {
        // Handle case when player1 or player2 is not found
        console.error("Player not found!");
    }
}


function displayPlayerStats(player, containerId) {
    const container = document.getElementById(containerId);

    const playerStatsContent = `
        <div class="images-container">
            <img src="${player.picture}" alt="${player.name}">
        </div>
        <div class="name-container">
            <p class="names player1">${player.name}</p>
        </div>
        <div class="stats-container">
            <p class="statss" id="${containerId}-goals">${player.monthlyData[0].goals}</p>
        </div>
        <div class="stats-container">
            <p class="statss" id="${containerId}-assists">${player.monthlyData[0].assists}</p>
        </div>
        <div class="stats-container">
            <p class="statss">${player.monthlyData[0].won}</p>
        </div>
        <div class="stats-container">
            <p class="statss">${player.monthlyData[0].win_percentage}</p>
        </div>
    `;

    container.innerHTML = playerStatsContent;
}

function compareGoals(player1, player2) {
    const goalsPlayer1 = player1.monthlyData[0].goals;
    const goalsPlayer2 = player2.monthlyData[0].goals;

    const player1GoalsElement = document.getElementById("player1-container-goals");
    const player2GoalsElement = document.getElementById("player2-container-goals");

    console.log("Player 1 Goals Element:", player1GoalsElement);
    console.log("Player 2 Goals Element:", player2GoalsElement);

    if (goalsPlayer1 > goalsPlayer2) {
        player1GoalsElement.style.color = "green";
        player2GoalsElement.style.color = "red";
    } else if (goalsPlayer1 < goalsPlayer2) {
        player1GoalsElement.style.color = "red";
        player2GoalsElement.style.color = "green";
    } else {
        // Handle case when goals are equal
        player1GoalsElement.style.color = "black";
        player2GoalsElement.style.color = "black";
    }
}

function compareAssists(player1, player2) {
    const assistsPlayer2 = player2.monthlyData[0].assists;
    const assistsPlayer1 = player1.monthlyData[0].assists;

    const player1AssistsElement = document.getElementById("player1-container-assists");
    const player2AssistsElement = document.getElementById("player2-container-assists");

    console.log("Player 1 Assists Element:", player1AssistsElement);
    console.log("Player 2 Assists Element:", player2AssistsElement);

    if (assistsPlayer1 > assistsPlayer2) {
        player1AssistsElement.style.color = "green";
        player2AssistsElement.style.color = "red";
    } else if (assistsPlayer1 < assistsPlayer2) {
        player1AssistsElement.style.color = "red";
        player2AssistsElement.style.color = "green";
    } else {
        // Handle case when goals are equal
        player2AssistsElement.style.color = "black";
        player2AssistsElement.style.color = "black";
    }
}
