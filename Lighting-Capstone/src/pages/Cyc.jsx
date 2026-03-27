import Lit from "/src/components/infoLit.jsx"; 

function Cyc() {
    return (
        <div className="h-screen w-screen">
            <div className ='text-justify'>
                 <Lit
                    category='Cyc'
                    pic='https://www.etcconnect.com/uploadedImages/Main_Site/Images/News/Hangzhou-Grand-Theatre-ETC-upgrade3.jpg'
                    brand='Brand'
                    uses = 'Uses'
                    lenses = 'Lenses'
                />
            </div>
        </div>
    );
}

export default Cyc;