import { Link } from "react-router-dom";

function EditButton() {
  return (
    <div className="m-3">
      <Link to="/inventory">
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default EditButton;