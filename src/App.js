import './App.css';
import Analytics from './components/Analytics/Analytics';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ReduxUtilities/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/analytics' component={Analytics} />
            <Route 
                  exact path='/' render={() => ( <Redirect to='/analytics' /> )} />
          </Switch>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;