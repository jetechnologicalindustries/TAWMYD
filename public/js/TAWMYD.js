function changeCardSize() {
		if(window.innerWidth > window.innerHeight){
			//landscape
			console.log('LANDSCAPE MODE');
			let x;
			let y;
			x = $("#mainCard").width();
			y = $("#mainCard").height();
			$('#mainCard').addClass('w-50');
			$('#frontCard').addClass('w-100');
			$('#backCard').addClass('w-100');
			console.log('x: '+ x);
			console.log('y: '+ y);

		} else {
			//portrait
			console.log('PORTRAIT MODE');
			let x;
			let y;
			x = $("#mainCard").width();
			y = $("#mainCard").height();
			$('#mainCard').removeClass('w-50');
			$('#frontCard').removeClass('w-100');
			$('#backCard').removeClass('w-100');
			console.log('x: '+ x);
			console.log('y: '+ y);
			
		};

};

function newCard() {
	let rand;
	rand = Math.floor(Math.random() * totalCards) + 1;  
	$('#cardText').text(cards[rand]); 
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
	            $('#cardText').text('You swiped left');
	            $('#mainCard').toggleClass('flip'); 
	        } else {
	            /* right swipe */
	            $('#cardText').text('You swiped right'); 
	            $('#mainCard').toggleClass('flip');
	        }                       
	    } else {
	        if ( yDiff > 0 ) {
	            /* up swipe */ 
	            $('#cardText').text('You swiped up'); 
	        } else { 
	            /* down swipe */
	            $('#cardText').text('You swiped down'); 
	        }                                                                 
	    }
	    /* reset values */
	    xDown = null;
	    yDown = null;                                             
	};

//end swipe detect

$(window).resize(function(){
    changeCardSize();
});

$(document).ready(function () {
	changeCardSize();
	newCard();

});
