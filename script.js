'use strict';
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  ran_num = Math.trunc(Math.random() * 20);
  document.querySelector('.number').textContent = '?';
});
function display(message1) {
  document.querySelector('.message').textContent = message1;
}

let score = 20;
let highscore = 0;
let ran_num = Math.trunc(Math.random() * 20);
document.querySelector('.check').addEventListener('click', function () {
  const typed_num = Number(document.querySelector('.guess').value);
  if (!typed_num) {
    display('🚫 no value entered');
  } else if (score >= 1) {
    if (typed_num === ran_num) {
      document.querySelector('.number').textContent = ran_num;
      display('✔️ correct number');
      score++;
      document.querySelector('body').style.backgroundColor = ' #60b347';
      document.querySelector('.score').textContent = score;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (typed_num !== ran_num) {
      document.querySelector('.message').textContent =
        typed_num > ran_num ? '❌ Too High' : '❌ Too low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (score < 1) {
    display(' 👎 you lost');
  }
});
