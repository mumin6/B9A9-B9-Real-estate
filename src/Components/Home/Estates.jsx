import { useEffect } from "react";
import { useState } from "react";
import Estate from "../Estate/Estate";

const Estates = () => {
  const [estates, setEstates] = useState([]);
  useEffect(() => {
    fetch("estates.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);
  return (
    <div className="mt-4">
      <h2 className="md:text-5xl text-xl font-bold  text-center">
        The Estates
      </h2>
      <div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 ">
          {estates.map((estate) => (
            <Estate key={estate.id} estate={estate}></Estate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Estates;
