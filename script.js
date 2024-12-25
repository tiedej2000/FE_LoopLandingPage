const sidebar = document.getElementById('sidebar');
const menuToggle = document.querySelector('.menu-toggle');
const closeSidebar = document.querySelector('.close-sidebar');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
    menuToggle.style.display = 'none'
    closeSidebar.style.display = 'block'
    document.body.classList.add('no-scroll');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
        menuToggle.style.display = 'block'; 
        closeSidebar.style.display = 'none'
    },300)
  });

  window.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove('active');
      document.body.classList.remove('no-scroll');
      setTimeout(() => {
        menuToggle.style.display = 'block'; 
    },300)
    }
  });