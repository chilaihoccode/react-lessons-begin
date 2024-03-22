import { themeContext } from "./GlobalApp"
import { useContext } from "react"
import './App.css'

function Context () {
    const theme = useContext(themeContext)

    return (
        <p className={theme}>
            Học ở F8 lâu nay nhận ra là anh Sơn code thực sự nhanh. Khi xem đôi khi sốc vì anh làm quá nhanh. Nhưng sau khi xem đã hiểu cũng nhiễm thói quen đó. code hướng  dẫn bạn bè là nó chửi code làm lẹ quá không hiểu 😁😁 Bạn nào mới học F8 cứ cày kĩ vào, xem đi xem lại thực hành nhiều sẽ làm được. Sau này đụng sẽ làm  nhanh giống anh Sơn 
        </p>
    )
}

export default Context