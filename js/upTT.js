$(document).ready(function() {
	
	$('body').append('<div class="button-up" style="display: none;opacity: 0.7;width: 100px;height:100%;position: fixed;left: 0px;top: 0px;cursor: pointer;text-align: center;line-height: 100px;color: #45688E;">▲ Наверх</div>');
		
	$ (window).scroll (function () {
		if ($ (this).scrollTop () > 300) {
			$ ('.button-up').fadeIn();
		} else {
			$ ('.button-up').fadeOut();
		}
	});
	
	$('.button-up').click(function(){
		$('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
	});
	
	$('.button-up').hover(function() {
			$(this).animate({
				'opacity':'1',
			}).css({'background-color':'#E1E7ED','color':'#45688E'});
		}, function(){
			$(this).animate({
				'opacity':'0.7'
			}).css({'background':'none','color':'#45688E'});;
	});
		
});