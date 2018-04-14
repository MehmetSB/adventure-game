// javascript for  adventure game
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var img = document.getElementById('level_image');
var lvl = document.getElementById('level_title');
var h1 = document.getElementById("h1");
var HasKey = false;
var HasSword = false;
var HasRest = false;
//Startpage
opt1.style.visibility='hidden';
opt3.style.visibility='hidden';
// SET lvl.style.visibility op hidden als je klaar bent. AAAAAAAAAAAAAAAA
lvl.style.visibility='hidden';
opt2.onclick = function(){
	mountain();
	opt1.style.visibility='visible';
	opt3.style.visibility='visible';

}

function mountain() {
	console.log("Mountain()");
	lvl.innerHTML = 'Mountain';
	img.src = 'img/building.jpg';
	h1.innerHTML = "You are now on the Great Plateau";
	opt1.setAttribute("onClick", "woods();");
	opt1.innerHTML = 'Go to the woods';
	// only allow option 2 if user has a key in his inventory
	opt2.innerHTML = 'Go to the building';
	opt2.onclick = function(){
		if(HasKey){
			temple();}
			else {
				alert('You need a key to enter this building.');
			}
		}
		opt3.innerHTML ='Climb the mountain';
		opt3.setAttribute("onClick", "mountain2();");
	}

function woods() {
	console.log("LostWoods()");
	lvl.innerHTML = 'Woods';
	img.src = 'img/2ways.jpg';
	h1.innerHTML = "You are now in the Lost Woods, There could be items hidden in the chests.";
	opt1.setAttribute("onClick", "temple2();");
	opt1.innerHTML = 'Go Left';
	//option 2 puts a key in the user's inventory.
	opt2.innerHTML = 'Search the chests';
	opt2.onclick = function(){
		HasKey = true;
		alert('You found a Key!');
	}
	opt3.innerHTML = 'Go Right';
	opt3.setAttribute("onClick", "mountain();");
}
function temple() {
	console.log("TempleofTime()");
	lvl.innerHTML = 'Temple of Time';
	img.src = 'img/sword.jpg';
	h1.innerHTML = "You are now in the Temple of Time.";
	opt1.innerHTML = 'Leave the building';
	opt1.onclick = function(){
		mountain();
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

function mountain2() {
	console.log("TopMountain()");
	lvl.innerHTML = 'Top of the mountain';
	img.src = 'img/mountain.jpg';
	h1.innerHTML = "You are now on the top of the Great Plateau";
	opt1.setAttribute("onClick", "mountain();");
	opt1.innerHTML = 'Descend the mountain';
	//option 2 gives an alert/pop-up to the user.
	opt2.innerHTML = 'Jump';
	opt2.onclick = function(){
		alert('You just killed yourself.');
		location.reload();
	}
	opt3.setAttribute("onClick", "battle();");
	opt3.innerHTML = 'Use a paraglider';
}

function battle() {
	console.log("Battle()");
	lvl.innerHTML = 'Battle';
	img.src = 'img/fight.jpg';
	h1.innerHTML = "You have been attacked by a monster, try to fight or run!";
	// only allow option 1 if user has a sword in his inventory
	opt1.innerHTML = 'Fight';
	opt2.style.visibility='hidden';
	opt3.innerHTML ='Run';
	opt1.onclick = function(){
		if(HasSword){
			ending();
				opt2.style.visibility='visible';
		}
		else {
			alert('You had no weapon so you died.');
			location.reload();
		}
		if(HasRest){
		ending();
}
	else {
		alert('You lost the battle because you had no energy left.')
		location.reload();
	}
	}
	opt3.onclick = function(){
		safehouse();
		opt2.style.visibility='visible';
	}
}


function temple2() {
	console.log("ForestTemple()");
	lvl.innerHTML = 'Forest Temple';
	img.src = 'img/forest-temple.jpg';
	h1.innerHTML = "This is the Forest of the Dead Temple, be careful no one ever made it out of here.";
	// only allow option 1 if user has a sword in his inventory
	opt1.innerHTML = 'Enter the Forest of the Dead Temple';
	opt2.style.visibility='hidden';
	opt3.innerHTML ='Go back';
	opt1.onclick = function(){
		defeat();
	}
	opt3.onclick = function(){
		woods();
		opt2.style.visibility='visible';
	}
}

function defeat() {
	console.log("GameOver()");
	lvl.innerHTML = 'Game Over';
	img.src = 'img/dead.jpg';
	h1.innerHTML = "Game Over, click restart to play again!";
	opt1.style.visibility='hidden';
	opt2.style.visibility='visible';
	opt2.innerHTML = 'Restart';
	opt3.style.visibility='hidden';
	opt2.onclick = function(){
		location.reload();
	}
}

function safehouse() {
	console.log("Safehouse()");
	lvl.innerHTML = 'You found a safehouse!';
	img.src = 'img/rest.jpg';
	h1.innerHTML = "You found a safehouse, you can rest here or travel further.";
	// only allow option 1 if user has a sword in his inventory
	opt1.innerHTML = 'Travel West';
	opt1.onclick = function(){
		if(HasRest){
			battle();
		} else {
			alert('You look tired, you need to take a rest');
		}
	}
	opt2.innerHTML='Rest';
	opt2.onclick = function(){
			HasRest = true;
			alert('You took a rest');
		}
	opt3.innerHTML ='Travel East';
	opt3.onclick = function(){
		if(HasRest){
			battle2();
		} else {
			alert('You look tired, you need to take a rest');
		}
	}
}

function battle2() {
	console.log("Battle2()");
	lvl.innerHTML = 'Battle 2';
	img.src = 'img/fight2.jpg';
	h1.innerHTML = "You have been attacked by a monster, try to fight or run!";
	opt1.innerHTML = 'Fight';
	opt2.style.visibility='hidden';
	opt3.innerHTML = 'Run';
	opt1.onclick = function(){
		if(HasSword){
		ending2();
		opt2.style.visibility='visible';
	}
	else {
		alert('You had no weapon so you died.');
		location.reload();
	}
	if(HasRest){
		ending2();
	}
	else {
		alert('You lost the battle because you had no energy left.');
	}
	opt3.onclick = function(){
		safehouse();
		opt2.style.visibility='visible';
	}
}
}

function ending() {
	console.log("Ending()");
	lvl.innerHTML = 'Ending';
	img.src = 'img/ending.jpg';
	h1.innerHTML = "You beated the enemy and brought the peace back to the world.";
	opt1.style.visibility='hidden';
	opt2.innerHTML = "Restart"
	opt2.onclick = function(){
		location.reload();
	}
	opt3.style.visibility='hidden';
}

function ending2() {
	console.log("Ending2()");
	lvl.innerHTML = 'Ending';
	img.src = 'img/ending2.jpg';
	h1.innerHTML = "You beated the enemy, but you absorbed his dark power and brought darkness to the world. Play again for an alternate ending.";
	opt1.style.visibility='hidden';
	opt2.innerHTML = "Restart"
	opt2.onclick = function(){
		location.reload();
	}
	opt3.style.visibility='hidden';
	}
