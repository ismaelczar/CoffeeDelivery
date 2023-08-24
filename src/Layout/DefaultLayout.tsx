import { Outlet } from "react-router-dom";
import { Header } from "../components/_ui/Header";

export function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}