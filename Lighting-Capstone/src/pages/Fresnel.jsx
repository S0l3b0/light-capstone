import Lit from "/src/components/infoLit.jsx"; 

function Fresnel() {
    return (
        <div className="h-screen w-screen">
            <div className ='text-justify'>
                 <Lit
                    category='Fresnel'
                    pic='https://www.bhphotovideo.com/images/fb/Strand_Lighting_10SF2020G38_Arena_Theatre_8_Fresnel_671513.jpg'
                    brand='Chauvet Professional'
                    uses = 'Fill light or top light. (Note: Fresnels can be hard to aim or hit a specific area you want them to, so you can add blinders to focus the light.'
                    lenses = 'No lenses'
                    />
                </div>
        </div>
    );
}

export default Fresnel;