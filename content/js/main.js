$(function() {

	// 下拉選單
	$('.select').transformSelect();
	
	// 下拉選單點選後
	$('.transformSelect').on('click', function(e){	
		// 改變文字顏色
		// for pc
		if($('.open span').change()){
			$('.open').addClass('changeColor');
		}else {
			$('.open').removeClass('changeColor');
		}
		// for mobile
		if($('.select').change()){
			$(this).children('li').addClass('changeColor');
			$(this).children( 'li > ul li').removeClass('changeColor')
		}else {
			$(this).children('li').removeClass('changeColor');
		}
	});

	// 表單Show / Hide
	//	付款方式應對表單
	$('[data-change-target]').on('change', function(e) {
		var target = $('[data-change-target]:checked').data('change-target');
		$('[data-change-id]').hide();
		$('[data-change-id="' + target + '"]').show();
		console.log(target);
	}).trigger('change');

	//	統一編號表單
	$('[data-gui-target]').on('change', function(e) {
		var target = $('[data-gui-target]:checked').data('gui-target');
		$('[data-gui-id]').hide();
		$('[data-gui-id="' + target + '"]').show();
		console.log(target);
	}).trigger('change');

	// 如果頁面有docling bottom，將頁面的padding-bottom加上docling bottom得高
	if($('.site-content').hasClass('l-docking')){
		// get docking's height
		var height = $('.o-docking__bottom').outerHeight();
		// get footer's height
		var footer = $('.site-footer').outerHeight();
		// set padding equal docking's height minus footer's height
		var padding = height - footer;
		$('.l-docking').css('padding-bottom', padding);
		console.log(height,footer,padding);
	};

});

