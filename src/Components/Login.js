function Login()
{
    return(
        <div className="Apps">
            <form>
            <b><i>Login</i></b><div className="form-group">
                    <input class="form-control mr-sm-2" type="text" name="email" placeholder="Enater Email" aria-label="Search" />
                    <div className="text-danger"></div>
                </div>
                <div className="form-group">
                    <input class="form-control mr-sm-2" type="password" name="password" placeholder="Enter Password" aria-label="Search" />
                    <div className="text-danger"></div>
                </div>
                <button class="btn btn-success my-2 my-sm-0" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login