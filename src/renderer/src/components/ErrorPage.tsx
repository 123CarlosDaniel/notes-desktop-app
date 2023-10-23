import React from "react"
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom"

function ErrorPage(): React.JSX.Element {
    const navigate = useNavigate()
    const error = useRouteError()
    let content = <p>Something went wrong</p>
    if(isRouteErrorResponse(error)) {
       content =  <i>{error.statusText}</i> 
    }
    else if(error instanceof Error) {
        content = <p>{error.message}</p>
    }

    return (
        <div id="error-page" className="flex flex-col justify-center h-full space-y-4 text-center">
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p className="text-lg font-semibold text-red-400">Sorry, an unexpected error has ocurred.</p>
            <p className="text-lg text-gray-400">
                {content ?? "Server error"}
            </p>
            <button onClick={()=>navigate("/")} className="p-2 mx-auto border-2 rounded-full border-slate-200 w-max">Return home</button>
        </div>
    )
}

export default ErrorPage