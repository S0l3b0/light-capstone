import Note from "/src/components/note.jsx";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        const { data, error } = await supabase
            .from("notes")
            .select("*")
            .order("date", { ascending: false })
        if (error) {
            console.error(error);
        } else {
            setNotes(data);
        }
    };
    return (

        <div className="min-h-screen w-full text-indigo-50 p-4">
            <h1 className="text-2xl mb-4">Notes Page</h1>

            <div className="grid grid-cols-3">
                {notes.map((item) => (
                    <Note
                        key={item.id}
                        topic={item.topic}
                        text={item.text}
                        name={item.author}
                        date={item.date}
                    />
                ))}

                <span className="m-auto text-xl">
                    <Link to="/newnote">
                        <button className="w-25 h-25">+</button>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Notes;

