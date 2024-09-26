import { useState } from "react";
import Spline from "@splinetool/react-spline";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-blue-500 text-white text-center p-6 rounded">
            <h1 className="text-center text-rose-400 bg-red-500">The start of Hackthon Journey</h1>
          </div>
          <div className="bg-blue-500 text-white text-center  w-full">
            <Spline scene="https://prod.spline.design/sqAvDYElS3IpFt1T/scene.splinecode" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
