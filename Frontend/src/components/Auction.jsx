import React from "react";
import { MantineProvider, createTheme } from "@mantine/core";


const theme = createTheme({});
export default function Auction() {
    return (
        <MantineProvider theme={theme}>
            <div>
                <h1> Auction </h1>
            </div>
        </MantineProvider>
    )
}





