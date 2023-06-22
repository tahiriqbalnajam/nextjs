import Image from 'next/image';
import Link from 'next/link';
import Input from './TextInput.js'
import InputMail from './MailInput.js'


export default function MyaccountFooter() {
	
    return (
        <footer className="footer-1 bg-footerGray pt-8 sm:pt-20 pb-2">
            <div className="container mx-auto px-4 max-w-[92%]">
                <div className="sm:flex sm:flex-wrap sm:-mx-6 md:py-4">
                    <div className="px-6 sm:w-1/2 md:w-1/4 xl:w-1/4">
                        <Image src="/images/logo.png" height='28' width='205'  alt="" />
                        <p className="mt-6 mb-4 text-white text-lg">Síguenos</p>
                        <div className="flex sm:justify-center xl:justify-start">
                            <a href="#" className="w-12 h-11 text-2xl rounded text-center py-2 text-colorBlack bg-white hover:text-white hover:bg-blue-600">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-12 h-11 text-2xl rounded text-center py-2 ml-4 text-colorBlack bg-white hover:text-white hover:bg-blue-400">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#" className="w-12 h-11 text-2xl rounded text-center py-2 ml-4 text-colorBlack bg-white hover:text-white hover:bg-red-600">
                                <i className="fa-brands fa-soundcloud"></i>
                            </a>
                            <a href="#" className="w-12 h-11 text-2xl rounded text-center py-2 ml-4 text-colorBlack bg-white hover:text-white hover:bg-red-600">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div className="px-6 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
                        <h5 className="text-xl font-bold mb-6 text-white">Compañía</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-4">
                                <a href="#" className="text-white hover:text-colorRed text-xl">Nosotros </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="text-white hover:text-colorRed text-xl">Anúnciate</a>
                            </li>
                            <li className="mb-4">
                                <a href="#"
                                    className="text-white hover:text-colorRed text-xl">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-6 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
                        <h5 className="text-xl font-bold mb-6 text-white">Soporte</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-4">
                                <a href="#" className="text-white hover:text-colorRed text-xl">FAQS</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="text-white hover:text-colorRed text-xl">Cómo funciona</a>
                            </li>
                            <li className="mb-4">
                                <a href="#"
                                    className="text-white hover:text-colorRed text-xl">Ayuda</a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-6 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
                        <h5 className="text-xl font-bold mb-6 text-white">Newsletter</h5>
                        <p className="text-white text-md">Suscríbete a nuestro boletín y entérate primero de nuestras novedades y servicios.</p>
                        <div className="mt-12 relative">
                            <InputMail placeholder='Email' className='bg-fieldGray h-14 p-3 w-full border-none focus:outline-none focus:shadow-outline'/>
                            <span className="absolute right-4 top-3 text-colorRed"><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>

                <div className="my-6 py-6 border-t border-gray-500">
                    <p className="text-white text-center">© 2023 One Night Guest | Diseñado por TwoTap Media</p>
                </div>
            </div>
	    </footer>
    )
}