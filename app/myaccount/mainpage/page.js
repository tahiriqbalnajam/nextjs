import Input from '../../components/TextInput'
import Image from 'next/image'
import Button from '../../components/Button'
import QoutesImageSlider from '../../components/qoutes-slider'
import Serviceslider from '../../components/service-slider'

  const servicesimages = [
    '/images/services1.jpg',
    '/images/services2.jpg',
    '/images/services3.jpg',
    '/images/services4.jpg',
    "/images/services1.jpg",
    "/images/services2.jpg",
    "/images/services3.jpg",
    "/images/services4.jpg",
  ];

export default function Home() {
  return (
    <div>
        <section id="main-banner">
            <div class="container mx-auto sm:px-4">
                <div class="banner-content">
                    <h1><span>Encuentra & Reserva</span> el servicio o locación perfecta para que tu evento sea un éxito.</h1>
                    <p>Promueve tus servicios y locaciones dentro de nuestra plataforma.</p>
                    <div class="search-wrapp">
                        <div class="search-box">
                            <div class="flex flex-wrap  g-0">
                                <div class="md:w-1/2 pl-4 sm:w-full pr-4 pt-4">
                                    <div class="mb-0">
                                        <label>Qué estás buscando</label>
                                        <Input type="text" className='bg-white h-12 p-3 w-full border-none focus:outline-none focus:shadow-outline' placeholder="Ej. Comida, Salón de fiestas, audio" />
                                    </div>
                                </div>
                                <div class="md:w-1/4 pr-4 sm:w-full pl-4 pt-4">
                                    <div class="mb-0">
                                        <label>Dónde</label>
                                        <div class="field-icon">
                                            <select class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                                                <option value="">Todo México</option>
                                                <option value="">Todo México</option>
                                                <option value="">Todo México</option>
                                            </select>
                                            <span><i class="fa-solid fa-chevron-down"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="md:w-1/4 pr-4 sm:w-full pl-4 pt-4">
                                    <div class="mb-0">
                                        <label>Precio</label>
                                        <div class="field-icon">
                                            <select class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                                                <option value="">$0 - $5,000</option>
                                                <option value="">$0 - $5,000</option>
                                                <option value="">$0 - $5,000</option>
                                            </select>
                                            <span><i class="fa-solid fa-chevron-down"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button text='Buscar' className= 'ml-8 text-[25px] text-white bg-salmon hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium px-10 py-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none  dark:focus:ring-blue-800' />
                    </div>
                    <div className='mainslider'>
                        <QoutesImageSlider />
                    </div>
                    <div class="banner-link">
                        <p>¿Ofreces algún servicio? <span>Anúnciate</span> con nosotros</p>
                    </div>
                </div>
            </div>
            <span class="banner-overlay"></span>
        </section>
        <section class="how-does-work">
            <div class="container min-w-lg mx-auto sm:px-4">
                <div class="how-does-work-box">
                    <div class="default-heading">
                        <h2><span>Cómo</span> funciona</h2>
                    </div>
                    <div class="flex flex-wrap ">
                        <div class="md:w-1/3 pr-4 pl-4 sm:w-full">
                            <div class="how-does-work-inner">
                                <div class="how-does-work-inner-left">
                                    <Image height='50' width='50' src="/images/target.png" alt="" />
                                    <h4>1</h4>
                                </div>
                                <div class="how-does-work-inner-right">
                                    <h5>One Night Guest</h5>
                                    <p>Somos una plataforma digital que facilita el encontrar los servicios para la elaboración de eventos entregando una gran variedad de herramientas, siempre manteniendo un estándar de calidad.</p>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-1/3 pr-4 pl-4 sm:w-full">
                            <div class="how-does-work-inner">
                                <div class="how-does-work-inner-left">
                                    <Image height='50' width='50' src="/images/target.png" alt="" />
                                    <h4>2</h4>
                                </div>
                                <div class="how-does-work-inner-right">
                                    <h5>Descubre los servicios y locaciones</h5>
                                    <p>La plataforma cuenta con 24 categorías que van desde audio e iluminación hasta entretenimiento, músicos, fotógrafos, propiedades, barcos, venta de boletos entre otros.</p>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-1/3 pr-4 pl-4 sm:w-ful">
                            <div class="how-does-work-inner">
                                <div class="how-does-work-inner-left">
                                    <Image height='50' width='50' src="/images/target.png" alt="" />
                                    <h4>3</h4>
                                </div>
                                <div class="how-does-work-inner-right">
                                    <h5>Cotiza lo que deseas</h5>
                                    <p>One Night Guest funciona como una red de proveedores la cual te permite tener contacto directo de una manera mas eficiente descubriendo nuevos servicios y locaciones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div class="features-services">
                <div class="container mx-auto sm:px-4">
                    <div class="default-heading">
                        <h2><span>Servicios</span>  destacados</h2>
                    </div>
                    <Serviceslider images={servicesimages} />

                </div>
            </div>
        </section>

    </div>
  )
}