// theme button change
const lightTheme = document.getElementById('light-theme');
const darkTheme = document.getElementById('dark-theme'); 
// other elements
let body =  document.getElementsByTagName('body')[0];
const textInputContainer = document.getElementById('text-input');
const inputText = document.getElementById('input-text');

const enteredContainer = document.getElementById('entered-container');
const enteredDiv = document.querySelectorAll('.entered-div');
const enteredInput =  document.querySelectorAll('.entered-text-visible');

let enteredDivv = document.createElement('div');
enteredDivv.className = 'text-input-container entered-div';

// light theme
function lightThemeFunction(){
    lightTheme.classList.remove('active')
    darkTheme.classList.add('active')

    // to change the color
    body.style.backgroundColor = 'var(--light-gray)';
    textInputContainer.style.backgroundColor = 'var(--light-gray)';
    inputText.style.backgroundColor = 'var(--light-gray)';
    enteredContainer.style.backgroundColor = 'var(--light-gray)';
   
        enteredDivv.style.backgroundColor = 'var(--light-gray)';

}
lightTheme.addEventListener('click', lightThemeFunction);


// dark theme
function darkThemeFunction(){
    lightTheme.classList.add('active')
    darkTheme.classList.remove('active')

     // to change the color
     body.style.backgroundColor = 'var(--very-Dark-Desaturated-Blue)';
     textInputContainer.style.backgroundColor =  'var(--very-Dark-Desaturated-Blue)';
     inputText.style.backgroundColor = 'var(--very-Dark-Desaturated-Blue)';
     enteredContainer.style.backgroundColor =  'var(--very-Dark-Desaturated-Blue)';

     enteredDivv.style.backgroundColor = 'var(--very-Dark-Desaturated-Blue)';
}
darkTheme.addEventListener('click', darkThemeFunction)

// add entered element

    // for enter btn
const inputBtn = document.getElementById('check-btn');

inputBtn.addEventListener('click', ()=>{
    console.log(inputText.value)
    const enteredDivv = document.createElement('div')
    enteredDivv.innerHTML = `<div class="check-div"><img class="check" src="./images/icon-check.svg" alt=""></div>
    <p  class="entered-text-visible">${inputText.value} </p>
    <div><img class="cross" src="./images/icon-cross.svg" alt=""></div>`;
    console.log(inputText.value)
    enteredDivv.className = 'text-input-container entered-div';
        enteredContainer.appendChild(enteredDivv)
        enteredContainer.insertBefore(enteredDivv, enteredContainer.children[0]);
        inputText.value = ''

         // for the check div
        const checkDivvv = document.querySelectorAll('.check-div');
            for(let i = 0; i< checkDivvv.length; i++){
                let checkDivI = checkDivvv[i];
                
                checkDivI.addEventListener('click', ()=>{
                    console.log('checkbox-is-working')
                    checkDivI.classList.toggle('active')

                })
            };
})

// for inputed elements
