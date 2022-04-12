let a = 0;
let b = 0;
let score = 0;
let questionNumber = 4;
let questionNow = 0;

function updatePage() {
  // Question Bar
  let qbar = document.querySelector(".question-p");
  qbar.innerHTML = "Question " + ++questionNow + "/" + questionNumber;
  let qMeter = document.querySelector(".meter");
  qMeter.value += 25;

  // 문제 생성
  a = parseInt(Math.random() * 10);
  b = parseInt(Math.random() * 10);
  let question = document.querySelector(".question");
  question.innerHTML = "What is " + a + " + " + b + "?";

  // 선택지 가리키기
  let ch1 = document.querySelector(".child1");
  let ch2 = document.querySelector(".child2");
  let ch3 = document.querySelector(".child3");
  let ch4 = document.querySelector(".child4");

  let answerList = [a + b - 2, a + b, a + b + 2, a + b + 4]; // 선택지에 들어갈 답 리스트

  // 무작위로 섞기
  for (let i = 0; i < 4; i++) {
    let idx1 = parseInt(Math.random() * 4);
    let idx2 = parseInt(Math.random() * 4);

    let temp = answerList[idx1];
    answerList[idx1] = answerList[idx2];
    answerList[idx2] = temp;
  }

  // 선택지에 답 넣기
  ch1.innerHTML = answerList[0];
  ch2.innerHTML = answerList[1];
  ch3.innerHTML = answerList[2];
  ch4.innerHTML = answerList[3];
}

function checkAnswer(choice) {
  console.log(choice.innerHTML);
  // 답 확인
  if (parseInt(choice.innerHTML) === a + b) {
    score += 1;
    choice.style.backgroundColor = "green";
  } else {
    choice.style.backgroundColor = "red";
  }
  document.querySelector(".score").innerHTML = score; // 스코어 표시

  if (questionNow === questionNumber) {
    // 문제 개수 도달하면 끝내기
    setTimeout(function () {
      let body = document.querySelector("body");
      body.innerHTML = "<h1>Total score : " + score + "</h1>";
      body.innerHTML +=
        '<a href="quiz.html"> <button class="start-btn">Play Again</button></a>';
    }, 1000);
  } else {
    setTimeout(function () {
      choice.style.backgroundColor = "#ecf5ff";
      updatePage();
    }, 1000);
  }
}

function printScore() {
  document.querySelector(".totalScore").innerHTML = "Total score : " + score;
}
