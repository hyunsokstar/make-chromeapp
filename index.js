const clockContainer = document.querySelector(".js-clock"),
	clockTitle = clockContainer.querySelector("h1");

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
let tid;

function showRemaining() {
	// console.log("showRemaining 실행");
	var end = new Date("12/24/2020");

	var now = new Date();
	var RemainDate = end - now;

	var days = Math.floor(RemainDate / _day);
	var hours = Math.floor((RemainDate % _day) / _hour);
	var minutes = Math.floor((RemainDate % _hour) / _minute);
	var seconds = Math.floor((RemainDate % _minute) / _second);

	let remaing_time = `${days}d:${hours}h:${minutes}m:${
		seconds < 10 ? `0${seconds}` : seconds
	}s`;

	// console.log("remaing_time : ", remaing_time);
	clockTitle.innerHTML = remaing_time;

	if (RemainDate < 0) {
		// 시간이 종료 되었으면..
		clearInterval(tid); // 타이머 해제
	} else {
		RemainDate = RemainDate - 1000; // 남은시간 -1초
	}
}

function init() {
	showRemaining();
	tid = setInterval(showRemaining, 1000);
}

init();
