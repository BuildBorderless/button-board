import { useRouteError } from "react-router-dom"
import { Error } from "../components/Error"

const ErrorPage = () => {
    const routeError = useRouteError()
    console.error("route error:", routeError)

    return (
        <div className="App">
            <div className="App-fullscreen">
                <Error />
            </div>
        </div>
    )
}

export default ErrorPage
