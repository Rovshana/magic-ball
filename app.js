// firstfull, I gonna select the elements
let button = document.querySelector('button');
let answer = document.querySelector('#answer');

let displayAnswer = "";
let randomNum =""




// adding evenet listener to the button
button.addEventListener('click', function(){
    // generating randomNum

genearteRandomNums();

    // turning randomNum into answer
    // if(randomNum === 1){
    //     displayAnswer = 'NO idea'

    // }
    // if(randomNum === 2){
    //     displayAnswer = 'it depends on u'

    // }
    // if(randomNum === 3){
    //     displayAnswer = 'yes, definetly'

    // }
    // if(randomNum === 0){
    //     displayAnswer = 'No, Off Course'

    // } else{
    //     displayAnswer = 'noo answer!'
    // }





    // displaying answer 

    answer.innerHTML = displayAnswer;
})


// function which geneates random Numbers
 function genearteRandomNums(){
     randomNum = Math.floor(Math.random()*3);
     console.log(randomNum)
     if(randomNum === 1){
        displayAnswer = 'NO idea'

    }
    if(randomNum === 2){
        displayAnswer = 'it depends on u'

    }
    if(randomNum === 3){
        displayAnswer = 'yes, definetly'

    }
    if(randomNum === 0){
        displayAnswer = 'sure'

    } else{
        displayAnswer = 'Yeahhh'
     
 }
}