import React, { useState,useEffect } from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import {Switch,Route}  from "react-router-dom";



 const App = () =>{



    return (
     

        <>
        <Navbar/>

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/world_status" component={Main}/>
        </Switch>
        
       <Footer/>
        </>
    )
}

export default App;