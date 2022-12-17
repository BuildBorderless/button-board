import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import Root from "./pages/root"
import Bond from "./pages/bond"
import Error from "./pages/error"
import reportWebVitals from "./reportWebVitals"
import { CssBaseline } from "@mui/material"

const router = createBrowserRouter([
    {
        path: "/bond/:bondAddress",
        element: <Bond />,
        errorElement: <Error />,
    },
    {
        path: "*",
        element: <Root />,
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <CssBaseline />
        <RouterProvider router={router} />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
