
// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Base from '../layout/Base';

// .................Pages............................
import Homepage from "../pages/Homepage/Homepage";
import Awards from "../pages/Awards/Awards";
// .................Pages............................End

function MyRoutes() {
    return (
        <BrowserRouter>
            <Base>
                <Routes>
                    <Route path="/" element={<Homepage></Homepage>}></Route>
                    <Route path="/awards" element={<Awards></Awards>}></Route>
                </Routes>
            </Base>
        </BrowserRouter>


    )
}

export default MyRoutes;