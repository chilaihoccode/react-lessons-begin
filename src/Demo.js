import { Routes, Route } from "react-router-dom";

import Home from './Pages/Home'
import News from './Pages/News'
import Contract from './Pages/Contract'


function Demo () {
    return (
        <div style={{padding : 20}}>
            <h1>Hello ae</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/News">News</a></li>
                    <li><a href="/Contract">Contract</a></li>
                </ul>
            </nav>

            <Routes >
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default Demo