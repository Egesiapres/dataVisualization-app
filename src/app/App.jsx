import "../App.css";
import { useContext } from "react";
import AuthenticatedRoutes from "../routes/AuthenticatedRoutes";
import UnauthenticatedRoutes from "../routes/UnauthenticatedRoutes";
import { AuthContext, AuthContextProvider } from "../context/AuthContext";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default App;

// wrapping di Authenticator così da poter accedere alle sue proprietà
// function App() {
//   <AuthContextProvider>
//     <Authenticator />
//   </AuthContextProvider>;
// }

// const Authenticator = () => {
//   const { isAuthenticated } = useContext(AuthContext);

//   return (
//     <Routes>
//       {isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
//     </Routes>
//   );
// };

// export default App;
