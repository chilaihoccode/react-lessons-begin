import { useState } from "react" 

function ToDoList() {
    const storageJob = JSON.parse(localStorage.getItem('Jobs')) 
    // console.log(storageJob)

    const [job,setJob] = useState('')
    const [add,setAdd] = useState(storageJob ?? [])
    const addJob = () => {
        setAdd(prev => {
            const newJob = [...prev,job];
            localStorage.setItem('Jobs',JSON.stringify(newJob))

            return newJob
        } );
        setJob('')
    }

    return (
        <div style={{padding : 20}}>
            <h1>ToDoList</h1>
            <input 
                value={job}
                onChange={(e) => {setJob(e.target.value)}}
            />
            <button onClick={addJob}>ADD</button>
            <ul>
                {add.map((activity,index) => {
                    return (
                        <li key={index}>{activity}</li>
                    )
                })}

            </ul>
        </div>
    )
}

export default ToDoList;

