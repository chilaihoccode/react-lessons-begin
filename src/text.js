import { useEffect,useState } from "react";

function Text () {
    const [title,setTitle] = useState('')
    const[posts,setPosts] = useState([])

    useEffect(() => {
        // document.title = title
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
        
    },[])


    return (
        <div style={{}}>
            <h1>Change Title</h1>
            <input
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
            />
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>    
                })}
            </ul>          
        </div>
    )
}

export default Text;