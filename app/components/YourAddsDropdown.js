"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'

const Togglemenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="togglesubpages" ref={ref}>
        <div className="img-icon icon-bg " onClick={toggleMenu}>  
         <i className="fa-solid fa-ellipsis"></i>  
        </div>
        
      {isOpen && (
       <div className="popup-wrapp">
            <div className="menu-link pb-6">
                <a href="#"><span className='flex md:inline-flex'><Image height='30' width='50' src="/images/Renombrar-anuncion.png" alt="" /></span> Renombrar anuncio</a>
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/ver-anucio.png" alt="" /></span> Ver Anucio Publicado</a>
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/duplicar-anuncio.png" alt="" /></span> Duplicar anuncio</a>
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/borrar.png" alt="" /></span> Borrar</a>
                <hr />
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/target.png" alt="" /></span> Publicar este anuncio</a>
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/transferir-anuncio.png" alt="" /></span> Transferir anuncio</a>
                <a href="#"><span className='flex md:inline-flex'><Image height='50' width='50' src="/images/compartir.png" alt="" /></span> Compartir</a>
            </div>
            <div className="img-icon icon-bg lowerdots" onClick={toggleMenu}>  
                <i className="fa-solid fa-ellipsis"></i>  
            </div>
        </div>
      )}
    </div>
  );
};

export default Togglemenu;
