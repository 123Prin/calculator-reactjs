
import {  useState } from 'react';
import './App.css';
import Header from './component/Header';
import Keyboard from './component/Keyboard';

function App() {
  const[current,setcurrent]=useState('')
  const[history,sethistory]=useState([''])
  const[result,setresult]=useState('')
  const symbol1 =["+","-","*","x"]
  const delhandle=()=>{
   
    if(!current)return
    else
    setcurrent(current.slice(0,-1));
  }
  const symbolinput=(sym)=>{
    if(!current)return
    let lastchar=current.slice(-1)
    if(lastchar===".")return
    if(symbol1.includes(lastchar)) return
    else
    setcurrent(current+sym)
    
  }
  const resultclear=()=>{
    if(!current)return
    let lastchar=current.slice(-1)
    if(symbol1.includes(lastchar))  current = current.slice(0,-1);
    const calresult = eval(current)
    setresult(calresult)
const temphistory=[...history]

   temphistory.push(current)
sethistory(temphistory)


  }
  const inputvaluehandle=(data)=>{
    if(current.includes(".") && data===".")return
  if(!current&&data===".")return
    
    if(!current && data=="0"){
     return
    } else
    setcurrent(current+data)
  
  }
  const clearhandle=()=>{
console.log()
setcurrent('')
setresult('')



  }
  return (
    
    <div className="App">
    
      <div className="App-header">
      <div className='header_navbar'></div>
      <Header history={history} finalresult={result}  current={current}/>
      <div>
      <Keyboard 
      result={resultclear}
      clear={clearhandle}
      symbol={symbolinput} 
      delect={delhandle} 
      onsave={inputvaluehandle}  />
      </div>
      </div>
     
    </div>
    
  );
}

export default App;
