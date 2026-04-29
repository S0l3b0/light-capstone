import Lit from "/src/components/infoLit.jsx"; 

function Cyc() {
    return (
        <div className="h-screen w-screen">
            <div className ='text-justify'>
                 <Lit
                    category='Cyc'
                    pic='https://www.etcconnect.com/uploadedImages/Main_Site/Images/News/Hangzhou-Grand-Theatre-ETC-upgrade3.jpg'
                    uses = 'Lighting the backdrop of scenes, yet is not as advanced as something like an LED wall. '
                    lenses = 'There are no lenses for cyc lights, but they can be geled.'
                />
            </div>
        </div>
    );
}

export default Cyc;