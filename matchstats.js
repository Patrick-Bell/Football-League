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
        scorers: ["Pele",],
        assisters: ["Lewandowski"],
        slingers: [],
        penalties: [],
        yellows: ["Lewandowski", "Boxer"],
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
        team2: ["Boxer", "Van Dijk (red)", "Son", "Kroos", "Van Persie", "Benzema"],
        scorers: ["Assunco"],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Van Persie", "Son"],
        reds: ["Van Persie"],
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
        team1: ["Neuer", "Van Dijk", "Bale", "Eriksen", "Carragher", "Lewandowski"],
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
        team2: ["Stackers", "Van Dijk", "Bowen", "Kroos", "Assunco", "Ronaldo"],
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
        team1: ["Russian Keeper", "Van Dijk", "Mane", "Modric", "Torres", "Benzema"],
        team2: ["Boxer", "Van Dijk (red)", "Mahrez", "De Bruyne", "Berbatov", "Ronaldo"],
        scorers: [],
        assisters: [],
        slingers: [],
        penalties: [],
        yellows: ["Modric"],
        reds: [],
        cleansheets: ["Russian Keeper", "Van Dijk", "Mane", "Modric", "Torres", "Benzema", "Boxer", "Van Dijk (red)", "Mahrez", "De Bruyne", "Berbatov", "Ronaldo"],
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
        team1: ["Boxer", "Van Dijk", "Neymar", "Pedri", "Carragher", "Benzema"],
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
        team2: ["Russian Keeper", "Van Dijk", "Bowen", "Kroos", "Torres", "Zlatan"],
        scorers: ["Zlatan"],
        assisters: ["Torres"],
        slingers: [],
        penalties: [],
        yellows: ["Zlatan", "De Bruyne"],
        reds: [],
        cleansheets: ["Russian Keeper", "Van Dijk", "Bowen", "Kroos", "Torres", "Zlatan"],
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
        team1: ["Boxer", "Puyol", "Pele", "Bastian", "Van Persie", "Suarez"],
        team2: ["Neuer", "Caveman", "Mane", "Pedri", "Ramos", "Jiminez"],
        scorers: ["Caveman", "Pele"],
        assisters: ["Ramos"],
        slingers: [],
        penalties: [],
        yellows: ["Van Persie", "Bastian"],
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
        team1_score: 2, //home team
        team2_score: 2, //away team
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
        motm: ["2-Face"],
        events: ["Ferdinand long shot bar and in"]
    },
]

window.matches = matches;


// Initialize variables to keep track of the top scorer and goals in a single game

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

function filterMatches(category) {
    const filteredMatches = (category === "all") ? matches : matches.filter(match => match.month === category);
    renderMatches(filteredMatches);
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


