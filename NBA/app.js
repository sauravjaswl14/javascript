const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

const parentUl = document.createElement('ul');
for(let game of warriorsGames){
  const {awayTeam,homeTeam} = game;
  const {team:aTeam,points:aPoints} = awayTeam;
  const {team:hTeam,points:hPoints} = homeTeam;
  const li = document.createElement('li');
  let scoreLine;
  if(aPoints > hPoints){
    scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
  }
  else{
     scoreLine = `${aPoints} - <b>${hPoints}</b>`;
  }
  const teamName = `${aTeam} @ ${hTeam}`;
  li.innerHTML = `${teamName} ${scoreLine}`;
  const warriors = hTeam==='Golden State'? homeTeam : awayTeam;
  li.classList.add(warriors.isWinner?'win':'loss');
  parentUl.appendChild(li);
}
document.body.prepend(parentUl);