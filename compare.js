function comparePlayers() {
    const player1Name = document.getElementById("player1").value;
    const player2Name = document.getElementById("player2").value;

    console.log("Player 1 Name:", player1Name);
    console.log("Player 2 Name:", player2Name);

    const player1 = window.players.find(player => player.name === player1Name);
    const player2 = window.players.find(player => player.name === player2Name);

    console.log("Player 1 Object:", player1);
    console.log("Player 2 Object:", player2);

    displayPlayerStats(player1, "player1-container", false);
    displayPlayerStats(player2, "player2-container", false);
}



function displayPlayerStats(player, containerId) {
    const container = document.getElementById(containerId);

    const playerStatsContent = `
        <div class="images-container">
            <img class="player1" src="${player.picture}" alt="${player.name}">
            <p class="names">COMPARE LOGO</p>
            <img src="${player.picture}" alt="${player.name}">
        </div>
        <div class="name-container">
            <p class="names player1">${player.name}</p>
            <p class="names">${player.name}</p>
        </div>
        <div class="stats-container">
            <p class="statss">${player.monthlyData[0].goals}</p>
            <p class="titles">GOALS</p>
            <p class="statss">${player.monthlyData[0].goals}</p>
        </div>
        <div class="stats-container">
            <p class="statss">${player.monthlyData[0].assists}</p>
            <p class="titles">ASSISTS</p>
            <p class="statss">${player.monthlyData[0].assists}</p>
        </div>
        <div class="stats-container">
            <p class="statss">${player.monthlyData[0].wins}</p>
            <p class="titles">WINS</p>
            <p class="statss">${player.monthlyData[0].wins}</p>
        </div>
        <div class="stats-container">
            <p class="statss">${player.monthlyData[0].win_percentage}</p>
            <p class="titles">WIN %</p>
            <p class="statss">${player.monthlyData[0].win_percentage}</p>
        </div>
        <div class="stats-container">
            <p class="statss">${player.monthlyData[0].motm}</p>
            <p class="titles">MOTM</p>
            <p class="statss">${player.monthlyData[0].motm}</p>
        </div>
    `;

    container.innerHTML = playerStatsContent;

     // Append or replace content based on the 'append' parameter
     /*
     if (append) {
        container.innerHTML += playerStatsContent;
    } else {
        container.innerHTML = playerStatsContent;
    }
*/
}


   


