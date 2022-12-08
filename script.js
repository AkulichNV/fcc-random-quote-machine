import quotes from './quotes.js';

function getMessage(q) {
  const ranq = q[Math.floor(Math.random() * q.length)];
  document.getElementById('titleQuote').innerHTML = ranq[0] + ':';
  document.getElementById('txt1').innerHTML = ranq[1];
  document.getElementById('imgQuote').src = ranq[2];
}

getMessage(quotes);

document.getElementById('getMessage').addEventListener('click', () => {
  getMessage(quotes);
}, false);