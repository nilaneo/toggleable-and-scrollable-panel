$(function() {
	// Toggle panel
	var $panelMain = $('.j-panel-main'),
		$openPanelArrow = $('.j-open-panel-arrow');
	$('.j-open-panel-btn').on('click', function(e) {
		e.preventDefault();
		$panelMain.slideToggle();
		$openPanelArrow.toggleClass('arrow-down').toggleClass('arrow-up');
	});

	// Scroll content of panel
	var SCROLL_STEP = 500,
		$panelContent = $('.j-panel-content');
	$('.j-panel-scroll-btn').on('click', function(e) {
		e.preventDefault();
		var contentWidth = $panelContent.width(),
			currentPosition = $panelContent.scrollLeft(),
			scrollStep = SCROLL_STEP > contentWidth ? contentWidth : SCROLL_STEP,
			direction = $(this).data('direction'),
			newScrollPosition;

		if (direction === 'left') {
			newScrollPosition = currentPosition - scrollStep;
		} else if (direction === 'right') {
			newScrollPosition = currentPosition + scrollStep;
		}

		$panelContent.animate({scrollLeft: newScrollPosition});
	});

	// Add custom scroll bar to Photos
	$('.j-photos').tinyscrollbar();
});
