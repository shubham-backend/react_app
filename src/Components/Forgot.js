import {Link} from "react-router-dom"
function Forgot()
{
    return (
        <div className="Apps">
            <form>
            <b><i>Forgot Password</i></b><div className="form-group">
                    <input class="form-control mr-sm-2" type="text" name="email" placeholder="Enater Email" aria-label="Search" />
                    <div className="text-danger"></div>
                </div>
                <button class="btn btn-success my-2 my-sm-0" type="submit">Submit</button>
                <p className="forgot" align="center"><Link to="/login">Back to Login</Link></p>
            </form>
        </div>
    )
}
export default Forgot