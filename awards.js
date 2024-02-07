document.addEventListener("DOMContentLoaded", function () {
    const players = window.players;
    const matches = window.matches;
    const teams = window.teams
    let totalGamesCategory, totalGoalsCategory, totalSlingersCategory, totalAssistsCategory, mostAppsCategory, mostWinsCategory, mostCleanSheetsCategory, mostMOTMCategory, mostPointsCategory, mostDefeatsCategory;

    function finalTotalMatches(matches) {
        let totalMatches = 0;
        matches.forEach(match => {
            totalMatches += 1;
        });
        return totalMatches;
    }

    function finalTotalSlingers(matches) {
        let totalSlingers = 0;
        matches.forEach(match => {
            totalSlingers += match.slingers.length;
        });
        return totalSlingers;
    }

    function finalTotalGoals(matches) {
        let totalGoals = 0;
        matches.forEach(match => {
            totalGoals += match.team1_score + match.team2_score;
        });
        return totalGoals;
    }

    function finalTotalAssists(matches) {
        let totalAssists = 0;
        matches.forEach(match => {
            totalAssists += match.assisters.length;
        });
        return totalAssists;
    }

    function findPlayerWithMostTotalApps(players) {
        let mostAppsPlayer = null;
        let maxOverallApps = -1;
        players.forEach(player => {
            let overallApps = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
            if (overallMonth && typeof overallMonth.apps !== 'undefined') {
                overallApps = overallMonth.apps;
            }
            if (overallApps > maxOverallApps) {
                maxOverallApps = overallApps;
                mostAppsPlayer = player.name;
            }
        });
        return { player: mostAppsPlayer, overallApps: maxOverallApps };
    }

    function findPlayerWithMostWins(players) {
        let mostWinsPlayer = null;
        let maxOverallWins = -1;
        players.forEach(player => {
            let overallWins = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
            if (overallMonth && typeof overallMonth.won !== 'undefined') {
                overallWins = overallMonth.won;
            }
            if (overallWins > maxOverallWins) {
                maxOverallWins = overallWins;
                mostWinsPlayer = player.name;
            }
        });
        return { player: mostWinsPlayer, overallWins: maxOverallWins };
    }

    function findPlayersWithMostCleanSheets(players) {
        let mostCleanSheetsPlayers = [];
        let maxOverallCleanSheets = -1;
    
        players.forEach(player => {
            let overallCleanSheets = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.clean_sheets !== 'undefined') {
                overallCleanSheets = overallMonth.clean_sheets;
            }
    
            if (overallCleanSheets > maxOverallCleanSheets) {
                maxOverallCleanSheets = overallCleanSheets;
                mostCleanSheetsPlayers = [player.name];
            } else if (overallCleanSheets === maxOverallCleanSheets) {
                mostCleanSheetsPlayers.push(player.name);
            }
        });
    
        return { players: mostCleanSheetsPlayers, overallCleanSheets: maxOverallCleanSheets };
    }

    function findPlayersWithMostMOTM(players) {
        let mostMOTMPlayers = [];
        let maxOverallMOTM = -1;

        players.forEach(player => {
            let overallMOTM = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");

            if (overallMonth && typeof overallMonth.motm !== 'undefined') {
                overallMOTM = overallMonth.motm
            }

            if (overallMOTM > maxOverallMOTM) {
                maxOverallMOTM = overallMOTM;
                mostMOTMPlayers = [player.name];
            } else if (overallMOTM === maxOverallMOTM) {
                mostMOTMPlayers.push(player.name)
            }

        })

        return { players: mostMOTMPlayers, overallMOTM: maxOverallMOTM}
    }

    function findPlayersWithMostPoints(teams) {
        let mostPointsPlayers = [];
        let maxOverallPoints = -1;
    
        teams.forEach(team => {
            let overallPoints = 0;
            const overallMonth = team.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.points !== 'undefined') {
                overallPoints = overallMonth.points;
            }
    
            if (overallPoints > maxOverallPoints) {
                maxOverallPoints = overallPoints;
                mostPointsPlayers = [team.name];
            } else if (overallPoints === maxOverallPoints) {
                mostPointsPlayers.push(team.name);
            }
        });
    
        return { teams: mostPointsPlayers, overallPoints: maxOverallPoints };
    }
    
    function findPlayersWithMostDefeats() {
        let mostDefeatsPlayers = [];
        let maxOverallDefeats = -1;

        teams.forEach(team => {
            let overallDefeats = 0;
            const overallMonth = team.monthlyData.find(monthData => monthData.month === "Overall");

            if (overallMonth && typeof overallMonth.losses !== 'undefined') {
                overallDefeats = overallMonth.losses
            }

            if (overallDefeats > maxOverallDefeats) {
                maxOverallDefeats = overallDefeats;
                mostDefeatsPlayers = [team.name];
            } else if (overallDefeats === maxOverallDefeats) {
                mostDefeatsPlayers.push(team.name)
            }
        })

        return { teams: mostDefeatsPlayers, overallDefeats: maxOverallDefeats}
    }

   


    
    
    

    function findPlayersWithMostDraws() {
        let mostDrawsPlayers = [];
        let maxOverallDraws = -1;

        teams.forEach(team => {
            let overallDraws = 0;
            const overallMonth = team.monthlyData.find(monthData => monthData.month === "Overall");

            if (overallMonth && typeof overallMonth.draws !== 'undefined') {
                overallDraws = overallMonth.draws
            }

            if (overallDraws > maxOverallDraws) {
                maxOverallDraws = overallDraws;
                mostDrawsPlayers = [team.name];
            } else if (overallDraws === maxOverallDraws) {
                mostDrawsPlayers.push(team.name)
            }
        })

        return { teams: mostDrawsPlayers, overallDraws: maxOverallDraws}
    }

    function findPlayerWithLeastTotalApps(players) {
        let leastAppsPlayer = [];
        let minOverallApps = Infinity;
    
        players.forEach(player => {
            let overallApps = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.apps !== 'undefined') {
                overallApps = overallMonth.apps;
            }
    
            if (overallApps < minOverallApps) {
                minOverallApps = overallApps;
                leastAppsPlayer = [player.name];
            } else if (overallApps === minOverallApps) {
                leastAppsPlayer.push(player.name)
            }
        });
    
        return { player: leastAppsPlayer, overallApps: minOverallApps };
    }

    function findPlayersWithMostYellows(players) {
        let mostYellowPlayer = [];
        let maxOverallYellow = -1;

        players.forEach(player => {
            let overallYellow = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");

            if (overallMonth && typeof overallMonth.yellow !== 'undefined') {
                overallYellow = overallMonth.yellow
            }

            if (overallYellow > maxOverallYellow) {
                maxOverallYellow = overallYellow
                mostYellowPlayer = [player.name]
            } else if (overallYellow === maxOverallYellow) {
                mostYellowPlayer.push(player.name)
            }

        })

        return {player: mostYellowPlayer, overallYellow: maxOverallYellow}
    }

    function findPlayersWithMostReds(players) {
        let mostRedPlayer = [];
        let maxOverallRed = -1;

        players.forEach(player => {
            let overallRed = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");

            if (overallMonth && typeof overallMonth.red !== 'undefined') {
                overallRed = overallMonth.red
            }

            if (overallRed > maxOverallRed) {
                maxOverallRed = overallRed
                mostRedPlayer = [player.name]
            } else if (overallRed === maxOverallRed) {
                mostRedPlayer.push(player.name)
            }

        })

        return {player: mostRedPlayer, overallRed: maxOverallRed}
    }

    function findPlayerWithMostSlingers(players) {
        let mostSlingerPlayer = [];
        let maxOverallSlinger = -1;
    
        players.forEach(player => {
            let overallSlinger = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.slingers !== 'undefined') {
                overallSlinger = overallMonth.slingers;
            }
    
            if (overallSlinger > maxOverallSlinger) {
                maxOverallSlinger = overallSlinger;
                mostSlingerPlayer = [player.name];
            } else if (overallSlinger === maxOverallSlinger) {
                mostSlingerPlayer.push(player.name);
            }
        });
    
        return { player: mostSlingerPlayer, overallSlinger: maxOverallSlinger };
    }

    function findPlayersWithMostGoals(players) {
        let mostGoalPlayer = [];
        let maxOverallGoal = -1;
    
        players.forEach(player => {
            let overallGoal = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.goals !== 'undefined') {
                overallGoal = overallMonth.goals;
            }
    
            if (overallGoal > maxOverallGoal) {
                maxOverallGoal = overallGoal;
                mostGoalPlayer = [player.name];
            } else if (overallGoal === maxOverallGoal) {
                mostGoalPlayer.push(player.name);
            }
        });
    
        return { player: mostGoalPlayer, overallGoal: maxOverallGoal };
    }
    
    

    

    console.log(matches);
    console.log(players);
    console.log(teams)

    const awardsData = [
        {
            category: "player_of_the_month",
            headers: ["Player of the Month", ""],
            data: [
                { month: "January", winner: "Pele" },
            ],
        },
        {
            category: "games",
            headers: ["Matches", ""],
            data: [
                { category: "First Game", winner: "01/01/2024 at 13:30" },
                { category: "Tenth Game", winner: "09/01/2024 at 12:00" },
                { category: "Highest Scoring Game", winner: "4 goals - 09/01/2024 (17:10)" },
                { category: "Most Games in a Month", winner: "12 - January" },
                { category: "Most Points in a Month", winner: "15 - Pele (January)" },
                { category: "Most Defeats in a Month", winner: "5 - Van Dijk, Russian Keeper (January)" },
                { category: "Most Goals in a Month", winner: "18 - January" }
            ],
        },
        {
            category: "goals",
            headers: ["Goals", ""],
            data: [
                { category: "Most Goals", winner: findPlayersWithMostGoals(players)},
                { category: "First Goal", winner: "Pele (01/01/2024) " },
                { category: "Tenth Goal", winner: "Caveman (08/01/2024) " },
                { category: "Twentieth Gaol", winner: "Bale (05/02/2024)" },
                { category: "First Slinger", winner: "Ronaldo (04/01/2024)" },
                { category: "Most Slingers", winner: findPlayerWithMostSlingers(players) }
            ],
        },
        {
            category: "appearances",
            headers: ["Appearances", ""],
            data: [
                { category: "Most Appearances", winner: findPlayerWithMostTotalApps(players) },
                { category: "Least Appearances", winners: findPlayerWithLeastTotalApps(players)},
            ],
        },
        {
            category: "disciplinary",
            headers: ["Disciplinary", ""],
            data: [
                { category: "First Yellow Card", winner: "Lewandowski (01/01/2024)" },
                { category: "First Red Card", winner: "Messi (08/01/2024)" },
                { category: "Most Yellow Cards", winner: findPlayersWithMostYellows(players)},
                { category: "Most Red Cards", winners: findPlayersWithMostReds(players) },
            ],
        },
        {
            category: "season",
            headers: ["Season", ""],
            data: [
                { category: "Total Games", winner: finalTotalMatches(matches) },
                { category: "Total Goals", winner: finalTotalGoals(matches) },
                { category: "Total Slingers", winner: finalTotalSlingers(matches) },
                { category: "Total Assists", winner: finalTotalAssists(matches) },
                { category: "Most Appearances", winner: findPlayerWithMostTotalApps(players) },
                { category: "Most Wins", winner: findPlayerWithMostWins(players) }, // Ensure the "Most Wins" category is in the right position
                { category: "Most Defeats", winner: findPlayersWithMostDefeats(teams) },
                { category: "Most Draws", winner: findPlayersWithMostDraws(teams) },
                { category: "Most Clean Sheets", winner: findPlayersWithMostCleanSheets(players) },
                { category: "Most MOTM", winner: findPlayersWithMostMOTM(players) },
                { category: "Most Points", winner: findPlayersWithMostPoints(teams) },
            ],
        }
    ];

    totalGamesCategory = awardsData.find(category => category.category === "season" && category.headers[0] === "Total Games");
    totalGoalsCategory = awardsData.find(category => category.category === "season" && category.headers[1] === "Total Goals");
    totalSlingersCategory = awardsData.find(category => category.category === "season" && category.headers[2] === "Total Slingers");
    totalAssistsCategory = awardsData.find(category => category.category === "season" && category.headers[3] === "Total Assists");

    // Check if the category is found
    if (totalGamesCategory) {
        // Update the winner property with the result of the finalTotalMatches function
        totalGamesCategory.data[0].winner = finalTotalMatches(matches);
        console.log(totalGamesCategory);
    }

    if (totalGoalsCategory) {
        totalGoalsCategory.data[1].winner = finalTotalGoals(matches);
    }

    if (totalSlingersCategory) {
        totalSlingersCategory.data[2].winner = finalTotalSlingers(matches);
    }

    if (totalAssistsCategory) {
        totalAssistsCategory.data[3].winner = finalTotalAssists(matches);
    }
    mostAppsCategory = awardsData.find(category => category.category === "season" && category.headers[4] === "Most Appearances");
    if (mostAppsCategory) {
        mostAppsCategory.data[4].winner = findPlayerWithMostTotalApps(players);
    }

    mostWinsCategory = awardsData.find(category => category.category === "season" && category.headers[5] === "Most Wins");
    if (mostWinsCategory) {
        mostWinsCategory.data[5].winner = findPlayerWithMostWins(players);
    }

    mostDefeatsCategory = awardsData.find(category => category.category === "season" && category.headers[6] === "Most Defeats");
    if (mostDefeatsCategory) {
        mostDefeatsCategory.data[6].winner = findPlayersWithMostDefeats(teams)
    }

    mostCleanSheetsCategory = awardsData.find(category => category.category === "season" && category.headers[7] === "Most Clean Sheets");
    if (mostCleanSheetsCategory) {
        mostCleanSheetsCategory.data[7].winner = findPlayersWithMostCleanSheets(players)
    }

    mostMOTMCategory = awardsData.find(category => category.category === "season" && category.headers[8] === "Most Clean Sheets");
    if (mostMOTMCategory) {
        mostMOTMCategory.data[8].winner = findPlayersWithMostMOTM(players)
    }

    mostPointsCategory = awardsData.find(category => category.category === "season" && category.headers[9] === "Most Points");
    if (mostPointsCategory) {
        mostPointsCategory.data[9].winner = findPlayersWithMostPoints(teams)
    }


    console.log(awardsData);


    renderAwards(awardsData);


    function renderAwards(awards) {
        awards.forEach(category => {
            const container = document.querySelector(`.${category.category}-container`);
            if (!container) return;

            const table = document.createElement("table");
            table.classList.add("table2");
            container.appendChild(table);

            // Render headers
            const headerRow = table.insertRow();
            category.headers.forEach(header => {
                const th = document.createElement("th");
                th.innerHTML = header;
                headerRow.appendChild(th);
            });

            category.data.forEach(data => {
                const row = table.insertRow();
                Object.values(data).forEach(value => {
                    const td = document.createElement("td");
                    if (value && typeof value === "object") {
                        const objectValues = Object.values(value);
                        const cleanedValues = objectValues.map(val => (typeof val === "object" ? val.join(", ") : val));
                        td.textContent = cleanedValues.reverse().join(" - ");
                    } else {
                        td.textContent = value;
                    }
                    row.appendChild(td);
                });
            });
        });
    }
    
});