// javascript library for simple game development

document.getElementById('option1').innerHTML = 'Start';
document.getElementById('level_title').innerHTML = 'Start het spel';
var HasKey = false;
var HasSword = false;
// jquery variant
//$('#option1').html('Dit is keuze 1');


// https://www.youtube.com/watch?v=4ba1BqJ4S2M
function Level1() {
	console.log("Level1()");
	document.getElementById('level_title').innerHTML = 'Level 1';
	document.getElementById('level_image').src = 'img/nokey.jpg';
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Option 1';
	opt1.setAttribute("onClick", "javascript:Level1();");
	// only allow option 2 if user has a key in his inventory
	var opt2 = document.getElementById('option2');
	opt1.innerHTML = 'Go to the woods';
	opt1.setAttribute("onClick", "javascript:Level2();");
	opt2.innerHTML = 'Go to the building';
	opt2.onclick = function(){
		if(HasKey){
			Level3();
		} else {
			alert('You need a key to enter this building.');
		}
	}
	var opt3 = document.getElementById('option3');
	opt3.innerHTML ='Climb the mountain';
	opt3.setAttribute("onClick", "javascript:Level4();");
}
function Level2() {
	console.log("Level2()");
	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'img/2ways.jpg';
	var opt1 = document.getElementById('option1');
	opt1.setAttribute("onClick", "javascript:Level5();");
	opt1.innerHTML = 'Go Left';
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Search the chests';
	opt2.onclick = function(){
		HasKey = true;
		alert('You found a Key!');
}
	var opt3 = document.getElementById('option3');
	opt3.setAttribute("onClick", "javascript:Level1();");
	opt3.innerHTML = 'Go Right';
}
function Level3() {
	console.log("Level3()");
	document.getElementById('level_title').innerHTML = 'Level 3';
	document.getElementById('level_image').src = 'img/sword2.jpg';
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Take the Sword';
	opt1.onclick = function(){
		HasSword = true;
	 alert('You found a sword!');
}
	var opt2 = document.getElementById('option2');
	opt2.setAttribute("onClick", "javascript:Level1();");
	opt2.innerHTML = 'Leave the building';
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Take the Sword';
	opt3.onclick = function(){
		HasSword = true;
	 alert('You found a sword!');
}
}
function Level4() {
	console.log("Level4()");
	document.getElementById('level_title').innerHTML = 'Level 4';
	document.getElementById('level_image').src = 'img/mountain.jpg';

	var opt1 = document.getElementById('option1');
	opt1.setAttribute("onClick", "javascript:Level1();");
	opt1.innerHTML = 'Descend the mountain';

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Jump';
	opt2.onclick = function(){
	 alert('Wtf you wanna die?');
	}
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Use a paraglider';
	opt3.setAttribute("onClick", "javascript:Level5();");
	}
function Level5() {
		console.log("Level5()");
		document.getElementById('level_title').innerHTML = 'Level 5';
		document.getElementById('level_image').src = 'img/fight.jpg';
		var opt1 = document.getElementById('option1');
		opt1.setAttribute("onClick", "javascript:Level1();");
		opt1.innerHTML = 'Give Up';
		// only allow option 2 if user has a key in his inventory
		var opt2 = document.getElementById('option2');
		opt1.innerHTML ='Run';
		opt1.setAttribute("onClick", "javascript:Level2();");
		opt2.innerHTML = 'Fight';
		opt2.onclick = function(){
			if(HasSword){
			Level6();
				} else {
					alert('YOU HAVE NO WEAPON!');
				}
				var opt2 = document.getElementById('option2');
				opt2.innerHTML = 'Fight';
				opt2.onclick = function(){location.reload()
	}}
		var opt3 = document.getElementById('option3');
		opt3.innerHTML ='Die';
		opt3.setAttribute("onClick", "javascript:Level0();");
		opt3.onclick = function(){location.reload()
}}
function Level6() {
		console.log("Level6()");
		document.getElementById('level_title').innerHTML = 'Level 5';
		document.getElementById('level_image').src = 'img/victory.jpg';
		var opt1 = document.getElementById('option1');
		opt1.setAttribute("onClick", "javascript:Level6();");
		opt1.innerHTML = 'Victory';
		var opt2 = document.getElementById('option2');
		opt2.setAttribute("onClick", "javascript:Level6();");
		opt2.innerHTML = 'Victory';
		var opt3 = document.getElementById('option3');
		opt3.setAttribute("onClick", "javascript:Level6();");
		opt3.innerHTML = 'Victory';
}
