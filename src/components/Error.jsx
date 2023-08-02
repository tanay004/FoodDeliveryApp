import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err;
    return(
        <div>
            <h1>Error</h1>
            <h2>Something went Wrong!</h2>
            <h3>{status + " : " + statusText}</h3>
        </div>
    )
}

export default Error;