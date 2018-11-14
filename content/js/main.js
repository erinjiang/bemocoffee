$(function() {

	//下拉選單
	$('.select').transformSelect();
	
	//改變文字顏色
	$('.transformSelect').on('click', function(e){
		//for pc
		if($('.open span').change()){
			$('.open').addClass('changeColor');
		}else {
			$('.open').removeClass('changeColor');
		}
		//for mobile
		if($('.select').change()){
			$(this).children('li').addClass('changeColor');
			$(this).children( 'li > ul li').removeClass('changeColor')
		}else {
			$(this).children('li').removeClass('changeColor');
		}
	});
	
	if($('.o-select__form select:disabled')) {
		alert('diabled');
	}

	//表單 點擊下拉時 
	$('.o-select__form').on('click', function(e){
		var selectActive = $('.o-select__form ul li');
		//取消border-bottom
		if($(selectActive).hasClass('open')){
			$(this).parents('.l-form').addClass('active');
		}else {
			$(this).parents('.l-form').removeClass('active');
		}
	});
	
	//另開選項 BTN 帶入值的時候，改變文字顏色
	$('.o-option__btn').on('click', function(e){
		var options=$(".o-option__tex--01 option:selected");
		alert(options.text());
		$(this).text(options.text());
		if($(this).change()){
			$(this).addClass('active');
		}else {
			$(this).removeClass('active');
		}
	});

});

