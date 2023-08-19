function darkmode() {
  const body = document.body;
  const switchElement = document.querySelector('#switch');
  
  if (switchElement.checked) {
    localStorage.setItem('darkmode', 'true');
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  } else {
    localStorage.setItem('darkmode', 'false');
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const switchElement = document.querySelector('#switch');
  const wasDarkMode = localStorage.getItem('darkmode') === 'true';
  
  if (wasDarkMode) {
    switchElement.checked = true;
  }
  
  darkmode(); // Apply the initial theme
  
  switchElement.addEventListener('click', darkmode);
});