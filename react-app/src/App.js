import "./App.css";
import { useState, useEffect } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/image-link-form/ImageLinkForm";
import Rank from "./components/rank/Rank";
import FaceRecognition from "./components/face-recognition/face-recognition";
import useFaceDetection from "./hooks/useFaceDetection";
import Register from "./components/register/Register";
import Signin from "./components/signin/SignIn";
import { fetchUserData } from "./services/api.service"; // Centralized API call

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { boxes, entries, detectFacesInImage } = useFaceDetection();
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  });

  useEffect(() => {
    const savedIsSignedIn = localStorage.getItem("isSignedIn");
    const userId = localStorage.getItem("userId");

    if (savedIsSignedIn && userId) {
      fetchUserData(userId).then((freshUserData) => {
        setUser(freshUserData);
        setIsSignedIn(true);
        setRoute("home");
      });
    }
  }, []);

  useEffect(() => {
    if (imageUrl) {
      detectFacesInImage(imageUrl, user.id);
    }
  }, [imageUrl]);

  useEffect(() => {
    if (entries !== 0) {
      setUser({ ...user, entries: entries });
    }
  }, [entries]);

  const onInputChange = (event) => setInput(event.target.value);

  const onSubmit = () => setImageUrl(input);

  const onRouteChange = (route) => {
    if (route === "signout") {
      setIsSignedIn(false);
      setUser(null);
      setImageUrl("");
      localStorage.removeItem("userId");
      localStorage.removeItem("isSignedIn");
    } else if (route === "home") {
      setIsSignedIn(true);
    }

    setRoute(route);
  };

  const loadUser = (userData) => {
    setUser({
      id: userData.id,
      name: userData.name,
      email: userData.email,
      entries: userData.entries,
      joined: userData.joined,
    });
    localStorage.setItem("userId", userData.id);
    localStorage.setItem("isSignedIn", true);
  };

  return (
    <div className="App">
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === "home" ? (
        <div>
          <Logo />
          <Rank name={user.name} entries={user.entries} />
          <ImageLinkForm
            inputChangeHandler={onInputChange}
            submitHandler={onSubmit}
          />
          <FaceRecognition imageUrl={imageUrl} boxes={boxes} />
        </div>
      ) : route === "signin" ? (
        <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
    </div>
  );
}

export default App;
