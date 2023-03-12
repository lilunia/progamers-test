document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const clickLink = document.querySelectorAll('.nav-link')
	const showNav = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
    
    // clickLink.addEventListener('click', removeShow)
	// function removeShow() {
	// 	showNav.classList.remove('show')
	// }

    clickLink.forEach(link => link.addEventListener('click',()=> showNav.classList.remove('show')))

	window.addEventListener('scroll', addShadow)


})
