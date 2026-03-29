import LikeButton from '/src/components/likeButton.jsx';


function ArchivePost({ show, image, name, date }) {
    return (
        <div className="bg-neutral-700 m-4 text-center border-2 border-neutral-800 w-300 h-100">
            <h2 className="text-indigo-950 text-xl font-bold">{show}</h2>
            <br />
            <img className="text-neutral-700" src="image"></img>
            <br />
            <p className="text-neutral-900 text-right p-4 text-sm">- {name}, {date}</p>
            <br />
        </div>
    );
};

export default ArchivePost;