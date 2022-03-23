import React from "react";
import Paper from "./paper";
import PageBottom from "./bottom";
import Todos from "./todos";

export default function Layout() {
    return(
        <>
        <Paper />
        <Todos />
        <PageBottom />
        </>
    )
}