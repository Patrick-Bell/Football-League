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

    function findTotalYellows(matches) {
        let totalYellows = 0;
        matches.forEach(match => {
            totalYellows += match.yellows.length
        });
        return totalYellows;
    }

    function findTotalReds(matches) {
        let totalReds = 0;
        matches.forEach(match => {
            totalReds += match.reds.length
        })
        return totalReds;
    }

    function findPlayerWithMostTotalApps(players) {
        let mostAppsPlayers = [];
        let maxOverallApps = -1;
    
        players.forEach(player => {
            let overallApps = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.apps !== 'undefined') {
                overallApps = overallMonth.apps;
            }
    
            if (overallApps > maxOverallApps) {
                maxOverallApps = overallApps;
                mostAppsPlayers = [player.name];
            } else if (overallApps === maxOverallApps) {
                mostAppsPlayers.push(player.name);
            }
        });
    
        return { players: mostAppsPlayers, overallApps: maxOverallApps };
    }

    function findPlayersWithMostAssists(players) {
        let mostAssistsPlayers = [];
        let maxOverallAssists = -1;
    
        players.forEach(player => {
            let overallAsssists = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.assists !== 'undefined') {
                overallAsssists = overallMonth.assists;
            }
    
            if (overallAsssists > maxOverallAssists) {
                maxOverallAssists = overallAsssists;
                mostAssistsPlayers = [player.name];
            } else if (overallAsssists === maxOverallAssists) {
                mostAssistsPlayers.push(player.name);
            }
        });
    
        return { players: mostAssistsPlayers, overallAsssists: maxOverallAssists };
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
    

    function findPlayersWithMostGoalsInSingleGame(matches) {
    let topScorers = [];
let topGoalsInSingleGame = 0;

// Iterate through each match
matches.forEach(match => {
    // Combine goal scorers from both teams for the current match
    const allScorers = match.scorers;

    // Count goals for each scorer in the current match
    const scorerGoals = {};
    allScorers.forEach(scorer => {
        scorerGoals[scorer] = (scorerGoals[scorer] || 0) + 1;
    });

    // Find the player(s) with the most goals in the current match
    for (const scorer in scorerGoals) {
        if (scorerGoals[scorer] > topGoalsInSingleGame) {
            topScorers = [scorer];
            topGoalsInSingleGame = scorerGoals[scorer];
        } else if (scorerGoals[scorer] === topGoalsInSingleGame) {
            // If there are multiple players with the same highest goal count
            topScorers.push(scorer);
        }
    }
});
    return `${topGoalsInSingleGame} - ${topScorers.join(', ')}`
}

function findGameWithMostGoals(matches) {
let mostGoalsInSingleGame = 0;
let dateOfMostGoalsGame;
let timeOfMostGoalsGame;

// Iterate through each match
matches.forEach(match => {
    // Sum the scores of both teams in the current match
    const totalGoalsInMatch = match.team1_score + match.team2_score;

    // Update if the current match has more goals
    if (totalGoalsInMatch > mostGoalsInSingleGame) {
        mostGoalsInSingleGame = totalGoalsInMatch;
        dateOfMostGoalsGame = match.date;
        timeOfMostGoalsGame = match.time;
    }
});
    return `${mostGoalsInSingleGame} goals - ${dateOfMostGoalsGame} (${timeOfMostGoalsGame})`
}

function findMonthWithMostGames(matches) {
const matchesByMonth = {};

// Iterate through each match
matches.forEach(match => {
    const month = match.month.toLowerCase();

    // Update the match count for the current month
    matchesByMonth[month] = (matchesByMonth[month] || 0) + 1;
});

// Find the month with the most matches
let mostMatchesMonth;
let mostMatchesCount = 0;

for (const month in matchesByMonth) {
    if (matchesByMonth[month] > mostMatchesCount) {
        mostMatchesMonth = month;
        mostMatchesCount = matchesByMonth[month];
    }
}
    const capitalizedMonth = mostMatchesMonth.charAt(0).toUpperCase() + mostMatchesMonth.slice(1);

    return `${(mostMatchesCount)} - ${capitalizedMonth}`

}

