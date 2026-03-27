function InfoButton({ name, link }) {
    return (
        <div className="m-4">
            <a href={link}><button>{name}</button></a>
        </div>
    );
};

export default InfoButton;