import {useState,useEffect} from 'react'

function Avatar () {

    const [avatar,setAvatar] = useState()
    useEffect(() => {
        return () => {  
            // console.log(avatar)
            avatar &&  URL.revokeObjectURL(avatar)
        }
    })

    const handlePreviewAvatar  = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file)
        setAvatar(file.preview)
    }
    return (
        <div>
            <h1>Avatar Preview</h1>
            <input 
                type='file'
                onChange={handlePreviewAvatar}
            />
            <img src={avatar} alt='' style={{width : '40%'}} />
        </div>
    ) 
}

export default Avatar