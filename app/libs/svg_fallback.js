	//SVG Fallback
	//Documentation & Example: https://github.com/agragregra/

	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
};