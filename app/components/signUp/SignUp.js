import React from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import UserContainer from '../../containers/userContainer/userContainer';
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    };
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate() {
    const d = new Date();
    const datePieces = d.toString().split(' ').filter((piece, i) => i >= 1 && i <= 3)
    const [month, day, year] = datePieces;
    return `${month} ${day}, ${year}`
  }

  addNewUser() {
    const { name, email, password } = this.state;
    const body = {
      name,
      email,
      password,
      memberSince: this.formatDate()
    };
    fetch('/api/users/new', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    })
      .then(() =>
        fetch("/api/users", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(user => {
          this.props.signInUser(user.data);
          if (user) {browserHistory.push('/')}
        }))
        .catch(err => this.setState({ error: 'EXISTING_USER' }));
  }

  emailExistsError(err) {
    let { name, email, password } = this.state
    switch(err) {
      case 'EXISTING_USER':
        return(
          <p className='submit-error'>Email already exists, please try again with a different email address</p>
        );
      case 'INVALID_EMAIL':
        return (
          <p className='submit-error'>Please enter a valid email address</p>
        );
      default:
        return;
    }
  }

  testEmail() {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(this.state.email)) {
      return true;
    } else { return false }
  }

  attemptSignIn(e) {
    e.preventDefault();
    if(!this.state.email || !this.testEmail()) {
      this.setState({ error: 'INVALID_EMAIL' })
    } else {
      this.testEmail()
      this.addNewUser();
    }
  }

  checkFields() {
    const { name, email, password } = this.state;
    if(!name && !email && !password || !email)
      this.setState({ error: '' })
  }

  render(){
    const { name, email, password, error } = this.state
    return(
      <div>
        <Link to='/'>
          <button className='btn back-btn'>Back</button>
        </Link>
        <form
          id='sign-up-form'
          className='sign-up-field'
          >
          <input placeholder='Name'
                 value={name}
                 onChange={(e) => this.setState({ name: e.target.value })}
                 onKeyUp={this.checkFields.bind(this)}
                 className='signup-name input'/>
                 <br/>
          <input placeholder='Email'
                 onKeyUp={this.checkFields.bind(this)}
                 value={email}
                 onChange={(e) => this.setState({ email: e.target.value })}
                 className='signup-email input'/>
          {this.emailExistsError(error)}
                  <br/>
          <input placeholder='Password'
                 onKeyUp={this.checkFields.bind(this)}
                 type='password'
                 value={password}
                 onChange={(e) => this.setState({ password: e.target.value })}
                 className='signup-password input'/>
                <br/>
          <button className='signup-btn btn'
                  disabled={!email || !name || !password}
                  onClick={this.attemptSignIn.bind(this)}>
            JOIN!
          </button>
        </form>
      </div>
    );
  }
}

export default UserContainer(SignUp);
