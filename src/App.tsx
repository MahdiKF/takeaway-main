import CardInput from "./components/CardInput";

import "./app.css";
import Slider from "./components/CardSlider";
import UserCardProvider from "./context/UserCardProvider";


function App() {
  return (
    <UserCardProvider>

      <div className="container">
        <CardInput />

        <hr />
        <Slider />
      </div>
    </UserCardProvider>
  );
}

export default App;
