import logo from './logo.svg';
import './App.css';
import AuthorizationContext from './hooks/useAuthHook';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AuthorizationContext>
        <Route>

        </Route>

      </AuthorizationContext>
    </div>
  );
}

export default App;
