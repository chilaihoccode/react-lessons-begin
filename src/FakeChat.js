import { useState,useEffect } from "react"

const lessons = [
    {
        id : 1,
        name : 'ReactJS',
    },{
        id : 2,
        name : 'useState'
    },{
        id : 3,
        name : 'useEffect'
    }
]


function FakeChat () {
    const [course,setCourse] = useState(1)

    useEffect(() => {

        const handleEvent = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${course}`,handleEvent)
        return () => {
            window.removeEventListener(`lesson-${course}`,handleEvent)
        }
    },[course])

    return (
        <div>
            <h1>FakeChat</h1>
            <ul>
                {lessons.map((lesson) => {
                    return (
                        <li 
                            style= {{
                                color : lesson.id === course ? 
                                'red': '#333'
                            }}
                            key={lesson.id}
                            onClick={() => setCourse(lesson.id)}
                        >
                        {lesson.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FakeChat