//every begining has a begining, and this is this begining. And, being that
//this is the begining, take it with a grain of salt as there is quite a road
//yet being paved; as I am learning, all code and documentation are "as is"

//see index.css for container

import { useState } from 'react';

//this is a silly button that counts by one when you click it
//Note: React component names must always start with a capital letter
function CounterButton({curClickCount, handleInc}){

    return (   <button onClick={handleInc}>
                    You've clicked {curClickCount} times
                </button>
            );
}

//This is the reset button
//Note: React component names must always start with a capital letter
function ResetCounterButton({curCount, handleReset}){
    //a silly message for a silly program
    const msg = curCount===0? "At least one click required to reset": "Reset"
    return ( <button onClick={handleReset} disabled={curCount===0}> 
                   {msg}
             </button>
            );
}

//"export default"  makes this the main component in the file.
//returns a component
export default function BasicButtonApp() {

    const baseClickTotal = 0;
    const [clickAmt, setClickAmt] = useState(baseClickTotal);


    //functionality to increase the number times clicked button
    function handleCounterButton(){
        setClickAmt(clickAmt+1)
    }

    //functionality to reset the counter
    function handleResetCount(){
        setClickAmt(baseClickTotal)
    }

    //see index.css
    return (
         <div>
            <div class= "title"> 
                <h1>Hello Button!</h1>
            </div>
            
            <div class="container">
                <CounterButton curClickCount={clickAmt}
                               handleInc={handleCounterButton}
                />
                <ResetCounterButton curCount = {clickAmt}
                                    handleReset={handleResetCount}>
                </ResetCounterButton>
            </div>
            
         </div>
    )

}// end main function

