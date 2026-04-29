function Lit({ category, pic, brand, uses, lenses, additional }) {
    return (
        <div className='text-indigo-50 h-screen'>
            <h1 className = "m-10 text-bold border border-dashed border-4 w-80 text-center">{category}</h1>
            
            <img src={pic} className = "m-10" alt="img of light not loading" width="250" />

            <ul className = "ml-10 text-xl">
                <li>☆ This is an {category}.</li>
                <br/>
                <li>☆ This is a(n) {brand}.</li>
                <br/>
                <li>☆ It can be used for: {uses}</li>
                <br/>
                <li>☆ {lenses}.</li>
                <li>☆ {additional}</li>
            </ul>
        </div>

    );

};

export default Lit;