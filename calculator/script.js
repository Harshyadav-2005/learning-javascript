const operators = ['+','-','*','/']; 

const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function(){
        const value = this.textContent;
        if(value === 'clr'){
            display.value = '';
        } 
        else if(value === '='){
            try{
                display.value = eval(display.value);
            }
            catch(Err){
                display.value = 'Error' ;
            }
        }
        else if(value ==='.'){
            const lastnum = display.value.split(/[\+\-\*\/]/).pop();
            if(!lastnum.includes('.')){
                display.value += value;
            }
        }
        else if(operators.includes(value)){
            const lastchr = display.value.slice(-1);
            if(!operators.includes(lastchr)){
                display.value += value;
            }
            
        }

        else{
            display.value += value;
        }
    });
});