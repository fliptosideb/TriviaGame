let isRun = false
let time
let myTimer

const buttons = _ => {
    document.querySelector('#quest').style.visibility = 'visible'
    document.querySelector('#start').style.visibility = 'hidden'
}

const again = _ => {
    document.querySelector('#replay').style.visibility = 'visible'
}

const starter = _ => {
    if (!isRun) {
        time = 20
        isRun = true
        myTimer = setInterval(() => {
            if (time <= 0) {
                check()
                time = 20
                isRun = false
                clearInterval(myTimer)
            }
            document.querySelector('#time').textContent = `You have ${time} seconds`;
            time--
        }, 1000)
    }
buttons()
document.querySelector('#replay').style.visibility = 'hidden'
}

const check = _ => {
    var quest1 = document.quiz.ans1.value;
    var quest2 = document.quiz.ans2.value;
    var quest3 = document.quiz.ans3.value;
    var quest4 = document.quiz.ans4.value;
    var quest5 = document.quiz.ans5.value;
    var quest6 = document.quiz.ans6.value;
    var quest7 = document.quiz.ans7.value;
    var correct = 0;

    if (quest1 === "c") {
        correct++;
    }
    if (quest2 === "b") {
        correct++;
    }
    if (quest3 === "c") {
        correct++;
    }
    if (quest4 === "d") {
        correct++;
    }
    if (quest5 === "a") {
        correct++;
    }
    if (quest6 === "a") {
        correct++;
    }
    if (quest7 === "b") {
        correct++;
    }
    document.querySelector('#quest').style.visibility = 'hidden'
    document.querySelector('#time').style.visibility = 'hidden'

    if (correct < 7) {
        document.querySelector('#correct').innerHTML = `You got ${correct} digits correct!`
    } else {
        document.querySelector('#correct').innerHTML = `You got all ${correct} digits correct! You got Jenny's number!`
    }
    again()
    console.log(correct)
}


document.addEventListener('click', e => {
    if (e.target.className === 'begin') {
        starter();
    }
}
)

document.addEventListener('click', e => {
    if (e.target.className === 'retry') {
        document.querySelector('form').reset()
        starter();
        time = 20
        document.querySelector('#correct').innerHTML = ''
        document.querySelector('#time').style.visibility = 'visible'
    }
}
)