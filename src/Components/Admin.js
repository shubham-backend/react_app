import { useState } from "react";
function Admin()
{
    var[errorName,setErrorName] = useState(null)
    var[errorEmail,setErrorEmail] = useState(null)
    var[errorPhone,setErrorPhone] = useState(null)
    const [userArray, setUserArray] = useState([]);


    var user ={};
    function handleName(e){
        user.name = e.target.value
    }
    function handleEmail(e){
        user.email = e.target.value
    }
    function handlePhone(e){
        user.phone = e.target.value
    }
    function Submit(e)
    {
        e.preventDefault();
        if(!user.name){
            setErrorName("Name field is required");
        } else if(!user.email){
            setErrorEmail("Email field is required");
        } else if(!user.phone){
            setErrorPhone("Phone field is required");
        }
        //usestate array push
        setUserArray([...userArray, user]);
        console.log(userArray)
    }
    return (
        <div>
            <div className="Apps">
                <b><i>Add User</i></b>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" onChange={handleName} class="form-control"name="name" placeholder="Enter name"/>
                        <div className="text-danger">{errorName}</div>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" onChange={handleEmail} class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <div className="text-danger">{errorEmail}</div>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Phone</label>
                        <input type="password" onChange={handlePhone} class="form-control" name="password" placeholder="Enter Password"/>
                        <div className="text-danger">{errorPhone}</div>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={Submit}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Admin