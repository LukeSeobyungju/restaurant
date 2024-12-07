import { BrowserRouter , Route, Routes } from "react-router-dom";
import Category from "./Category";
import Main from "./Main";
import Search from "./Search";
import Bookmark from "./Bookmark";
export default function Router(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='' element={<Main/>}/>
                    <Route path="/main" element={<Main/>} />
                    <Route path="/category" element={<Category/>} />
                    <Route path="/search" element={<Search/>} />
                    <Route path="/bookmark" element={<Bookmark/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}