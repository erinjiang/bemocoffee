$(function() {

	//下拉選單
	$('.select').transformSelect();
	
	//表單 點擊下拉時 取消border-bottom
	$('.o-select__form').on('click', function(e){
		var selectActive = $('.o-select__form ul li');
		if($(selectActive).hasClass('open')){
			$(this).parents('.l-form').addClass('active');
		}else {
			$(this).parents('.l-form').removeClass('active');
		}
	});

});