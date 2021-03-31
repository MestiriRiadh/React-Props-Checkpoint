import logo from "./logo.svg";
import "./App.css";
import { Profile } from "./profile/Profile";
function App() {
  const fullName = "Riadh Mestiri";
  const bio = "This Is My Bio";
  const profession = "Gérant Umbrella Lounge";

  return <Profile fullName={fullName} bio={bio} profession={profession} />;
}

export default App;
