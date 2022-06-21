var botao1 = document.getElementById("adicionar");
var botao2 = document.getElementById("subtrair");
var display = document.getElementById("count");

var count = 0;

botao1.addEventListener('click',increment);
botao2.addEventListener('click',decrement);


function increment() {
	if (count<10) {
		count++;
		display.innerHTML = count;
	}
	
	
}

function decrement() {
	if (count>-10) {
		count--;
		display.innerHTML = count;
	}
}

var color = "green";

function mudaCor (valor) {
	
	if (valor === 0) {
		color = "red";
	}
	display.style.color = color;
}
console.log(count);

mudaCor(count);

