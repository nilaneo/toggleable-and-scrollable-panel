$(function() {
	var $panelContent = $('.j-panel-content'),
		$openPanelArrow = $('.j-open-panel-arrow');
	$('.j-open-panel-btn').on('click', function(e) {
		e.preventDefault();
		$panelContent.slideToggle();
		$openPanelArrow.toggleClass('arrow-down').toggleClass('arrow-up');
	})

	// Add custom scroll bar to Photos
	$('.j-photos').tinyscrollbar();
});