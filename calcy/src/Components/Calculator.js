import React,{useState} from 'react'

const Calculator = () => {
    const[input,setInput] = useState("");
    const[result,setResult] = useState("");
    const changeHandler = e => {
        setInput(e.target.value)
    }
    function clearInput(){
        setInput("")
    }
    function clearResult(){
        setResult("")
    }
  return (
    <div className='calcy'>
        <h2><b className='cagr'>C</b><b className='decor'>alculato</b><b className='care'>R</b></h2>
        <input type="text" name="input" placeholder="ENTER" value={input} onChange={changeHandler} /><br/>
        <button className='equal' onClick={()=>setResult(eval(input))}><b>=</b></button>
        <button className='clear' onClick={()=>{clearInput();clearResult()}}><b>C</b></button>

        <h2 className='result'>{result}</h2>
        <br/><br/>
        <button onClick={()=>setInput(input+"1")}>1</button>
        <button onClick={()=>setInput(input+"2")}>2</button>
        <button onClick={()=>setInput(input+"3")}>3</button>
        <button onClick={()=>setInput(input+"4")}>4</button><br/>
        <button onClick={()=>setInput(input+"5")}>5</button>
        <button onClick={()=>setInput(input+"6")}>6</button>
        <button onClick={()=>setInput(input+"7")}>7</button>
        <button onClick={()=>setInput(input+"8")}>8</button><br/>
        <button onClick={()=>setInput(input+"9")}>9</button>
        <button onClick={()=>setInput(input+"0")}>0</button>
        <button className='symbols' onClick={()=>setInput(input+"+")}><b>+</b></button>
        <button className='symbols' onClick={()=>setInput(input+"-")}><b>-</b></button><br/>
        <button className='symbols' onClick={()=>setInput(input+"*")}><b>*</b></button>
        <button className='symbols' onClick={()=>setInput(input+"%")}><b>%</b></button>
        <button className='symbols' onClick={()=>setInput(input+"/")}><b>/</b></button>
        <button className='symbols' onClick={()=>setInput(input+"(")}><b>(</b></button>
        <button className='symbols' onClick={()=>setInput(input+")")}><b>)</b></button>        
    </div>
  )
}

export default Calculator;