import Note from "/src/components/note.jsx";

function Notes() {
    return (

        <div className="h-screen w-screen"><h1>Notes Page</h1>
            <div className="flex flex-row gap-4 p-4">
                <Note
                    topic="Broken Cyc Lights"
                    text="Most of our cyc lights need repairs. We should talk to Mr. Fern soon."
                    name="Lily Alessi"
                    date="3/19"
                />

                <Note
                    topic="Topic"
                    text="Text/Note Content"
                    name="Name"
                    date="Date"
                />

                {/*Placeholder button for now*/}
                <span className="h-20 w-20 mt-25 ml-15 text-xl ">
                    <button>+</button>
                </span>

            </div>
        </div>
    );
};

export default Notes;

