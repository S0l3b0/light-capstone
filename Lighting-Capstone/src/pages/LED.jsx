import Lit from "/src/components/infoLit.jsx"; 

function LED() {
    return (
        <div className="h-screen w-screen">
            <div className ='text-justify'>
                 <Lit
                    category='LED'
                    pic='https://i.ebayimg.com/images/g/4xcAAOSwbLFlLfhI/s-l1200.jpg'
                    brand='Brand'
                    uses = 'Uses'
                    lenses = 'Lenses'
                        />
                        </div>
        </div>
    );
}

export default LED;