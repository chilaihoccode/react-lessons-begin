import { useState,useReducer, useRef } from "react"

// dispath
function ToDoReducer () {
    
    const [job,setJob] = useState('')
    const [jobs,setJobs] = useState(JSON.parse(localStorage.getItem('HOUSEWORK')) ?? [])

    const inputRef = useRef()

    const handleAdd = () => {
        setJobs(prev => {
            const newJob = [...prev,job]  
            localStorage.setItem('HOUSEWORK',JSON.stringify(newJob))
            return newJob
        })
        setJob('')
        inputRef.current.focus()
    }

    const handleDelete = (index) => {

            const dataJob = JSON.parse(localStorage.getItem('HOUSEWORK'));
            dataJob.splice(index,1)
            localStorage.setItem('HOUSEWORK',JSON.stringify(dataJob))
            return setJobs(dataJob)
    }
    return (
        <>
            <h1>ToDoList</h1>
            <input 
                ref={inputRef}
                placeholder="Enter your job..."
                value={job}
                onChange={e => {setJob(e.target.value)}}
            />
            <button onClick={handleAdd}>ADD</button>
            <ul>
                {jobs.map((job,index) => {
                    return <li key={index}>{job}
                        <span 
                            style={{marginLeft : 10,
                                    cursor : "pointer"}}
                            onClick={() => {handleDelete(index)} }
                        >
                        X
                        </span>
                    </li>
                })}
            </ul>
        </>
    )
}

export default ToDoReducer