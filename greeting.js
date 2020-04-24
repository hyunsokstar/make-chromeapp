const form = document.querySelector(".js-form"),
	input = form.querySelector("input"),
	greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
	SHOWING_ON = "showing";

function paintGreeting(text) {
	form.classList.remove(SHOWING_ON);
	greeting.classList.add(SHOWING_ON);
	greeting.innerText = `Hello ${text}`;
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
	event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
	paintGreeting(currentValue);
}

function askForName() {
	form.classList.add(SHOWING_ON);
	form.addEventListener("submit", handleSubmit);
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	console.log("currentUser : ", currentUser);

	if (currentUser === null) {
		askForName();
	} else {
		console.log("currentUser 존재");
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
}

init();