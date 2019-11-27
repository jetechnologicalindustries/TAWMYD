let isMenuOn;
let isMobile;
isMobile = false;

function changeTextSize() {
	let a,b,c,x,y,z;
	if (isMobile === false) {
		$('#mainCard').addClass('w-75');
		$('#frontCard').addClass('w-100');
		$('#backCard').addClass('w-100');
		a = 400;
		b = 600;
		c = 800;
	} else {
		a = 750;
		b = 950;
		c = 1150;	
	};

	x = $("#mainCard").width();
	y = $("#mainCard").height();
	z = x + y;
	console.log('x: '+ x);
	console.log('y: '+ y);
	console.log('Total: '+ z);
	if (z<c) {
		if (z<b) {
			if (z<a) {
				$("#cardText").css("fontSize", "5vw");
				$("#cardText").css('margin-left', "5px");
				$(".back").css('border', '7px solid #333');
				console.log('Font Size: 20px');
			} else {
				$("#cardText").css("fontSize", "5.5vw");
				$("#cardText").css('margin-left', "10px");
				$(".back").css('border', '14px solid #333');
				console.log('Font Size: 30px');
			};
		} else {
			$("#cardText").css("fontSize", "6vw");
			$("#cardText").css('margin-left', "15px");
			$(".back").css('border', '20px solid #333');
			console.log('Font Size: 40px');
		};
	} else {
		$("#cardText").css("fontSize", "6.5vw");
		$(".back").css('border', '20px solid #333');
		console.log('Font Size: 50px');
	};
};


function changeCardSize() {
		if(window.innerWidth > window.innerHeight){
			//landscape
			console.log('LANDSCAPE MODE');
			changeTextSize();
		} else {
			//portrait
			console.log('PORTRAIT MODE');
			$('#mainCard').removeClass('w-50');
			$('#frontCard').removeClass('w-100');
			$('#backCard').removeClass('w-100');
			changeTextSize();
		};
};


function newCard() {
	let rand;
	rand = Math.floor(Math.random() * totalCards) + 1;  
	$('#cardText').text(cards[rand]);
	$("#cardText").fadeTo(1, 0.0);
	$("#cardText").fadeTo(1000, 1.0); 
};

function swipedR() {
	if (isMenuOn === false) {
		let check;
		check = $('#mainCard').hasClass('flip');
		if(check===false){
			$('#mainCard').addClass('flip');
			newCard();
		};	
	}; 
};

function swipedL() {
	if (isMenuOn === false) {
		let check;
		check = $('#mainCard').hasClass('flip');
		if(check===true){
			$('#mainCard').removeClass('flip');
			$("#mainCard").fadeTo(500, 0.5);
			$("#mainCard").fadeTo(500, 1.0);
		};
	};
};

function showInstruct() {		
	isMenuOn = true;
	$('#instructions').addClass('d-block');
	$("#instructions").fadeTo(1, 0.0);
	$("#instructions").fadeTo(1000, 1.0);
};

function showSettings() {		
	isMenuOn = true;
	$('#settings').addClass('d-block');
	$("#settings").fadeTo(1, 0.0);
	$("#settings").fadeTo(1000, 1.0);
};

function showMenu() {		
	isMenuOn = true;
	$('#menu1').addClass('d-block');
	$("#menu1").fadeTo(1, 0.0);
	$("#menu1").fadeTo(1000, 1.0);
};
	

//end functions

//swipe detect
	document.addEventListener('touchstart', handleTouchStart, false);        
	document.addEventListener('touchmove', handleTouchMove, false);

	var xDown = null;                                                        
	var yDown = null;

	function getTouches(evt) {
	  return evt.touches ||             // browser API
	         evt.originalEvent.touches; // jQuery
	}                                                     

	function handleTouchStart(evt) {
	    const firstTouch = getTouches(evt)[0];                                      
	    xDown = firstTouch.clientX;                                      
	    yDown = firstTouch.clientY;                                      
	};                                                

	function handleTouchMove(evt) {
	    if ( ! xDown || ! yDown ) {
	        return;
	    }

	    var xUp = evt.touches[0].clientX;                                    
	    var yUp = evt.touches[0].clientY;

	    var xDiff = xDown - xUp;
	    var yDiff = yDown - yUp;

	    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
	        if ( xDiff > 0 ) {
	            /* left swipe */ 
	            swipedL();
	        } else {
	            /* right swipe */
	            swipedR();
	        }                       
	    } else {
	        if ( yDiff > 0 ) {
	            /* up swipe */ 
	            if (isMenuOn === false) {
	            	$("#mainCard").fadeTo(1000, 0.2);
	            	showMenu();
	            };
	        } else { 
	            /* down swipe */
	            if (isMenuOn === false) {
	            	$("#mainCard").fadeTo(1000, 0.2);
	            	showInstruct();
	            };
	        }                                                                 
	    }
	    /* reset values */
	    xDown = null;
	    yDown = null;                                             
	};

//end swipe detect

//click detect

$("#instructions").click(function(){
	changeCardSize();
	$('#instructions').removeClass('d-block');
	$("#mainCard").fadeTo(1000, 1.0);
	isMenuOn = false;
});

$("#menu1option1").click(function(){
	$('#menu1').removeClass('d-block');
	showInstruct();
});

$("#menu1option2").click(function(){
	$('#menu1option2').text('Coming Soon!');
	$('#menu1option2').delay(1000).fadeOut();
});

$("#menu1option3").click(function(){
	$('#menu1').removeClass('d-block');
	showSettings();
});

$("#backToMenu").click(function(){
	$('#settings').removeClass('d-block');
	showMenu();
});

//click detect end



$(document).ready(function () {
	changeCardSize();
	newCard();
	isMenuOn = true;
	$('#mainCard').removeClass('d-none');
	$("#mainCard").fadeTo(1000, 0.2);
	showMenu();

	//mobile checker
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
	    isMobile = true;
	};

	if (isMobile === true) {
		let m;
		m = 'Mobile Version';
		$('#mobileText').text(m);
		$('#mainCard').unbind('mouseenter mouseleave')
		$('.antiFlip').addClass('noHover')

	} else {
		let m;
		m = 'Web Version';
		$('#mobileText').text(m);
		$('#mainCard').mouseenter(function() {
			console.log('mouse enter')
			newCard();
		});
		$('#instructionsText').html('Hover to the card to reveal it<br><br>Unhover to get a new card<br><br><span class="blinking">Click to continue</span>');

	};
	$('#mobileText').addClass('d-none') //demo off
	console.log(isMobile)
	//mobile checker end

	$(window).resize(function(){
    	changeCardSize();
	});

});
