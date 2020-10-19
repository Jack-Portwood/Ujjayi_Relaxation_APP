import React,{Fragment} from 'react';


const BreatheComponent =()=> {

    const container = document.getElementById('container');
    const text = document.getElementById('text');

    const totalTime = 7500;
    const inhaleTime = (totalTime / 5) * 2;
    const holdTime = totalTime / 5;

    

    function breathe(){ 
        text.innerText = "Inhale";
        container.className = 'container grow'; 

            setTimeout(() => {
                text.innerText = "Hold..."
        

            setTimeout(() => {
                text.innerText = "Exhale";
                container.className = 'container shrink';
            }, holdTime);
            }, inhaleTime);
    }

    setInterval(breathe, totalTime);
    
    breathe();
    return (
      <Fragment>
        <h1 className="title"> Take Time Out And Breathe.</h1>
       
      </Fragment>
    );

    


}

export default BreatheComponent
