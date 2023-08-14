import React from "react";
import Login from '../Auth/Login'
import { Routes, Route} from "react-router-dom";

const AuthRouter = () =>{
    return(

          <Routes>
            <Route path="login" element={<Login/>}/>
            {/*<Route path="*" element={<Error/>}/>*/}

          </Routes>

    );


};

export default AuthRouter;