const switchElement = document.querySelector('#switch');
const switchElement2 = document.querySelector('#switch2');
const body = document.querySelector('body');
const logoImg = document.getElementById('logo-img');

function darkmode() {
  if (switchElement.checked || switchElement.checked2) {
    localStorage.setItem('darkmode', 'true');
    body.classList.add('dark-theme');
    logoImg.src = './img/header/logo-dark-theme.svg';
  } else {
    localStorage.setItem('darkmode', 'false');
    body.classList.remove('dark-theme');
    logoImg.src = './img/header/logo.svg';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const wasDarkMode = localStorage.getItem('darkmode') === 'true';

  if (wasDarkMode) {
    switchElement.checked = true;
    switchElement2.checked = true;
  }

  darkmode();

  switchElement.addEventListener('click', function () {
    switchElement2.checked = switchElement.checked;
    darkmode();
  });

  switchElement.checked = switchElement2.checked;

  switchElement2.addEventListener('click', function () {
    switchElement.checked = switchElement2.checked;

    darkmode();
  });
});

