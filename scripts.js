// Animate Smooth Scroll

$('#view-work').on('click', function() {
	const images = $('#images').position().top;

	$('html, body').animate({
		scrollTop: images
	}, 900);
});

(function() {

	var tooltip = null;

	function createToolTip(text, options) {
		var div = document.createElement("div");
		div.textContent = text;
		div.className = "tooltip hidden";

		document.body.appendChild(div);

		div.style.left = (options.x + options.w/2 - div.offsetWidth/2 ) + "px";
		div.style.top = (options.y - div.offsetHeight - 9) + "px";

		div.classList.remove("hidden");

		tooltip = div;
	}

	function showToolTip(e) {
		
		console.log(e);
		var title = e.target.getAttribute("title");
		e.target.removeAttribute("title");

		createToolTip(title, {
			w: e.target.offsetWidth,
			x: e.target.offsetLeft,
			y: e.target.offsetTop
		});

	}
	function removeToolTip(e) {
		
		e.target.setAttribute("title", tooltip.textContent);
		tooltip.parentNode.removeChild(tooltip);

	}

	var title = document.querySelectorAll("[title]");
	
	for( var i = 0; i < title.length; i++ ) {
		title[i].addEventListener("mouseenter", showToolTip, false);
		title[i].addEventListener("mouseleave", removeToolTip, false);
	}


})();