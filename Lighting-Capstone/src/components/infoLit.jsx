function Lit({category, pic, brand, uses, lenses}){
 return(
    <div className ='text-neutral-50'>
        <img src={pic} alt="img of light not loading" />
        <h1>{category}</h1>
        <h2>There are many types of {category}. The one pictured above is a {brand}. It can be used for{uses}. {lenses}.</h2>
    </div>

 );

};

export default Lit;