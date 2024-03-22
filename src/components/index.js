import style from './Button.module.css'
console.log(style)
function Button () {
    return (
        <button 
            className={style.btn}
        >Hello
        </button>
    )
}

export default Button