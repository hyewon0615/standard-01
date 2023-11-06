import { useState } from 'react';
import './App.css';

function App() {
  const initialArray = ['apple','banana','cherry', 'date', 'elderberry']
  const [array, setArray]= useState(initialArray)
  const [result, setResult] = useState("")
  const [input, setInput] = useState("")
  const [input2, setInput2] = useState("")
  //foreach
  const forEachBtn= function(){
    let forEach = ''
    array.forEach(function(item){
      forEach += `${item}, `
    })
    setResult(forEach)
  }
  //filter
  const filterBtn = function(){
    const filter = array.filter((item)=>{
      return (item.includes(input))
    })
    setResult(filter.join(", "))
  }
  //map
  const mapBtn = function(){
    const map = array.map((item)=>{
      return  item.toUpperCase()
    })
    setResult(map.join(", "))
  }
  //reduce
  const reduceBtn= function(){
    const reduce = array.reduce((item, item2)=>{
      
      return `${item} + ${item2}`
    })
    setResult(reduce)
  }
  //push 근데 푸쉬는 없는거 아녀..?
  const pushBtn= function(){
    // const push = [...array, input]
    // setArray(push)
    // setResult(push.join(', ')) 

    array.push(input)
    setArray(array)
    setResult(array.join(', '))
  }
  //pop
  const popBtn = function(){
    // const pop = [...array]
    // pop.pop();
    // setArray(pop)
    // setResult(pop.join(', '))

    array.pop()
    setArray(array)
    setResult(array.join(', '))
  }
  //slice
  const sliceBtn = function(){
    const slice = array.slice(Number(input), Number(input2))
    setResult(slice. join(', '))
  }
  //splice 이게 원본배열이 바뀌는게 불변성때문인건 알겠는데 왜 리렌더링됨,,
  const spliceBtn = function(){
    const splice =array.splice(Number(input), Number(input2))
    setResult(splice.join(', '))
  } 
  
  //indexOf
    const indexOfBtn = function(){
      const indexOf = array.indexOf(input)
      setResult(indexOf)
    }
//includes
    const includesBtn= function(){
      const includes = array.includes(input)
      console.log(includes)
      setResult(String(includes) )
    }
//find
    const findBtn = function(){
      const find = array.find((item)=>{
        return (item.includes(input))
      })
      setResult(find)

    }
//some
const someBtn = function(){
  const some = array.some((item)=>{
    return (item.includes(input))
  })
  setResult(String(some))
}
//every
const everyBtn =function(){
  const every =array.every((item)=>{
    return (item.includes(input))
  })
  setResult(String(every))
}



  return (
  <div>
    <h1>Standard반 배열 API</h1>
    <input value={input} onChange={(event)=>{setInput(event.target.value)}}/>
    <input value={input2} onChange={(event)=>{setInput2(event.target.value)}}/>
    <div>
        <button onClick={forEachBtn}>forEach</button>
        <button onClick={filterBtn}>filter</button>
        <button onClick={mapBtn}>map</button>
        <button onClick={reduceBtn}>reduce</button>
        <button onClick={pushBtn}>push</button>
        <button onClick={popBtn}>pop</button>
        <button onClick={sliceBtn}>slice</button>
        <button onClick={spliceBtn}>splice</button>
        <button onClick={indexOfBtn}>indexOf</button>
        <button onClick={includesBtn}>includes</button>
        <button onClick={findBtn}>find</button>
        <button onClick={someBtn}>some</button>
        <button onClick={everyBtn}>every</button>
        <button>sort</button>
        <button>join</button>

    </div>
    <div>
      <h3>원본 배열: </h3>
      <p>{array.join(", ")}</p>
    </div>
    <div>
      <h3>결과물: </h3>
      <p>{result}</p>
    </div>
  </div>)
}

export default App;
