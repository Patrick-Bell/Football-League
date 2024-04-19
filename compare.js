document.addEventListener("DOMContentLoaded", function() {
   
    document.getElementById("player1").addEventListener("change", comparePlayers);
    document.getElementById("player2").addEventListener("change", comparePlayers);

    const player1FootballerMenu = document.querySelector('.player1menu');
    const player2FootballerMenu = document.querySelector('.player2menu')

    let footballPlayers = ["Boxer", "Russian Keeper", "Neuer", "Stackers", "Van Dijk (red)", "Van Dijk (orange)", "Caveman", "Kroos", "Bastian", "De Bruyne", "Eriksen", "Maradonna", "Modric", 
    "Assunco", "Robinho", "Messi (ft)", "Van Persie (orange)", "Mbappe", "Bale", "Son", "Mahrez", "Pele", "Mane", "Neymar", "Messi", "Benzema", "Kane", "Lewandowski", "Jiminez", "Ronaldo", 
    "Suarez", "Muller", "Zlatan", "Beckham", "Berbatov", "Puyol", "Carragher", "Ramos", "Torres", "Bowen", "Bruney", "Pogba", "Allison", "2-Face", "Ferdinand", "Risse", "Russian Def", 
    "Baldy", "Beckham (lego)", "Ronaldinho", "Trippier", "Henry"]

    footballPlayers.forEach((player) => {
        const option = document.createElement('option')
        option.value = player
        option.text = player
        player1FootballerMenu.add(option)
        player2FootballerMenu.add(option.cloneNode(true))
})
    initializePage();
});





function initializePage() {
const overallCompareContainer = document.querySelector(".player-compare-container");
const compareText = document.querySelector(".compare-text");
overallCompareContainer.style.display = "none"
compareText.style.display = "block"
compareText.innerHTML = "Select a player to start comparing stats!"
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
            compareUnbeatenPercentage(player1, player2);
            compareCleanSheets(player1, player2);
            compareRecords(player1, player2)
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

    // Calculate loss count
    const lossCount = player.monthlyData[0].apps - player.monthlyData[0].won - player.monthlyData[0].draw;

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
            <p class="statss unbeaten-container" id="${containerId}-unbeaten_percentage">${player.monthlyData[0].unbeaten_percentage}</p>
        </div>
        <div class="stats-container">
            <p class="statss" id="${containerId}-clean_sheets">${player.monthlyData[0].clean_sheets}</p>
        </div>
        <div class="stats-container">
        <div class="statss">
            <p id="${containerId}-won">${player.monthlyData[0].won}</p>&nbsp-&nbsp;
            <p id="${containerId}-draw">${player.monthlyData[0].draw}</p>&nbsp-&nbsp;
            <p id="${containerId}-loss">${lossCount}</p>
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
        player1AssistsElement.style.color = "black";
        player2AssistsElement.style.color = "black";
    }
}


function compareUnbeatenPercentage(player1, player2) {
    const unbeatenPlayer2 = parseFloat(player2.monthlyData[0].unbeaten_percentage);
    const unbeatenPlayer1 = parseFloat(player1.monthlyData[0].unbeaten_percentage);

    const player1UnbeatenElement = document.getElementById("player1-container-unbeaten_percentage");
    const player2UnbeatenElement = document.getElementById("player2-container-unbeaten_percentage");

    console.log("Player 1 Unbeaten Element:", unbeatenPlayer1);
    console.log("Player 2 Unbeaten Element:", unbeatenPlayer2);

    if (unbeatenPlayer1 > unbeatenPlayer2) {
        player1UnbeatenElement.style.color = "green";
        player2UnbeatenElement.style.color = "red";
    } else if (unbeatenPlayer1 < unbeatenPlayer2) {
        player1UnbeatenElement.style.color = "red";
        player2UnbeatenElement.style.color = "green";
    } else {
        // Handle case when unbeaten percentages are equal
        player1UnbeatenElement.style.color = "black";
        player2UnbeatenElement.style.color = "black";
    }
}



function compareCleanSheets(player1, player2) {
    const cleanSheetPlayer2 = player2.monthlyData[0].clean_sheets;
    const cleanSheetPlayer1 = player1.monthlyData[0].clean_sheets;

    const player1CleanSheetElement = document.getElementById("player1-container-clean_sheets");
    const player2CleanSheetElement = document.getElementById("player2-container-clean_sheets");

    console.log("Player 1 Unbeaten Element:", cleanSheetPlayer1);
    console.log("Player 2 Unbeaten Element:", cleanSheetPlayer2);

    if (cleanSheetPlayer1 > cleanSheetPlayer2) {
        player1CleanSheetElement.style.color = "green";
        player2CleanSheetElement.style.color = "red";
    } else if (cleanSheetPlayer1 < cleanSheetPlayer2) {
        player1CleanSheetElement.style.color = "red";
        player2CleanSheetElement.style.color = "green";
    } else {
        // Handle case when goals are equal
        player1CleanSheetElement.style.color = "black";
        player2CleanSheetElement.style.color = "black";
    }
}


function compareRecords(player1, player2) {
    const winsPlayer1 = player1.monthlyData[0].won;
    const winsPlayer2 = player2.monthlyData[0].won;

    const drawsPlayer1 = player1.monthlyData[0].draw;
    const drawsPlayer2 = player2.monthlyData[0].draw;

    const lossesPlayer1 = player1.monthlyData[0].apps - winsPlayer1 - drawsPlayer1;
    const lossesPlayer2 = player2.monthlyData[0].apps - winsPlayer2 - drawsPlayer2;

    const player1WinsElement = document.getElementById("player1-container-won");
    const player2WinsElement = document.getElementById("player2-container-won");

    const player1DrawsElement = document.getElementById("player1-container-draw");
    const player2DrawsElement = document.getElementById("player2-container-draw");

    const player1LossElement = document.getElementById("player1-container-loss");
    const player2LossElement = document.getElementById("player2-container-loss");

    console.log("Player 1 Wins Element:", winsPlayer1);
    console.log("Player 2 Wins Element:", winsPlayer2);

    if (winsPlayer1 > winsPlayer2) {
        player1WinsElement.style.color = "green";
        player2WinsElement.style.color = "red";
    } else if (winsPlayer1 < winsPlayer2) {
        player1WinsElement.style.color = "red";
        player2WinsElement.style.color = "green";
    } else {
        player1WinsElement.style.color = "black";
        player2WinsElement.style.color = "black";
    }

    console.log("Player 1 Draws Element:", drawsPlayer1);
    console.log("Player 2 Draws Element:", drawsPlayer2);

    if (drawsPlayer1 > drawsPlayer2) {
        player1DrawsElement.style.color = "green";
        player2DrawsElement.style.color = "red";
    } else if (drawsPlayer1 < drawsPlayer2) {
        player1DrawsElement.style.color = "red";
        player2DrawsElement.style.color = "green";
    } else {
        player1DrawsElement.style.color = "black";
        player2DrawsElement.style.color = "black";
    }

    console.log("Player 1 Losses Element:", lossesPlayer1);
    console.log("Player 2 Losses Element:", lossesPlayer2);

    if (lossesPlayer1 > lossesPlayer2) {
        player1LossElement.style.color = "red";
        player2LossElement.style.color = "green";
    } else if (lossesPlayer1 < lossesPlayer2) {
        player1LossElement.style.color = "green";
        player2LossElement.style.color = "red";
    } else {
        player1LossElement.style.color = "black";
        player2LossElement.style.color = "black";
    }
}
