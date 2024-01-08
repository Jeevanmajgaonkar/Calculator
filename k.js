var string = "";
let buttons = document.querySelectorAll(".btn")

let strupdate = () => {
    document.querySelector("#placeholder").value = string;
}

buttons.forEach((singlebtn) => {
    singlebtn.addEventListener('click', () => {
        cal(singlebtn.innerText)
 
    })

})


    let cal = (btn) => {
        if (btn === '=') {
            string = String(eval(string));
        }
      
    
    
        else if (btn == 'Del') {
            string = string.slice(0, -1)
          

        }
        else if (btn == 'Ac' || btn == 'backspace') {
            string = "";
           

        }
        else {
            string += btn
    

        }
    strupdate();
    }
  


    document.addEventListener('keydown', (event) => {
        // Check if the pressed key is a number (0-9)
        if (event.key >= '0' && event.key <= '9') {
          string += event.key;
        strupdate()
        }
      
        // Check if the pressed key is an operator (+, -, *)
        if(event.key === '+'){
          cal('+')
        }
        if(event.key === '-'){
          cal('-')
        }
        if(event.key === '*'){
          cal('*')
        }
      
        // Handle Enter key as "=" button
        if (event.key === '=' || event.key === 'Enter') {
          cal('=');
        }
      
        // Handle Backspace key press
        if (event.key === 'Backspace') {
       cal('backspace')
        }
      
        
      });
      
