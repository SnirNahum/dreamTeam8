export const utilService = {
  getRandomInt,
  makeId,
  debounce,
  loadFromStorage,
  saveToStorage,
  getTeamInfo,
  getRank,
  playerStatus,
  getTeamImg,
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function debounce(func, wait = 1000) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function loadFromStorage(key) {
  const val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
  localStorage[key] = JSON.stringify(val);
}

export const playerPositions = {
  1: "dashboard-gk",
  2: "dashboard-def",
  3: "dashboard-mid",
  4: "dashboard-at",
};

export function getPosition(positionId) {
  if (positionId === 1) {
    return { short_position: "GK", long_position: "Goalkeeper" };
  } else if (positionId === 2) {
    return { short_position: "DEF", long_position: "Defender" };
  } else if (positionId === 3) {
    return { short_position: "MID", long_position: "Midfielder" };
  } else {
    return { short_position: "FWD", long_position: "Attacker" };
  }
}

export function getTeamInfo(teamCode, teams) {
  const team = teams.find((team) => team.code === teamCode);
  return {
    short_name: team?.short_name || "",
    name: team?.name || "",
  };
}

export function getRank(elementId, element_types) {
  const positionRank = element_types.find(
    (element) => element.id === elementId
  );
  {
    return positionRank.element_count;
  }
}

export function playerStatus(player) {
  if (player.status === "a") {
    return "active-player";
  } else if (player.status === "i") {
    return "injury-player";
  } else if (player.status === "d") {
    return "doubt-player";
  } else if (player.status === "n") {
    return "naPlayer";
  } else if (player.status === "s") {
    return "suspended-player";
  }
}

export function getTeamImg(teamCode) {
  return `https://yvrzozsmicwmxmhmjjty.supabase.in/storage/v1/object/public/public/badges/t${teamCode}.png`;
}

export function matchDifficulty(difficulty) {
  if (player.status === 1) {
    return `match-difficulty difficulty-${difficulty}`;
  } else if (player.status === 2) {
    return `match-difficulty difficulty-${difficulty}`;
  } else if (player.status === 3) {
    return `match-difficulty difficulty-${difficulty}`;
  } else if (player.status === 4) {
    return `match-difficulty difficulty-${difficulty}`;
  } else if (player.status === 5) {
    return `match-difficulty difficulty-${difficulty}`;
  }
}
