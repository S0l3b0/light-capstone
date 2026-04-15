import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function NewArchive() {
    const [file, setFile] = useState(null);
    const [author, setAuthor] = useState("");
    const [show, setShow] = useState("");
    const [date, setDate] = useState("");
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);

        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;

        const { error: storageError } = await supabase.storage
            .from("archive-images")
            .upload(fileName, file);

        if (storageError) {
            alert(storageError.message);
            setUploading(false);
            return;
        }

        const { data: urlData } = supabase.storage
            .from("archive-images")
            .getPublicUrl(fileName);

        const { data, error: dbError } = await supabase
            .from("archive")
            .insert([
                {
                    image: urlData.publicUrl,
                    author,
                    show,
                    date,
                },
            ])

        if (dbError) {
            alert(dbError.message);
        } else {
            setFile(null);
            setAuthor("");
            setShow("");
            setDate("");

            alert("Upload successful!");
            navigate("/archive");
        }

        setUploading(false);
    };

    return (
        <div className="p-6 text-white">
            <h1 className="text-2xl mb-4">New Archive</h1>

            <input type="file" onChange={(e) => setFile(e.target.files[0])} />

            <input
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="block mt-2"
            />

            <input
                placeholder="Show"
                value={show}
                onChange={(e) => setShow(e.target.value)}
                className="block mt-2"
            />

            <input
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="block mt-2"
                type="date"
            />

            <button
                onClick={handleUpload}
                disabled={uploading}
                className="mt-4 bg-indigo-500 px-4 py-2 rounded"
            >
                {uploading ? "Uploading..." : "Upload"}
            </button>
        </div>
    );
}

export default NewArchive;