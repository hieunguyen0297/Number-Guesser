/*
    N220
    Hieu Nguyen
    Week 10 assignment
    Number Guesser
*/


//create function main
function main(){
    //create input box to get input value
    let input = document.createElement('input');
    input.placeholder = 'Enter a number';
    //set style for input box
    input.style.height = '25px';
    input.style.width = '150px';
    //append to document
    document.body.appendChild(input);

    //create button
    let button = document.createElement('button');
    button.innerHTML = 'Guess';
    //set style
    button.style.padding = '8px 30px';
    button.style.marginTop = '5px';
    button.style.display = 'block';
    //append to to document
    document.body.appendChild(button);


    //create output div
    let output = document.createElement('div');
    //append to document
    document.body.appendChild(output);


    //create a banner
    let banner = document.createElement('div');
    //set style
    banner.style.background = '#ff0033';
    banner.style.color = '#fff';
    banner.style.width = '250px';
    //append to document
    document.body.insertBefore(banner, input);


    //generate a random secret number
    let secretNumber = Math.floor(Math.random() * 128);
    console.log(secretNumber);


    //add event listener to the button
    button.addEventListener("click", function(){
        //get input value
        let inputValue =  document.querySelector('input').value;
        
        //check input value
        if(inputValue){
            //check if the value is a number
            if(isNaN(inputValue)){
                //Tell the user to enter a number
                //set text
                banner.innerHTML = 'Please enter a valid number! Example: 5';
                //set style
                banner.style.padding = '10px 5px';
                banner.style.marginBottom = '5px';
                banner.style.display = 'block';
            //if the value is a number  
            }else{
                //hide the banner when we have a number input
                banner.style.display ='none';
                //if the value is equal to secretNumber, print 'Correct', and then generate a new secret number
                //create a new element everytime the button is clicked
                if(inputValue == secretNumber){
                    //create output element to print to the document
                    let output = document.createElement('div');
                    //set text
                    output.innerHTML = 'You are correct - Congratulation!';
                    //append to the document
                    document.body.appendChild(output);
                    //generate a new secret number
                    secretNumber = Math.floor(Math.random() * 128);
                    console.log(secretNumber);
                //if the value is greater than secret number, print 'Too high'
                }else if(inputValue > secretNumber){
                    let output = document.createElement('div');
                    output.innerHTML = 'Too high';
                    document.body.appendChild(output)  
                //if the value is less than secret number, print 'Too low'
                }else if(inputValue < secretNumber){
                    let output = document.createElement('div');
                    output.innerHTML= 'Too low';
                    document.body.appendChild(output);
                }
            }
        //if the input value is empty
        }else{
            //tell the user to enter a number
            //set text
            banner.innerHTML = 'Please enter a number!';
            //set style
            banner.style.padding = '10px 5px';
            banner.style.marginBottom = '5px';
            //display the banner
            banner.style.display = 'block';
        }
    })
   
}

