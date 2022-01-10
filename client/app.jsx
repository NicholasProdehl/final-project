import React from 'react';
import Home from './pages/home';
import SignUp from './pages/signUp';
import UserPosts from './pages/user-posts';
import NewPost from './pages/new-post';
import { parseRoute } from './lib';
import SignIn from './pages/signIn';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const parsedRoute = parseRoute(window.location.hash);
      this.setState({ route: parsedRoute });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home/>;
    }
    if (route.path === 'SignIn') {
      return <SignIn/>;
    }
    if (route.path === 'SignUp') {
      return <SignUp/>;
    }
    if (route.path === 'UserPosts') {
      const userId = route.params.get('userId');
      return <UserPosts userId = {userId}/>;
    }
    if (route.path === 'NewPost') {
      return <NewPost/>;
    }
  }

  render() {
    return (
    <>
    { this.renderPage()}
    </>
    );
  }
}
