import logo from "./logo.svg";
import "./App.css";
import { AuthorizationContext } from "./hooks/useAuthHook";
import RequiredAuth from "./auth/RequiredAuth";
import Dashboard from "./views/dahsboard/Dashboard";
import Login from "./views/login/Login";
import UserComponent from "./views/user/UserComponent";
import NewspaperComponent from "./views/newspaper/NewspaperComponent";
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
                <UserComponent />
              </RequiredAuth>
            }
          />
                    <Route
            exact
            path="/newspaper"
            element={
              <RequiredAuth>
                <NewspaperComponent />
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
