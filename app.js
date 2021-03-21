const question = {
    stem: 'how is buried in grants tomb',
    anOne: 'bob',
    anTwo: 'tom',
    anThree: 'sara',
    anFour: 'brandy',
    correct: 2,
    display: () => {
     document.querySelector('.stem').textContent = question.stem
     document.querySelector('.an-1').textContent = question.anOne
     document.querySelector('.an-2').textContent = question.anTwo
     document.querySelector('.an-3').textContent = question.anThree
     document.querySelector('.an-4').textContent = question.anFour

    },
    check: (userCho) => {
        if(userCho === question.correct) {
           document.querySelector('.feedback').textContent = `${question.anTwo} is correct`
        } else {
            document.querySelector('.feedback').textContent = 'incorrent'
        }
    }
}

document.querySelector('.an-1').addEventListener('click', () => question.check(1))
document.querySelector('.an-2').addEventListener('click', () => question.check(2))
document.querySelector('.an-3').addEventListener('click', () => question.check(3))
document.querySelector('.an-4').addEventListener('click', () => question.check(4))
question.display()