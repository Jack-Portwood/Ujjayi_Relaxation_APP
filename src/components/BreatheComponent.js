import React,{Fragment} from 'react';


const BreatheComponent =()=> {

    const container = document.getElementById('container');
    const text = document.getElementById('text');

    const totalTime = 7500;
    const inhaleTime = (totalTime / 5) * 2;
    const holdTime = totalTime / 5;

    
    breathe()
    

    function breathe(){ 
        text.innerText = "Inhale!";
        container.className = 'container grow'; 

            setTimeout(() => {
                text.inner = "Hold"
        

            setTimeout(() => {
                text.innerText = "Exhale";
                container.className = 'container shrink';
            }, holdTime);
            }, inhaleTime);
    }

    setInterval(breathe, totalTime);

    return (
      <fragment>
        
      </fragment>
    );

    


}

export default BreatheComponent
