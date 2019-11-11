import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
//components
import Navbar from './components/Navbar';

//pages
import home from './pages/home';
import login from './pages/login';
import store from './pages/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f06292"
    },
    secondary: {
      main: "#82b1ff"
    }
  },
  typography: {
    useNextVariants: true,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/store" component={store} />
              <Route path="/login" component={login} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
