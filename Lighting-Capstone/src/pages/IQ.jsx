import Lit from "/src/components/infoLit.jsx"; 

function IQ() {
    return (
        <div className="h-screen w-screen">
         <div className ='text-justify'>
                <Lit
                    category='IQ'
                    pic='https://www.stagespot.com/media/catalog/product/cache/6ffac0a70afe81f6af0c781648a41a72/R/O/ROS-ICUE-ICue.jpg'
                    brand='Brand'
                    uses = 'Uses'
                    lenses = 'Lenses'
                    />
            </div>
        </div>
    );
}

export default IQ;