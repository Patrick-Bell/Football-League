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
        team2: ["Stackers", "Van Dijk (orange)", "Neymar", "De Bruyne", "Berbatov", "Ronaldo"],
        scorers: ["Pele",],
        assisters: ["Lewandowski"],
        slingers: [],
        penalties: [],
        yellows: ["Lewandowski", "Boxer"],
        reds: [],
        cleansheets: ["Boxer", "Puyol", "Pele", "Kroos", "Ramos", "Lewandowski"],
        motm: "Pele",
        events: [],
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
        team1: ["Russian Keeper", "Van Dijk (orange)", "Mane", "Bastian", "Messi (ft)", "Zlatan"],
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
        team2: ["Stackers", "Van Dijk (orange)", "Son", "Bastian", "Beckham", "Lewandowski"],
        scorers: ["Son", "Lewandowski"],
        assisters: ["Bastian"],
        slingers: [],
        penalties: [],
        yellows: ["Neuer"],
        reds: [],
        cleansheets: ["Stackers", "Van Dijk (orange)", "Son", "Bastian", "Beckham", "Lewandowski"],
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
        team1: ["Stackers", "Van Dijk (orange)", "Pele", "De Bruyne", "Van Persie (red)", "Jiminez"],
        team2: ["Neuer", "Puyol", "Mahrez", "Eriksen", "Berbatov", "Benzema"],
        scorers: ["De Bruyne"],
        assisters: ["Van Persie (red)"],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: ["Stackers", "Van Dijk (orange)", "Pele", "De Bruyne", "Van Persie (red)", "Jiminez"],
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
        team2: ["Boxer", "Van Dijk (orange)", "Mahrez", "Modric", "Robinho", "Zlatan"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Zlatan"],
        reds: [],
        cleansheets: ["Stackers", "Van Dijk (red)", "Mbappe", "Maradonna", "Beckham", "Benzema", "Boxer", "Van Dijk (orange)", "Mahrez", "Modric", "Robinho", "Zlatan"],
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
        team2: ["Russian Keeper", "Van Dijk (orange)", "Neymar", "Bastian", "Robinho", "Lewandowski"],
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
        team1: ["Stackers", "Puyol", "Pele", "Kroos", "Van Persie (orange)", "Suarez"],
        team2: ["Russian Keeper", "Caveman", "Neymar", "De Bruyne", "Ramos", "Zlatan"],
        scorers: ["Pele"],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Caveman", "Suarez", "Zlatan", "Ramos"],
        reds: [],
        cleansheets: ["Stackers", "Puyol", "Pele", "Kroos", "Van Persie (orange)", "Suarez"],
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
        team1: ["Boxer", "Caveman", "Mane", "Modric", "Van Persie (orange)", "Muller"],
        team2: ["Stackers", "Van Dijk (orange)", "Messi", "Kroos", "Messi (ft)", "Suarez"],
        scorers: ["Caveman", "Mane"],
        assisters: ["Muller"],
        slingers: [],
        penalties: [],
        yellows: ["Muller", "Messi", "Messi (ft)", "Kroos", "Modric"],
        reds: ["Messi"],
        cleansheets: ["Boxer", "Caveman", "Mane", "Modric", "Van Persie (orange)", "Muller"],
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
        team1: ["Russian Keeper", "Caveman", "Son", "Kroos", "Van Persie (orange)", "Muller"],
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
        team1: ["Russian Keeper", "Van Dijk (orange)", "Mane", "Eriksen", "Assunco", "Zlatan"],
        team2: ["Neuer", "Puyol", "Pele", "Maradonna", "Van Persie (orange)", "Ronaldo"],
        scorers: ["Mane", "Puyol", "Ronaldo", "Pele"],
        assisters: ["Van Dijk (orange)", "Ronaldo", "Van Persie (orange)"],
        slingers: ["Puyol", "Ronaldo"],
        penalties: [],
        yellows: ["Ronaldo"],
        reds: [],
        cleansheets: [],
        motm: ["Ronaldo"],
        events: ["2 slingers", "Ronaldo first 3 goals, all slingers"]
    },
    {
        id: "12",
        month: "january",
        match_number: "12",
        date: "29/01/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 0, //away team
        team1: ["Neuer", "Caveman", "Mane", "Kroos", "Berbatov", "Benzema"],
        team2: ["Boxer", "Van Dijk (red)", "Neymar", "Modric", "Messi (ft)", "Ronaldo"],
        scorers: ["Benzema", "Mane"],
        assisters: ["Mane"],
        slingers: [],
        penalties: ["Mane"],
        yellows: ["Modric", "Kroos"],
        reds: [],
        cleansheets: ["Neuer", "Caveman", "Mane", "Kroos", "Berbatov", "Benzema"],
        motm: ["Mane"],
        events: ["Benzema loses motm to wheel against Mane, starts a beef", "Boxer first time losing and conceding"]
    },
    {
        id: "13",
        month: "february",
        match_number: "13",
        date: "02/02/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Neuer", "Van Dijk (orange)", "Pele", "De Bruyne", "Assunco", "Lewandowski"],
        team2: ["Boxer", "Van Dijk (red)", "Son", "Kroos", "Van Persie (orange)", "Benzema"],
        scorers: ["Assunco"],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Van Persie (orange)", "Son"],
        reds: ["Van Persie (orange)"],
        cleansheets: ["Neuer", "Van Dijk (orange)", "Pele", "De Bruyne", "Assunco", "Lewandowski"],
        motm: ["Assunco"],
        events: ["Assunco free-kick, bar and in", "Van Persie sent off, clipped Assunco that led to the free kick"]
    },
    {
        id: "14",
        month: "february",
        match_number: "14",
        date: "05/02/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Neuer", "Van Dijk (orange)", "Bale", "Eriksen", "Carragher", "Lewandowski"],
        team2: ["Boxer", "Caveman", "Bowen", "Modric", "Beckham", "Zlatan"],
        scorers: ["Bale", "Bowen"],
        assisters: ["Eriksen", "Beckham"],
        slingers: [],
        penalties: [],
        yellows: ["Modric", "Carragher", "Zlatan", "Beckham"],
        reds: [],
        cleansheets: [],
        motm: ["Modric"],
        events: ["Modric won motm in wheel against Bowen & Caveman", "Beckham mis-hit shot leads to Bowen goal", "Bowen debut", "Messi & Van Persie both came out in the generator but are banned so served it this game"]
    },
    {
        id: "15",
        month: "february",
        match_number: "15",
        date: "08/02/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Russian Keeper", "Caveman", "Neymar", "Maradonna", "Carragher", "Lewandowski"],
        team2: ["Stackers", "Van Dijk (orange)", "Bowen", "Kroos", "Assunco", "Ronaldo"],
        scorers: ["Lewandowski", "Lewandowski", "Ronaldo"],
        assisters: ["Neymar", "Russian Keeper", "Kroos"],
        slingers: ["Ronaldo"],
        penalties: [],
        yellows: ["Kroos", "Russian Keeper", "Neymar", "Bowen"],
        reds: [],
        cleansheets: [],
        motm: ["Lewandowski"],
        events: ["Lewandowski turn on Kroos for second goal", "Russian Keeper first win in 6 games"]
    },
    {
        id: "16",
        month: "february",
        match_number: "16",
        date: "09/02/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Russian Keeper", "Puyol", "Bowen", "Pedri", "Assunco", "Ronaldo"],
        team2: ["Stackers", "Van Dijk (red)", "Mane", "Eriksen", "Berbatov", "Kane"],
        scorers: ["Ronaldo"],
        assisters: ["Russian Keeper"],
        slingers: [],
        penalties: [],
        yellows: ["Mane", "Berbatov"],
        reds: [],
        cleansheets: ["Russian Keeper", "Puyol", "Bowen", "Pedri", "Assunco", "Ronaldo"],
        motm: ["Ronaldo"],
        events: ["Ronaldo fake shot before the goal", "Russian Keeper 2 assists in 2 games", "Raul only player to not play from original players"]
    },
    {
        id: "17",
        month: "february",
        match_number: "17",
        date: "12/02/2024",
        time: "11:40",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Russian Keeper", "Van Dijk (orange)", "Mane", "Modric", "Torres", "Benzema"],
        team2: ["Boxer", "Van Dijk (red)", "Mahrez", "De Bruyne", "Berbatov", "Ronaldo"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Modric"],
        reds: [],
        cleansheets: ["Russian Keeper", "Van Dijk (orange)", "Mane", "Modric", "Torres", "Benzema", "Boxer", "Van Dijk (red)", "Mahrez", "De Bruyne", "Berbatov", "Ronaldo"],
        motm: ["Van Dijk (red)"],
        events: ["Second 0-0 ever", "Torres debut, so only Raul with no apps"]
    },
    {
        id: "18",
        month: "february",
        match_number: "18",
        date: "12/02/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Boxer", "Van Dijk (orange)", "Neymar", "Pedri", "Carragher", "Benzema"],
        team2: ["Neuer", "Puyol", "Mane", "Bastian", "Beckham", "Zlatan"],
        scorers: ["Mane", "Pedri"],
        assisters: ["Zlatan", "Carragher"],
        slingers: [],
        penalties: [],
        yellows: ["Mane", "Neuer", "Beckham"],
        reds: ["Beckham"],
        cleansheets: [],
        motm: ["Pedri"],
        events: ["First goal was a long ball Zlatan and Van Dijk tussle, bounces straight to Mane", "Mane booked for diving", "Beckham sending off"]
    },
    {
        id: "19",
        month: "february",
        match_number: "19",
        date: "13/02/2024",
        time: "11:45",
        condition: "Rain",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["Stackers", "Van Dijk (red)", "Messi", "Bastian", "Ramos", "Kane"],
        team2: ["Russian Keeper", "Caveman", "Mahrez", "Eriksen", "Robinho", "Ronaldo"],
        scorers: ["Kane", "Robinho", "Robinho"],
        assisters: ["Ramos", "Mahrez"],
        slingers: ["Robinho", "Robinho"],
        penalties: [],
        yellows: ["Eriksen", "Ramos"],
        reds: [],
        cleansheets: [],
        motm: ["Robinho"],
        events: ["Robinho 2 slingers in a game", "Russian Keeper made many great saves", "Best quality game to date", "Patrick birthday game"]
    },
    {
        id: "20",
        month: "february",
        match_number: "20",
        date: "15/02/2024",
        time: "18:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["Neuer", "Puyol", "Messi", "Eriksen", "Messi (ft)", "Jiminez"],
        team2: ["Stackers", "Caveman", "Bowen", "Pedri", "Ramos", "Suarez"],
        scorers: ["Bowen", "Suarez"],
        assisters: ["Ramos", "Bowen"],
        slingers: [],
        penalties: [],
        yellows: ["Messi (ft)"],
        reds: ["Messi (ft)"],
        cleansheets: ["Stackers", "Caveman", "Bowen", "Pedri", "Ramos", "Suarez"],
        motm: ["Bowen"],
        events: ["Bowen cut in and great goal top corner", "Puyol rushed out for second goal and missed it", "Probably the worse team", "Messi (ft) second red card"]
    },
    {
        id: "21",
        month: "february",
        match_number: "21",
        date: "17/02/2024",
        time: "14:50",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 1, //away team
        team1: ["Boxer", "Puyol", "Neymar", "De Bruyne", "Carragher", "Ronaldo"],
        team2: ["Russian Keeper", "Van Dijk (orange)", "Bowen", "Kroos", "Torres", "Zlatan"],
        scorers: ["Zlatan"],
        assisters: ["Torres"],
        slingers: [],
        penalties: [],
        yellows: ["Zlatan", "De Bruyne"],
        reds: [],
        cleansheets: ["Russian Keeper", "Van Dijk (orange)", "Bowen", "Kroos", "Torres", "Zlatan"],
        motm: ["Russian Keeper"],
        events: ["Russian Keeper great saves shots from Ronaldo and Carragher", "Zlatan shouts back post and scores a tap in volley, first volley"]
    },
    {
        id: "22",
        month: "february",
        match_number: "22",
        date: "18/02/2024",
        time: "11:45",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Neuer", "Van Dijk (red)", "Bowen", "Bastian", "Ramos", "Kane"],
        team2: ["Russian Keeper", "Puyol", "Mbappe", "Eriksen", "Berbatov", "Jiminez"],
        scorers: ["Kane"],
        assisters: ["Bastian"],
        slingers: [],
        penalties: [],
        yellows: ["Jiminez", "Bastian", "Eriksen"],
        reds: [],
        cleansheets: ["Neuer", "Van Dijk (red)", "Bowen", "Bastian", "Ramos", "Kane"],
        motm: ["Ramos"],
        events: ["Russian Keeper made loads of saves", "Kane goal was a deflection of Mbappe"]
    },
    {
        id: "23",
        month: "february",
        match_number: "23",
        date: "18/02/2024",
        time: "16:40",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Boxer", "Caveman", "Mane", "Eriksen", "Ramos", "Kane"],
        team2: ["Stackers", "Puyol", "Mbappe", "Pedri", "Carragher", "Suarez"],
        scorers: ["Suarez", "Eriksen"],
        assisters: ["Mbappe", "Mane"],
        slingers: [],
        penalties: [],
        yellows: ["Carragher", "Eriksen"],
        reds: [],
        cleansheets: [],
        motm: ["Eriksen"],
        events: ["Mbappe flick assist to Suarez, bar and in", "Mane cross, Eriksen jumps in front of Carragher & Puyol and volleys it loops top corner post and in - best goal to date"]
    },
    {
        id: "24",
        month: "february",
        match_number: "24",
        date: "19/02/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Neuer", "Puyol", "Messi", "Eriksen", "Torres", "Lewandowski"],
        team2: ["Boxer", "Van Dijk (red)", "Son", "De Bruyne", "Ramos", "Muller"],
        scorers: [""],
        assisters: [""],
        slingers: [],
        penalties: [],
        yellows: ["Eriksen"],
        reds: [],
        cleansheets: ["Neuer", "Puyol", "Messi", "Eriksen", "Torres", "Lewandowski", "Boxer", "Van Dijk (red)", "Son", "De Bruyne", "Ramos", "Muller"],
        motm: ["Boxer"],
        events: [""]
    },
    {
        id: "25",
        month: "february",
        match_number: "25",
        date: "22/02/2024",
        time: "17:15",
        condition: "Rain",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Boxer", "Puyol", "Pele", "Bastian", "Van Persie (orange)", "Suarez"],
        team2: ["Neuer", "Caveman", "Mane", "Pedri", "Ramos", "Jiminez"],
        scorers: ["Caveman", "Pele"],
        assisters: ["Ramos"],
        slingers: [],
        penalties: [],
        yellows: ["Van Persie (orange)", "Bastian"],
        reds: [],
        cleansheets: [],
        motm: ["Caveman"],
        events: ["Pele free kick bar and in with weaker foot because leg was loose"]
    },
    {
        id: "26",
        month: "february",
        match_number: "26",
        date: "23/02/2024",
        time: "17:20",
        condition: "Rain",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Boxer", "Puyol", "Mane", "Pedri", "Van Persie (red)", "Lewandowski"],
        team2: ["Stackers", "Van Dijk (orange)", "Mahrez", "Modric", "Ramos", "Suarez"],
        scorers: ["Suarez", "Mane"],
        assisters: ["Modric"],
        slingers: ["Mane"],
        penalties: [],
        yellows: ["Suarez", "Pedri", "Ramos"],
        reds: [],
        cleansheets: [],
        motm: ["Mane"],
        events: ["Mane cut in before shot sent Ramos", "Modric proper playing for the draw even at the start", "Suarez forgot his yellow and swiped Lewandowski"]
    },
    {
        id: "27",
        month: "february",
        match_number: "27",
        date: "24/02/2024",
        time: "15:10",
        condition: "Rain",
        team1_score: 4, //home team
        team2_score: 3, //away team
        team1: ["Russian Keeper", "Puyol", "Neymar", "Pedri", "Torres", "Muller"],
        team2: ["Neuer", "Caveman", "Pele", "Eriksen", "Van Persie (orange)", "Benzema"],
        scorers: ["Muller", "Neymar", "Pedri (o.g)", "Neymar", "Pedri", "Benzema", "Benzema"],
        assisters: ["Pedri", "Torres", "Van Persie (orange)", "Torres", "Torres", "Pele", "Van Persie (orange)"],
        slingers: ["Neymar"],
        penalties: [],
        yellows: ["Russian Keeper", "Muller"],
        reds: [],
        cleansheets: [],
        motm: ["Neymar"],
        events: ["Neymar slinger and post and in goals", "Pedri funny own goal", "New Muller lego (old one)", "Muller good touch and ball roll for his goal"]
    },
    {
        id: "28",
        month: "february",
        match_number: "28",
        date: "25/02/2024",
        time: "18:00",
        condition: "Rain",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Russian Keeper", "Van Dijk (red)", "Messi", "Bastian", "Assunco", "Lewandowski"],
        team2: ["Neuer", "Van Dijk (orange)", "Neymar", "Maradonna", "Robinho", "Muller"],
        scorers: ["Van Dijk (red)"],
        assisters: ["Lewandowski"],
        slingers: ["Van Dijk (red)"],
        penalties: [],
        yellows: ["Muller", "Bastian"],
        reds: [],
        cleansheets: ["Russian Keeper", "Van Dijk (red)", "Messi", "Bastian", "Assunco", "Lewandowski"],
        motm: ["Van Dijk (red)"],
        events: []
    },
    {
        id: "29",
        month: "february",
        match_number: "29",
        date: "26/02/2024",
        time: "11:20",
        condition: "Wind",
        team1_score: 2, //home team
        team2_score: 2, //away team
        team1: ["Stackers", "Van Dijk (red)", "Bowen", "Pedri", "Messi (ft)", "Suarez"],
        team2: ["Neuer", "Caveman", "Son", "Modric", "Van Persie (orange)", "Kane"],
        scorers: ["Kane", "Pedri", "Suarez", "Kane"],
        assisters: ["Son", "Messi (ft)", "Pedri", "Son"],
        slingers: ["Kane", "Suarez"],
        penalties: [],
        yellows: ["Van Persie (orange)", "Bowen"],
        reds: [],
        cleansheets: [],
        motm: ["Kane"],
        events: ["Suarez good slinger, first to react", "Pedri going mental, got it back for his team", "Kane shot deflected of Van Dijk and looped in", "Suares bites Son at the end"]
    },
    {
        id: "30",
        month: "march",
        match_number: "30",
        date: "01/03/2024",
        time: "17:20",
        condition: "Wind",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Russian Keeper", "Ferdinand", "Mbappe", "Kroos", "Torres", "Benzema"],
        team2: ["Allison", "Risse", "Mane", "De Bruyne", "Van Persie (red)", "Ronaldo"],
        scorers: ["Torres", "De Bruyne", "Mbappe"],
        assisters: ["Benzema", "Mane", "Benzema"],
        slingers: ["Torres"],
        penalties: [],
        yellows: ["De Bruyne", "Ferdinand"],
        reds: [],
        cleansheets: [],
        motm: ["Benzema"],
        events: ["First game of March, new players in", "Raul quits the league"]
    },
    {
        id: "31",
        month: "march",
        match_number: "31",
        date: "02/03/2024",
        time: "11:40",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["Allison", "Puyol", "Mane", "Kroos", "Van Persie (red)", "Suarez"],
        team2: ["2-Face", "Russian Def", "Mbappe", "Pogba", "Assunco", "Ronaldo"],
        scorers: ["Ronaldo", "Mane", "Mbappe"],
        assisters: ["Pogba", "Kroos"],
        slingers: [],
        penalties: [],
        yellows: ["Assunco", "Pogba"],
        reds: [],
        cleansheets: [],
        motm: ["Pogba"],
        events: []
    },
    {
        id: "32",
        month: "march",
        match_number: "32",
        date: "02/03/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Allison", "Caveman", "Mane", "Kroos", "Ronaldinho", "Zlatan"],
        team2: ["Russian Keeper", "Van Dijk (orange)", "Beckham (lego)", "Pogba", "Torres", "Benzema"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Ronaldinho", "Zlatan"],
        reds: [],
        cleansheets: ["Allison", "Caveman", "Mane", "Kroos", "Ronaldinho", "Zlatan", "Russian Keeper", "Van Dijk (orange)", "Beckham (lego)", "Pogba", "Torres", "Benzema"],
        motm: ["Torres"],
        events: []
    },
    {
        id: "33",
        month: "march",
        match_number: "33",
        date: "03/03/2024",
        time: "17:40",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["2-Face", "Puyol", "Neymar", "Kroos", "Assunco", "Kane"],
        team2: ["Neuer", "Baldy", "Son", "Pedri", "Torres", "Benzema"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Torres", "Benzema"],
        reds: [],
        cleansheets: ["2-Face", "Puyol", "Neymar", "Kroos", "Assunco", "Kane", "Neuer", "Baldy", "Son", "Pedri", "Torres", "Benzema"],
        motm: ["2-Face"],
        events: ["Torres & Benzema heated argument and some rounders thrown", "2-Face brilliant save onto the bar"]
    },
    {
        id: "34",
        month: "march",
        match_number: "34",
        date: "04/03/2024",
        time: "17:20",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Allison", "Ferdinand", "Son", "Bastian", "Messi (ft)", "Benzema"],
        team2: ["Bruney", "Caveman", "Pele", "Modric", "Van Persie (red)", "Muller"],
        scorers: ["Pele", "Messi (ft)", "Ferdinand"],
        assisters: ["Modric", "Benzema", "Son"],
        slingers: [],
        penalties: [],
        yellows: ["Benzema"],
        reds: [],
        cleansheets: [],
        motm: ["Ferdinand"],
        events: ["Ferdinand long shot bar and in"]
    },
    {
        id: "35",
        month: "march",
        match_number: "35",
        date: "07/03/2024",
        time: "17:20",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["Russian Keeper", "Van Dijk (orange)", "Messi", "Pogba", "Ronaldinho", "Muller"],
        team2: ["Neuer", "Baldy", "Bale", "Kroos", "Assunco", "Zlatan"],
        scorers: ["Assunco", "Bale", "Muller"],
        assisters: ["Assunco", "Messi"],
        slingers: [],
        penalties: [],
        yellows: ["Assunco", "Neuer"],
        reds: [],
        cleansheets: [],
        motm: ["Assunco"],
        events: ["Muller disallowed slinger, ref blew whistle - from then he gave him everything, scored right at the end from a cross, no sound, got in front of Baldy", "Assunco free kick", "Bale post and in - best team goal"]
    },
    {
        id: "36",
        month: "march",
        match_number: "36",
        date: "08/03/2024",
        time: "11:50",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Caveman", "Bowen", "Kroos", "Beckham", "Zlatan"],
        team2: ["Boxer", "Ferdinand", "Son", "Pedri", "Ramos", "Jiminez"],
        scorers: ["Kroos", "Jiminez"],
        assisters: ["Bowen", "Ramos"],
        slingers: ["Jiminez"],
        penalties: [],
        yellows: ["Ferdinand", "Kroos"],
        reds: ["Ferdinand"],
        cleansheets: [],
        motm: ["Jiminez"],
        events: ["Zlatan had Ferdiand all game, got him sent off pretty much", "Jiminez slinger during extra time, Pedri unbeaten record stays"]
    },
    {
        id: "37",
        month: "march",
        match_number: "37",
        date: "08/03/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["Bruney", "Van Dijk (red)", "Bale", "Pedri", "Ronaldinho", "Zlatan"],
        team2: ["2-Face", "Russian Def", "Bowen", "Maradonna", "Assunco", "Benzema"],
        scorers: ["Bale", "Bowen", "Bowen"],
        assisters: [],
        slingers: [],
        penalties: ["Bale"],
        yellows: ["Maradonna", "Benzema", "Ronaldinho", "Assunco"],
        reds: [],
        cleansheets: [],
        motm: ["Bowen"],
        events: ["Bowen missed pen but got the rebound", "Bowen dirty nutmeg on Ronaldinho"]
    },
    {
        id: "38",
        month: "march",
        match_number: "38",
        date: "11/03/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Bruney", "Risse", "Beckham", "Kroos", "Ronaldinho", "Jiminez"],
        team2: ["2-Face", "Van Dijk (orange)", "Mane", "Maradonnna", "Carragher", "Zlatan"],
        scorers: ["Jiminez", "Zlatan"],
        assisters: ["Carragher"],
        slingers: [],
        penalties: ["Jiminez"],
        yellows: ["Van Dijk (orange)", "Kroos", "Ronaldinho", "Carragher"],
        reds: [],
        cleansheets: [],
        motm: ["Risse"],
        events: ["Jiminez top corner bar and in pen", "Zlatan header on Kroos"]
    },
    {
        id: "39",
        month: "march",
        match_number: "39",
        date: "15/03/2024",
        time: "13:15",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Ferdinand", "Bale", "Maradonna", "Van Persie (red)", "Suarez"],
        team2: ["Allison", "Caveman", "Beckham (lego)", "Pogba", "Van Persie (orange)", "Muller"],
        scorers: ["Pogba", "Maradonna"],
        assisters: ["Muller", "Maradonna"],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: [],
        motm: ["Suarez"],
        events: []
    },
    {
        id: "40",
        month: "march",
        match_number: "40",
        date: "16/03/2024",
        time: "13:45",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 2, //away team
        team1: ["Neuer", "Risse", "Messi", "Eriksen", "Carragher", "Muller"],
        team2: ["Russian Keeper", "Van Dijk (orange)", "Bowen", "De Bruyne", "Robinho", "Jiminez"],
        scorers: ["De Bruyne", "Bowen"],
        assisters: ["De Bruyne"],
        slingers: ["Bowen"],
        penalties: [],
        yellows: ["Messi", "Carragher", "Van Dijk (orange)"],
        reds: [],
        cleansheets: ["Russian Keeper", "Van Dijk (orange)", "Bowen", "De Bruyne", "Robinho", "Jiminez"],
        motm: ["De Bruyne"],
        events: ["De Bruyne free kick bar and in", "Messi misses great chance by Muller", "Bowen skip past Messi, he just missed him", "Messi rushed by Muller and Neuer at the end of the game"]
    },
    {
        id: "41",
        month: "march",
        match_number: "41",
        date: "16/03/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 1, //away team
        team1: ["2-Face", "Puyol", "Beckham (lego)", "Eriksen", "Messi (ft)", "Benzema"],
        team2: ["Boxer", "Van Dijk (orange)", "Mane", "Bastian", "Van Persie (red)", "Jiminez"],
        scorers: ["Bastian"],
        assisters: ["Van Persie (red)"],
        slingers: [],
        penalties: [],
        yellows: ["Messi (ft)"],
        reds: [],
        cleansheets: ["Boxer", "Van Dijk (orange)", "Mane", "Bastian", "Van Persie (red)", "Jiminez"],
        motm: ["Boxer"],
        events: []
    },
    {
        id: "42",
        month: "march",
        match_number: "42",
        date: "18/03/2024",
        time: "13:30",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Boxer", "Russian Def", "Son", "Pogba", "Ramos", "Kane"],
        team2: ["Bruney", "Caveman", "Bowen", "De Bruyne", "Van Persie (red)", "Benzema"],
        scorers: ["Caveman (o.g)", "Ramos", "Benzema"],
        assisters: ["Kane", "Van Persie (red)"],
        slingers: [],
        penalties: [],
        yellows: ["Russian Def", "Benzema"],
        reds: [],
        cleansheets: [],
        motm: ["Pogba"],
        events: []
    },
    {
        id: "43",
        month: "march",
        match_number: "43",
        date: "18/03/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Puyol", "Neymar", "Kroos", "Beckham", "Benzema"],
        team2: ["Allison", "Baldy", "Mahrez", "De Bruyne", "Assunco", "Ronaldo"],
        scorers: ["Neymar", "De Bruyne"],
        assisters: ["Benzema", "Assunco"],
        slingers: [],
        penalties: [],
        yellows: ["Beckham", "Kroos"],
        reds: ["Allison", "Russian Def"],
        cleansheets: [],
        motm: ["De Bruyne"],
        events: ["Neymar meats Baldy at the end and Baldy reacts and beef breaks out, Allison jumps in helping Neymar because he is brazilian"]
    },
    {
        id: "44",
        month: "march",
        match_number: "44",
        date: "21/03/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 2, //away team
        team1: ["Bruney", "Puyol", "Mahrez", "Eriksen", "Robinho", "Lewandowski"],
        team2: ["Neuer", "Van Dijk (red)", "Mane", "Modric", "Berbatov", "Benzema"],
        scorers: ["Lewandowski", "Robinho", "Eriksen (o.g)", "Mane"],
        assisters: ["Mahrez", "Modric"],
        slingers: ["Lewandowski"],
        penalties: [],
        yellows: ["Berbatov"],
        reds: [],
        cleansheets: [],
        motm: ["Mane"],
        events: ["Lewandowski slinger, cut inside and shot weaker foot.", "Eriksen at fault for both goals, own goal prevented Mane scoring kicked it hit bar and in", "For Mane goal, he bumped into Mahrez"]
    },
    {
        id: "45",
        month: "march",
        match_number: "45",
        date: "22/03/2024",
        time: "13:20",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 0, //away team
        team1: ["2-Face", "Caveman", "Mbappe", "Pedri", "Van Persie (red)", "Zlatan"],
        team2: ["Bruney", "Van Dijk (orange)", "Bowen", "Maradonna", "Messi (ft)", "Suarez"],
        scorers: ["Mbappe", "Van Persie (red)"],
        assisters: ["2-Fcce", "Zlatan"],
        slingers: [],
        penalties: [],
        yellows: ["Maradonna", "Van Persie (red)", "Messi (ft)"],
        reds: [],
        cleansheets: ["2-Face", "Caveman", "Mbappe", "Pedri", "Van Persie (red)", "Zlatan"],
        motm: ["Caveman"],
        events: [],
    },
    {
        id: "46",
        month: "march",
        match_number: "46",
        date: "22/03/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Boxer", "Van Dijk (red)", "Son", "Maradonna", "Berbatov", "Benzema"],
        team2: ["Stackers", "Puyol", "Bowen", "De Bruyne", "Robinho", "Muller"],
        scorers: ["De Bruyne", "Son"],
        assisters: ["Benzema"],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: [],
        motm: ["De Bruyne"],
        events: ["Ref sacked, Muller meat Maradonna who did go flying but play stopped and ref said play on, Muller scored slinger and after the game ref disallows it, Damien ref", "Messi (ft) banned as he should have missed last game, would have been with De Bruyne too"],
    },
    {
        id: "47",
        month: "march",
        match_number: "47",
        date: "23/03/2024",
        time: "12:05",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 2, //away team
        team1: ["2-Face", "Baldy", "Mane", "Maradonna", "Beckham", "Lewandowski"],
        team2: ["Allison", "Van Dijk (orange)", "Beckham (lego)", "Pedri", "Van Persie (red)", "Benzema"],
        scorers: ["Lewandowski", "Beckham (lego)", "Baldy", "Beckham (lego)"],
        assisters: ["Baldy", "Van Persie (red)", "Mane", "Van Persie (red)"],
        slingers: [],
        penalties: [],
        yellows: ["Beckham (lego)"],
        reds: [],
        cleansheets: [],
        motm: ["Baldy"],
        events: ["Beckham second goal he got in front of other Beckham farted on him and then scored"],
    },
    {
        id: "48",
        month: "march",
        match_number: "48",
        date: "25/03/2024",
        time: "17:20",
        condition: "Clear",
        team1_score: 4, //home team
        team2_score: 1, //away team
        team1: ["Bruney", "Puyol", "Messi", "Modric", "Van Persie (orange)", "Ronldo"],
        team2: ["2-Face", "Baldy", "Bale", "Bastian", "Van Persie (red)", "Zlatan"],
        scorers: ["Zlatan", "Ronaldo", "Ronaldo", "Ronaldo", "Messi"],
        assisters: ["Bale", "Modric", "Bruney", "Modric"],
        slingers: ["Messi"],
        penalties: [],
        yellows: ["Zlatan", "Ronaldo"],
        reds: [],
        cleansheets: [],
        motm: ["Ronaldo"],
        events: ["Ronaldo, first hatrick in the league, 1. Top corner near post 2. Touch from Bruney kick, turn and finesse top corner bar and in 3. Touch and shot far post post and in", "Messi slinger at the end"],
    },
    {
        id: "49",
        month: "march",
        match_number: "49",
        date: "27/03/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 3, //away team
        team1: ["Bruney", "Risse", "Mbappe", "Eriksen", "Van Persie (red)", "Muller"],
        team2: ["Russian Keeper", "Van Dijk (red)", "Bale", "Pogba", "Ramos", "Zlatan"],
        scorers: ["Ramos", "Zlatan", "Pogba", "Mbappe"],
        assisters: ["Pogba", "Russian Keeper", "Ramos", "Risse"],
        slingers: ["Pogba"],
        penalties: [],
        yellows: ["Risse"],
        reds: [],
        cleansheets: [],
        motm: ["Pogba"],
        events: ["Pogba one of the best goals, controlled the ball, composure, fake shot and then when Bruney took a step, he chipped it over him in the slinger, dirty goal"],
    },
    {
        id: "50",
        month: "march",
        match_number: "50",
        date: "28/03/2024",
        time: "11:25",
        condition: "Rain",
        team1_score: 0, //home team
        team2_score: 3, //away team
        team1: ["Neuer", "Risse", "Messi", "Eriksen", "Van Persie (red)", "Ronaldo"],
        team2: ["Boxer", "Baldy", "Pele", "Modric", "Messi (ft)", "Jiminez"],
        scorers: ["Jiminez", "Pele", "Pele"],
        assisters: ["Pele", "Messi (ft)"],
        slingers: [],
        penalties: ["Pele"],
        yellows: ["Messi", "Van Persie (red)", "Van Dijk (red)"],
        reds: [],
        cleansheets: ["Boxer", "Baldy", "Pele", "Modric", "Messi (ft)", "Jiminez"],
        motm: ["Pele"],
        events: ["Pele beat Baldy in motm wheel", "Boxer and Baldy played amazingly"],
    },
    {
        id: "51",
        month: "march",
        match_number: "51",
        date: "28/03/2024",
        time: "17:10",
        condition: "Rain",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["2-Face", "Baldy", "Mbappe", "Maradonna", "Torres", "Muller"],
        team2: ["Neuer", "Risse", "Neymar", "Pedri", "Berbatov", "Suarez"],
        scorers: ["Muller"],
        assisters: ["Mbappe"],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: ["2-Face", "Baldy", "Mbappe", "Maradonna", "Torres", "Muller"],
        motm: ["Baldy"],
        events: ["Baldy 2 W's times in a day", "Risse 2 L's in a day"],
    },
    {
        id: "52",
        month: "march",
        match_number: "52",
        date: "29/03/2024",
        time: "16:10",
        condition: "Rain",
        team1_score: 3, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Baldy", "Mane", "Maradonna", "Van Persie (red)", "Jiminez"],
        team2: ["Allison", "Caveman", "Bowen", "Modric", "Carragher", "Lewandowski"],
        scorers: ["Van Persie (red)", "Jiminez", "Mane", "Carragher"],
        assisters: ["Jiminez", "Mane", "Jiminez"],
        slingers: [],
        penalties: [],
        yellows: ["Jiminez", "Maradonna", "Carragher", "Baldy"],
        reds: ["Jiminez"],
        cleansheets: [],
        motm: ["Mane"],
        events: [],
    },
    {
        id: "53",
        month: "march",
        match_number: "53",
        date: "30/03/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Allison", "Van Dijk (orange)", "Son", "De Bruyne", "Ronaldinho", "Benzema"],
        team2: ["Bruney", "Baldy", "Beckham (lego)", "Bastian", "Beckham", "Zlatan"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Beckham", "Beckham (lego)", "Ronaldinho"],
        reds: [],
        cleansheets: ["Allison", "Van Dijk (orange)", "Son", "De Bruyne", "Ronaldinho", "Benzema", "Bruney", "Baldy", "Beckham (lego)", "Bastian", "Beckham", "Zlatan"],
        motm: ["Baldy"],
        events: [],
    },
    {
        id: "54",
        month: "march",
        match_number: "54",
        date: "31/03/2024",
        time: "18:35",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Neuer", "Puyol", "Bale", "Maradonna", "Berbatov", "Benzema"],
        team2: ["Bruney", "Baldy", "Pele", "Pogba", "Van Persie (red)", "Suarez"],
        scorers: ["Bale", "Bale", "Pele"],
        assisters: ["Berbatov", "Berbatov", "Pogba"],
        slingers: [],
        penalties: [],
        yellows: ["Van Persie (red)", "Benzema", "Maradonna"],
        reds: [],
        cleansheets: [],
        motm: ["Bale"],
        events: ["Jiminez initally came out to play Baldy for the month, but he is banned, then Benzema came out and won", "Benzema played def/mid"],
    },
    {
        id: "55",
        month: "april",
        match_number: "55",
        date: "01/04/2024",
        time: "13:00",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["2-Face", "Caveman", "Son", "Pedri", "Ronaldinho", "Muller"],
        team2: ["Boxer", "Russian Def", "Pele", "Eriksen", "Carragher", "Jiminez"],
        scorers: ["Jiminez", "Pedri", "Muller"],
        assisters: ["Muller", "Pedri"],
        slingers: ["Jiminez", "Muller"],
        penalties: [],
        yellows: ["Ronaldinho"],
        reds: [],
        cleansheets: [],
        motm: ["Pedri"],
        events: ["Jiminez free kick slinger", "Pedri diving header", "Muller hit the side net, went around the goal into the slinger"],
    },
    {
        id: "56",
        month: "april",
        match_number: "56",
        date: "01/04/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["Neuer", "Risse", "Bowen", "Pogba", "Carragher", "Zlatan"],
        team2: ["2-Face", "Russian Def", "Son", "Eriksen", "Assunco", "Suarez"],
        scorers: ["Son", "Son", "Pogba"],
        assisters: ["Assunco", "Carragher"],
        slingers: [],
        penalties: [],
        yellows: ["Son", "Bowen", "Carragher", "Assunco", "Zlatan"],
        reds: [],
        cleansheets: [],
        motm: ["Son"],
        events: ["Pogba injury"],
    },
    {
        id: "57",
        month: "april",
        match_number: "57",
        date: "02/04/2024",
        time: "11:35",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 0, //away team
        team1: ["Allison", "Baldy", "Neymar", "Pedri", "Torres", "Zlatan"],
        team2: ["Neuer", "Russian Def", "Messi", "Maradonna", "Robinho", "Suarez"],
        scorers: ["Pedri", "Neymar"],
        assisters: ["Torres"],
        slingers: [],
        penalties: [],
        yellows: ["Maradonna", "Russian Def", "Zlatan"],
        reds: [],
        cleansheets: ["Allison", "Baldy", "Neymar", "Pedri", "Torres", "Zlatan"],
        motm: ["Pedri"],
        events: ["Pedri free kick top corner post and in", "Torres cross and Neymar first time shot"],
    },
    {
        id: "58",
        month: "april",
        match_number: "58",
        date: "03/04/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Bruney", "Russian Def", "Mahrez", "Pedri", "Torres", "Suarez"],
        team2: ["Boxer", "Ferdinand", "Pele", "Pogba", "Ramos", "Zlatan"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Ramos", "Ferdinand", "Zlatan"],
        reds: [],
        cleansheets: ["Bruney", "Russian Def", "Mahrez", "Pedri", "Torres", "Suarez", "Boxer", "Ferdinand", "Pele", "Pogba", "Ramos", "Zlatan"],
        motm: ["Russian Def"],
        events: [],
    },
    {
        id: "59",
        month: "april",
        match_number: "59",
        date: "04/04/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["2-Face", "Van Dijk (red)", "Beckham (lego)", "Eriksen", "Torres", "Muller"],
        team2: ["Stackers", "Baldy", "Mahrez", "Kroos", "Henry", "Zlatan"],
        scorers: ["Henry", "Beckham (lego)"],
        assisters: ["Baldy", "Torres"],
        slingers: ["Beckham (lego)"],
        penalties: [],
        yellows: ["Zlatan", "Eriksen", "Muller"],
        reds: [],
        cleansheets: [],
        motm: ["Henry"],
        events: ["Beckham (lego) first time touch under Mahrez and hits it frmo far into far corner slinger, up there for best goal", "Henry debut and goal"],
    },
    {
        id: "60",
        month: "april",
        match_number: "60",
        date: "05/04/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Caveman", "Mbappe", "Pedri", "Carragher", "Ronaldo"],
        team2: ["Boxer", "Van Dijk (orange)", "Bowen", "Bastian", "Torres", "Zlatan"],
        scorers: ["Bowen", "Ronaldo"],
        assisters: ["Zlatan", "Mbappe"],
        slingers: [],
        penalties: [],
        yellows: ["Carragher", "Torres", "Zlatan", "Pedri"],
        reds: [],
        cleansheets: [],
        motm: ["Bowen"],
        events: [],
    },
    {
        id: "61",
        month: "april",
        match_number: "61",
        date: "06/04/2024",
        time: "15:50",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Neuer", "Trippier", "Messi", "Pedri", "Torres", "Suarez"],
        team2: ["Stackers", "Baldy", "Bowen", "Kroos", "Van Persie (orange)", "Kane"],
        scorers: ["Torres", "Bowen"],
        assisters: ["Pedri", "Baldy"],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: [],
        motm: ["Bowen"],
        events: [],
    },
    {
        id: "62",
        month: "april",
        match_number: "62",
        date: "08/04/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["Allison", "Van Dijk (orange)", "Pele", "Pogba", "Carragher", "Muller"],
        team2: ["Russian Keeper", "Risse", "Mahrez", "Bastian", "Henry", "Suarez"],
        scorers: ["Muller", "Risse", "Suarez"],
        assisters: ["Pele", "Suarez", "Henry"],
        slingers: ["Suarez"],
        penalties: [],
        yellows: ["Suarez", "Mahrez", "Bastian", "Carragher"],
        reds: [],
        cleansheets: [],
        motm: ["Suarez"],
        events: ["Suarez shot deflected on VVD and looped over into the slinger"],
    },
    {
        id: "63",
        month: "april",
        match_number: "63",
        date: "11/04/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 1, //away team
        team1: ["Bruney", "Puyol", "Bale", "Pedri", "Van Persie (orange)", "Lewandowski"],
        team2: ["Stackers", "Risse", "Son", "Bastian", "Van Persie (red)", "Suarez"],
        scorers: ["Suarez"],
        assisters: ["Van Persie (red)"],
        slingers: ["Suarez"],
        penalties: [],
        yellows: ["Bastian", "Risse", "Son"],
        reds: ["Bastian"],
        cleansheets: ["Stackers", "Risse", "Son", "Bastian", "Van Persie (red)", "Suarez"],
        motm: ["Stackers"],
        events: ["Suarez took a shot from a cross, sliced it and it curled in the air then bouced and bounced the other way over Bruney.", "Stackers tip shot onto the post"],
    },
    {
        id: "64",
        month: "april",
        match_number: "64",
        date: "12/04/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["2-Face", "Trippier", "Pele", "Modric", "Messi (ft)", "Lewandowski"],
        team2: ["Russian Keeper", "Caveman", "Bale", "De Bruyne", "Assunco", "Suarez"],
        scorers: ["Suarez", "Assunco", "Lewandowski"],
        assisters: ["De Bruyne", "Bale", "Trippier"],
        slingers: [],
        penalties: [],
        yellows: ["De Bruyne", "Messi (ft)"],
        reds: [],
        cleansheets: ["Stackers", "Risse", "Son", "Bastian", "Van Persie (red)", "Suarez"],
        motm: ["Caveman"],
        events: ["Bale outside foot pass to Assunco"],
    },
    {
        id: "65",
        month: "april",
        match_number: "65",
        date: "13/04/2024",
        time: "16:05",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Boxer", "Caveman", "Mahrez", "Kroos", "Berbatov", "Lewandowski"],
        team2: ["Russian Keeper", "Risse", "Son", "Pogba", "Robinho", "Jiminez"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: ["Boxer", "Caveman", "Mahrez", "Kroos", "Berbatov", "Lewandowski", "Russian Keeper", "Risse", "Son", "Pogba", "Robinho", "Jiminez"],
        motm: ["Caveman"],
        events: [],
    },
    {
        id: "66",
        month: "april",
        match_number: "66",
        date: "15/04/2024",
        time: "17:10",
        condition: "Wind",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Allison", "Russian Def", "Bowen", "Modric", "Ramos", "Kane"],
        team2: ["Stackers", "Puyol", "Neymar", "Kroos", "Messi (ft)", "Jiminez"],
        scorers: ["Kane"],
        assisters: [],
        slingers: ["Kane"],
        penalties: [],
        yellows: ["Kroos", "Neymar"],
        reds: ["Neymar"],
        cleansheets: ["Allison", "Russian Def", "Bowen", "Modric", "Ramos", "Kane"],
        motm: ["Stackers"],
        events: ["Stackers is the first player on a losing team to win motm, made loads of saves", "Neymar and Bowen tussle all game"],
    },
    {
        id: "67",
        month: "april",
        match_number: "67",
        date: "15/04/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Allison", "Van Dijk (red)", "Messi", "Maradonna", "Robinho", "Lewandowski"],
        team2: ["2-Face", "Puyol", "Mbappe", "Modric", "Van Persie (red)", "Suarez"],
        scorers: ["Messi"],
        assisters: ["Lewandowski"],
        slingers: [],
        penalties: [],
        yellows: ["Modric"],
        reds: [],
        cleansheets: ["Allison", "Van Dijk (red)", "Messi", "Maradonna", "Robinho", "Lewandowski"],
        motm: ["Maradonna"],
        events: ["Messi touch in front of Puyol and far corner"],
    },
    {
        id: "68",
        month: "april",
        match_number: "68",
        date: "21/04/2024",
        time: "15:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Boxer", "Puyol", "Mahrez", "Modric", "Ronaldinho", "Suarez"],
        team2: ["Bruney", "Baldy", "Son", "Kroos", "Berbatov", "Lewandowski"],
        scorers: ["Mahrez"],
        assisters: ["Modric"],
        slingers: [],
        penalties: [],
        yellows: ["Son", "Kroos", "Berbatov", "Lewandowski"],
        reds: [],
        cleansheets: ["Boxer", "Puyol", "Mahrez", "Modric", "Ronaldinho", "Suarez"],
        motm: ["Mahrez"],
        events: ["Mahrez ran into Modric (own team mate) and went down and ref gave a free kick not realising Modric then takes a quick one and they score from it"],
    },
    {
        id: "69",
        month: "april",
        match_number: "69",
        date: "24/04/2024",
        time: "13:05",
        condition: "Wind",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Boxer", "Ferdinand", "Pele", "Pedri", "Carragher", "Suarez"],
        team2: ["Neuer", "Russian Def", "Messi", "Kroos", "Berbatov", "Ronaldo"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Berbatov", "Messi"],
        reds: [],
        cleansheets: ["Boxer", "Ferdinand", "Pele", "Pedri", "Carragher", "Suarez", "Neuer", "Russian Def", "Messi", "Kroos", "Berbatov", "Ronaldo"],
        motm: ["Russian Def"],
        events: [],
    },
     {
        id: "70",
        month: "april",
        match_number: "70",
        date: "25/04/2024",
        time: "12:15",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 1, //away team
        team1: ["Neuer", "Risse", "Mane", "Kroos", "Beckham", "Suarez"],
        team2: ["Stackers", "Trippier", "Mahrez", "Pedri", "Robinho", "Zlatan"],
        scorers: ["Pedri"],
        assisters: ["Zlatan"],
        slingers: [],
        penalties: [],
        yellows: ["Robinho", "Mane", "Trippier", "Mahrez"],
        reds: [],
        cleansheets: ["Stackers", "Trippier", "Mahrez", "Pedri", "Robinho", "Zlatan"],
        motm: ["Pedri"],
        events: [],
    },
    {
        id: "71",
        month: "april",
        match_number: "71",
        date: "25/04/2024",
        time: "13:05",
        condition: "Rain",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Bruney", "Van Dijk (orange)", "Bale", "Maradonna", "Ronaldinho", "Jiminez"],
        team2: ["2-Face", "Puyol", "Pele", "De Bruyne", "Van Persie (orange)", "Zlatan"],
        scorers: ["Bale"],
        assisters: ["Ronaldinho"],
        slingers: [],
        penalties: [],
        yellows: ["Ronaldinho", "Van Persie (orange)"],
        reds: [],
        cleansheets: ["Bruney", "Van Dijk (orange)", "Bale", "Maradonna", "Ronaldinho", "Jiminez"],
        motm: ["Bale"],
        events: ["Bale tight angle, Damien shot it top corner post and in"],
    },
    {
        id: "72",
        month: "april",
        match_number: "72",
        date: "26/04/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 3, //home team
        team2_score: 1, //away team
        team1: ["Russian Keeper", "Van Dijk (orange)", "Mahrez", "Kroos", "Assunco", "Benzema"],
        team2: ["Allison", "Van Dijk (red)", "Messi", "Modric", "Robinho", "Ronaldo"],
        scorers: ["Modric", "Benzema", "Mahrez", "Mahrez"],
        assisters: ["Messi", "Kroos", "Russian Keeper", "Van Dijk (orange)"],
        slingers: ["Modric"],
        penalties: [],
        yellows: ["Kroos"],
        reds: [],
        cleansheets: [],
        motm: ["Mahrez"],
        events: ["Benzema side foot shot", "Mahrez proper meated Messi and dribbled forward and post and in"],
    },
    {
        id: "73",
        month: "april",
        match_number: "73",
        date: "27/04/2024",
        time: "1710",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 2, //away team
        team1: ["2-Face", "Puyol", "Beckham (lego)", "Modric", "Van Persie (orange)", "Lewandowski"],
        team2: ["Neuer", "Ferdinand", "Bowen", "Pogba", "Henry", "Suarez"],
        scorers: ["Lewandowski", "Lewandowski", "Ferdinand", "Suarez"],
        assisters: ["Pogba"],
        slingers: ["Ferdinand"],
        penalties: ["Lewandowski"],
        yellows: ["Ferdinand", "Pogba", "Beckham (lego)"],
        reds: [],
        cleansheets: [],
        motm: ["Lewandowski"],
        events: [],
    },
    {
        id: "74",
        month: "april",
        match_number: "74",
        date: "28/04/2024",
        time: "11:50",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Bruney", "Puyol", "Son", "De Bruyne", "Robinho", "Kane"],
        team2: ["Russian Keeper", "Van Dijk (orange)", "Mane", "Pogba", "Van Persie (orange)", "Ronaldo"],
        scorers: ["De Bruyne"],
        assisters: ["Kane"],
        slingers: [],
        penalties: [],
        yellows: ["Van Persie (orange)", "Pogba"],
        reds: [],
        cleansheets: ["Bruney", "Puyol", "Son", "De Bruyne", "Robinho", "Kane"],
        motm: ["De Bruyne"],
        events: ["Robinho funny cross", "Son killer through ball leads to goal", "Puyol and VVD (orange) 30th appearance"],
    },
    {
        id: "75",
        month: "april",
        match_number: "75",
        date: "29/04/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Bruney", "Van Dijk (red)", "Mbappe", "Pedri", "Torres", "Suarez"],
        team2: ["Allison", "Van Dijk (orange)", "Son", "De Bruyne", "Carragher", "Zlatan"],
        scorers: ["Suarez", "De Bruyne", "Suarez"],
        assisters: ["Carragher", "Mbappe"],
        slingers: [],
        penalties: [],
        yellows: ["Pedri", "Carragher"],
        reds: [],
        cleansheets: [],
        motm: ["Suarez"],
        events: ["Suarez wins the month, scores a free kick", "Pedri booked for diving", "new minifigures came today (modric, rm), ramos, kaka, haaland (aguero)"],
    },
    {
        id: "76",
        month: "april",
        match_number: "76",
        date: "30/04/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Risse", "Bowen", "Modric", "Beckham", "Lewandowski"],
        team2: ["Neuer", "Russian Def", "Neymar", "Eriksen", "Ronaldinho", "Jiminez"],
        scorers: ["Neymar", "Lewandowski", "Beckham"],
        assisters: ["Beckham", "Lewandowski"],
        slingers: ["Beckham"],
        penalties: ["Neymar"],
        yellows: ["Bowen", "Ronaldinho"],
        reds: [],
        cleansheets: [],
        motm: ["Beckham"],
        events: [],
    },
    {
        id: "77",
        month: "may",
        match_number: "77",
        date: "01/05/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Neuer", "Van Dijk (orange)", "Neymar", "Bastian", "Van Persie (red)", "Jiminez"],
        team2: ["Boxer", "Puyol", "Beckham (lego)", "Pedri", "Marquez", "Haaland"],
        scorers: ["Marquez", "Jiminez"],
        assisters: ["Pedri", "Van Persie (red)"],
        slingers: [],
        penalties: [],
        yellows: ["Bastian"],
        reds: [],
        cleansheets: [],
        motm: ["Marquez"],
        events: [],
    },
    {
        id: "78",
        month: "may",
        match_number: "78",
        date: "03/05/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 0, //away team
        team1: ["Stackers", "Risse", "Bale", "Kroos", "Van Persie (red)", "Suarez"],
        team2: ["Russian Keeper", "Van Dijk (red)", "Pele", "Modric", "Carragher", "Zlatan"],
        scorers: ["Suarez", "Bale"],
        assisters: ["Kroos"],
        slingers: [],
        penalties: [],
        yellows: ["Suarez", "Risse", "Modric", "Zlatan"],
        reds: [],
        cleansheets: ["Stackers", "Risse", "Bale", "Kroos", "Van Persie (red)", "Suarez"],
        motm: ["Bale"],
        events: ["Suarez free kick", "Bale wins motm by the wheel by a mm"],
    },
    {
        id: "79",
        month: "may",
        match_number: "79",
        date: "04/05/2024",
        time: "15:05",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["2-Face", "Van Dijk (red)", "Mahrez", "Pedri", "Carragher", "Haaland"],
        team2: ["Boxer", "Risse", "Neymar", "Modric", "Joaquin", "Benzema"],
        scorers: ["Neymar", "Benzema", "Mahrez"],
        assisters: ["Modric", "Haaland"],
        slingers: [],
        penalties: [],
        yellows: ["Joaquin", "Benzema"],
        reds: [],
        cleansheets: [],
        motm: ["Neymar"],
        events: [],
    },
    {
        id: "80",
        month: "may",
        match_number: "80",
        date: "05/05/2024",
        time: "18:45",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Allison", "Baldy", "Mane", "Eriksen", "Henry", "Kane"],
        team2: ["Boxer", "Trippier", "Kaka", "Kroos", "Robinho", "Ronaldo"],
        scorers: ["Kaka", "Eriksen", "Kane"],
        assisters: ["Robinho", "Eriksen"],
        slingers: [],
        penalties: ["Eriksen"],
        yellows: ["Ronaldo", "Kaka", "Eriksen"],
        reds: [],
        cleansheets: [],
        motm: ["Eriksen"],
        events: ["Eriksen unreal skill on Robinho, flicked it off his back leg and it lobbed over", "Eriksen hanging on the bar from a Robinho free kick and he blocked a definite goal"],
    },
    {
        id: "81",
        month: "may",
        match_number: "81",
        date: "06/05/2024",
        time: "18:45",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Russian Keeper", "Puyol", "Kaka", "De Bruyne", "Assunco", "Benzema"],
        team2: ["Boxer", "Trippier", "Mbappe", "Pogba", "Messi (ft)", "Ronaldo"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Messi (ft)"],
        reds: [],
        cleansheets: ["Russian Keeper", "Puyol", "Kaka", "De Bruyne", "Assunco", "Benzema", "Boxer", "Trippier", "Mbappe", "Pogba", "Messi (ft)", "Ronaldo"],
        motm: ["Boxer"],
        events: [],
    },
    {
        id: "82",
        month: "may",
        match_number: "82",
        date: "07/05/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["2-Face", "Ramos (lego)", "Mane", "Modric", "Berbatov", "Lewandowski"],
        team2: ["Boxer", "Risse", "Kaka", "Maradonna", "Assunco", "Zlatan"],
        scorers: ["Zlatan", "Berbatov"],
        assisters: ["Kaka", "Modric"],
        slingers: [],
        penalties: [],
        yellows: ["Assunco", "Maradonna"],
        reds: ["Maradonna"],
        cleansheets: [],
        motm: ["Berbatov"],
        events: ["Zlatan half volley bar and in from Kaka cross on Assunco side"],
    },
     {
        id: "83",
        month: "may",
        match_number: "83",
        date: "10/05/2024",
        time: "17:10",
        condition: "Sun",
        team1_score: 0, //home team
        team2_score: 2, //away team
        team1: ["Allison", "Puyol", "Son", "Eriksen", "Messi (ft)", "Lewandowski"],
        team2: ["Neuer", "Ramos (lego)", "Bale", "Bastian", "Ramos", "Ronaldo"],
        scorers: ["Ronaldo", "Bale"],
        assisters: ["Ramos", "Neuer"],
        slingers: ["Ronaldo"],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: ["Neuer", "Ramos (lego)", "Bale", "Bastian", "Ramos", "Ronaldo"],
        motm: ["Neuer"],
        events: ["Ronaldo back heel slinger goal", "Bale touch from Neuer pass cut in on Eriksen and side netting far corner"],
    },
    {
        id: "84",
        month: "may",
        match_number: "84",
        date: "12/05/2024",
        time: "14:05",
        condition: "Sun",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Ramos (lego)", "Mane", "Kroos", "Henry", "Benzema"],
        team2: ["Bruney", "Russian Def", "Bale", "Pogba", "Ramos", "Muller"],
        scorers: ["Benzema", "Bale"],
        assisters: ["Henry", "Russian Def"],
        slingers: [],
        penalties: [],
        yellows: ["Henry", "Russian Def", "Muller"],
        reds: [],
        cleansheets: [],
        motm: ["Russian Def"],
        events: ["Bale scored another goal where he touched it from a long pass and put it top far corner"],
    },
    {
        id: "85",
        month: "may",
        match_number: "85",
        date: "12/05/2024",
        time: "19:00",
        condition: "Sun",
        team1_score: 2, //home team
        team2_score: 2, //away team
        team1: ["Russian Keeper", "Caveman", "Neymar", "Modric", "Ramos", "Zlatan"],
        team2: ["Bruney", "Baldy", "Mbappe", "De Bruyne", "Henry", "Jiminez"],
        scorers: ["Jiminez", "Ramos", "Modric", "Jiminez"],
        assisters: ["De Bruyne", "Neymar", "Ramos", "Mbappe"],
        slingers: [],
        penalties: [],
        yellows: ["Henry"],
        reds: ["Jiminez"],
        cleansheets: [],
        motm: ["Ramos"],
        events: ["Ramos backheel flick to Modric perfect run and Modric scores post and in", "Jiminez swipes out Modric"],
    },
    {
        id: "86",
        month: "may",
        match_number: "86",
        date: "13/05/2024",
        time: "18:45",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Russian Keeper", "Ramos (lego)", "Bowen", "Bastian", "Ronaldinho", "Ronaldo"],
        team2: ["Allison", "Puyol", "Mahrez", "Eriksen", "Benega", "Lewandowski"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Mahrez", "Bowen", "Ronaldinho"],
        reds: [],
        cleansheets: ["Russian Keeper", "Ramos (lego)", "Bowen", "Bastian", "Ronaldinho", "Ronaldo", "Allison", "Puyol", "Mahrez", "Eriksen", "Benega", "Lewandowski"],
        motm: ["Russian Keeper"],
        events: [],
    },
    {
        id: "87",
        month: "may",
        match_number: "87",
        date: "13/05/2024",
        time: "22:00",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Bruney", "Trippier", "Mane", "De Bruyne", "Assunco", "Jiminez"],
        team2: ["Allison", "Van Dijk (orange)", "Kaka", "Eriksen", "Ronaldinho", "Kane"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Ronaldinho", "Jiminez"],
        reds: ["Ronaldinho"],
        cleansheets: ["Bruney", "Trippier", "Mane", "De Bruyne", "Assunco", "Jiminez", "Allison", "Van Dijk (orange)", "Kaka", "Eriksen", "Ronaldinho", "Kane"],
        motm: ["Allison"],
        events: ['Jiminez suspended but came out twice in a row so played', 'Meeting at the end of the game everyone attended to discuss potential rule changes with too many yellow cards being shown and ref abuse'],
    },
    {
        id: "88",
        month: "may",
        match_number: "88",
        date: "14/05/2024",
        time: "13:15",
        condition: "Clear",
        team1_score: 4, //home team
        team2_score: 1, //away team
        team1: ["2-Face", "Puyol", "Bale", "Eriksen", "Robinho", "Haaland"],
        team2: ["Allison", "Risse", "Pele", "De Bruyne", "Van Persie (orange)", "Lewandowski"],
        scorers: ["Haaland", "Pele", "Robinho", "Bale", "Risse (o.g)"],
        assisters: ["2-Face", "Lewandowski", "Bale", "Eriksen"],
        slingers: ["Bale"],
        penalties: [],
        yellows: ["De Bruyne"],
        reds: [],
        cleansheets: [],
        motm: ["Bale"],
        events: ["Haaland turn on Risse for first goal", "Bale long shot slinger"],
    },
    {
        id: "89",
        month: "may",
        match_number: "89",
        date: "14/05/2024",
        time: "22:15",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Allison", "Baldy", "Bale", "Kroos", "Henry", "Haaland"],
        team2: ["2-Face", "Russian Def", "Kaka", "Maradonna", "Beckham", "Muller"],
        scorers: ["Bale", "Muller"],
        assisters: ["Henry", "Kaka"],
        slingers: [],
        penalties: [],
        yellows: ["Beckham", "Russian Def"],
        reds: [],
        cleansheets: [],
        motm: ["Kaka"],
        events: ['2-Face saves Kroos penalty, given in the first 2 mins'],
    },
    {
        id: "90",
        month: "may",
        match_number: "90",
        date: "15/05/2024",
        time: "16:00",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["2-Face", "Russian Def", "Beckham (lego)", "De Bruyne", "Berbatov", "Benzema"],
        team2: ["Allison", "Ramos (lego)", "Neymar", "Maradonna", "Ramos", "Kane"],
        scorers: ["Benzema", "Beckham (lego)", "Neymar"],
        assisters: ["Beckham (lego", "Kane"],
        slingers: [],
        penalties: ["Beckham (lego)"],
        yellows: ["Neymar", "Maradonna", "Ramos"],
        reds: [],
        cleansheets: [],
        motm: ["Benzema"],
        events: ["Kane little flick to Neymar for the assist"],
    },
    {
        id: "91",
        month: "may",
        match_number: "91",
        date: "16/05/2024",
        time: "12:00",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["Russian Keeper", "Risse", "Son", "Bastian", "Messi (ft)", "Benzema"],
        team2: ["Neuer", "Caveman", "Neymar", "Modric", "Joaquin", "Kane"],
        scorers: ["Modric", "Son", "Kane"],
        assisters: ["Neymar", "Bastian"],
        slingers: [],
        penalties: ["Kane"],
        yellows: ["Messi (ft)", "Son"],
        reds: [],
        cleansheets: [],
        motm: ["Kane"],
        events: ["Messi (ft) racist to Son, Son hits out and the game abandonned. The 35 mins was finished today and they will both get 2 months ban"],
    },
    {
        id: "92",
        month: "may",
        match_number: "92",
        date: "17/05/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 3, //away team
        team1: ["Allison", "Van Dijk (orange)", "Mahrez", "Eriksen", "Van Persie (orange)", "Muller"],
        team2: ["Boxer", "Ferdinand", "Mbappe", "De Bruyne", "Van Persie (red)", "Haaland"],
        scorers: ["Van Persie (red)", "Haaland", "Haaland"],
        assisters: ["Haaland", "De Bruyne", "Mbappe"],
        slingers: [],
        penalties: [],
        yellows: ["Eriksen"],
        reds: [],
        cleansheets: ["Boxer", "Ferdinand", "Mbappe", "De Bruyne", "Van Persie (red)", "Haaland"],
        motm: ["Haaland"],
        events: ["Van Persie boosting?", "Haaland smash volley"]
    },
    {
        id: "93",
        month: "may",
        match_number: "93",
        date: "18/05/2024",
        time: "13:05",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 0, //away team
        team1: ["Stackers", "Ferdinand", "Mane", "Bastian", "Torres", "Kane"],
        team2: ["Bruney", "Russian Def", "Bale", "De Bruyne", "Henry", "Lewandowski"],
        scorers: ["Kane", "De Bruyne (o.g)"],
        assisters: ["Bastian", "Mane"],
        slingers: [],
        penalties: [],
        yellows: ["Torres", "Bastian", "Henry"],
        reds: [],
        cleansheets: ["Stackers", "Ferdinand", "Mane", "Bastian", "Torres", "Kane"],
        motm: ["Kane"],
        events: ["Mane keeps ball in play and smashes it in and hits De Bruyne"]
    },
    {
        id: "94",
        month: "may",
        match_number: "94",
        date: "18/05/2024",
        time: "19:30",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Bruney", "Van Dijk (orange)", "Bale", "Pogba", "Marquez", "Ronaldo"],
        team2: ["Stackers", "Ferdinand", "Mane", "Maradonna", "Van Persie (orange)", "Kane"],
        scorers: ["Marquez", "Mane"],
        assisters: ["Bale", "Maradonna"],
        slingers: ["Mane"],
        penalties: [],
        yellows: ["Pogba", "Van Persie (orange)", "Ronaldo"],
        reds: [],
        cleansheets: [],
        motm: ["Mane"],
        events: ["Mane quick to the side and shot slinger"]
    },
    {
        id: "95",
        month: "may",
        match_number: "95",
        date: "19/05/2024",
        time: "14:35",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 2, //away team
        team1: ["Russian Keeper", "Van Dijk (red)", "Pele", "Eriksen", "Robinho", "Kane"],
        team2: ["Boxer", "Risse", "Neymar", "Pogba", "Berbatov", "Benzema"],
        scorers: ["Robinho", "Risse", "Risse (o.g)", "Pogba"],
        assisters: ["Eriksen", "Pogba", "Benzema"],
        slingers: ["Risse"],
        penalties: [],
        yellows: ["Van Dijk (red)"],
        reds: [],
        cleansheets: [],
        motm: ["Pogba"],
        events: ["Pogba went rampage this game"]
    },
    {
        id: "96",
        month: "may",
        match_number: "96",
        date: "20/05/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 2, //away team
        team1: ["Bruney", "Ramos (lego)", "Mane", "De Bruyne", "Berbatov", "Lewandowski"],
        team2: ["Russian Keeper", "Trippier", "Pele", "Pedri", "Carragher", "Jiminez"],
        scorers: ["Lewandowski", "Carragher", "Pedri", "Mane"],
        assisters: ["Mane", "Pedri", "Carragher", "Lewandowski"],
        slingers: [],
        penalties: [],
        yellows: ["Trippier", "Mane", "Carragher"],
        reds: [],
        cleansheets: [],
        motm: ["Pedri"],
        events: []
    },
    {
        id: "97",
        month: "may",
        match_number: "97",
        date: "22/05/2024",
        time: "11:10",
        condition: "Rain",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Bruney", "Russian Def", "Neymar", "Bastian", "Ramos", "Muller"],
        team2: ["2-Face", "Puyol", "Mahrez", "Modric", "Robinho", "Jiminez"],
        scorers: ["Ramos", "Jiminez"],
        assisters: ["Muller"],
        slingers: [],
        penalties: [],
        yellows: ["Muller"],
        reds: [],
        cleansheets: [],
        motm: ["Ramos"],
        events: ["Bruney and Russian Def complete mess up at the back led to a tap in for Jiminez"]
    },
    {
        id: "98",
        month: "may",
        match_number: "98",
        date: "22/05/2024",
        time: "17:10",
        condition: "Rain",
        team1_score: 3, //home team
        team2_score: 0, //away team
        team1: ["Allison", "Risse", "Bale", "Pedri", "Robinho", "Haaland"],
        team2: ["Stackers", "Van Dijk (red)", "Mahrez", "Eriksen", "Beckham", "Zlatan"],
        scorers: ["Pedri", "Haaland", "Risse"],
        assisters: ["Haaland", "Risse", "Pedri"],
        slingers: [],
        penalties: [],
        yellows: ["Beckham", "Mahrez"],
        reds: ["Zlatan", "Robinho"],
        cleansheets: ["Allison", "Risse", "Bale", "Pedri", "Robinho", "Haaland"],
        motm: ["Haaland"],
        events: ["Zlatan and Robinho face to face ref (Damien) sends them both off"]
    },
    {
        id: "99",
        month: "may",
        match_number: "99",
        date: "24/05/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["2-Face", "Puyol", "Mbappe", "Modric", "Joaquin", "Haaland"],
        team2: ["Neuer", "Ramos (lego)", "Kaka", "Kroos", "Ramos", "Lewandowski"],
        scorers: ["Mbappe", "Ramos"],
        assisters: ["Modric"],
        slingers: [],
        penalties: [],
        yellows: ["Haaland", "Kroos"],
        reds: [],
        cleansheets: [],
        motm: ["Mbappe"],
        events: ["Ramos free kick post and in just above where Modric stood"]
    },
    {
        id: "100",
        month: "may",
        match_number: "100",
        date: "26/05/2024",
        time: "14:30",
        condition: "Sun",
        team1_score: 2, //home team
        team2_score: 3, //away team
        team1: ["2-Face", "Van Dijk (red)", "Messi", "Bastian", "Banega", "Muller"],
        team2: ["Allison", "Ramos (lego)", "Kaka", "De Bruyne", "Assunco", "Lewandowski"],
        scorers: ["Messi", "Ramos (lego) (o.g)", "Lewandowski", "Kaka", "Bastian (o.g)"],
        assisters: ["Assunco", "De Bruyne"],
        slingers: [],
        penalties: [],
        yellows: ["Messi", "Kaka"],
        reds: [],
        cleansheets: [],
        motm: ["Benega"],
        events: []
    },
    {
        id: "101",
        month: "may",
        match_number: "101",
        date: "26/05/2024",
        time: "18:20",
        condition: "Sun",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Russian Keeper", "Trippier", "Mbappe", "Pedri", "Ronaldinho", "Zlatan"],
        team2: ["Stackers", "Van Dijk (orange)", "Beckham (lego)", "Maradonna", "Assunco", "Benzema"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Van Dijk (orange)", "Beckham (lego)", "Assunco"],
        reds: ["Maradonna", "Ronaldinho"],
        cleansheets: ["Russian Keeper", "Trippier", "Mbappe", "Pedri", "Ronaldinho", "Zlatan", "Stackers", "Van Dijk (orange)", "Beckham (lego)", "Maradonna", "Assunco", "Benzema"],
        motm: ["Stackers"],
        events: []
    },
    {
        id: "102",
        month: "may",
        match_number: "102",
        date: "27/05/2024",
        time: "18:20",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Russian Keeper", "Risse", "Kaka", "Pedri", "Torres", "Jiminez"],
        team2: ["Allison", "Van Dijk (red)", "Mahrez", "Pogba", "Van Persie (red)", "Haaland"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Pogba", "Van Dijk (red)", "Jiminez"],
        reds: [],
        cleansheets: ["Russian Keeper", "Risse", "Kaka", "Pedri", "Torres", "Jiminez", "Allison", "Van Dijk (red)", "Mahrez", "Pogba", "Van Persie (red)", "Haaland"],
        motm: ["Allison"],
        events: []
    },
    {
        id: "103",
        month: "may",
        match_number: "103",
        date: "30/05/2024",
        time: "12:35",
        condition: "Clear",
        team1_score: 3, //home team
        team2_score: 0, //away team
        team1: ["Boxer", "Ramos (lego)", "Bowen", "De Bruyne", "Benega", "Ronaldo"],
        team2: ["Allison", "Trippier", "Mahrez", "Eriksen", "Joaquin", "Suarez"],
        scorers: ["Bowen", "De Bruyne", "Ronaldo"],
        assisters: ["De Bruyne"],
        slingers: [],
        penalties: [],
        yellows: ["Allison"],
        reds: [],
        cleansheets: ["Boxer", "Ramos (lego)", "Bowen", "De Bruyne", "Benega", "Ronaldo"],
        motm: ["De Bruyne"],
        events: ["De Bruyne perfect pass to Bowen", "De Bruyne free kick bar and in", "Trippier had a nightmare, mistake Ronaldo chips Allison"]
    },
    {
        id: "104",
        month: "may",
        match_number: "104",
        date: "30/05/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["2-Face", "Russian Def", "Mahrez", "Modric", "Robinho", "Ronaldo"],
        team2: ["Stackers", "Puyol", "Bowen", "Pogba", "Torres", "Zlatan"],
        scorers: ["Zlatan", "Mahrez", "Ronaldo (o.g)"],
        assisters: ["Robinho", "Zlatan"],
        slingers: ["Zlatan"],
        penalties: [],
        yellows: ["Ronaldo", "Robinho", "Modric"],
        reds: [],
        cleansheets: [],
        motm: ["Zlatan"],
        events: ["Zlatan bullied the other team"]
    },
    {
        id: "105",
        month: "may",
        match_number: "105",
        date: "31/05/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Boxer", "Baldy", "Messi", "Pedri", "Van Persie (red)", "Muller"],
        team2: ["2-Face", "Van Dijk (red)", "Mbappe", "Kroos", "Henry", "Ronaldo"],
        scorers: ["Muller", "Ronaldo"],
        assisters: ["Van Persie (red)", "Kroos"],
        slingers: [],
        penalties: [],
        yellows: ["Messi", "Van Persie (red)"],
        reds: [],
        cleansheets: [],
        motm: ["Ronaldo"],
        events: ["Turns out Ronaldo was banned and potentially ruined Boxer winning the month"]
    },
    {
        id: "106",
        month: "june",
        match_number: "106",
        date: "02/06/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Neuer", "Ramos (lego)", "Bale", "Modric", "Benega", "Haaland"],
        team2: ["Allison", "Caveman", "Beckham (lego)", "Eriksen", "Beckham", "Muller"],
        scorers: ["Caveman", "Benega"],
        assisters: ["Bale"],
        slingers: ["Caveman"],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: [],
        motm: ["Caveman"],
        events: []
    },
    {
        id: "107",
        month: "june",
        match_number: "107",
        date: "03/06/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 2, //away team
        team1: ["2-Face", "Russian Def", "Bowen", "Bastian", "Robinho", "Suarez"],
        team2: ["Stackers", "Puyol", "Mane", "Pogba", "Berbatov", "Kane"],
        scorers: ["Mane", "Mane"],
        assisters: ["Kane"],
        slingers: [],
        penalties: [],
        yellows: ["Bowen"],
        reds: [],
        cleansheets: ["Stackers", "Puyol", "Mane", "Pogba", "Berbatov", "Kane"],
        motm: ["Mane"],
        events: ["Robinho hit bar twice from free kicks", "Mane hit post 3 times", "Mane dirty touch on Bastian for second goal"]
    },
    {
        id: "108",
        month: "june",
        match_number: "108",
        date: "06/06/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 1, //away team
        team1: ["Russian Keeper", "Van Dijk (red)", "Bowen", "Bastian", "Torres", "Muller"],
        team2: ["Boxer", "Russian Def", "Kaka", "De Bruyne", "Benega", "Aguero"],
        scorers: ["Benega"],
        assisters: ["Aguero"],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: ["Boxer", "Russian Def", "Kaka", "De Bruyne", "Benega", "Aguero"],
        motm: ["Benega"],
        events: ["Game played over 2 days", "Torres loses for the first time"]
    },
    {
        id: "109",
        month: "june",
        match_number: "109",
        date: "07/06/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Neuer", "Van Dijk (red)", "Neymar", "Pedri", "Berbatov", "Zlatan"],
        team2: ["Bruney", "Russian Def", "Mane", "Eriksen", "Marquez", "Lewandowski"],
        scorers: ["Berbatov"],
        assisters: ["Pedri"],
        slingers: [],
        penalties: [],
        yellows: ["Zlatan", "Mane", "Berbatov"],
        reds: ["Zlatan"],
        cleansheets: ["Neuer", "Van Dijk (red)", "Neymar", "Pedri", "Berbatov", "Zlatan"],
        motm: ["Berbatov"],
        events: ["Racist ref booked Mane and got caught"]
    },
    {
        id: "110",
        month: "june",
        match_number: "110",
        date: "08/06/2024",
        time: "17:00",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["Neuer", "Van Dijk (red)", "Bowen", "Pedri", "Robinho", "Suarez"],
        team2: ["Allison", "Hummels", "Kaka", "De Bruyne", "Beckham", "Ronaldo"],
        scorers: ["De Bruyne", "Suarez", "Ronaldo"],
        assisters: ["Robinho", "De Bruyne"],
        slingers: ["Suarez"],
        penalties: [],
        yellows: ["Robinho", "Ronaldo"],
        reds: [],
        cleansheets: [],
        motm: ["De Bruyne"],
        events: ["De Bruyne free kick"]
    },
    {
        id: "111",
        month: "june",
        match_number: "111",
        date: "14/06/2024",
        time: "17:00",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Baldy", "Neymar", "Bastian", "Van Persie (red)", "Zlatan"],
        team2: ["Bruney", "Russian Def", "Bowen", "Pogba", "Marquez", "Benzema"],
        scorers: ["Zlatan", "Neymar (o.g)"],
        assisters: ["Baldy", "Pogba"],
        slingers: [],
        penalties: [],
        yellows: ["Zlatan", "Russian Def"],
        reds: [],
        cleansheets: [],
        motm: ["Pogba"],
        events: ["Pogba unreal pace at the touch line and cross to hit Neymar, pushed by Bowen"]
    },
    {
        id: "112",
        month: "june",
        match_number: "112",
        date: "15/06/2024",
        time: "11:45",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Russian Keeper", "Puyol", "Messi", "Bastian", "Assunco", "Muller"],
        team2: ["2-Face", "Ferdinand", "Kaka", "Modric", "Henry", "Kane"],
        scorers: ["Muller", "Muller", "Henry"],
        assisters: ["Assunco", "Messi"],
        slingers: [],
        penalties: [],
        yellows: ["Ferdinand", "Kaka"],
        reds: [],
        cleansheets: [],
        motm: ["Muller"],
        events: ["The Germans dominated the game"]
    },
    {
        id: "113",
        month: "june",
        match_number: "113",
        date: "16/06/2024",
        time: "15:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Trippier", "Neymar", "Kroos", "Van Persie (red)", "Lewandowski"],
        team2: ["Allison", "Russian Def", "Mahrez", "De Bruyne", "Carragher", "Zlatan"],
        scorers: ["Zlatan", "Neymar"],
        assisters: ["Russian Def", "Van Persie (red)"],
        slingers: [],
        penalties: [],
        yellows: ["De Bruyne"],
        reds: [],
        cleansheets: [],
        motm: ["Mahrez"],
        events: ["Zlatan scored probably the fastest goal", "Russian Defender going mental"]
    },
    {
        id: "114",
        month: "june",
        match_number: "114",
        date: "17/06/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Puyol", "Neymar", "Modric", "Ronaldinho", "Ronaldo"],
        team2: ["Neuer", "Ramos (lego)", "Kaka", "Eriksen", "Ramos", "Haaland"],
        scorers: ["Haaland", "Modric"],
        assisters: [],
        slingers: ["Haaland"],
        penalties: ["Modric"],
        yellows: ["Kaka", "Ramos"],
        reds: [],
        cleansheets: [],
        motm: ["Modric"],
        events: ["Ramos through ball to Haaland, Stackers went to kick it and it hit Haaland into the slinger", "Ramos handball to block Modric shot and Modric takes his time with the pen and puts it top left"]
    },
    {
        id: "115",
        month: "june",
        match_number: "115",
        date: "24/06/2024",
        time: "17:15",
        condition: "Sun",
        team1_score: 4, //home team
        team2_score: 1, //away team
        team1: ["Allison", "Van Dijk (red)", "Neymar", "Bastian", "Benega", "Kane"],
        team2: ["Stackers", "Caveman", "Bowen", "Pedri", "Van Persie (orange)", "Lewandowski"],
        scorers: ["Lewandowski", "Kane", "Kane", "Kane", "Neymar"],
        assisters: ["Van Dijk (red)", "Bastian", "Benega"],
        slingers: ["Kane"],
        penalties: [],
        yellows: ["Van Persie (orange)"],
        reds: [],
        cleansheets: [],
        motm: ["Kane"],
        events: ["Probably first 10/10 performance for the league", "Neymar stood in front of free kick and moved last second lol", "Kane briliant touches all game", "Bastian flick round the corner for second goal"]
    },
    {
        id: "116",
        month: "june",
        match_number: "116",
        date: "25/06/2024",
        time: "17:15",
        condition: "Sun",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["2-Face", "Russian Def", "Mbappe", "Kroos", "Berbatov", "Ronaldo"],
        team2: ["Allison", "Trippier", "Bale", "Modric", "Torres", "Kane"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Torres"],
        reds: [],
        cleansheets: ["2-Face", "Russian Def", "Mbappe", "Kroos", "Berbatov", "Ronaldo", "Allison", "Trippier", "Bale", "Modric", "Torres", "Kane"],
        motm: ["2-Face"],
        events: []
    },
    {
        id: "117",
        month: "june",
        match_number: "117",
        date: "29/06/2024",
        time: "11:40",
        condition: "Sun",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["2-Face", "Hummels", "Pele", "Bastian", "Van Persie (orange)", "Kane"],
        team2: ["Stackers", "Risse", "Messi", "Modric", "Assunco", "Haaland"],
        scorers: ["Kane", "Haaland "],
        assisters: ["Bastian", "Modric"],
        slingers: [],
        penalties: [],
        yellows: ["Van Persie (orange)", "Haaland"],
        reds: [],
        cleansheets: [],
        motm: ["Haaland"],
        events: []
    },
    {
        id: "118",
        month: "june",
        match_number: "118",
        date: "29/06/2024",
        time: "20:20",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Bruney", "Van Dijk (red)", "Bale", "Bastian", "Henry", "Benzema"],
        team2: ["Allison", "Trippier", "Bowen", "Modric", "Van Persie (red)", "Jiminez"],
        scorers: ["Bale", "Modric"],
        assisters: ["Bastian", "Van Persie (red)"],
        slingers: ["Modric"],
        penalties: [],
        yellows: ["Bastian", "Henry"],
        reds: [],
        cleansheets: [],
        motm: ["Modric"],
        events: ["Benzema tried clearing Modric shot off the line and ended up in the slinger"]
    },
    {
        id: "119",
        month: "june",
        match_number: "119",
        date: "30/06/2024",
        time: "12:05",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["2-Face", "Puyol", "Bale", "Kroos", "Benega", "Jiminez"],
        team2: ["Russian Keeper", "Van Dijk (orange)", "Messi", "Bastian", "Henry", "Aguero"],
        scorers: ["Kroos"],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Jiminez", "Benega", "Aguero"],
        reds: [],
        cleansheets: ["2-Face", "Puyol", "Bale", "Kroos", "Benega", "Jiminez"],
        motm: ["Kroos"],
        events: ["Everyone thought Puyol won the month but Benega actually did on having 1 more motm", "Kroos free kick"]
    },
    {
        id: "120",
        month: "july",
        match_number: "120",
        date: "04/07/2024",
        time: "11:30",
        condition: "Clear",
        team1_score: 3, //home team
        team2_score: 0, //away team
        team1: ["Stackers", "Baldy", "Bowen", "Eriksen", "Van Persie (orange)", "Benzema"],
        team2: ["Allison", "Trippier", "Kaka", "Maradonna", "Berbatov", "Muller"],
        scorers: ["Eriksen", "Eriksen", "Benzema"],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Muller", "Berbatov", "Benzema", "Van Persie (orange)", "Maradonna"],
        reds: [],
        cleansheets: ["Stackers", "Baldy", "Bowen", "Eriksen", "Van Persie (orange)", "Benzema"],
        motm: ["Eriksen"],
        events: []
    },
    {
        id: "121",
        month: "july",
        match_number: "121",
        date: "04/07/2024",
        time: "14:10",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Courtois", "Van Dijk (red)", "Messi", "Pogba", "Marquez", "Lewandowski"],
        team2: ["Boxer", "Caveman", "Mahrez", "Modric", "Van Persie (orange)", "Haaland"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Messi", "Mahrez"],
        reds: [],
        cleansheets: ["Courtois", "Van Dijk (red)", "Messi", "Pogba", "Marquez", "Lewandowski", "Boxer", "Caveman", "Mahrez", "Modric", "Van Persie (orange)", "Haaland"],
        motm: ["Caveman"],
        events: ["Courtois debut", "Caveman took Marquez pony tail off and Boxer gave him a rounder when the ref back was turned"]
    },
    {
        id: "122",
        month: "july",
        match_number: "122",
        date: "04/07/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 1, //away team
        team1: ["Courtois", "Risse", "Neymar", "Pogba", "Joaquin", "Suarez"],
        team2: ["Stackers", "Trippier", "Pele", "Pedri", "Van Persie (orange)", "Kane"],
        scorers: ["Kane"],
        assisters: ["Pele"],
        slingers: [],
        penalties: [],
        yellows: ["Joaquin"],
        reds: [],
        cleansheets: ["Stackers", "Trippier", "Pele", "Pedri", "Van Persie (orange)", "Kane"],
        motm: ["Kane"],
        events: ["Kane great movement to just get back onside before Pele crossed it, first time finish roof of net", "3 games in a day for the first time"]
    },
    {
        id: "123",
        month: "july",
        match_number: "123",
        date: "06/07/2024",
        time: "10:55",
        condition: "Rain",
        team1_score: 0, //home team
        team2_score: 1, //away team
        team1: ["Russian Keeper", "Hummels", "Kaka", "Kroos", "Henry", "Ronaldo"],
        team2: ["Neuer", "Baldy", "Mahrez", "Modric", "Torres", "Kane"],
        scorers: ["Kane"],
        assisters: ["Torres"],
        slingers: [],
        penalties: [],
        yellows: ["Mahrez", "Modric", "Henry"],
        reds: [],
        cleansheets: ["Neuer", "Baldy", "Mahrez", "Modric", "Torres", "Kane"],
        motm: ["Kane"],
        events: ["Kane late winner post and in Damien controlled it"]
    },
    {
        id: "124",
        month: "july",
        match_number: "124",
        date: "06/07/2024",
        time: "15:00",
        condition: "Rain",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["2-Face", "Ferdinand", "Bale", "Bastian", "Benega", "Haaland"],
        team2: ["Allison", "Russian Def", "Bowen", "Pogba", "Berbatov", "Aguero"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Ferdinand"],
        reds: [],
        cleansheets: ["2-Face", "Ferdinand", "Bale", "Bastian", "Benega", "Haaland", "Allison", "Russian Def", "Bowen", "Pogba", "Berbatov", "Aguero"],
        motm: ["Russian Def"],
        events: []
    },
    {
        id: "125",
        month: "july",
        match_number: "125",
        date: "08/07/2024",
        time: "11:45",
        condition: "Rain",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Russian Def", "Bale", "Pogba", "Ronaldinho", "Jiminez"],
        team2: ["Boxer", "Ramos (lego)", "Pele", "Maradonna", "Berbatov", "Suarez"],
        scorers: ["Ronaldinho", "Maradonna", "Bale"],
        assisters: ["Suarez"],
        slingers: [],
        penalties: ["Bale"],
        yellows: ["Pele"],
        reds: [],
        cleansheets: [],
        motm: ["Ronaldinho"],
        events: ["Controversial pen at the end, Pele kicking Bale but got ball first"]
    },
    {
        id: "126",
        month: "july",
        match_number: "126",
        date: "08/07/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Courtois", "Van Dijk (red)", "Mbappe", "Modric", "Torres", "Zlatan"],
        team2: ["Boxer", "Risse", "Bowen", "Kroos", "Marquez", "Benzema"],
        scorers: ["Bowen", "Torres", "Van Dijk (red)"],
        assisters: ["Benzema", "Modric", "Modric"],
        slingers: [],
        penalties: [],
        yellows: ["Zlatan", "Marquez"],
        reds: [],
        cleansheets: [],
        motm: ["Modric"],
        events: []
    },
     {
        id: "127",
        month: "july",
        match_number: "127",
        date: "11/07/2024",
        time: "11:35",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Stackers", "Ramos (lego)", "Mane", "Eriksen", "Beckham", "Lewandowski"],
        team2: ["Russian Keeper", "Trippier", "Mahrez", "Bastian", "Marquez", "Jiminez"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Beckham", "Bastian", "Mahrez", "Jiminez"],
        reds: [],
        cleansheets: ["Stackers", "Ramos (lego)", "Mane", "Eriksen", "Beckham", "Lewandowski", "Russian Keeper", "Trippier", "Mahrez", "Bastian", "Marquez", "Jiminez"],
        motm: [],
        events: ["Few controversial decisions, 1. Mane ghost goal not given ended up in slinger but don't think it went in 2. Eriksen header just didn't cross the line, one angle looked like it did", "Away team playing proper rough, physical game"]
    },
    {
        id: "128",
        month: "july",
        match_number: "128",
        date: "11/07/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Courtois", "Baldy", "Bowen", "Maradonna", "Ramos", "Ronaldo"],
        team2: ["Boxer", "Risse", "Neymar", "Pedri", "Robinho", "Jiminez"],
        scorers: ["Ronaldo", "Jiminez"],
        assisters: ["Bowen", "Robinho"],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: [],
        motm: [],
        events: ["Ronaldo got infront of Risse to put it in, after Risse pushed Pedri away for some reason", "Risse fouled Ronaldo and then scored a slinger disallowed whistle went"]
    },
    {
        id: "129",
        month: "july",
        match_number: "129",
        date: "12/07/2024",
        time: "11:50",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["2-Face", "Baldy", "Neymar", "Pogba", "Torres", "Zlatan"],
        team2: ["Russian Keeper", "Russian Def", "Mahrez", "Eriksen", "Carragher", "Muller"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: ["2-Face", "Baldy", "Neymar", "Pogba", "Torres", "Zlatan", "Russian Keeper", "Russian Def", "Mahrez", "Eriksen", "Carragher", "Muller"],
        motm: ["2-Face"],
        events: []
    },
    {
        id: "130",
        month: "july",
        match_number: "130",
        date: "12/07/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["2-Face", "Ferdinand", "Messi", "Pogba", "Ronaldinho", "Benzema"],
        team2: ["Neuer", "Baldy", "Bale", "Maradonna", "Ramos", "Jiminez"],
        scorers: ["Jiminez", "Benzema", "Jiminez"],
        assisters: ["Bale"],
        slingers: [],
        penalties: ["Jiminez"],
        yellows: ["Ferdinand"],
        reds: [],
        cleansheets: [],
        motm: ["Jiminez"],
        events: ["Jiminez bullied Ferdinand, got a penalty early on and then quick feet him towards the end and scored, good battle throughout the game"]
    },
    {
        id: "131",
        month: "july",
        match_number: "131",
        date: "13/07/2024",
        time: "13:15",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 3, //away team
        team1: ["Allison", "Baldy", "Mbappe", "Bastian", "Berbatov", "Lewandowski"],
        team2: ["Bruney", "Hummels", "Mane", "De Bruyne", "Robinho", "Suarez"],
        scorers: ["Suarez", "Mane", "Hummels"],
        assisters: ["Robinho", "Suarez", "Bruney"],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: ["Bruney", "Hummels", "Mane", "De Bruyne", "Robinho", "Suarez"],
        motm: ["Hummels"],
        events: ["Suarez and Robinho 1-2 through the pitch", "Hummels long shot at the end post and in", "Lewandowski walks off the pitch with at least 3-5 mins to go"]
    },
    {
        id: "132",
        month: "july",
        match_number: "132",
        date: "13/07/2024",
        time: "15:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Ramos (lego)", "Mane", "Kroos", "Carragher", "Lewandowski"],
        team2: ["Bruney", "Ferdinand", "Mahrez", "De Bruyne", "Beckham", "Muller"],
        scorers: ["Mane", "Muller"],
        assisters: ["Lewandowski", "Carragher"],
        slingers: [],
        penalties: [],
        yellows: ["Beckham", "Carragher"],
        reds: ["Beckham"],
        cleansheets: [],
        motm: ["Muller"],
        events: ["Muller scored probably one of the best goals, cuts out and then says cut in on Carragher and then shot it on the left wing and it looped over and clipped the bar on the way down"]
    },
    {
        id: "133",
        month: "july",
        match_number: "133",
        date: "14/07/2024",
        time: "12:00",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 0, //away team
        team1: ["Stackers", "Risse", "Beckham (lego)", "Pedri", "Carragher", "Jiminez"],
        team2: ["Boxer", "Baldy", "Neymar", "Pogba", "Ronaldinho", "Lewandowski"],
        scorers: ["Jiminez", "Jiminez"],
        assisters: ["Beckham (lego)"],
        slingers: [],
        penalties: ["Jiminez"],
        yellows: ["Pogba"],
        reds: [],
        cleansheets: ["Stackers", "Risse", "Beckham (lego)", "Pedri", "Carragher", "Jiminez"],
        motm: ["Jiminez"],
        events: ["Strong claims that Baldy boosted for Jiminez, gave away a penalty", "Stackers also beenfited which wasn't considered by the Mexicans"]
    },
    {
        id: "134",
        month: "july",
        match_number: "134",
        date: "15/07/2024",
        time: "22:00",
        condition: "Sun",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["Bruney", "Hummels", "Bale", "Modric", "Berbatov", "Muller"],
        team2: ["Stackers", "Van Dijk (orange)", "Mbappe", "De Bruyne", "Van Persie (red)", "Kane"],
        scorers: ["Mbappe", "Kane", "Berbatov"],
        assisters: ["Kane", "Van Persie (red)"],
        slingers: [],
        penalties: [],
        yellows: ["Mbappe"],
        reds: [],
        cleansheets: [],
        motm: ["Kane"],
        events: ["Match 1 of 5 (Naples, Italy)", "Referee: Krusty"]
    },
    {
        id: "135",
        month: "july",
        match_number: "135",
        date: "17/07/2024",
        time: "22:45",
        condition: "Sun",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Allison", "Ramos (lego)", "Beckham (lego)", "Bastian", "Ronaldinho", "Kane"],
        team2: ["Bruney", "Baldy", "Mahrez", "Pedri", "Henry", "Benzema"],
        scorers: ["Kane", "Mahrez"],
        assisters: ["Beckham (lego)", "Pedri"],
        slingers: [],
        penalties: [],
        yellows: ["Benzema"],
        reds: [],
        cleansheets: [],
        motm: ["Mahrez"],
        events: ["Match 2 of 5 (Naples, Italy)", "Referee: Headband"]
    },
    {
        id: "136",
        month: "july",
        match_number: "136",
        date: "19/07/2024",
        time: "13:15",
        condition: "Sun",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Neuer", "Trippier", "Beckham (lego)", "Pogba", "Ronaldinho", "Suarez"],
        team2: ["2-Face", "Baldy", "Bowen", "Kroos", "Robinho", "Aguero"],
        scorers: ["Robinho", "Suarez"],
        assisters: ["Kroos"],
        slingers: [],
        penalties: [],
        yellows: ["Ronaldinho"],
        reds: ["Suarez", "Ronaldinho"],
        cleansheets: [],
        motm: ["Robhinho"],
        events: ["Match 3 of 5 (Naples, Italy)", "Referee: Black Hair", "Suarez starte beef with Bowen and Ronaldinho jumped in at the end"]
    },
    {
        id: "137",
        month: "july",
        match_number: "137",
        date: "19/07/2024",
        time: "19:50",
        condition: "Sun",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["Allison", "Russian Def", "Son", "Kroos", "Joaquin", "Aguero"],
        team2: ["Neuer", "Ferdinand", "Pele", "Maradonna", "Benega", "Benzema"],
        scorers: ["Son", "Pele", "Maradonnna"],
        assisters: ["Kroos", "Pele"],
        slingers: [],
        penalties: ["Pele"],
        yellows: ["Russian Def", "Neuer"],
        reds: [],
        cleansheets: [],
        motm: ["Pele"],
        events: ["Match 4 of 5 (Naples, Italy)", "Referee: Headband", "Pele dived for the pen and got Russian Def booked"]
    },
    {
        id: "138",
        month: "july",
        match_number: "138",
        date: "20/07/2024",
        time: "00:05",
        condition: "Sun",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Bruney", "Van Dijk (orange)", "Beckham (lego)", "Eriksen", "Robinho", "Kane"],
        team2: ["2-Face", "Ramos (lego)", "Mbappe", "Bastian", "Messi (ft)", "Jiminez"],
        scorers: ["Jiminez", "Beckham (lego)"],
        assisters: ["Messi (ft)", "Kane"],
        slingers: [],
        penalties: [],
        yellows: ["Ramos (lego)", "Messi (ft)"],
        reds: [],
        cleansheets: [],
        motm: [""],
        events: ["Match 5 of 5 (Naples, Italy)", "Referee: Krusty", "Carragher had to be subbed in first 5 mins because his arm was hanging off", "Assunco and Boxer miss out on Italy games"]
    },
    {
        id: "139",
        month: "july",
        match_number: "139",
        date: "22/07/2024",
        time: "00:05",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Hummels", "Mane", "Modric", "Ramos", "Ronaldo"],
        team2: ["Courtois", "Risse", "Son", "Eriksen", "Joaquin", "Lewandowski"],
        scorers: ["Ronaldo", "Lewandowski", "Ronaldo"],
        assisters: ["Ramos"],
        slingers: ["Ronaldo"],
        penalties: [],
        yellows: ["Joaquin"],
        reds: [],
        cleansheets: [],
        motm: ["Ronaldo"],
        events: []
    },
    {
        id: "140",
        month: "july",
        match_number: "140",
        date: "23/07/2024",
        time: "12:10",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 0, //away team
        team1: ["Russian Keeper", "Baldy", "Pele", "De Bruyne", "Marquez", "Aguero"],
        team2: ["2-Face", "Ramos (lego)", "Bale"< "Eriksen", "Van Persie (orange)", "Zlatan"],
        scorers: ["De Bruyne", "Aguero"],
        assisters: ["Pele"],
        slingers: [],
        penalties: [],
        yellows: ["Eriksen", "Van Persie (orange)"],
        reds: ["Van Persie (orange)"],
        cleansheets: ["Russian Keeper", "Baldy", "Pele", "De Bruyne", "Marquez", "Aguero"],
        motm: ["De Bruyne"],
        events: ["De Bruyne free kick near slinger goal", "Marquez first win"]
    },
    {
        id: "141",
        month: "july",
        match_number: "141",
        date: "23/07/2024",
        time: "17:00",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 1, //away team
        team1: ["Neuer", "Puyol", "Bowen", "Pedri", "Berbatov", "Aguero"],
        team2: ["Bruney", "Caveman", "Son", "Pogba", "Van Persie (red)", "Muller"],
        scorers: ["Muller", "Pedri", "Bowen"],
        assisters: ["Pogba", "Puyol", "Pedri"],
        slingers: [],
        penalties: [],
        yellows: ["Son"],
        reds: [],
        cleansheets: [],
        motm: ["Bowen"],
        events: []
    },
    {
        id: "142",
        month: "july",
        match_number: "142",
        date: "24/07/2024",
        time: "17:00",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 1, //away team
        team1: ["Stackers", "Trippier", "Kaka", "Maradonna", "Van Persie (red)", "Zlatan"],
        team2: ["Neuer", "Caveman", "Pele", "Pogba", "Marquez", "Ronaldo"],
        scorers: ["Pele"],
        assisters: ["Marquez"],
        slingers: [],
        penalties: [],
        yellows: ["Van Persie (red)"],
        reds: [],
        cleansheets: ["Neuer", "Caveman", "Pele", "Pogba", "Marquez", "Ronaldo"],
        motm: ["Neuer"],
        events: []
    },
    {
        id: "143",
        month: "july",
        match_number: "143",
        date: "24/07/2024",
        time: "17:00",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 0, //away team
        team1: ["Stackers", "Baldy", "Son", "Pedri", "Robinho", "Muller"],
        team2: ["2-Face", "Puyol", "Kaka", "Modric", "Benega", "Jiminez"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Muller", "Jiminez"],
        reds: [],
        cleansheets: ["Stackers", "Baldy", "Son", "Pedri", "Robinho", "Muller", "2-Face", "Puyol", "Kaka", "Modric", "Benega", "Jiminez"],
        motm: ["Robinho"],
        events: []
    },
    {
        id: "144",
        month: "july",
        match_number: "144",
        date: "26/07/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Courtois", "Puyol", "Kaka", "Pogba", "Berbatov", "Jiminez"],
        team2: ["Allison", "Russian Def", "Mbappe", "Kroos", "Assunco", "Muller"],
        scorers: ["Pogba", "Muller"],
        assisters: ["Jiminez", "Assunco"],
        slingers: ["Muller"],
        penalties: [],
        yellows: ["Kaka", "Puyol"],
        reds: [],
        cleansheets: [],
        motm: [],
        events: ["Muller slinger right at the end"]
    },
    {
        id: "145",
        month: "july",
        match_number: "145",
        date: "27/07/2024",
        time: "12:20",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 2, //away team
        team1: ["Russian Keeper", "Ferdinand", "Son", "Maradonna", "Carragher", "Aguero"],
        team2: ["Stackers", "Trippier", "Pele", "Pogba", "Henry", "Zlatan"],
        scorers: ["Zlatan", "Henry", "Maradonna"],
        assisters: ["Trippier", "Zlatan", "Carragher"],
        slingers: ["Maradonna"],
        penalties: [],
        yellows: ["Henry"],
        reds: [],
        cleansheets: [],
        motm: ["Pogba"],
        events: ["Stackers 50th game and beats Suarez month points record of 22"]
    },
    {
        id: "146",
        month: "july",
        match_number: "146",
        date: "27/07/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 1, //away team
        team1: ["Russian Keeper", "Russian Def", "Bale", "Pedri", "Van Persie (red)", "Haaland"],
        team2: ["Courtois", "Baldy", "Pele", "Eriksen", "Carragher", "Aguero"],
        scorers: ["Pele"],
        assisters: ["Aguero"],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: ["Courtois", "Baldy", "Pele", "Eriksen", "Carragher", "Aguero"],
        motm: ["Pele"],
        events: ["Pele dirty nutmeg on Russian Def"]
    },
    {
        id: "147",
        month: "july",
        match_number: "147",
        date: "27/07/2024",
        time: "18:40",
        condition: "Clear",
        team1_score: 2, //home team
        team2_score: 0, //away team
        team1: ["Courtois", "Van Dijk (red)", "Kaka", "Pedri", "Marquez", "Muller"],
        team2: ["2-Face", "Van Dijk (orange)", "Messi", "Bastian", "Benega", "Zlatan"],
        scorers: ["Muller", "Marquez"],
        assisters: ["Pedri", "Muller"],
        slingers: [],
        penalties: [],
        yellows: [],
        reds: [],
        cleansheets: ["Courtois", "Van Dijk (red)", "Kaka", "Pedri", "Marquez", "Muller"],
        motm: ["Marquez"],
        events: []
    },
    {
        id: "148",
        month: "july",
        match_number: "148",
        date: "28/07/2024",
        time: "12:20",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["Russian Keeper", "Hummels", "Bale", "Pedri", "Benega", "Ronaldo"],
        team2: ["Courtois", "Ramos (lego)", "Son", "De Bruyne", "Robinho", "Kane"],
        scorers: ["Ronaldo"],
        assisters: ["Benega"],
        slingers: [],
        penalties: [],
        yellows: ["Robinho"],
        reds: [],
        cleansheets: ["Russian Keeper", "Hummels", "Bale", "Pedri", "Benega", "Ronaldo"],
        motm: ["Ronaldo"],
        events: []
    },
    {
        id: "149",
        month: "july",
        match_number: "149",
        date: "28/07/2024",
        time: "17:10",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["Courtois", "Van Dijk (red)", "Bale", "Pedri", "Henry", "Haaland"],
        team2: ["Boxer", "Risse", "Pele", "Eriksen", "Carragher", "Zlatan"],
        scorers: ["Pedri", "Pele"],
        assisters: ["Henry", "Zlatan"],
        slingers: [],
        penalties: [],
        yellows: ["Haaland", "Risse"],
        reds: [],
        cleansheets: [],
        motm: [""],
        events: []
    },
    {
        id: "150",
        month: "july",
        match_number: "150",
        date: "29/07/2024",
        time: "17:15",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 0, //away team
        team1: ["2-Face", "Van Dijk (orange)", "Messi", "Eriksen", "Henry", "Haaland"],
        team2: ["Stackers", "Russian Def", "Pele", "De Bruyne", "Messi (ft)", "Benzema"],
        scorers: ["Haaland"],
        assisters: ["Henry"],
        slingers: ["Haaland"],
        penalties: [],
        yellows: ["Messi (ft)", "Eriksen", "Pele"],
        reds: [],
        cleansheets: ["2-Face", "Van Dijk (orange)", "Messi", "Eriksen", "Henry", "Haaland"],
        motm: ["Haaland"],
        events: ["Haaland tight through ball between Messi (ft) and De Bruyne, gets the return perfect first touch and does a bounce shot into the slinger"]
    },
    {
        id: "151",
        month: "july",
        match_number: "151",
        date: "30/07/2024",
        time: "17:05",
        condition: "Clear",
        team1_score: 1, //home team
        team2_score: 1, //away team
        team1: ["2-Face", "Risse", "Neymar", "Modric", "Henry", "Benzema"],
        team2: ["Russian Keeper", "Puyol", "Kaka", "Bastian", "Ramos", "Jiminez"],
        scorers: ["Henry", "Jiminez"],
        assisters: ["Modric"],
        slingers: [],
        penalties: [],
        yellows: ["Risse", "Benzema", "Ramos"],
        reds: [],
        cleansheets: [],
        motm: ["Kaka"],
        events: ["Kaka throwing the ball on Modric multiple times"]
    },
    {
        id: "152",
        month: "august",
        match_number: "152",
        date: "02/08/2024",
        time: "11:30",
        condition: "Clear",
        team1_score: 0, //home team
        team2_score: 2, //away team
        team1: ["Allison", "Ramos (lego)", "Neymar", "Maradonna", "Joaquin", "Jiminez"],
        team2: ["Bruney", "Russian Def", "Mbappe", "Pogba", "Henry", "Haaland"],
        scorers: ["Haaland", "Henry"],
        assisters: ["Mbappe", "Mbappe"],
        slingers: [],
        penalties: [],
        yellows: ["Russian Def"],
        reds: [],
        cleansheets: ["Bruney", "Russian Def", "Mbappe", "Pogba", "Henry", "Haaland"],
        motm: [""],
        events: ["Haaland bullied Ramos, knocked him over for Henry to score and spin him for first goal too"]
    },
]


window.matches = matches;


function countPlayerGoals(matches, playerName) {
    let cleansheetScore = 0;

    for (const match of matches) {
        for (const cleansheet of match.cleansheets) {
            if (cleansheet === playerName) {
                cleansheetScore++;
            }
        }
    }

    return cleansheetScore;
}

// Call the function to count goals scored by Suarez
const vanDijkCs = countPlayerGoals(matches, "Van Dijk (orange)");
console.log("VVD orange clean sheets:", vanDijkCs); // Output: Suarez


function get50thYellowCard(matches) {
    let yellowCardCount = 0;

    for (const match of matches) {
        for (const player of match.yellows) {
            yellowCardCount++;
            if (yellowCardCount === 200) {
                console.log("Reached 50th Yellow Card in Match:", match.match_number);
                return ({ player: player, date: match.date, game: match.match_number});
            }
        }
    }

    return null; // Return null if the 50th yellow card is not found
}



function findFifthRedCard(matches) {
    let redCards = 0

    for (const match of matches) {
        for (const player of match.reds) {
            redCards++
            if (redCards === 5) {
                console.log("Reached 5th Red Card in Match:", match.match_number);
                return ({ player: player, date: match.date, game: match.match_number})

            }
        }
    }

    return null
}


const playerof5thRedCard = findFifthRedCard(matches)
console.log('Player of 5th red card', playerof5thRedCard)

// Example usage
const playerOf50thYellowCard = get50thYellowCard(matches);
console.log("Player of 50th Yellow Card:", playerOf50thYellowCard);




function countPlayerGamesPlayed(matches) {
    let playerGames = {};
    let uniquePlayers = new Set();

    matches.forEach((match, index) => {
        // Count games for team 1
        match.team1.forEach(player => {
            playerGames[player] = (playerGames[player] || 0) + 1;
            uniquePlayers.add(player);
        });

        // Count games for team 2
        match.team2.forEach(player => {
            playerGames[player] = (playerGames[player] || 0) + 1;
            uniquePlayers.add(player);
        });
    });

    console.log("Player Games Played:", playerGames);
    console.log("Number of Unique Players:", uniquePlayers.size);
    return playerGames;
}

const playerGamesPlayed = countPlayerGamesPlayed(matches);

// Print out all players and their total games
for (const player in playerGamesPlayed) {
    if (playerGamesPlayed.hasOwnProperty(player)) {
       console.log(`${player}: ${playerGamesPlayed[player]} games played`);
    }
}

function calculateTotalAppearances(matches) {
    let totalAppearances = 0;

    matches.forEach(match => {
        totalAppearances += match.team1.length + match.team2.length;
    });

    return totalAppearances;
}

const totalAppearances = calculateTotalAppearances(matches);

// Log the result
console.log("Total Appearances in All Matches:", totalAppearances);

// Ex
// Initialize variables to keep track of the top scorer and goals in a single game

function getPlayerRedCounts(matches) {
    const playerRedCount = {};
    const redCards = [];

    matches.forEach(match => {
        match.reds.forEach(player => {
            if (playerRedCount[player]) {
                playerRedCount[player].count++;
                playerRedCount[player].dates.push(match.date);
                playerRedCount[player].id.push(match.match_number);
            } else {
                playerRedCount[player] = {
                    count: 1,
                    dates: [match.date],
                    id: [match.match_number] // Initialize id as an array
                };
            }
            redCards.push({ player, date: match.date, match_number: match.match_number });
        });
    });

    return { playerRedCount, redCards };
}

const { playerRedCount, redCards } = getPlayerRedCounts(matches);

console.log("Player Red Card Counts", playerRedCount);
console.log("Total Red Cards", redCards);






function getPlayerYellowCounts(matches) {
    const playerYellowCounts = {};
    let totalYellows = 0;

    matches.forEach(match => {
        match.yellows.forEach(player => {
            // Check if the player is already in the map
            if (playerYellowCounts[player]) {
                // If yes, increment the count
                playerYellowCounts[player]++;
            } else {
                // If no, initialize the count to 1
                playerYellowCounts[player] = 1;
            }

            // Increment the total yellow card count
            totalYellows++;
        });
    });

    return { playerYellowCounts, totalYellows };
}

const { playerYellowCounts, totalYellows } = getPlayerYellowCounts(matches);

console.log("Player Yellow Card Counts", playerYellowCounts);
console.log("Total Yellow Cards", totalYellows);


function checkCleanSheets(matches) {
    const playerCleanSheetCounts = {};
    let totalCleanSheets = 0;

    matches.forEach(match => {
        match.cleansheets.forEach(player => {
            // Check if the player is already in the map
            if (playerCleanSheetCounts[player]) {
                // If yes, increment the count
                playerCleanSheetCounts[player]++;
            } else {
                // If no, initialize the count to 1
                playerCleanSheetCounts[player] = 1;
            }

            // Increment the total yellow card count
            totalCleanSheets++;
        });
    });

    return { playerCleanSheetCounts, totalCleanSheets };
}

const { playerCleanSheetCounts, totalCleanSheets } = checkCleanSheets(matches);

console.log("Player Clean Sheet Counts", playerCleanSheetCounts);
console.log("Total Clean Sheets", totalCleanSheets);







function renderMatches(matches) {
    const matchContainer = document.querySelector(".matches-container");
    const italyGames = matches.filter(match => match.id >= 134 && match.id <= 138)
    console.log('italy games', italyGames)

    const matchCardsHTML = matches.map(match => {
        const isItalianGame = match.id >= 134 && match.id <= 138;
        const italianGameClass = isItalianGame ? 'italian-game' : '';
        
        return `
            <div class="match-card ${italianGameClass}">
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
        `;
    });

    const matchesHTMLString = matchCardsHTML.join('');
    matchContainer.innerHTML = matchesHTMLString;
}

renderMatches(matches);

const matchesLength = document.querySelector('.total-games')

function findTotalMatches(category) {
    const filteredMatches = (category === "all") ? matches : matches.filter(match => match.month === category);
    const numOfGames = filteredMatches.length
    console.log(numOfGames)
    matchesLength.innerHTML = `Total Games: <strong>${numOfGames}</strong>`

    if (numOfGames === 0) {
        matchesLength.innerHTML = `No Games Played.`
    }
}

findTotalMatches('all')

function filterMatches(category) {
    const filteredMatches = (category === "all") ? matches : matches.filter(match => match.month === category);
    renderMatches(filteredMatches);
    findTotalMatches(category)
    setupEventListeners();
}



let matchMonthType = document.getElementById('match-month');
matchMonthType.addEventListener("change", () => {
    const selectedCategory = matchMonthType.value;
    filterMatches(selectedCategory);
});



function setupEventListeners() {
    let viewStats = document.querySelectorAll(".view-stats");
    let playerStats = document.querySelectorAll(".full-stats");
    let arrowIcons = document.querySelectorAll(".bxs-up-arrow-circle");

    viewStats.forEach((viewStat, index) => {
        viewStat.addEventListener("click", () => {
            playerStats[index].classList.toggle("active");
            arrowIcons[index].classList.toggle("rotate");
        });
    });
}


renderMatches(matches);
setupEventListeners();
});




