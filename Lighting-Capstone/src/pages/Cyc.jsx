import Lit from "/src/components/infoLit.jsx"; 

function Cyc() {
    return (
        <div className="h-screen w-screen">
            <div className ='text-justify'>
                 <Lit
                    category='Cyc'
                    pic='https://www.etcconnect.com/uploadedImages/Main_Site/Images/News/Hangzhou-Grand-Theatre-ETC-upgrade3.jpg'
                    brand='ETC/Chroma-Q'
                    uses = 'Lighting the backdrop of scenes, but is not as advanced as something like an LED wall.'
                    lenses = 'No lenses for cyc lights, but they can be gel-ed'
                />
            </div>
        </div>
    );
}

export default Cyc;