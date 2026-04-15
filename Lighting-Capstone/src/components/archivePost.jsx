import LikeButton from '/src/components/likeButton.jsx';


function ArchivePost({ show, image, name, date }) {
    return (
        <div className="bg-indigo-50 m-4 text-center border-2 border-neutral-800 w-100 h-100">
            <h2 className="text-indigo-950 text-xl font-bold text-center">{show}</h2>
            <br />
            <img className="p-2 h-75 m-auto" src={image}></img>
            <p className="text-neutral-900 p-4 text-center">- {name}, {date}</p>
            <br/>
        </div>
    );
};

export default ArchivePost;