import React, { useEffect, useState } from "react";
import "../App.css";
import data from "./data.json";

function Wetten() {
  const [personen, setPersonen] = useState([]);
  const [formData, setFormData] = useState({});
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const berechnetePersonen = data.map((f) => {
      const bekommen = Math.round(f.wahrscheinlichkeit * 100);
      const nichtBekommen = 100 - bekommen;
      return { ...f, bekommen, nichtBekommen };
    });
    setPersonen(berechnetePersonen);
  }, []);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSelected((prev) => ({ ...prev, [name]: value })); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailContent = JSON.stringify(formData, null, 2);
    window.location.href = `mailto:HierMailJochenwaduFischzzele?subject=Wettformular&body=${encodeURIComponent(
      emailContent
    )}`;
  };

  return (
    <div className="Wetten">
      <h1>Wetten, um reich zu werden!!!</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Bekommen</th>
              <th>Nicht Bekommen</th>
            </tr>
          </thead>
          <tbody>
            {personen.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>
                  <button
                    type="button"
                    className={`btn btn-bekommen ${selected[person.name] === "Bekommen" ? "selected" : ""}`}
                    onClick={() => handleInputChange(person.name, "Bekommen")}
                  >
                    {person.bekommen}%
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={`btn btn-nicht-bekommen ${selected[person.name] === "Nicht Bekommen" ? "selected" : ""}`}
                    onClick={() => handleInputChange(person.name, "Nicht Bekommen")}
                  >
                    {person.nichtBekommen}%
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" className="btn btn-submit">
          Abschicken
        </button>
      </form>
    </div>
  );
}

export default Wetten;
