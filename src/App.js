import logo from "./logo.svg";
import "./App.css";
import { AuthorizationContext } from "./hooks/useAuthHook";
import RequiredAuth from "./auth/RequiredAuth";
import Dashboard from "./views/dahsboard/Dashboard";
import Login from "./views/login/Login";
import User from "./views/user/User";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthorizationContext>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <RequiredAuth>
                <Dashboard />
              </RequiredAuth>
            }
          />
          <Route
            exact
            path="/user"
            element={
              <RequiredAuth>
                <User />
              </RequiredAuth>
            }
          />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </AuthorizationContext>
    </div>
  );
}

export default App;

// <AuthorizationContext>
//   <Routes>
//     <Route
//       exact
//       path="/"
//       element={
//         <RequiredAuth>
//           <Dashboard />
//         </RequiredAuth>
//       }
//     />
//     <Route exact path="/login" element={<Login />} />
//   </Routes>
// </AuthorizationContext>;
