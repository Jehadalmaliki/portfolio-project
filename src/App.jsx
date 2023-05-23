import * as React from "react";
import { BrowserRouter,Route,Routes  } from "react-router-dom";
import { Home } from "./componate/Pages/Home";
import {Works} from "./componate/Pages/Works";
import {Contact} from "./componate/Pages/Contact";
export default function App() {
      return (      
       <BrowserRouter>      
     <Routes> 
          <Route exact path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/works" element={<Works/>} />
          </Routes>  
        </BrowserRouter>
        
      );
    }
    




