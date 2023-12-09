import React from 'react';
 
//importing typewriter-effect
import Typewriter from "typewriter-effect";
import './index.scss';
 
function App() {
    return (
        <div className="App">
            <Typewriter
                options={{
                    strings: ['3rd Grade Education'],
                    autoStart: true,
                    loop: true,
                }}
                />
        </div>
        
    );
}


 
export default App;