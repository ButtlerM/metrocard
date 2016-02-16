var rides;
var monthly;

function metroCalc(){
	rides = document.getElementById('rides').value;
	monthly = rides * 4;
	alert("You ride the subway " +
		monthly +
		" times every month");
	monthlyCard();
}

function monthlyCard(){
if (monthly > 41) {
	alert("You should buy a monthly card!");
} else {
	alert("You should buy a ticket per ride!");
}

}
