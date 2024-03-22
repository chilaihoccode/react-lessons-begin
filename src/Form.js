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

const courses = [{
    id : 1 ,
    name : 'HTML,CSS'
},{
    id : 2,
    name : 'Javascript'
},{
    id: 3,
    name : 'ReactJS'
}]

function Input ({type}) {
    const [radio,setRadio] = useState('')
    // console.log(radio)
    return (
       <div>
            <h1>Radio</h1>
            {courses.map((course,index) => {
                return (
                    <div key={index}>
                        <input 
                            checked= {course.id === radio}
                            value={course.id}
                            type="radio" 
                            onChange={() => setRadio(course.id)}
                        />
                        <label>{course.name}</label>
                    </div>
                   
                )
            })}
       </div>
    )
}

function CheckBox () {
    const [checkBox,setCheckBox] = useState([])
    // console.log(checkBox)

    const changeCheckBox = (id) => {
        setCheckBox((prev) => {
            const isChecked = checkBox.includes(id);
            const newItem =  [...prev,id];
            if (isChecked) {
                return checkBox.filter(course => course !== id)
            }else{
                // console.log(newItem)
                return newItem
            }
        }
         
        )
    }

   return (
    <div>
        <h1>CheckBox</h1>
        {courses.map((item,index) => {
            return (
                <div key={index}>
                    <input 
                        type="checkbox" 
                        onChange={() => {changeCheckBox(item.id)}}    
                    />
                    <label>{item.name}</label>
                </div>
            )
        })}
    </div>
   )
}

function Form () {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    // Two-way buiilding

    const handleSubmit = () => {
        console.log({
            name,
            email
        })
    }

    return (
       <div style={{padding : 20}}>
            <Input type = "radio" />
            <CheckBox />
            <h2>Two way buiilding</h2>
            
            <input
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                    // console.log(name)
                }}
            />
            <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                    // console.log(name)
                }}
            />
            <button onClick={handleSubmit} >Submit</button>
            <button onClick={() => {setName('Nguyen Van BC')}}>Change</button>
       </div>
    )
}



export default Form;

