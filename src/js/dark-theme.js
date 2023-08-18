function darkmode() {
  const body = document.body;
  const wasDarkMode = localStorage.getItem('darkmode') === 'true';

  localStorage.setItem('darkmode', !wasDarkMode);
  body.classList.toggle('light-theme', wasDarkMode);
  body.classList.toggle('dark-theme', !wasDarkMode);
}

document.querySelector('#switch').addEventListener('click', darkmode);