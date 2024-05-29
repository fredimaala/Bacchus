import { MantineProvider, createTheme } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './style/index.css'
import Main from "./main.jsx";


const theme = createTheme({});

export const API_URL = import.meta.env.API_URL ?? 'http://localhost:8008'

export default function Router() {
    return (
        <MantineProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Main/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    )
}