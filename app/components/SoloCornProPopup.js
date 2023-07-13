'use client';
import Link from 'next/link';
import Image from 'next/image'
import Input from '@/components/TextInput'
import React, { useState } from 'react';
import MyLink from '@/app/components/MyLink';
import Button from '@/components/Button'

const SoloCornProPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <div onClick={togglePopup} className='contents'>
        <Input type="text" className="block h-[66px] appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200  " placeholder="Pega tu link aquí" />
        </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-[#000000b5]">
            <div className="absolute  bg-gray-900 opacity-50"></div>
            <div className="w-[45%] modal registermodal bg-white px-[75px] py-[75px]" id="RegisterModal" tabindex="-1" aria-labelledby="RegisterModalLabel" aria-hidden="true">
            <i  onClick={togglePopup} className="fa fa-times relative right-[-102%] top-[-41px] text-[28px] text-[#ff6468]" aria-hidden="true"></i>
                <div className="default-heading ">
                    <h2 className='px-2 text-center'><span className='pb-3'>Misma Plataforma</span> muchos beneficios más.</h2>
                    <div className='pt-6 text-[28px] font-normal text-center'><span className='mb-4 text-[#ff6468]'>¡Hazte Pro!</span> Libera todas las funciones de la plataforma para tener el perfil perfecto.</div>
                </div>
               
                <div className="pro-packages-list">
                    <form className="default-form">
                        <div className="mb-4">
                            <div className="label-bg">
                                <label for="">Pro $29,99/<small>mes</small></label>
                            </div>
                            <div className="input-btn">
                                <Input placeholder="Ver detalles"/>
                                <a href='#'>
                                    <Button className="pl-0 pr-0" type='button' text='Lo que Incluye' />
                                </a>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="label-bg">
                                <label for="">Plus $19,99/<small>mes</small></label>
                            </div>
                            <div className="input-btn">
                                <Input placeholder="Ver detalles"/> 
                                <a href='#'>
                                    <Button className="pl-0 pr-0" type='button' text='Lo que Incluye' />
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default SoloCornProPopup;
