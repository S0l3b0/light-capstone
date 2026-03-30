import S4 from "/src/components/s4.jsx";
import Pa from "/src/components/par.jsx";
import Fres from "/src/components/fres.jsx";

function Light_key() {
    return (
        <div class='bg-cyan-950 absolute bottom-0 right-0 mr-5 '>
            <h2>Key:</h2>
            <S4 label='s4' />
            <Pa label= 'par'/>
            <Fres label= 'fresnel'/>
        </div>
    );

}
export default Light_key;