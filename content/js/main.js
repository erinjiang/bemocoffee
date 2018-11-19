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

	// 另開選項 BTN 帶入值的時候，改變文字顏色 開始
	$('.o-option__blank--option').hide();// 測試選項，在element.html中可看見demo
	//[data-blank-target=o-option__blank]為物件id
	$('[data-blank-target=o-option__blank]').on('click', function(e){
		// 宣告一個名字給物件
		var dataId = $(this);
		
		// 顯示測試選項
		$('.o-option__blank--option').show();
		// 將測試選項的文字帶回物件
		$(".o-option__tex--01").on('change', function(e){
			var options=$(".o-option__tex--01 option:selected");
			$(dataId).text(options.text());
			//當文文字帶回物件後，物件change，加上 class
			if(dataId.change()){
				$(dataId).addClass('active');
			}else {
				$(dataId).removeClass('active');
			}
		});
	});
	// 另開選項 BTN 帶入值的時候，改變文字顏色 結束

	// 付款方式應對表單
	$('[data-change-target]').on('change', function(e) {
		var target = $('[data-change-target]:checked').data('change-target');
		$('[data-change-id]').hide();
		$('[data-change-id="' + target + '"]').show();
		console.log(target);
	}).trigger('change');

	// 統一編號表單
	$('[data-GUI-target]').on('change', function(e) {
		var target = $('[data-GUI-target]:checked').data('GUI-target');
		$('[data-GUI-id]').hide();
		$('[data-GUI-id="' + target + '"]').show();
		console.log(target);
	}).trigger('change');

	// 隱藏錯誤提示
	$('[data-error-target]').on('click', function(e) {
		var target = $(this).data('error-target');
		$('[data-error-id="' + target + '"]').hide();
		$(this).removeClass('error');
		console.log(target);
	}).trigger('change');

	// radio BTN
	$('.o-radio__tex').on('click', function(e){
		$(this).parent().removeClass('error');
		$(this).parent().siblings().removeClass('error');
	});

	// checkbox BTN
	$('.o-checkbox__tex').on('click', function(e){
		$(this).parent().removeClass('error');
		$(this).parent().siblings().removeClass('error');
	});

	// $('.transformSelect').on('click', function(e){
	// 	$(this).siblings('.o-error--text').hide();
	// 	$(this).parent('.o-select__form').removeClass('error');
	// });
	// // 輸入
	// $(':input').on('click', function(e){
	// 	$(this).siblings('.o-error--text').hide();
	// 	$(this).removeClass('error');
	// });
	// // 另開按鈕
	// $('.o-option__btn').on('click', function(e){
	// 	$(this).siblings('.o-error--text').hide();
	// 	$(this).removeClass('error');
	// });
	// // radio BTN
	// $('.o-radio__tex').on('click', function(e){
	// 	$(this).parent().removeClass('error');
	// 	$(this).parent().siblings().removeClass('error');
	// });
	// // checkbox BTN
	// $('.o-checkbox__tex').on('click', function(e){
	// 	$(this).parent().removeClass('error');
	// 	$(this).parent().siblings().removeClass('error');
	// });

});

