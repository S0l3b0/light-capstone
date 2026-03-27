function Banner ({title, subtitle}){
    return(
        <div className = "w-full h-50 bg-linear-65 from-indigo-950 to-indigo-300 mt-12">
            <h1 className = "text-neutral-50 text-bold text-center pt-12 pb-4">{title}</h1>
            <h2 className = "text-neutral-50 text-center">{subtitle}</h2>
        </div>
    );
};

export default Banner;