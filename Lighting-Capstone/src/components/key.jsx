import Light from "./light";

function Light_key() {
   return (
       <div className='bg-cyan-950'>
           <h2>Key:</h2>
           <Light type='s4' label='s4' />
           <Light type='par' label= 'par'/>
           <Light type='fresnel' label= 'fresnel'/>
       </div>
   );


}
export default Light_key;