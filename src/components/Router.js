import { BrowserRouter , Route, Routes } from "react-router-dom";
import Test from "./Test";
import Main from "./Main";

export default function Router(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='' element={<Main/>}/>
                    <Route path="/main" element={<Main/>} />
                    <Route path="/test" element={<Test/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}