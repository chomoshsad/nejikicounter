const countSpan = document.querySelector('.count');
const upButton = document.querySelector('.up-button');
const resetButton = document.querySelector('.reset-button');
const dotsDiv = document.querySelector('.dots');
const messageDiv = document.querySelector('.message');

let count = 0;

function updateCounter() {
	countSpan.textContent = count;
	
	if (count % 7 === 0) {
		dotsDiv.innerHTML += '<div class="dot red"></div>';
	}
	
	if (count === 49) {
		messageDiv.textContent = 'おめでとう！';
		messageDiv.style.display = 'block';
	}
	
	if (count % 49 === 0) {
		count = 0;
		dotsDiv.innerHTML = '';
	}
}

function increaseCount() {
	count++;
	updateCounter();
}

function resetCount() {
	count = 0;
	dotsDiv.innerHTML = '';
	messageDiv.style.display = 'none';
	updateCounter();
}

upButton.addEventListener('click', increaseCount);
resetButton.addEventListener('click', resetCount);
