import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import StartRating from "./StartRating";

// function Test() {
//   const [movieRating, setmovieRaating] = useState(0);
//   return (
//     <div>
//       <StartRating maxRating={5} color="red" onsetRating={setmovieRaating} />
//       <p>This is a {movieRating} Movie Rating Movie</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating
      maxRating={5}
      message={["Okkey", "Super", "swosom", "Poor", "Sriill"]}
    />
    <Test /> */}
  </React.StrictMode>
);
