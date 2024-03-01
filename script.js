let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");


closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}


let generateTeams = document.querySelector(".team-gen-btn");

let homeGK = document.querySelector(".home-gk");
let homeDEF = document.querySelector(".home-def");
let homeLM = document.querySelector(".home-lm");
let homeMID = document.querySelector(".home-mid");
let homeRM = document.querySelector(".home-rm");
let homeST = document.querySelector(".home-st");

let awayGK = document.querySelector(".away-gk");
let awayDEF = document.querySelector(".away-def");
let awayLM = document.querySelector(".away-lm");
let awayMID = document.querySelector(".away-mid");
let awayRM = document.querySelector(".away-rm");
let awayST = document.querySelector(".away-st");

let positions = {
  GK: ["Stackers", "Boxer", "Neuer", "Russian Keeper", "Bruney"],
  DEF: ["Van Dijk (red)", "Van Dijk (orange)", "Caveman", "Puyol"],
  LM: ["Messi (ft)", "Assunco", "Van Persie", "Robinho", "Berbatov", "Ramos", "Van Persie (red)", "Beckham", "Raul", "Carragher", "Torres"],
  MID: ["Kroos", "Schweinsteiger", "Pedri", "Maradonna", "Eriksen", "De Bruyne", "Modric", "Pogba"],
  RM: ["Mbappe", "Bale", "Son", "Mahrez", "Pele", "Mane", "Neymar", "Messi", "Bowen"],
  ST: ["Benzema", "Kane", "Lewandowski", "Jiminez", "Ronaldo", "Suarez", "Muller", "Zlatan"]
};

function getRandomPlayer(position) {
  const positionPlayers = positions[position];
  const randomIndex = Math.floor(Math.random() * positionPlayers.length);
  return positionPlayers.splice(randomIndex, 1)[0];
}

function getRandomTeam() {
  return {
    GK: getRandomPlayer("GK"),
    DEF: getRandomPlayer("DEF"),
    LM: getRandomPlayer("LM"),
    MID: getRandomPlayer("MID"),
    RM: getRandomPlayer("RM"),
    ST: getRandomPlayer("ST")
  };
}

generateTeams.addEventListener("click", () => {
  // Reset the players array
  positions = {
    GK: ["Stackers", "Boxer", "Neuer", "Russian Keeper", "Bruney"],
    DEF: ["Van Dijk (red)", "Van Dijk (orange)", "Caveman", "Puyol"],
    LM: ["Messi (ft)", "Assunco", "Van Persie", "Robinho", "Berbatov", "Ramos", "Van Persie (red)", "Beckham", "Raul", "Carragher", "Torres"],
    MID: ["Kroos", "Schweinsteiger", "Pedri", "Maradonna", "Eriksen", "De Bruyne", "Modric", "Pogba"],
    RM: ["Mbappe", "Bale", "Son", "Mahrez", "Pele", "Mane", "Neymar", "Messi", "Bowen"],
    ST: ["Benzema", "Kane", "Lewandowski", "Jiminez", "Ronaldo", "Suarez", "Muller", "Zlatan"]
  };

  const team1 = getRandomTeam();
  const team2 = getRandomTeam();

  console.log(team1, team2);

  homeGK.innerHTML = `<strong>GK:</strong> ${team1.GK}`;
  homeDEF.innerHTML = `<strong>DEF:</strong> ${team1.DEF}`;
  homeLM.innerHTML = `<strong>LM:</strong> ${team1.LM}`;
  homeMID.innerHTML = `<strong>MID:</strong> ${team1.MID}`;
  homeRM.innerHTML = `<strong>RM:</strong> ${team1.RM}`;
  homeST.innerHTML = `<strong>ST:</strong> ${team1.ST}`;

  awayGK.innerHTML = `<strong>GK:</strong> ${team2.GK}`;
  awayDEF.innerHTML = `<strong>DEF:</strong> ${team2.DEF}`;
  awayLM.innerHTML = `<strong>LM:</strong> ${team2.LM}`;
  awayMID.innerHTML = `<strong>MID:</strong> ${team2.MID}`;
  awayRM.innerHTML = `<strong>RM:</strong> ${team2.RM}`;
  awayST.innerHTML = `<strong>ST:</strong> ${team2.ST}`;
});


let resetBtn = document.querySelector(".reset-btn")

resetBtn.addEventListener("click", () => {


positions = {
  GK: ["Stackers", "Boxer", "Neuer", "Russian Keeper", "Bruney"],
  DEF: ["Van Dijk (red)", "Van Dijk (orange)", "Caveman", "Puyol"],
  LM: ["Messi (ft)", "Assunco", "Van Persie", "Robinho", "Berbatov", "Ramos", "Van Persie (red)", "Beckham", "Raul", "Carragher", "Torres"],
  MID: ["Kroos", "Schweinsteiger", "Pedri", "Maradonna", "Eriksen", "De Bruyne", "Modric", "Pogba"],
  RM: ["Mbappe", "Bale", "Son", "Mahrez", "Pele", "Mane", "Neymar", "Messi", "Bowen"],
  ST: ["Benzema", "Kane", "Lewandowski", "Jiminez", "Ronaldo", "Suarez", "Muller", "Zlatan"]
};

// Reset the displayed HTML content
homeGK.innerHTML = "<strong>GK:</strong>";
homeDEF.innerHTML = "<strong>DEF:</strong>";
homeLM.innerHTML = "<strong>LM:</strong>";
homeMID.innerHTML = "<strong>MID:</strong>";
homeRM.innerHTML = "<strong>RM:</strong>";
homeST.innerHTML = "<strong>ST:</strong>";

awayGK.innerHTML = "<strong>GK:</strong>";
awayDEF.innerHTML = "<strong>DEF:</strong>";
awayLM.innerHTML = "<strong>LM:</strong>";
awayMID.innerHTML = "<strong>MID:</strong>";
awayRM.innerHTML = "<strong>RM:</strong>";
awayST.innerHTML = "<strong>ST:</strong>";


})







