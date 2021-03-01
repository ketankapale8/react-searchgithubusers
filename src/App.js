import './App.css';
import {Dashboard , Login , Error ,PrivateRoute ,AuthWrapper} from './Pages'
import {Route , Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <AuthWrapper>
         <Switch>
            <PrivateRoute path='/' exact={true}> 
              <Dashboard/>
            </PrivateRoute>
            <Route exact path='/login'>
            <Login></Login>
            </Route>
            <Route exact path='*' >
             <Error/>
            </Route>
      </Switch>
    </AuthWrapper>
      
 
    </div>
  );
}

export default App;
