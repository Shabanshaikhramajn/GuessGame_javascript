let randomnumber = parseInt(Math.random()*100+1);


const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');

const lowerhi = document.querySelector('.lowerhi');
const resultparse = document.querySelector('.resultparse');


const p = document.createElement('p')


let prevguess =[]
let numguess =1
let playgame =true;


if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
       const  guess =  parseInt(userinput.value);
       validateguess(guess)
       console.log(guess)
    })
}

function validateguess(guess){

        if(isNaN(guess)){
            alert("please enter a valid number")
        }
        else if(guess<1){
            alert(`please enter a more than 1  number`)
        }
        else if(guess>100){
            alert(`please enter a less than 100 number`)
        }
        else{
            prevguess.push(guess)
            if(numguess===11){
                displayguess(guess)
                displaymessage(`game over random num was ${randomnumber}`)
                endgame()

            }
            else{
                displayguess(guess) 
                checkguess(guess)

            }


        }
        
}

function checkguess(guess){

    if(guess ===randomnumber){
        displaymessage(`you guesses it right`)
        endgame()
    }

    else if (guess<randomnumber){
        displaymessage(`num is too low`)
    }
    
    else if (guess>randomnumber){
        displaymessage(`num is too high`)
    }



}





function displaymessage (message){
       lowerhi.innerHTML=`<h2>${message}`

}


function displayguess(guess){
    userinput.value =''
    guessslot.innerHTML +=`${guess} ,`
    numguess++;
    remaining.innerHTML =`${11-numguess}`

}

function newgame(){
 const  newgamebutton =document.querySelector('#newgame')
 newgamebutton.addEventListener('click', function(e){
     randomnumber = parseInt(Math.random()*100+1);
     prevguess = []
     numguess = 1
     guessslot.innerHTML = ''
     remaining.innerHTML = `${11-numguess} `;
     userinput.removeAttribute('disabled')
     startOver.removeChild(p)
     playgame = true

 })
}
function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame > Start new game</h2>`;
    startOver.appendChild(p)
    playgame =false;
    newgame ()
}