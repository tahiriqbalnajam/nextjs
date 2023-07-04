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
          
            <div class="modal registermodal" id="RegisterModal" tabindex="-1" aria-labelledby="RegisterModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="col-left">
                                <h1 className='IniciarSesión text-[#00000]'>Iniciar Sesión</h1>
                                <div class="social-logins">
                                    <a class="facebook-login" href="/">
                                        <span class="facebookicon"><i class="fa-brands fa-facebook-f"></i></span>
                                        <span class="social-txt text-center w-full">Continuar con Facebook</span>
                                    </a>
                                    <a class="google-login mt-4" href="/">
                                        <span class="googleicon flex justify-center">
                                            <Image height='10' width='20' alt="" src="/images/google.png" />
                                        </span>
                                        <span class="social-txt text-center w-full">Continuar con Google</span>
                                    </a>
                                </div>
                                <div class="login-fields">
                                    <p>O usa tu cuenta</p>
                                    <div class="mb-4 border-0 p-0">
                                        <Input class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" type="email" placeholder="Tu correo electrónico" />
                                    </div>
                                    <div class="mb-4 border-0 p-0">
                                        <Input class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" type="password" placeholder="Tu contraseña" />
                                    </div>
                                    <div class="mb-4 border-0 p-0 text-center">
                                        <MyLink href='/myaccount/info' className='popclass'>Entrar</MyLink>
                                    </div>
                                    <p class="forget-pass2"><a href="#">¿Olvidaste tu contraseña?</a></p>
                                </div>
                            </div>
                            <div class="col-right text-center login-text ">
                                <div className='text-center flex justify-center'>
                                <Image height='50' width='230' src="/images/logo.png" alt="" />
                                </div>
                                <h2><strong>Encuentra todo</strong> lo que necesitas para tu evento</h2>
                                <div class="line-img flex justify-center">
                                    <Image height='50' width='50' src="/images/line.png" alt="" />
                                </div>
                                <h3 class="sometext">
                                    Ingresa y haz de tu evento todo un éxito con nosotros
                                </h3>
                                <p class="text-[21px] text-[#000000] pt-8">¿No tienes cuenta?<a className='popuppaddinga' href="#">Crea una nueva</a></p>
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
