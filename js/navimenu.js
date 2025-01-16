	//ナビメニュー(前ページ共通)
	document.getElementById('menu-icon').addEventListener('click',toggleMenu);
	
	function toggleMenu(){
		let menu = document.getElementById("nav-menu");
		menu.classList.toggle("active");
		let hamburger = document.getElementById("hamburger");
		hamburger.classList.toggle("active");
	}