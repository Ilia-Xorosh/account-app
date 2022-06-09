import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './component/Header';
import { Result } from './component/Result';
import { Step1 } from './component/Step1';
import {Step2} from "./component/Step2";
import { Step3 } from './component/Step3';
import { Step4 } from './component/Step4';



function App()  {
    return (
        <>
        <Header/>
        <div>
          <Router>
            <Routes>
              <Route path= "/" element={<Step1 />}/>
              <Route path= "/step2" element={<Step2 />}/>
              <Route path= "/step3" element={<Step3 />}/>
              <Route path= "/step4" element={<Step4 />}/>
              <Route path= "/result" element={<Result />}/>
            </Routes>
          </Router>
      </div>
        </>
  )
}

export default App
