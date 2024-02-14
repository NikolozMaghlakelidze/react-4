import React from 'react'

class User extends Component {
  render() {
    return <li key={this.props.user.id}>{this.props.user.name}</li>;
  }
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

  componentDidMount(); {
    this.setState({ users: userebi() });
  }

  componentWillUnmount(); {
    document.title = 'Users list';
  }

  randomUser = () => {
    const randomIndex = Math.floor(Math.random() * this.state.users.length);
    const newUsers = [...this.state.users];
    newUsers.splice(randomIndex, 1);
    this.setState({ users: newUsers });
  };

  toggleUsersList = () => {
    this.setState(prevState => ({ showUsersList: !prevState.showUsersList }));
  };

  render() 
    return (
      <div>
        {this.state.showUsersList && (
        <p>
              {this.state.users.map(user => (
              <User key={user.id} user={user} />
            ))}
            </p>
        )}
        <button onClick={this.randomUser}>Remove random user</button>
        <button onClick={this.toggleUsersList}>
          {this.state.showUsersList ? 'Hide' : 'Show'} users list
        </button>
      </div>
    );

export default App;

function userebi() {
  const momxmareblebi = [];
  for (let i = 0; i < 10; i++) {
    momxmareblebi.push({ id: i, name: `User ${i + 1}` });
  }
  return momxmareblebi;
}