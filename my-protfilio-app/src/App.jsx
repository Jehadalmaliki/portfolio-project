import * as React from "react";

import { Navbar } from "./componate/navbar/Navbar";
import { BrowserRouter,Route,Routes  } from "react-router-dom";
import { Home } from "./componate/pages/Home";
import { About } from "./componate/pages/About";
import {Works} from "./componate/pages/Works";
import {Contact} from "./componate/pages/Contact";

export default function App() {
 
      return (
       <BrowserRouter> 
           <Navbar />
        <Routes> 
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/works" element={<Works/>} />

          </Routes>
      
        </BrowserRouter>
      );
    }
    




