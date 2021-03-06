$(function(){
	var speed = 700;
	
	$('#ipad').click(function(e){
		if ($('#ipadimg').css('display') !== 'block') {
			//$('#laptopimg').fadeOut(300);
			$('#ipadimg').css('left', -1000);
			$('#ipadimg').show();
			$('#ipadimg').animate({left: 30}, speed, 'linear');
			$('#laptopimg').animate({left: 1000}, speed, 'linear', function(){
				$('#laptopimg').hide();
			});
		}
		e.preventDefault();
	});
	
	$('#laptop').click(function(e) {
		if ($('#laptopimg').css('display') !== 'block') {
			//$('#ipadimg').fadeOut(300);
			$('#laptopimg').css('left', 1000);
			$('#laptopimg').show();
			$('#laptopimg').animate({left: 60}, speed, 'linear');
			$('#ipadimg').animate({left: -1000}, speed, 'linear', function(){
				$('#ipadimg').hide();
			});
		}
		e.preventDefault();
	});
	
	var toddlersplayer;
	$('#toddlers').qtip({
		content: {
			text: '<div id="toddlersmovie"></div>',
			title: {
				text: 'A magazine is an iPad that does not work',
				button: 'close'
			}
		},
		position: {
			my: 'top center', 
			at: 'bottom center',
			container: $('#main'),
			viewport: true,
			adjust: {
				method: 'shift flip'
			}
		},
		show: 'click',
		hide: 'click',
		style: {
			tip: true,
			classes: 'ui-tooltip-youtube',
			width: 360+20
		},
		events: {
			render: function(event, api) {
				toddlersplayer = new YT.Player('toddlersmovie', {
					width: '360',
					height: '240',
					videoId: 'aXV-yaFmQNk',
					events: {
						onReady: function(e) {
							toddlersplayer.playVideo();
						}
					}
				});
			},
			hide: function(event, api) {
				toddlersplayer.pauseVideo();
			}
		}
	});
	$('#toddlers').click(function(e) {
		e.preventDefault();
	});
	
	var lectureplayer;
	$('#lecture').qtip({
		content: {
			text: '<div id="lecturemovie"></div>',
			title: {
				text: 'Introduction to Waves',
				button: 'close'
			}
		},
		position: {
			my: 'top center', 
			at: 'bottom center',
			container: $('#main'),
			viewport: true,
			adjust: {
				method: 'shift flip'
			}
		},
		show: 'click',
		hide: 'click',
		style: {
			tip: true,
			classes: 'ui-tooltip-light ui-tooltip-youtube',
			width: 360+20
		},
		events: {
			render: function(event, api) {
				lectureplayer = new YT.Player('lecturemovie', {
					width: '360',
					height: '240',
					videoId: 'c38H6UKt3_I',
					events: {
						onReady: function(e) {
							lectureplayer.playVideo();
						}
					}
				});
			},
			hide: function(event, api) {
				lectureplayer.pauseVideo();
			}
		}
	});
	$('#lecture').click(function(e) {
		e.preventDefault();
	});
	
	var calc = function() {
		var element = document.getElementById("calculation");
		
		var T = 4, l = 5;
		var up = function() {
			var frac = sprintf("%.2f", l/T);
			var kmph = sprintf("%.2f", l/T*3.6);
			
			frac = "= " + frac + '\\frac{m}{s} = ' + kmph + '\\frac{km}{h}';
			MathJax.Hub.Queue(["Text",MathJax.Hub.getAllJax("calculation")[2],'v = \\lambda \\cdot f = \\frac{\\lambda}{T} = \\frac{' + l + '}{' + T + '} ' + frac]);
			
			$('#seconds').text(T > 1 ? 'seconds' : 'second');
			$('#are').text(T > 1 ? 'are' : 'is');
			$('#meters').text(l > 1 ? 'meters' : 'meter');
		};
		
		var tangle = new Tangle(element, {
			initialize: function () {
				this.T = 4;
				this.l = 5;
				MathJax.Hub.Queue(["Typeset",MathJax.Hub, element, up]);
			},
			update: function () {
				if (MathJax.Hub.getAllJax("calculation")[2] !== undefined) {
					T = this.T;
					l = this.l;
					up();
				}
			}
		});
	}
	
	$('#symbols').qtip({
		content: {
			text: '<div id="calculation">Standing on the beach, you are looking at waves. By counting you notice that there <span id="are">are</span> <span data-var="T" class="TKAdjustableNumber" data-min="1" data-max="100"> <span id="seconds">seconds</span></span> between every two waves. The waves are approximately <span data-var="l" class="TKAdjustableNumber" data-min="1" data-max="100"> <span id="meters">meters</span></span> apart. By using \\(v = \\lambda \\cdot f\\) and \\(f = \\frac{1}{T}\\) we can find the speed of the waves: $$ $$</div>',
			title: {
				text: 'Wave speed example',
				button: 'close'
			}
		},
		position: {
			my: 'top center', 
			at: 'bottom center',
			container: $('#main'),
			viewport: true,
			adjust: {
				method: 'shift flip'
			}
		},
		show: 'click',
		hide: 'click',
		style: {
			tip: true,
			classes: 'ui-tooltip-light',
			width: 360+20
		},
		events: {
			render: function(event, api) {
				calc();
			},
			hide: function(event, api) {
				
			}
		}
	});
	$('#symbols').click(function(e) {
		e.preventDefault();
	});
	
	MathJax.Hub.Config({
		messageStyle: 'none',
	});
});