import React from "react";
import { MantineProvider, createTheme } from "@mantine/core";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './style/index.css'
import Main from "./main.js";
import Auction from "./Auction.jsx";


const theme = createTheme({});

export const API_URL = import.meta.env.API_URL ?? 'http://localhost:8008'

export default function App() {
    return (
        <MantineProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/Auction" />} />
                    <Route path="/Auction" element={<Auction  />} />
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    )
}