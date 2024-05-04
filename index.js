const padlOrel = Math.random() < 0.5;
const mince = document.querySelector('.mince');

if (padlOrel) {
  mince.classList.add('mince--orel');
} else {
  mince.classList.add('mince--panna');
}

const vysledek = document.querySelector('.vysledek');

if (padlOrel) {
  setTimeout(() => {
    vysledek.textContent = 'Padl Orel';
  }, 1900);
} else {
  setTimeout(() => {
    vysledek.textContent = 'Padla Panna';
  }, 1900);
}
