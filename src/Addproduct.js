import { useState,useRef,useMemo } from 'react'


function AddProduct () {

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [products,setProduct] = useState([])

    const eRef = useRef('')

    const handleAddProduct = () => {
        setProduct([...products,{
            name,
            price : parseInt(price)
        }])
        setName('')
        setPrice('')
        eRef.current.focus()
    }
    console.log(products)

    const total = useMemo(() => {
        const result = products.reduce((resulst,pro) => {
            return resulst += pro.price
        },0)
        return result
    },[products]) 

    return (
        <>
            <div style={ {padding : '10px 20px'}}>
                <h1>Helo</h1>
                <input 
                    ref={eRef}
                    value={name}
                    placeholder='Nhap San Pham'
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input 
                    value={price}
                    placeholder='Nhap Gia San Pham'
                    onChange={(e) => setPrice(e.target.value)}
                />
                <br />
                <button onClick={handleAddProduct}> AddProduct </button>
                <p>Total : {total} </p>
                <div>
                    <ul>
                        {products.map((product,index) => {
                            return <li key={index} >{product.name} - {product.price}</li>
                        })}
                    </ul>
                </div>
            </div>
          
        </>
    
    )
}

export default AddProduct