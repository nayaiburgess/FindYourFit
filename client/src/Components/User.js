import React, { Component } from 'react';
import axios from "axios";
import NewUser from './NewUser'
import NavBar from './NavBar';

class User extends Component {
    state = {
        user: [] 
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/v1/users/')
            .then((res) =>
                this.setState({ user: res.data })
            )
    }

    deleteUser = (user) => {
        axios.delete(`api/v1/users/${user}`)
        .then(() => {
           this.getAllUsers()
        })
    }

    toggleNewUser = () => {
        this.setState({ newUserShown: !this.state.newUserShown })
    }

    render() {
        return (
            <div >
                <NavBar />

                <div style = {{ textAlign: "center", marginTop: "25px", width: "250px"}}class = "container is-centered">

<button class = "button is-danger" onClick= {this.toggleNewUser}>Create User</button>
{this.state.newUserShown ? <NewUser getAllUsers={this.getAllUsers}
    toggleNewUser={this.toggleNewUser}/>
  : null}

 </div>

                {this.state.user.map((user, i) => (
                    <div style = {{marginTop: "50px"}} key={i}>

                        <div class="container" style={{ width: "500px" }}>

                            <div class="card">
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <figure class="image is-48x48">
                                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">{user.username}</p>
                                        </div>
                                    </div>
                                </div>
                        <button style = {{ margin: "15px"}}class="button is-warning" onClick={() => (this.deleteUser(user.userId))}>Delete</button>
                        <button style = {{ margin: "15px"}}class="button is-warning">Edit</button>
                            </div> 

                        </div>

                    </div>

                ))}
        
            </div>
        );
    }
}

export default User;