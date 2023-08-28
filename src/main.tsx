import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Test} from "./pages/Test/Test.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter basename={"/gh_actions_vite/"}>
            <Routes>
                <Route path={"/"} element={<App/>}/>
                <Route path={"/test"} element={<Test/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
