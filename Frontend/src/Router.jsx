import { MantineProvider, createTheme } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Main from "./App.jsx";
import Nigger from "./views/Nigger.jsx";





const theme = createTheme({});

export const API_URL = import.meta.env.API_URL ?? 'http://localhost:3001'

export default function App() {
    return (
        <MantineProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/nigger" element={<Nigger />} />
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    )
}