import { useRef } from "react";
import Draggable from "react-draggable";
import { supabase } from "../supabaseClient";
import Light from "./light.jsx";

function DraggableLight({ light }) {
  const nodeRef = useRef(null);
  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={{
        x: Number(light.x) ?? 0,
        y: Number(light.y) ?? 0,
      }}
      onStop={async (e, data) => {
      
        const { error } = await supabase
          .from("lights")
          .update({ x: data.x, y: data.y })
          .eq("id", light.id);
      }}
    >
<div ref={nodeRef} style={{ position: "absolute" }} className="cursor-move">
        <Light type={light.type} />
      </div>
    </Draggable>
  );
}

export default DraggableLight;