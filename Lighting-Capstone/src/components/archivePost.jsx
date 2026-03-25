import LikeButton from '/src/components/likeButton.jsx';


function ArchivePost({ show, image, name, date }) {
    return (
        <div>
            <div className="bg-neutral-50 m-4 text-center border-2 border-neutral-300 w-200 h-100">
                <h2 className="text-neutral-950 text-xl">{show}</h2>
                <br />
                <p className="text-neutral-700">{text}</p>
                <br />
                <p className="text-neutral-600 text-sm">- {name}, {date}</p>
                <br />
            </div>
            <span className="flex justify-center">
                <LikeButton />
            </span>
        </div>
    );
};

export default ArchivePost;