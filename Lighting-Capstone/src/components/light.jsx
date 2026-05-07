function Light({ type, label }) {
    return (
        <div className="m-8">
            <div className={type}>{label}</div>
        </div>

    );

}
export default Light;