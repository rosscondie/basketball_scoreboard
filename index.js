let homeEl = document.getElementById('home-score');
let guestEl = document.getElementById('guest-score');

let homeScore = 0;
let guestScore = 0;

function plusHome(number) {
  homeScore += number;
  homeEl.textContent = homeScore;
  winner();
}

function plusGuest(number) {
  guestScore += number;
  guestEl.textContent = guestScore;
  winner();
}

function resetGame() {
  homeEl.textContent = 0;
  guestEl.textContent = 0;
  homeScore = 0;
  guestScore = 0;
}

function winner() {
  // RESET BORDER STYLE
  homeEl.style.border = 'none';
  guestEl.style.border = 'none';
  if (homeScore > guestScore) {
    // HOME WINS
    homeEl.style.border = '3px solid #f94f6d';
  } else if (guestScore > homeScore) {
    // GUEST WINS
    guestEl.style.border = '3px solid #f94f6d';
  } // IF IT IS A DRAW
  else {
    homeEl.style.border = '3px solid #FFA500';
    guestEl.style.border = '3px solid #FFA500';
  }
}
