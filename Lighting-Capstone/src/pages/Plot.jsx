import EditButton from "../components/editButton.jsx";
import Light_key from "../components/key";
import S4 from "../components/s4";
import Pa from "../components/par";
import Fres from "../components/fres";
 
function Plot() {
    return (
    <div class='gridbg'>
    <div className="h-screen w-screen">
      <h1>Plot Page</h1>
      <span className = "grid grid-cols-3 gap-0">
        <S4/>
        <Fres/>
        <Pa/>
        <div class='col-span-2'><Pa/></div>
        <S4/>
        <Fres/>
      </span>
      <Light_key/>
      <div className = "justify-center">
        <EditButton/>
      </div>
    </div>
    </div>
  );
  }
  
  export default Plot;
  
  