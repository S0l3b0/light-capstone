function Lit({ category, pic, brand, uses, lenses }) {
    return (
        <div className='text-indigo-50 h-screen'>
            <h1 className = "m-10 text-bold border border-dashed border-4 w-80 text-center">{category}</h1>
            
            <img src={pic} className = "m-10" alt="img of light not loading" width="250" />

            <ul className = "ml-10 text-xl">
                <li>☆ There are many types of {category}.</li>
                <br/>
                <li>☆ The one pictured is a {brand}.</li>
                <br/>
                <li>☆ It can be used for: {uses}</li>
                <br/>
                <li>☆ {lenses}.</li>
            </ul>
        </div>

    );

};

export default Lit;