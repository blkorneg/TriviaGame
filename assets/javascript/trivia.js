$(document).ready(function() {

//Initialize trivia
function init() {
	var startScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg btn-block start-button' href='#' >Start NBA Trivia!</a></p>";
	$(".mainSection").html(startScreen);
}

init();


function generateFeedBack() {
	NBAQuiz = "<p class='text-center top-margin-space'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>"+feedBackInfo + correctAnswerArr[questionCounter] + "</p>";
	$(".mainSection").html(NBAQuiz);
	setTimeout(timeCheck, 2000); 
}

function showNBAQuiz() {
	NBAQuiz = "<p class='text-center top-margin-space'>Time Remaining: <span class='timer'>15</span></p><p class='text-center'>" + questionArr[questionCounter] + "</p><p class='top-margin-space answer'>" + answerArr[questionCounter][0] + "</p><p class='answer'>"+answerArr[questionCounter][1]+"</p><p class='answer'>"+answerArr[questionCounter][2]+"</p><p class='answer'>"+answerArr[questionCounter][3]+"</p>";
	$(".mainSection").html(NBAQuiz);
}

function timeCheck() {
	if (questionCounter < 7) {
	questionCounter++;
	showNBAQuiz();
	counter = 15;
	countDown();
	}
	else {
		showResults();
	}
}

function countDown() {
	clock = setInterval(fifteenSeconds, 1000);
	function fifteenSeconds() {
		if (counter === 0) {
			clearInterval(clock);
		feedBackInfo = "Time Up! The correct answer was: "
		generateFeedBack();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function showResults() {
	var score = correctCounter/8*100;
	NBAQuiz = "<h5 class='top-margin-space'>Here's your Results!" + "</h5>" + "<p class='top-margin-space'>Correct Answers: " + correctCounter + " / 8"+ "</p>" + "<p>Score: " + score + "</p>" +"<p class='text-center top-margin-space'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' >Reset Trivia!</a></p>";
	$(".mainSection").html(NBAQuiz);
}

function resetTrivia() {
	questionCounter = 0;
	correctCounter = 0;
	counter = 15;
	showNBAQuiz();
	countDown();
}

var NBAQuiz;
var feedBackInfo;
var questionArr = ["What player scored the most points in a game?", "What player won the most NBA Championships?", "What team drafted Kobe Bryant?", "What Player has the most 3 pointers of all time?", "How is the shortest player of all times?", "What team has the best record in a season?", "What player has scored the most points of all time?", "What player has the highest career PPG?"];
var answerArr = [["A. Wilt Chamberlin", "B. Michael Jordan", "C. Kobe Bryant", "D. Lebron James"], ["A. Michael Jordan","B. Bill Russell","C. Robert Horry","D. Isiah Thomas"], ["A. Lakers", "B. Jazz", "C. Hornets", "D. Bulls"], ["A. Glen Rice","B. Stephen Curry","C. Ray Allen","D. Jason Terry"], ["A. Tiny Archibald", "B. Spud Web", "c. Nate Robertson", "D. Tyrone Bogues"], ["A. Warriors","B. Bulls","C. Cavs","D. Lakers"], ["A. Michael Jordan", "B. Kareem Adul Jabbar", "C. Kobe Bryant", "D. Labron James"], ["A. Isiah Thomas", "B. Kareem Adul Jabbar", "C. Kobe Bryant", "D. Michael Jordan"]];
var correctAnswerArr = ["A. Wilt Chamberlin", "B. Bill Russell", "C. Hornets", "C. Ray Allen", "D. Tyrone Bogues", "A. Warriors", "B. Kareem Adul Jabbar", "D. Michael Jordan"];
var questionCounter = 0;
var clock;
var correctCounter = 0;
var counter = 15;

$("body").on("click", ".start-button", function(event){

	showNBAQuiz();
	countDown();

}); 

$("body").on("click", ".answer", function(event){
	var selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswerArr[questionCounter]) {
		clearInterval(clock);
		feedBackInfo = "Boom! The answer is: "
		correctCounter++;
		generateFeedBack();
	}
	else {
		clearInterval(clock);
		feedBackInfo = "Incorrect! The correct answer is: "
		generateFeedBack();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetTrivia();
}); 

}); 
