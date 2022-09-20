import LoginForm from "../components/Login/LoginForm"
const Login = () =>{
    return(
        <>
        <header className="login-head">
            <img className='logo-hello' src="img/Logo-Hello.png" alt="logo-hello" width="300px" />
            <h1 className="login-text-h1">Lost in Translation</h1>
            <h2 className="login-text-h2">Get started!</h2>
        </header>
        <LoginForm/>
        </>
    )
}
export default Login