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

$(window).resize(function(){
    changeCardSize();
});

$(document).ready(function () {
	let totalCards;
	let rand;
	totalCards = cards[0];
	rand = Math.floor(Math.random() * totalCards) + 1;  
	$('#cardText').text(cards[rand]); 
});
