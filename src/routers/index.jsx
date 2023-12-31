
// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Base from '../layout/Base';

// .................Pages............................
import Awards from "../pages/Awards/Awards";
import Apply from "../pages/Apply/Apply";
import Profile from "../pages/Profile/Profile";
import MyProducts from "../pages/MyProducts/MyProducts";
import SubCategory from "../pages/SubCategory/SubCategory";
// .................Pages............................End

function MyRoutes() {
    return (
        <BrowserRouter>
            <Base>
                <Routes>
                    <Route path="/" element={<Awards></Awards>}></Route>
                    <Route path="/apply" element={<Apply></Apply>}></Route>
                    <Route path="/users/:username" element={<Profile></Profile>}></Route>
                    <Route path="/awards" element={<Awards></Awards>}></Route>
                    <Route path="/my-products" element={<MyProducts></MyProducts>}></Route>
                    <Route path="/subcategory/:category_name" element={<SubCategory></SubCategory>}></Route>
                </Routes>
            </Base>
        </BrowserRouter>


    )
}

export default MyRoutes;