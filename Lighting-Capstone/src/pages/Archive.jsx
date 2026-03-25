import ArchivePost from "../components/archivePost";
function Archive() {
    return (
        <div className="h-screen w-screen">
            <h1>Archive Page</h1>
            <div className="flex flex-row gap-4 p-4">
            <ArchivePost 
                show="Arsenic and Old Lace"
                image=""
                name="Sophie"
                date="2/1/2026"
            />
            </div>
        </div>
    );
}

export default Archive;

