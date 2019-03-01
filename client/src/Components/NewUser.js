import React, { Component } from 'react';
import axios from 'axios'; 
import NavBar from './NavBar'


class newUsers extends Component {

    state = {
        user: {
            username: '',
            password: '',
            userId:''
        }
    }

 
    handleChange = (e) => {
        const newState = { ...this.state.user }
        newState[e.target.name] = e.target.value
        this.setState({ user: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newUsers = this.state.user
        axios.post('/api/v1/users/', newUsers)
        .then((res) => {
            // this.props.getAllUsers()
            this.props.toggleNewUser()
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                <form onSubmit = {this.handleSubmit}>


                <div style = {{ marginTop: "20px" }} class="field">

                        <label class="label"> Username </label>
                        <div class="control">
                        <input class="input" type="text" name="username" value={this.state.user.username} placeholder="Username" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div style = {{ marginTop: "20px" }} class="field">

<label class="label"> password </label>
<div class="control">
<input class = "input" type = "text" name = "password" value = {this.state.user.password} placeholder = "password" onChange = {this.handleChange}></input>
</div>
</div>

                    <button class="button is-warning is-small">Submit</button>
                </form>

            </div>
        );
    }
}

export default newUsers;