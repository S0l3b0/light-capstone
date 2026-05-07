import { useState, useEffect } from "react";
import Light_key from "../components/key";
import { supabase } from "../supabaseClient";
import DraggableLight from "../components/DraggableLight";
import Light from "../components/light.jsx";

function Plot() {
  const [isOpen, setIsOpen] = useState(false);
  const [keyOpen, setKeyOpen] = useState(false);
  const [lights, setLights] = useState([]);
  const [selectedTool, setSelectedTool] = useState(null);
  useEffect(() => {
    async function fetchLights() {
      const { data, error } = await supabase
        .from("lights")
        .select("*");

      if (!error) setLights(data || []);
    }

    fetchLights();
  }, []);

  const filter = (location, type) =>
    lights.filter((l) => l.location === location && l.type === type);

  const stageLights = lights.filter((l) => l.location === "Stage");

  return (
    <div className="gridbg h-screen w-full relative overflow-hidden">

      <div
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-indigo-900 text-white p-5 transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <h2 className="text-4xl font-bold mb-4">Inventory</h2>

        <button onClick={() => setIsOpen(false)}>Close</button>

        <h2 className="text-xl font-bold mt-4">Loft:</h2>
        <div onClick={() => setSelectedTool({ type: "s4" })}>
          <Light type="s4" label={filter("Loft", "s4").length} />
        </div>

        <div onClick={() => setSelectedTool({ type: "par" })}>
          <Light type="par" label={filter("Loft", "par").length} />
        </div>

        <div onClick={() => setSelectedTool({ type: "fresnel" })}>
          <Light type="fresnel" label={filter("Loft", "fresnel").length} />
        </div>

        <h2 className="text-xl font-bold mt-4">Hall:</h2>
        <Light type="s4" label={filter("Hall", "s4").length} />
        <Light type="par" label={filter("Hall", "par").length} />
        <Light type="fresnel" label={filter("Hall", "fresnel").length} />
      </div>

      <div className="p-4 flex justify-between items-center">
        <h1 className="text-indigo-50 text-xl">Plot Page</h1>

        <button
          onClick={() => setIsOpen(true)}
          className="text-white px-4 py-2 rounded"
        >
          Open Inventory
        </button>
      </div>

      <div className="px-4">
        <div className="relative w-full h-screen overflow-hidden">
          {stageLights.map((light) => (
            <DraggableLight
              key={`${light.id}-${light.x}-${light.y}`}
              light={light}
            />
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-4 z-50">
        <div
          className={`bg-cyan-950 text-white overflow-hidden flex flex-col transition-all duration-300 ${keyOpen ? "h-full" : "h-12"
            }`}
        >
          <button
            onClick={() => setKeyOpen(!keyOpen)}
            className="w-full text-white"
            style={{ backgroundColor: "rgb(5,51,68)", outline: "none" }}
          >
            {keyOpen ? "-" : "Key"}
          </button>

          {keyOpen && (
            <div className="p-2 overflow-hidden">
              <Light_key />
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Plot;