const switchElement = document.querySelector('#switch');
const switchElement2 = document.querySelector('#switch2');
const body = document.querySelector('body');

function darkmode() {
  if (switchElement.checked || switchElement.checked2) {
    localStorage.setItem('darkmode', 'true');
    body.classList.add('dark-theme');
  } else {
    localStorage.setItem('darkmode', 'false');
    body.classList.remove('dark-theme');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const wasDarkMode = localStorage.getItem('darkmode') === 'true';

  if (wasDarkMode) {
    switchElement.checked = true;
    switchElement2.checked = true;
  }

  darkmode(); // Apply the initial theme

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
