function Banner ({title, subtitle}){
    return(
        <div className = "w-full h-50 bg-linear-65 from-indigo-100 to-indigo-500 mt-12">
            <h1 className = "text-indigo-900 text-bold text-center pt-12 pb-4">{title}</h1>
            <h2 className = "text-indigo-800 text-center">{subtitle}</h2>
        </div>
    );
};

export default Banner;