import React,{useContext} from "react";

import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Routers from '../../router/Routers';
import Admin from "../Admin/Admin";
import { AuthContext } from "../../context/AuthContext";

const Layout = () => {
    // const {user} = useContext(AuthContext);
    // console.log(user.role);

    return (
    //    (user.role==='admin')?(
        <>
            <Header/>
            <Routers/>
            <Footer/>
        </>
        
    );
};
    
export default Layout;