function findPlayerWithMostPointsInMonth(teams) {
    const playerPoints = []; // Object to track total points for each player

    // Iterate through each team
    teams.forEach(team => {
        // Iterate through each month's data for the team
        team.monthlyData.forEach(monthData => {
            const month = monthData.month.toLowerCase();

            // Exclude "Overall" month
            if (month !== "overall") {
                const playerName = team.name;
                const points = monthData.points;

                // Update total points for the player
                if (!playerPoints[playerName] || points > playerPoints[playerName].points) {
                    playerPoints[playerName] = { points: points, month: month };
                }
            }
        });
    });

    let mostPointsPlayer;
    let mostPointsCount = 0;

    // Find the player with the most points
    for (const playerName in playerPoints) {
        if (playerPoints[playerName].points > mostPointsCount) {
            mostPointsPlayer = playerName;
            mostPointsCount = playerPoints[playerName].points;
        }
    }

    if (mostPointsPlayer) {
        const capitalizedMonth = playerPoints[mostPointsPlayer].month.charAt(0).toUpperCase() + playerPoints[mostPointsPlayer].month.slice(1);
        return `${mostPointsCount} - ${mostPointsPlayer} (${capitalizedMonth})`;
    } else {
        return "No player has monthly data excluding 'Overall'.";
    }
}




function findPlayersWithMostDefeatsInMonth(teams) {
    const playerDefeatsByMonth = {};

    // Iterate through each team
    teams.forEach(team => {
        // Iterate through each month's data for the team
        team.monthlyData.forEach(monthData => {
            const month = monthData.month.toLowerCase();

            // Exclude "Overall" month
            if (month !== "overall") {
                // Update the defeats for the current month
                const defeats = monthData.losses;
                if (!playerDefeatsByMonth[month]) {
                    // If the month entry does not exist, create it as an array
                    playerDefeatsByMonth[month] = [{ playerName: team.name, defeats: defeats }];
                } else if (defeats > playerDefeatsByMonth[month][0].defeats) {
                    // If a player has more defeats, replace the array with a new one
                    playerDefeatsByMonth[month] = [{ playerName: team.name, defeats: defeats }];
                } else if (defeats === playerDefeatsByMonth[month][0].defeats) {
                    // If multiple players have the same number of defeats, add them to the array
                    playerDefeatsByMonth[month].push({ playerName: team.name, defeats: defeats, month: team.month });
                }
            }
        });
    });

    // Find the month with the most defeats
    let mostDefeatsMonth;
    let mostDefeatsCount = 0;
    let topPlayers = [];

    for (const month in playerDefeatsByMonth) {
        const defeats = playerDefeatsByMonth[month][0].defeats;
        
        if (defeats > mostDefeatsCount) {
            mostDefeatsMonth = month;
            mostDefeatsCount = defeats;
            topPlayers = playerDefeatsByMonth[month];
        } else if (defeats === mostDefeatsCount) {
            // If multiple players have the same number of defeats, add them to the array
            topPlayers.push(...playerDefeatsByMonth[month]);
        }
    }

    if (mostDefeatsMonth) {
        const capitalizedMonth = mostDefeatsMonth.charAt(0).toUpperCase() + mostDefeatsMonth.slice(1);
        return [`${mostDefeatsCount} - ${topPlayers.map(player => `${player.playerName} (${capitalizedMonth})`).reverse().join(', ')}`];

    } else {
        return ["No player has monthly defeat data excluding 'Overall'."];
    }
}

function findMonthsWithMostGoals(matches) {
    const goalsByMonth = {};

    // Iterate through each match
    matches.forEach(match => {
        const month = match.month.toLowerCase();
        const goalsScored = match.team1_score + match.team2_score;

        // Update the goals count for the current month
        goalsByMonth[month] = (goalsByMonth[month] || 0) + goalsScored;
    });

    // Find the month(s) with the most goals scored
    let mostGoalsCount = 0;
    let topMonths = [];

    for (const month in goalsByMonth) {
        const goals = goalsByMonth[month];

        if (goals > mostGoalsCount) {
            mostGoalsCount = goals;
            topMonths = [month];
        } else if (goals === mostGoalsCount) {
            topMonths.push(month);
        }
    }

    const capitalizedMonths = topMonths.map(month => month.charAt(0).toUpperCase() + month.slice(1));

    return `${mostGoalsCount} - ${capitalizedMonths.join(', ')}`;

    
}





