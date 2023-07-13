'use client';
import Link from 'next/link';
import Image from 'next/image'
import Input from '@/components/TextInput'
import React, { useState } from 'react';
import MyLink from '@/app/components/MyLink';

const PopupForms = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <MyLink onClick={togglePopup} href="#" >CREAR CUENTA</MyLink>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute  bg-gray-900 opacity-50"></div>
          
            <div className="modal registermodal" id="RegisterModal" tabindex="-1" aria-labelledby="RegisterModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="col-left">
                                <h1 className='IniciarSesión text-[#00000]'>Iniciar Sesión</h1>
                                <div className="social-logins">
                                    <a className="facebook-login" href="/">
                                        <span className="facebookicon"><i className="fa-brands fa-facebook-f"></i></span>
                                        <span className="social-txt text-center w-full">Continuar con Facebook</span>
                                    </a>
                                    <a className="google-login mt-4" href="/">
                                        <span className="googleicon flex justify-center">
                                            <Image height='10' width='20' alt="" src="/images/google.png" />
                                        </span>
                                        <span className="social-txt text-center w-full">Continuar con Google</span>
                                    </a>
                                </div>
                                <div className="login-fields">
                                    <p>O usa tu cuenta</p>
                                    <div className="mb-4 border-0 p-0">
                                        <Input type="email" placeholder="Tu correo electrónico" />
                                    </div>
                                    <div className="mb-4 border-0 p-0">
                                        <Input type="password" placeholder="Tu contraseña" />
                                    </div>
                                    <div className="mb-4 border-0 p-0 text-center">
                                        <MyLink href='/myaccount/info' className='popclass'>Entrar</MyLink>
                                    </div>
                                    <p className="forget-pass2"><a href="#">¿Olvidaste tu contraseña?</a></p>
                                </div>
                            </div>
                            <div className="col-right text-center login-text ">
                                <div className='text-center flex justify-center'>
                                <Image height='50' width='230' src="/images/logo.png" alt="" />
                                </div>
                                <h2><strong>Encuentra todo</strong> lo que necesitas para tu evento</h2>
                                <div className="line-img flex justify-center">
                                    <Image height='50' width='50' src="/images/line.png" alt="" />
                                </div>
                                <h3 className="sometext">
                                    Ingresa y haz de tu evento todo un éxito con nosotros
                                </h3>
                                <p className="text-[21px] text-[#000000] pt-8">¿No tienes cuenta?<a className='popuppaddinga' href="#">Crea una nueva</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      )}
    </div>
  );
};

export default PopupForms;
