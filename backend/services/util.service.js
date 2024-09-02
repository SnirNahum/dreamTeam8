function makeId(length = 5) {
  var txt = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getPlayerFixtures(playerFixtures) {
  playerFixtures.forEach((fixture, index) => {
    if (fixture.is_home) {
      playerFixtures[index]["rival_team"] = fixture.team_a;
    } else {
      playerFixtures[index]["rival_team"] = fixture.team_h;
    }
  });
  return playerFixtures
}



export const utilService = {
  makeId,
  getRandomInt,
  debounce,
  getPlayerFixtures
}