function findPlayersWithMostAssistsInSingleGame(matches) {
    let topAssisters = [];
let topAssistsInSingleGame = 0;

// Iterate through each match
matches.forEach(match => {
    // Combine goal scorers from both teams for the current match
    const allAssisters = match.assisters;

    // Count goals for each scorer in the current match
    const assistGame = {};
    allAssisters.forEach(assister => {
        assistGame[assister] = (assistGame[assister] || 0) + 1;
    });

    // Find the player(s) with the most goals in the current match
    for (const assister in assistGame) {
        if (assistGame[assister] > topAssistsInSingleGame) {
            topAssisters = [assister];
            topAssistsInSingleGame = assistGame[assister];
        } else if (assistGame[assister] === topAssistsInSingleGame) {
            // If there are multiple players with the same highest goal count
            topAssisters.push(assister);
        }
    }
});
    return `${topAssistsInSingleGame} - ${topAssisters.join(', ')}`
}






// Print the result    
    console.log(matches);
    console.log(players);
    console.log(teams)

    const awardsData = [
        {
            category: "player_of_the_month",
            headers: ["Player of the Month", ""],
            data: [
                { month: "January", winner: "Pele" },
                { month: "February", winner: "Russian Keeper"},
                { month: "March", winner: "Benzema"},
                { month: "April", winner: "Suarez"},
            ],
        },
        {
            category: "games",
            headers: ["Matches", ""],
            data: [
                { category: "1st Game", winner: "01/01/2024 at 13:30" },
                { category: "10th Game", winner: "09/01/2024 at 12:00" },
                { category: "50th Game", winner: "28/03/2024 at 11:25" },
                { category: "75th Game", winner: "29/04/2024 at 17:05" },
                { category: "Highest Scoring Game", winner: findGameWithMostGoals(matches) },
                { category: "Most Games in a Month", winner: findMonthWithMostGames(matches) },
                { category: "Most Points in a Month", winner: findPlayerWithMostPointsInMonth(teams) },
                { category: "Most Defeats in a Month", winner: findPlayersWithMostDefeatsInMonth(teams) },
                { category: "Most Goals in a Month", winner: findMonthsWithMostGoals(matches) }
            ],
        },
        {
            category: "goals",
            headers: ["Goals", ""],
            data: [
                { category: "Most Goals", winner: findPlayersWithMostGoals(players)},
                { category: "1st Goal", winner: "Pele (01/01/2024) " },
                { category: "10th Goal", winner: "Caveman (08/01/2024) " },
                { category: "20th Gaol", winner: "Bale (05/02/2024)" },
                { category: "50th Goal", winner: "Benzema (24/02/2024)"},
                { category: "100th Goal", winner: "Ronaldo (25/03/2024)"},
                { category: "150th Goal", winner: "Suarez (27/04/2024)"},
                { category: "1st Slinger", winner: "Ronaldo (04/01/2024)" },
                { category: "10th Slinger", winner: "Van Dijk (red) (25/02/2024)"},
                { category: "25th Slinger", winner: "Modric (26/04/2024)"},
                { category: "Most Slingers", winner: findPlayerWithMostSlingers(players) },
                { category: "Most Goals in Single Game", winner: findPlayersWithMostGoalsInSingleGame(matches)}
            ],
        },
        {
            category: "assists",
            headers: ["Assists", ""],
            data: [
                { category: "Most Assists", winner: findPlayersWithMostAssists(players)},
                { category: "1st Assist", winner: "Lewnadowski"},
                { category: "10th Assist", winner: "Ronaldo"},
                { category: "20th Assist:", winner: "Carragher"},
                { category: "50th Assist", winner: "Benzema (04/03/2024)"},
                { category: "100th Assist", winner: "Pedri (06/04/2024)"},
                { category: "150th Assist", winner: "Haaland (17/05/2024)"},
                { category: "Most Assists in Single Game", winner: findPlayersWithMostAssistsInSingleGame(matches)}
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
                { category: "1st Yellow Card", winner: "Lewandowski (01/01/2024)" },
                { category: "50th Yellow Card", winner: "Eriksen (18/02/2024)"},
                { category: "100th Yellow Card", winner: "Ronaldo (25/03/2024)"},
                { category: "1st Red Card", winner: "Messi (08/01/2024)" },
                { category: "Most Yellow Cards", winner: findPlayersWithMostYellows(players)},
                { category: "Most Red Cards", winners: findPlayersWithMostReds(players) },
                { category: "Total Yellow Cards", winners: findTotalYellows(matches) },
                { category: "Total Red Cards", winners: findTotalReds(matches) },
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