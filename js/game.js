// javascript for  adventure game
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var img = document.getElementById('level_image');
var lvl = document.getElementById('level_title')
var HasKey = false;
var HasSword = false;
var HasExpierence = false;
var HasLevelUp = false;
var HasRest = false;
//Startpage
opt1.style.visibility='hidden';
opt3.style.visibility='hidden';
opt2.onclick = function(){
	Level1();
	opt1.style.visibility='visible';
	opt3.style.visibility='visible';
}
function Level1() {
	console.log("Level1()");
	lvl.innerHTML = 'Level 1';
	img.src = 'img/building.jpg';
	opt1.setAttribute("onClick", "Level2();");
	opt1.innerHTML = 'Go to the woods';
	// only allow option 2 if user has a key in his inventory
	opt2.innerHTML = 'Go to the building';
	opt2.onclick = function(){
		if(HasKey){
			Level3();
		} else {
			alert('You need a key to enter this building.');
		}
	}
	opt3.innerHTML ='Climb the mountain';
	opt3.setAttribute("onClick", "Level4();");
}
function Level2() {
	console.log("Level2()");
	lvl.innerHTML = 'Level 2';
	img.src = 'img/2ways.jpg';
	opt1.setAttribute("onClick", "Level0();");
	opt1.innerHTML = 'Go Left';
	//option 2 puts a key in the user's inventory.
	opt2.innerHTML = 'Search the chests';
	opt2.onclick = function(){
		HasKey = true;
		alert('You found a Key!');
}
	opt3.innerHTML = 'Go Right';

	opt3.onclick = function(){
		alert('It was a TRAP!, the plants in this path were alive and you died.');
		location.reload();
	}
}
function Level3() {
	console.log("Level3()");
	lvl.innerHTML = 'Level 3';
	img.src = 'img/sword.jpg';
	opt1.innerHTML = 'Leave the building';
	opt1.onclick = function(){
		Level1();
		opt2.style.visibility='visible';
	}
	opt2.style.visibility='hidden';
	//option 3 puts a sword in the user's inventory.
	opt3.innerHTML = 'Take the Sword';
	opt3.onclick = function(){
		HasSword = true;
	 alert('You found a sword!');
	}
}
function Level4() {
	console.log("Level4()");
	lvl.innerHTML = 'Level 4';
	img.src = 'img/mountain.jpg';
	opt1.setAttribute("onClick", "Level1();");
	opt1.innerHTML = 'Descend the mountain';
	//option 2 gives an alert/pop-up to the user.
	opt2.innerHTML = 'Jump';
	opt2.onclick = function(){
	 alert('Wtf you wanna die?');
	}
	opt3.innerHTML = 'Use a paraglider';
	opt3.onclick = function(){
		if(HasExpierence){
			Level9();
		}
		else{
			alert ('You need expierence')
		}
}
}
function Level5() {
	console.log("Level5()");
	lvl.innerHTML = 'Level 5';
	img.src = 'img/fight.jpg';
	// only allow option 1 if user has a sword in his inventory
	opt1.innerHTML = 'Fight';
	opt2.style.visibility='hidden';
	opt3.innerHTML ='Run';
	opt1.onclick = function(){
		if(HasLevelUp){
			Level6();
		}
		else {
			alert('Your level is too low.');
		}
	}
	opt3.onclick = function(){
		Level9();
		opt2.style.visibility='visible';
	}
}
function Level6() {
	console.log("Level6()");
	lvl.innerHTML = 'Level 5';
	img.src = 'img/victory.jpg';
	opt1.style.visibility='hidden';
	opt2.style.visibility='hidden';
	opt3.style.visibility='hidden';
}
function Level0() {
	console.log("Level0()");
	lvl.innerHTML = 'Level 0';
	img.src = 'img/forest-temple.jpg';
	// only allow option 1 if user has a sword in his inventory
	opt1.innerHTML = 'Enter the Forest Temple';
	opt2.style.visibility='hidden';
	opt3.innerHTML ='Go back';
	opt1.onclick = function(){
		Level7();
	}
	opt3.onclick = function(){
		Level2();
		opt2.style.visibility='visible';
	}
}
function Level7() {
	console.log("Level7()");
	lvl.innerHTML = 'Level 7 - You found a chest';
	img.src = 'img/chest.jpg';
	// only allow option 1 if user has a sword in his inventory
	opt1.innerHTML = 'Take the items';
	opt2.style.visibility='hidden';
	opt3.innerHTML ='Leave the building';
	opt1.onclick = function(){
		alert('You found a shield!');
	}
	opt3.onclick = function(){
		Level8();

	}
}
function Level8() {
	console.log("Level8()");
	lvl.innerHTML = 'You have been attacked!';
	img.src = 'img/fight2.jpg';
	// only allow option 1 if user has a sword in his inventory
	opt1.innerHTML = 'Fight';
	opt2.style.visibility='hidden';
	opt3.innerHTML ='Run';
	opt1.onclick = function(){
		if(HasSword){
			Level2();
			HasExpierence = true;
			opt2.style.visibility='visible';
		} else {
			alert('YOU HAVE NO WEAPON!');
		}
	}
	opt3.onclick = function(){
		Level2();
		opt2.style.visibility='visible';
	}
}
function Level9() {
	console.log("Level9()");
	lvl.innerHTML = 'You found a safehouse!';
	img.src = 'img/rest.jpg';
	// only allow option 1 if user has a sword in his inventory
	opt1.innerHTML = 'Travel';
	opt1.onclick = function(){
		if(HasRest){
			Level5();
		} else {
			alert('You look tired, you need to take a rest');
		}
	}
	opt2.innerHTML='Rest';
	opt2.onclick = function(){
			HasRest = true;
			alert('Test');
		}
	opt3.innerHTML ='Training';
	opt3.onclick = function(){
		Level10();

	}
}
function Level10() {
	console.log("Level10()");
	lvl.innerHTML = 'Training ground';
	img.src = 'img/training.jpg';
	// only allow option 1 if user has a sword in his inventory
	opt1.innerHTML = 'Train';
	opt2.style.visibility='hidden';
	opt3.innerHTML ='Back to safehouse';
	opt1.onclick = function(){
		Level9();
		opt2.style.visibility='visible';
		HasLevelUp=true;
}
	opt3.onclick = function(){
		Level10();
		opt2.style.visibility='visible';
	}
}
