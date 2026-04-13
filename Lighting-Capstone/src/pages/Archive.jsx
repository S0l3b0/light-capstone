import ArchivePost from "../components/archivePost";
import { supabase } from "../../supabaseConfig.js";

function Archive() {
    return (
        <div className="h-screen w-screen">
            <h1 className = "text-indigo-50">Archive Page</h1>
            <div className="flex flex-row gap-4 p-4">
                <ArchivePost 
                    show="Arsenic and Old Lace"
                    image="../photos/sampleArchive.png"
                    name="Sophie"
                    date="2/1/2026"
                />

                <ArchivePost 
                    show="Show"
                    image=""
                    name="Name"
                    date="Date"
                />
            </div>
            <span className="flex mt-15 ml-155 text-xl">
                    <button className="w-25 h-25">+</button>
            </span>
        </div>
    );
}

export default Archive;

