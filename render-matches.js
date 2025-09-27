// render-matches.js

// — Utility: build the HTML for one team (logo + name)
function generateTeamHTML(team) {
  return `
    <div class="fareq">
      <div class="Imagee">
        <img 
          alt="${team.name}"
          class="col-img lazy"
          height="70"
          data-src="${team.logo.trim()}"
          title="${team.name}"
          width="70" />
      </div>
      <div class="asm">${team.name}</div>
    </div>`;
}

// — Build the match‐card HTML
function generateMatchHTML(match) {
  const start = new Date(match.start);
  const end   = new Date(start.getTime() + 3 * 60 * 60 * 1000);
  const scoreText = match.result !== undefined ? match.result : "";
  return `
  <div class="containerMatch">
    <a href="${match.link}" title="Watch the match between ${match.team1.name} and ${match.team2.name} live today">
      <div class="Match">
        ${generateTeamHTML(match.team1)}
        <div class="Nateja">
          <div class="matchHour" id="matchHour"></div>
          <div class="natej">${scoreText}</div>
          <div 
            class="matchDate" 
            data-start="${start.toISOString()}" 
            data-end="${end.toISOString()}">
          </div>
        </div>
        ${generateTeamHTML(match.team2)}
      </div>
      <div class="Show"></div>
      <ul>
        ${match.details.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </a>
  </div>`;
}

// — Compare only the local year/month/day
function isSameLocalDate(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
}

// — Display “No important match” message if a widget is empty
function showNoMatchesMessage(containerId, message) {
  document.getElementById(containerId).insertAdjacentHTML(
    "beforeend", 
    `<div class="noMatches">${message}</div>`
  );
}

// — Main sorting & rendering logic
function sortAndRenderMatches(matches) {
  const now = new Date();
  const todayY = now.getFullYear(), todayM = now.getMonth(), todayD = now.getDate();

  const yd = new Date(now);   yd.setDate(todayD - 1);
  const yY = yd.getFullYear(), yM = yd.getMonth(), yD = yd.getDate();

  const td = new Date(now);   td.setDate(todayD + 1);
  const tY = td.getFullYear(), tM = td.getMonth(), tD = td.getDate();

  const yesterdayArr = [];
  const todayArr     = [];
  const tomorrowArr  = [];

  matches.forEach(match => {
    const start = new Date(match.start);
    const end   = new Date(start.getTime() + 3 * 60 * 60 * 1000);

    const sY = start.getFullYear(), sM = start.getMonth(), sD = start.getDate();
    const eY = end.getFullYear(),   eM = end.getMonth(),   eD = end.getDate();

    if ((sY === yY && sM === yM && sD === yD) || (eY === yY && eM === yM && eD === yD)) {
      yesterdayArr.push(match);
    }
    if ((sY === todayY && sM === todayM && sD === todayD) || (eY === todayY && eM === todayM && eD === todayD)) {
      todayArr.push(match);
    }
    if ((sY === tY && sM === tM && sD === tD) || (eY === tY && eM === tM && eD === tD)) {
      tomorrowArr.push(match);
    }
  });

  function compareByStart(a, b) {
    return new Date(a.start) - new Date(b.start);
  }
  yesterdayArr.sort(compareByStart);
  todayArr.sort(compareByStart);
  tomorrowArr.sort(compareByStart);

  const yContainer = document.getElementById("yesterdayMatches");
  const tContainer = document.getElementById("todayMatches");
  const mContainer = document.getElementById("tomorrowMatches");

  if (yesterdayArr.length === 0) {
    showNoMatchesMessage("yesterdayMatches", "There were no important matches yesterday");
  } else {
    yesterdayArr.forEach(match => yContainer.insertAdjacentHTML("beforeend", generateMatchHTML(match)));
  }

  if (todayArr.length === 0) {
    showNoMatchesMessage("todayMatches", "There is no important match today");
  } else {
    todayArr.forEach(match => tContainer.insertAdjacentHTML("beforeend", generateMatchHTML(match)));
  }

  if (tomorrowArr.length === 0) {
    showNoMatchesMessage("tomorrowMatches", "There are no important matches tomorrow");
  } else {
    tomorrowArr.forEach(match => mContainer.insertAdjacentHTML("beforeend", generateMatchHTML(match)));
  }
            }
  
