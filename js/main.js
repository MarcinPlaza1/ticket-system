const fullHeight = () => {
	const elements = document.querySelectorAll('.js-fullheight');
	elements.forEach(element => element.style.height = `${window.innerHeight}px`);
  };
  
  fullHeight();
  
  window.addEventListener('resize', fullHeight);
  
  document.querySelector('#sidebarCollapse').addEventListener('click', () => {
	document.querySelector('#sidebar').classList.toggle('active');
  });
  