import { useState } from "react";
import Input from "./form/Input";
import { useNavigate, useOutletContext } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setJwtToken } = useOutletContext();
    const { setAlertClassName } = useOutletContext();
    const { setAlertMessage } = useOutletContext();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("email/pass ", email, password)

        if (email === 'admin@example.com') {
            setJwtToken("abc");
            setAlertClassName("d-none");
            setAlertMessage("");
            navigate("/");
        } else {
            setAlertClassName("alert-danger");
            setAlertMessage("Invalid credentials");
        }
    }

    return(
        <div>
            <h2>Login</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <Input 
                    type="email"
                    className="form-control"
                    title="Email Address"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email-new"
                />
                <Input 
                    type="password"
                    className="form-control"
                    title="Password"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="password-new"
                />
                <hr />

                <input
                    type="submit" 
                    className="btn btn-primary"
                    value="Login"
                />
            </form>
        </div>
    )
}

export default Login;