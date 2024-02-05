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
            { category: "First Game", winner: "01/01/2024 at 13:30"},
            { category: "Tenth Game", winner: "09/01/2024 at 12:00"},
            { category: "Highest Scoring Game", winner: "4 goals - 09/01/2024 (17:10)"},
            { category: "Most Games in a Month", winner: "12 - January"},
            { category: "Most Points in a Month", winner: "15 - Pele (January)"},
            { category: "Most Defeats in a Month", winner: ["5 - Van Dijk", "Russian Keeper (January)"]},
            { category: "Most Goals in a Month", winner: "18 - January"}
        ],
    },
    {
        category: "goals",
        headers: ["Goals", ""],
        data: [
            { category: "Most Goals", winner: "4 - Mane" },
            { category: "First Goal", winner: "Pele (01/01/2024) " },
            { category: "Tenth Goal", winner: "Caveman (08/01/2024) "},
            { category: "Twentieth Gaol", winner: "Next Goal" },
            { category: "First Slinger", winner: "Ronaldo (04/01/2024)" },
            { category: "Most Slingers", winner: "3 - Ronaldo"}
        ],
    },
    {
        category: "appearances",
        headers: ["Appearances", ""],
        data: [
            { category: "Most Appearances", winner: "10 - Van Dijk" },
            { category: "Least Appearances", winners: ["0 - Kane", "Raul", "Torres", "Bowen"] },
        ],
    },
    {
        category: "disciplinary",
        headers: ["Disciplinary", ""],
        data: [
            { category: "First Yellow Card", winner: "Lewandowski (01/01/2024)" },
            { category: "First Red Card", winner: "Messi (08/01/2024)" },
            { category: "Most Yellow Cards", winner: ["3 - Messi (ft)", "Modric", "Zlatan"] },
            { category: "Most Red Cards", winners: ["1 - Messi", "Van Persie"] },
        ],
    },
    {
        category: "season",
        headers: ["Season", ""],
        data: [
            { category: "Total Games", winner: "TBD" },
            { category: "Total Goals", winner: "TBD" },
            { category: "Total Slingers", winner: "TBD" },
            { category: "Total Assists", winner: "TBD" },
            { category: "Most Appearances", winner: "TBD" },
            { category: "Most Wins", winner: "TBD" },
            { category: "Most Defeats", winner: "TBD" },
            { category: "Most Clean Sheets", winner: "TBD" },
            { category: "Most Yellow Cards", winner: "TBD" },
            { category: "Most Red Cards", winner: "TBD" },
            { category: "Most MOTM", winner: "TBD" },
            { category: "Most Points", winner: "TBD" },

        ]
    }
];

function renderAwards(awards) {
    awards.forEach(category => {
        const container = document.querySelector(`.${category.category}-container`);
        if (!container) return;

        const table = document.createElement("table");
        table.classList.add("table2"); // Add the 'table2' class
        container.appendChild(table);

        // Render headers
        const headerRow = table.insertRow();
        category.headers.forEach(header => {
            const th = document.createElement("th");
            th.innerHTML = header;
            headerRow.appendChild(th);
        });

        // Render data
        category.data.forEach(data => {
            const row = table.insertRow();
            Object.values(data).forEach(value => {
                const td = document.createElement("td");
                td.textContent = Array.isArray(value) ? value.join(", ") : value;
                row.appendChild(td);
            });
        });
    });
}

renderAwards(awardsData);
