import { useEffect,useState } from "react";

const resources = ['posts','comments','albums']

function EffactDeps () {

    const [posts,setPosts] = useState('posts')
    const [lists,setLists] = useState([])
    const [showGoToTop,setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${posts}`)
            .then(res => res.json())
            .then(lists => {
                setLists(lists)
            })
    },[posts])

    // scroll
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 200) {
                setShowGoToTop(true)
     
            }else {
                setShowGoToTop(false)
            }
        }


        window.addEventListener('scroll',handleScroll)
        // clear function
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    return (
        <div>
            <h1>3 Category's Button</h1>
            {resources.map((post)=>{
                return <button 
                            style={post === posts ? {
                                background : '#333' ,
                                color : 'whitesmoke'
                            } : {}}
                            key={post}
                            onClick={() => setPosts(post)}
                        >
                        {post}
                        </button>
            })}
            <ul>
                {lists.map((list) => {
                    return <li key={list.id} >{list.title || list.name}</li>
                })}
            </ul>
            {showGoToTop && 
                <button
                    style={{
                        position : "fixed",
                        right : 20,
                        bottom : 20
                    }}
                >
                    Go To Top
                </button>
            }
        </div>
    )
}
export default EffactDeps