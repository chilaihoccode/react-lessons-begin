import { useState } from "react";
import Text from "./text";
import EffactDeps from "./EffectDeps";
import ClockCountDown from "./SetTimer";
import Avatar from "./AvatarPreview";
import FakeChat from "./FakeChat";
import TimeRef from "./timeRef";
import MenoCallback from "./MenoCallback";
import AddProduct from "./Addproduct";
import ExampleReducer from "./Reducer";
import ToDoReducer from "./ToDoAppVs2";
import GlobalState from "./GlobalApp";


function Moute () {
    const [show,setShow] = useState(false)
    return (
        <div style={{padding : 20}}>
            <button onClick={() => {setShow(!show)}}>Show</button>
            {/* {show && <Text />}  */}
            {/* {show && <EffactDeps />} */}
            {/* {show && <ClockCountDown />} */}
            {/* {show && <Avatar />} */}
            {/* {show && <FakeChat />} */}
            {/* {show && <TimeRef />} */}
            {/* {show && <MenoCallback />} */}
            {/* {show && <AddProduct />} */}
            {/* {show && <ExampleReducer />} */}
            {/* {show && <ToDoReducer />} */}
            {show && <GlobalState />}
        </div>     
    )
}

export default Moute;