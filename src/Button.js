import { useState } from "react" 

// function App() {
//   // const item = [100,150,150,200]
//   const [info,setCounter] = useState({
//     name : 'Nguyen Van A',
//     age : 15,
//     gender : 'male'
//   })

//   function handleIncrease () {
//     setCounter({
//       ...info,
//         hobby : 'play game',
//     })
//   }
//   return (
//     <div className="App" style = {{padding : 10}}>
//         <h1>{JSON.stringify(info)}</h1>
//         <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }

function Button () {
  // Random Gift
  const [present,setPresent] = useState()

  const gifts = ['AZUS','DELL','Macbook','ThinkPad']  

  function RandomPresent () {
    const index = Math.floor(Math.random() * gifts.length);
    
    setPresent(gifts[index])
  }

  return (
    <div style={{padding : 20}}>
      <h1>{present || 'Khong co phan thuong nao'}</h1>
      <button onClick={RandomPresent}>ramdom Present</button>
    </div>

  )
}

export default Button;

