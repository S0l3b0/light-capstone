import React, {useState} from 'react';
import './index.css';


const Collapsible = ({children, label}) => {
   const [isOpen, setIsOpen] = useState(false)
  
   return(
       <div className="container">
           <button className='toggle' onClick={() => setIsOpen(!isOpen)}>{label}</button>
           <div className={isOpen ? 'content show' : 'content'}>{children}</div>
       </div>
   );
};


export default Collapsible;