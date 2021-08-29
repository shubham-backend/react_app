import { useState } from "react";
function Admin()
{
    var[errorName,setErrorName] = useState(null)
    var[errorEmail,setErrorEmail] = useState(null)
    var[errorPhone,setErrorPhone] = useState(null)
    var [userArray, setUserArray] = useState([]);
    var alluser = [{
        name:"Shubham1",
        email:"shubham1@gmail.com",
        phone:"9191919191"
    },
    {
        name:"Shubham2",
        email:"shubham2@gmail.com",
        phone:"9292929292"
    },
    {
        name:"Shubham3",
        email:"shubham3@gmail.com",
        phone:"9393939393"
    }];
    var [users, setUsers] = useState([...alluser
    ])

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
    //function Submit(e)
    var Submit = (e) => {

        e.preventDefault();
        if(!user.name){
            setErrorName("Name field is required");
        } else if(!user.email){
            setErrorEmail("Email field is required");
        } else if(!user.phone){
            setErrorPhone("Phone field is required");
        }
        //usestate array push
        if(user.email && user.phone && user.name){
           console.log("User", user);
           setUsers(alluser => [...alluser, user]);
           console.log("New User", userArray);
        }
    }
    var search = function(e){
        if(e.target.value){
            users = users.filter((each)=>{
            console.log(".... eeach ",each.name)
                return each.name.includes(e.target.value)||each.email.includes(e.target.value)
            })
            setUsers([...users])

        }
        else{
            setUsers([...alluser])
            }
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
                        <input type="text" onChange={handlePhone} class="form-control" name="password" placeholder="Enter Password"/>
                        <div className="text-danger">{errorPhone}</div>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={Submit}>Submit</button>
                </form>
            </div>
            <h3>User List</h3>
            <input type="search" onChange={search}></input>Total User -{users.length}
            <div id="table_data">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
                {users?.map((item,index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
    )
}
export default Admin