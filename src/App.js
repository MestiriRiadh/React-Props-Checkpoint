import logo from "./logo.svg";
import "./App.css";
import { Profile } from "./profile/Profile";
function App() {
  const fullName = "Riadh Mestiri";
  const bio = "This Is My Bio";
  const profession = "Gérant Umbrella Lounge";
  function handleName() {
    return alert(fullName);
  }

  return (
    <Profile
      fullName={fullName}
      bio={bio}
      profession={profession}
      handleName={handleName}
    >
      <img src={logo}></img>
    </Profile>
  );
}

export default App;
