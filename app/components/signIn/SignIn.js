import React from "react";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: false
    }
  }

  signIn() {
    const { email, password } = this.state;

    fetch("/api/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password})
    })
    .then(res => res.json())
    .then(user => {
      this.props.signInClick(user.data)
      this.props.addToLocalStorage(user.data)
      this.setState({ error: false })
    })
    .then(() => fetch(`/api/users/${this.props.user.id}/favorites`)
      .then(res => res.json())
      .then(favs => this.props.getFavorites(favs.data)))
    .catch(err => this.setState({ error: true, password: '' }))
  }

  displayError(err) {
    if(err)
    return (
      <div>
        <p className='login-error'>Email and/or password do not match</p>
      </div>
    );
  }

  enterKey(e) {
    const { email, password } = this.state;
    if(e.key === 'Enter' && email && password) {
      this.signIn()
    }
  }

  userCheck(){
    const { user } = this.props;
    const { email, password } = this.state;
    if(this.props.pathname !== "/join"){
      if(user) {
        return <p className='welcome'>Welcome, {user.name}!</p>
      } else {
        return (
          <div className='signin-field'>
            <input
              className="email input"
              placeholder="Email"
              type='text'
              value={email}
              onKeyPress={this.enterKey.bind(this)}
              onChange={e => this.setState({email: e.target.value})}/>
              <br/>
            <input
              className="password input"
              type="password"
              placeholder="Password"
              value={password}
              onKeyPress={this.enterKey.bind(this)}
              onChange={e => this.setState({password: e.target.value})}/>
              <br/>
            <div className='signin-error-field'>
              {this.displayError(this.state.error)}
              <button className="signin-btn btn"
                      disabled={!this.state.email || !this.state.password}
                      onClick={() => {
                        this.signIn();
                        this.setState({ email: '', password: '' })}}>
                Sign In
              </button>
            </div>
          </div>
        )
      }
    }
  }

  render(){
    return(
      <div className='signin'>
        {this.userCheck()}
      </div>
    )
  }
}

export default SignIn;
