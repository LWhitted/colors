import logo from './logo.svg';
import {useState} from 'react';

const GenerateColors = () => {
  const [color, setColor] = useState("")
  const randomColor = () =>{
    setColor(`#${Math.random().toString(16).substr(-6)}`);
  };
  return(
    <div className="button" style = {{backgroundColor:color}}>
      <button onClick={()=> randomColor()}> Generate Random Color</button>
    </div>
  )
};
export default GenerateColors;



