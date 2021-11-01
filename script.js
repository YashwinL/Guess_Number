'use strict';
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  ran_num = Math.trunc(Math.random() * 20);
  document.querySelector('.number').textContent = '?';
});

let score = 20;
let ran_num = Math.trunc(Math.random() * 20);
document.querySelector('.check').addEventListener('click', function () {
  const typed_num = Number(document.querySelector('.guess').value);
  if (!typed_num) {
    document.querySelector('.message').textContent = `🚫 no value entered`;
  } else if (score >= 1) {
    if (typed_num === ran_num) {
      document.querySelector('.number').textContent = ran_num;
      document.querySelector('.message').textContent = `✔️ correct number`;
      score++;
      document.querySelector('body').style.backgroundColor = ' #60b347';
      document.querySelector('.score').textContent = score;
    } else if (typed_num > ran_num) {
      document.querySelector('.message').textContent = `❌ Too High`;
      score--;
      document.querySelector('.score').textContent = score;
    } else if (typed_num < ran_num) {
      document.querySelector('.message').textContent = `❌ Too Less`;
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (score < 1) {
    document.querySelector('.message').textContent = `you lost`;
  }
});
