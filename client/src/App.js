//componenets (default export)
import Messenger from "./components/Massenger";
import { GoogleOAuthProvider } from '@react-oauth/google';

//compoments (named export)
// import {Messenger} from "./components/Massenger";

function App() {

  const clientId = `118310122900-hhnei2mpbpp0urkhsdbpeg7ma7l0b210.apps.googleusercontent.com`;

  return (
  < GoogleOAuthProvider clientId={clientId}>
    <Messenger/>
  </ GoogleOAuthProvider>
  );
}

export default App;
