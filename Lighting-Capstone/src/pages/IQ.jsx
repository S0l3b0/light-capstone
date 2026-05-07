import Lit from "/src/components/infoLit.jsx"; 

function IQ() {
    return (
        <div className="h-screen w-screen">
         <div className ='text-justify'>
                <Lit
                    category='I-Cue'
                    pic='https://www.stagespot.com/media/catalog/product/cache/6ffac0a70afe81f6af0c781648a41a72/R/O/ROS-ICUE-ICue.jpg'
                    brand='IQ'
                    uses = 'An I-Cue is not an actual light, but an attachment. It is used to bounce a light around the stage with a mirror. (Note: it attaches to the light with a gel clip)'
                    lenses = 'There are no lenses for an I-Cue, but there are better sized lenses to use with it, those being 19s and 26s.'
                    />
            </div>
        </div>
    );
}

export default IQ;