import './App.css';
import React,{Component} from 'react';
import Clock from './settime';

class App extends Component{
   render(){
     return(
        <div className="clock">
        <div className="outer-extra-circle">
            <div className="outer-circle">
                <div className="ring">
                    <div className="mask-left"></div>
                    <div className="sem-right"></div>
                    <div className="sem-left"></div>
                    <div className="inner-circle">
                    <Clock/>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
   }  
}

export default App;
