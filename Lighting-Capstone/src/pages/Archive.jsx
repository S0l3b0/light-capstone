import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import ArchivePost from "../components/archivePost";
import { Link } from "react-router-dom";

function Archive() {
    const [archives, setArchives] = useState([]);

    useEffect(() => {
        loadArchives();
    }, []);

    const loadArchives = async () => {
        const { data, error } = await supabase
            .from("archive")
            .select("*")
            .order("date", { ascending: false })
        if (error) {
            console.error(error);
        } else {
            setArchives(data);
        }
    };

    return (
        <div className="min-h-screen w-full text-indigo-50 p-4">
            <h1 className="text-2xl mb-4">Archive Page</h1>

            <div className="grid grid-cols-3">
                {archives.map((item) => (
                    <ArchivePost
                        key={item.id}
                        show={item.show}
                        image={item.image}
                        name={item.author}
                        date={item.date}
                    />
                ))}

                <span className="m-auto text-xl">
                    <Link to="/newarchive">
                        <button className="w-25 h-25">+</button>
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Archive;