function changeTextSize() {
	let x,y,z;
	x = $("#mainCard").width();
	y = $("#mainCard").height();
	z = x + y;
	console.log('x: '+ x);
	console.log('y: '+ y);
	console.log('Total: '+ z);
	if (z<1000) {
		if (z<900) {
			if (z<700) {
				$("#cardText").css("fontSize", "20px");
				console.log('Font Size: 20px');
			} else {
				$("#cardText").css("fontSize", "30px");
				console.log('Font Size: 30px');
			};
		} else {
			$("#cardText").css("fontSize", "40px");
			console.log('Font Size: 40px');
		};
	} else {
		$("#cardText").css("fontSize", "50px");
		console.log('Font Size: 50px');
	};
};


function changeCardSize() {
		if(window.innerWidth > window.innerHeight){
			//landscape
			console.log('LANDSCAPE MODE');
			$('#mainCard').addClass('w-50');
			$('#frontCard').addClass('w-100');
			$('#backCard').addClass('w-100');
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
	let check;
	check = $('#mainCard').hasClass('flip');
	if(check===false){
		$('#mainCard').addClass('flip');
		newCard();
	};
};

function swipedL() {
	let check;
	check = $('#mainCard').hasClass('flip');
	if(check===true){
		$('#mainCard').removeClass('flip');
		$("#mainCard").fadeTo(500, 0.5);
		$("#mainCard").fadeTo(500, 1.0);
	};
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
	            
	        } else { 
	            /* down swipe */
	            $('#overlay').addClass('d-block');
	            $("#overlay").fadeTo(1, 0.0);
            	$("#mainCard").fadeTo(1000, 0.2);
            	$("#overlay").fadeTo(1000, 1.0);
	        }                                                                 
	    }
	    /* reset values */
	    xDown = null;
	    yDown = null;                                             
	};

//end swipe detect

$('#mainCard').mouseenter(function() {
	console.log('mouse leave')
	newCard();
});


$(window).resize(function(){
    changeCardSize();
});

$(document).ready(function () {
	changeCardSize();
	newCard();
	$('#mainCard').removeClass('d-none');
	$("#mainCard").fadeTo(1000, 0.2);
	$('#overlay').addClass('d-block');
	$("#overlay").fadeTo(1, 0.0);
	$("#overlay").fadeTo(1000, 1.0);
	$("#overlay").click(function(){
		$('#overlay').removeClass('d-block');
		$('#overlay').addClass('d-none');
		$("#mainCard").fadeTo(1000, 1.0);
	});

});
