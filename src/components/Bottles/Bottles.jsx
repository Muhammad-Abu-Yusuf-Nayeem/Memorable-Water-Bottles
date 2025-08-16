import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  return (
    <div>
      <h2>Bottles here: {bottles.length}</h2>
      <div className="bottle-container">
        {bottles.map((bottles) => (
          <Bottle bottle={bottles} key={bottles.id}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
