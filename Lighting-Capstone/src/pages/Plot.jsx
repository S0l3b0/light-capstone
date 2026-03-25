import EditButton from "/src/components/editButton.jsx";
 
function Plot() {
    return (
    <div class='grid'>
    <div className="h-screen w-screen">
      <h1>Plot Page</h1>
      <span className = "grid grid-flow-col grid-rows-4 gap-0">

      </span>
      <div className = "justify-center">
        <EditButton/>
      </div>
    </div>
    </div>
  );
  }
  
  export default Plot;
  
  