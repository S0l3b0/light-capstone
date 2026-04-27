import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function NewNote() {
    const [author, setAuthor] = useState("");
    const [topic, setTopic] = useState("");
    const [date, setDate] = useState("");
    const [text, setText] = useState("");
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();

    const handleUpload = async () => {
        if (!file) return;


        const { error: dbError } = await supabase
            .from("notes")
            .insert([
                {
                    text,
                    author,
                    topic,
                    date,
                },
            ])

        if (dbError) {
            alert(dbError.message);
        } else {
            setText("");
            setAuthor("");
            setTopic("");
            setDate("");

            alert("Upload successful!");
            navigate("/notes");
        }

        setUploading(false);
    };

    return (
        <div className="p-6 text-white">
            <h1 className="text-2xl mb-4">New Note</h1>

            <input
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="block mt-2"
            />

            <input
                placeholder="Topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="block mt-2"
            />

            <input
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="block mt-2"
                type="date"
            />

            <input
                placeholder="Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="block mt-2"
                type="text"
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

export default NewNote;