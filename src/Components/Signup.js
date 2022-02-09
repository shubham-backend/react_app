import {Link} from "react-router-dom"
import React from 'react';
import axios from 'axios'
class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
          name: '',
          email: '',
          password: '',
          items: [],
          errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      };

    handleChange(e) {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.validate()){
            let items = [...this.state.items];  //[]
            items.push({name: this.state.name,email: this.state.email, password: this.state.password});
            var user = {name: this.state.name,email: this.state.email, password: this.state.password}
            this.setState({
                items,
                name: '',
                email: '',
                password:''
            });
            axios({
                url: process.env.REACT_APP_BASE_API_URL +"/register",
                method:'post',
                data:user
            }).then((response) => {
                console.log("Register API", response)
            }, (error)=>{
                console.log("Error - Resgiter API", error)
            })
            //window.location.href ="/"
            alert('Form Submitted Successfully');
        }
    }

    validate(){
        let errors = {};
        let isValid = true;
    
        if (this.state.name == "") {
          isValid = false;
          errors["name"] = "Please enter your name.";
        }
        console.log(typeof this.state.email);
        
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (this.state.email == "") {
          isValid = false;
          errors["email"] = "Please enter your email Address.";
        }
        else if (!pattern.test(this.state.email)) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
        }
    
        if (this.state.password == "") {
          isValid = false;
          errors["password"] = "Please enter your password.";
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    
    render() {
        return (
            <div className="Apps">
                <b><i>Signup</i></b>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" onChange={this.handleChange} class="form-control"name="name" placeholder="Enter name" value={this.state.name}/>
                        <div className="text-danger">{this.state.errors.name}</div>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" onChange={this.handleChange} class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email}/>
                        <div className="text-danger">{this.state.errors.email}</div>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" onChange={this.handleChange} class="form-control" name="password" placeholder="Enter Password" value={this.state.password} />
                        <div className="text-danger">{this.state.errors.password}</div>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    <p className="forgot" align="center"><Link to="/login">Back to Login</Link></p>   
                </form>
          {/* <div id="table_data">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
                {this.state.items.map((item,index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div> */}
        </div>
        )
      }
}

export default Signup