(function(){
    var $w = $(window);
	var $circ = $('.scroll-indication');
	var $progCount = $('.count');
	
	var wh, h, sHeight;
	
	function setSizes(){
		wh = $w.height();
		h = $('body').height();
		sHeight = h - wh;
	}
	
	setSizes();
	
	$w.on('scroll', function(){
		var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
		updateProgress(perc);
		popTop();
	}).on('resize', function(){
		setSizes();
		$w.trigger('scroll');
	}).on('load',function(){
		popTop();
	});

	function updateProgress(perc){
		var circle_offset = 126 * perc;
		$circ.css({
			"stroke-dashoffset" : 126 - circle_offset
		});
		$progCount.html(Math.round(perc * 100) + "%");
	}

	function popTop(){
		var wScroll = $(this).scrollTop();
		if(wScroll > 500){
			$('.left-ani').css({"transform": "translateX(0)"});
			$('header').addClass('scroll-header');
		}
		else{
			$('.left-ani').css({"transform": "translateX(130px)"});
			$('header').removeClass('scroll-header');
		}
	}

}());