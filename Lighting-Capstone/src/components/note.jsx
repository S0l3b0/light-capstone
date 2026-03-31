import LikeButton from '/src/components/likeButton.jsx';


function Note({ topic, text, name, date }) {
    return (
        <div className="bg-neutral-50 m-4 text-center border-4 border-indigo-200 w-50 h-65">
            <h2 className="text-neutral-950 text-xl">{topic}</h2>
            <br />
            <p className="text-neutral-700">{text}</p>
            <br />
            <p className="text-neutral-600 text-sm">- {name}, {date}</p>
            <br />
            <span className="flex justify-center">
                <LikeButton />
            </span>
        </div>
    );
};

export default Note;