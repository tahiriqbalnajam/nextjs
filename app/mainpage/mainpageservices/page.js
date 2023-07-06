import Input from '@/components/TextInput'
import Image from 'next/image'
import Button from '@/components/Button'
import QoutesImageSlider from '@/app/components/QoutesSlider'
import Serviceslider from '@/app/components/ServiceSlider'
import ElservicioSlider from '@/app/components/ElservicioSlider'
import LocationsServiceSlider from '@/app/components/LocationsServiceSlider'
import Whattheysay_slider from '@/components/TestimonialsElservicioSlider'
import MyLink from '@/app/components/MyLink';
import MainPageAllDropdowns from '@/app/components/MainPageAllDropdowns';

const Servicesfeatured = [
    {
      url: '/images/services1.jpg',
      heading: 'Propiedades',
      paragraph: '75 Listados',
    },
    {
      url: '/images/services2.jpg',
      heading: 'Barcos',
      paragraph: '56 Listados',
    },
{
      url: '/images/services3.jpg',
      heading: 'Jardines',
      paragraph: '22 Listados',
    },
{
      url: '/images/services4.jpg',
      heading: 'Salones de Fiestas',
      paragraph: '33 Listados',
    },
{
      url: '/images/services1.jpg',
      heading: 'Propiedades',
      paragraph: '75 Listados',
    },
{
      url: '/images/services2.jpg',
      heading: 'Barcos',
      paragraph: '56 Listados',
    },
{
      url: '/images/services3.jpg',
      heading: 'Jardines',
      paragraph: '22 Listados',
    },
{
      url: '/images/services4.jpg',
      heading: 'Salones de Fiestas',
      paragraph: '33 Listados',
    },
  ];

const Theidealservice = [
    {
      url: '/images/services1-1.jpg',
      heading: 'Propiedades',
      paragraph: '75 Listados',
    },
    {
      url: '/images/services2-2.jpg',
      heading: 'Barcos',
      paragraph: '56 Listados',
    },
{
      url: '/images/services3-3.jpg',
      heading: 'Jardines',
      paragraph: '22 Listados',
    },
{
      url: '/images/services4-4.jpg',
      heading: 'Salones de Fiestas',
      paragraph: '33 Listados',
    },
{
      url: '/images/services1-1.jpg',
      heading: 'Propiedades',
      paragraph: '75 Listados',
    },
{
      url: '/images/services2-2.jpg',
      heading: 'Barcos',
      paragraph: '56 Listados',
    },
{
      url: '/images/services3-3.jpg',
      heading: 'Jardines',
      paragraph: '22 Listados',
    },{
      url: '/images/services4-4.jpg',
      heading: 'Salones de Fiestas',
      paragraph: '33 Listados',
    }
  ];	


  const locations = [
    {
      url: '/images/location1.jpg',
      heading: 'Bares',
      paragraph: '26 Listados',
    },
    {
      url: '/images/location2.jpg',
      heading: 'Terrazas',
      paragraph: '22 Listados',
    },
 {
      url: '/images/location3.jpg',
      heading: 'Restaurantes',
      paragraph: '9 Listados',
    },
 {
      url: '/images/location4.jpg',
      heading: 'Transporte',
      paragraph: '33 Listados',
    },
 {
      url: '/images/location1.jpg',
      heading: 'Terrazas',
      paragraph: '22 Listados',
    },
 {
      url: '/images/location2.jpg',
      heading: 'Terrazas',
      paragraph: '22 Listados',
    },
 {
      url: '/images/location3.jpg',
      heading: 'Restaurantes',
      paragraph: '9 Listados',
    },
 {
      url: '/images/location4.jpg',
      heading: 'Transporte',
      paragraph: '33 Listados',
    },
  ];

  const Whattheysay_sliders = [
    {
        url: '/images/testimonial1.png',
        heading: 'Propiedades1',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam',
      },
    {
        url: '/images/testimonial1.png',
        heading: 'Propiedades2',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam',
      },
    {
        url: '/images/testimonial1.png',
        heading: 'Propiedades3',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam',
      }
  ];

  const wheretoggletext = [
    {
        text: 'Todo México',
    },
    {
        text: 'Todo México',
    },
    {
        text: 'Todo México',
    }
  ];
  const pricetoggletext = [
    {
        text: '$0 - $5,000',
    },
    {
        text: '$0 - $5,000',
    },
    {
        text: '$0 - $5,000',
    }
  ];

export default function Home() {
  return (
    <div className='bg-white mainfrontpage'>
        <section id="main-banner">
            <div className="container mx-auto sm:px-4">
                <div className="banner-content">
                    <h1><span>Encuentra & Reserva</span> el servicio o locación perfecta para que tu evento sea un éxito.</h1>
                    <p>Promueve tus servicios y locaciones dentro de nuestra plataforma.</p>
                    <div className="search-wrapp">
                        <div className="search-box">
                            <div className="flex flex-wrap  g-0">
                                <div className="md:w-1/2 pl-4 sm:w-full pr-4 pt-4 pb-2">
                                    <div className="mb-0">
                                        <label>Qué estás buscando</label>
                                        <Input type="text" className='bg-white h-12 p-3 w-full border-none focus:outline-none focus:shadow-outline' placeholder="Ej. Comida, Salón de fiestas, audio" />
                                    </div>
                                </div>
                                <MainPageAllDropdowns toggletext={wheretoggletext} heading="Dónde" customclass="whereclass"/>

                                <MainPageAllDropdowns toggletext={pricetoggletext} heading="Precio" customclass="priceclass"/>
                            </div>
                        </div>
                        <Button text='Buscar' className= 'ml-8 text-[25px] text-white bg-salmon hover:bg-[#f82c2f] focus:ring-4 focus:bg-[#f82c2f] font-medium px-10 py-5 dark:bg-[#f82c2f] dark:hover:bg-[#f82c2f] focus:outline-none  dark:focus:bg-[#f82c2f]' />
                    </div>
                    <div className='mainslider'>
                        <QoutesImageSlider />
                    </div>
                    <div className="banner-link">
                        <p>¿Ofreces algún servicio? <span>Anúnciate</span> con nosotros</p>
                    </div>
                </div>
            </div>
            <span className="banner-overlay"></span>
        </section>
        <section className="how-does-work">
            <div className="container min-w-lg mx-auto sm:px-4">
                <div className="how-does-work-box">
                    <div className="default-heading">
                        <h2><span>Cómo</span> funciona</h2>
                    </div>
                    <div className="flex flex-wrap ">
                        <div className="md:w-1/3 pr-4 pl-4 sm:w-full">
                            <div className="how-does-work-inner">
                                <div className="how-does-work-inner-left">
                                    <Image height='268' width='361' src="/images/target.png" alt="" />
                                    <h4>1</h4>
                                </div>
                                <div className="how-does-work-inner-right">
                                    <h5>One Night Guest</h5>
                                    <p>Somos una plataforma digital que facilita el encontrar los servicios para la elaboración de eventos entregando una gran variedad de herramientas, siempre manteniendo un estándar de calidad.</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 pr-4 pl-4 sm:w-full">
                            <div className="how-does-work-inner">
                                <div className="how-does-work-inner-left">
                                    <Image height='268' width='361' src="/images/target.png" alt="" />
                                    <h4>2</h4>
                                </div>
                                <div className="how-does-work-inner-right">
                                    <h5>Descubre los servicios y locaciones</h5>
                                    <p>La plataforma cuenta con 24 categorías que van desde audio e iluminación hasta entretenimiento, músicos, fotógrafos, propiedades, barcos, venta de boletos entre otros.</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 pr-4 pl-4 sm:w-ful">
                            <div className="how-does-work-inner">
                                <div className="how-does-work-inner-left">
                                    <Image height='268' width='361' src="/images/target.png" alt="" />
                                    <h4>3</h4>
                                </div>
                                <div className="how-does-work-inner-right">
                                    <h5>Cotiza lo que deseas</h5>
                                    <p>One Night Guest funciona como una red de proveedores la cual te permite tener contacto directo de una manera mas eficiente descubriendo nuevos servicios y locaciones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="mydivclass bg-white"></div>
            <div className="features-services bg-white">
                <div className="container mx-auto sm:px-4">
                    <div className="default-heading">
                        <h2><span>Servicios</span>  destacados</h2>
                    </div>
                    <Serviceslider images={Servicesfeatured} />
                </div>
            </div>
        </section>
        <section className="services-section bg-white">
            <div className="container mx-auto sm:px-4">
                <div className="large-heading text-end">
                    <h2 className="uppercase">SERVICIOS</h2>
                </div>
                <div className="default-heading">
                    <h2><span>El servicio ideal</span> para tu evento</h2>
                </div>
                <div className="tab-slider">
                    <ul className="flex flex-wrap list-none pl-0 mb-0 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200" id="myTab" role="tablist">
                        <li className="-mb-px" role="presentation">
                            <button className="inline-block py-2 px-4 no-underline border border-b-0 mx-1 rounded rounded-t active" id="home-tab" data-bs-toggle="tab" data-bs-target="#TODO-tab-pane"
                                type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">TODO</button>
                        </li>
                        <li className="-mb-px" role="presentation">
                            <button className="inline-block py-2 px-4 no-underline border border-b-0 mx-1 rounded rounded-t" id="profile-tab" data-bs-toggle="tab" data-bs-target="#DESTACADOS-tab-pane"
                                type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">DESTACADOS</button>
                        </li>
                        <li className="-mb-px" role="presentation">
                            <button className="inline-block py-2 px-4 no-underline border border-b-0 mx-1 rounded rounded-t" id="contact-tab" data-bs-toggle="tab" data-bs-target="#VISTOS-tab-pane"
                                type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">MÁS VISTOS</button>
                        </li>
                        <li className="-mb-px" role="presentation">
                            <button className="inline-block py-2 px-4 no-underline border border-b-0 mx-1 rounded rounded-t" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#POPULARES-tab-pane"
                                type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">POPULARES</button>
                        </li>
                        <li className="-mb-px" role="presentation">
                            <button className="inline-block py-2 px-4 no-underline border border-b-0 mx-1 rounded rounded-t" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#FAVORITOS-tab-pane"
                                type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">FAVORITOS</button>
                        </li>
                    </ul>
                    <div className="tab-content mt-8" id="myTabContent">
                        <div className="tab-pane block active" id="TODO-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div className="flex flex-wrap  site-gallery">
                                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2">
                                    <div className="features-box">
                                        <div className="img-box">
                                            <Image height='268' width='361' src="/images/services1-1.jpg" alt="" />
                                            <a href="#" className="img-tag">Destacado</a>
                                        </div>
                                        <h4>DJ</h4>
                                        <p>147 Listados</p>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2">
                                    <div className="features-box">
                                        <div className="img-box"><Image height='268' width='361' src="/images/services2-2.jpg" alt="" /></div>
                                        <h4>Decoración</h4>
                                        <p>26 Listados</p>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2 ">
                                    <div className="features-box">
                                        <div className="img-box">
                                            <Image height='268' width='361' src="/images/services3-3.jpg" alt="" />
                                            <a href="#" className="img-tag">Más visto</a>
                                        </div>
                                        <h4>Audio e Iluminación</h4>
                                        <p>234 Listados</p>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2 ">
                                    <div className="features-box">
                                        <div className="img-box"><Image height='268' width='361' src="/images/services4-4.jpg" alt="" /></div>
                                        <h4>Catering</h4>
                                        <p>14 Listados</p>
                                    </div>
                                </div><div className="xl:w-1/4 pr-4 pl-4 md:w-1/2">
                                    <div className="features-box">
                                        <div className="img-box"><Image height='268' width='361' src="/images/services4.jpg" alt="" /></div>
                                        <h4>Mobiliario</h4>
                                        <p>147 Listados</p>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2">
                                    <div className="features-box">
                                        <div className="img-box">
                                            <Image height='268' width='361' src="/images/service5.jpg" alt="" />
                                            <a href="#" className="img-tag">Destacado</a>
                                        </div>
                                        <h4>Imagen</h4>
                                        <p>26 Listados</p>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2">
                                    <div className="features-box">
                                        <div className="img-box">
                                            <Image height='268' width='361' src="/images/service6.jpg" alt="" />
                                            <a href="#" className="img-tag">Más visto</a>
                                        </div>
                                        <h4>Entretenimiento</h4>
                                        <p>234 Listados</p>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2 ">
                                    <div className="features-box">
                                        <div className="img-box"><Image height='268' width='361' src="/images/service7.jpg" alt="" /></div>
                                        <h4>Fotografía</h4>
                                        <p>14 Listados</p>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2">
                                    <div className="features-box">
                                        <div className="img-box">
                                            <Image height='268' width='361' src="/images/services2.jpg" alt="" />
                                            <a href="#" className="img-tag">Destacado</a>
                                        </div>
                                        <h4>Músicos</h4>
                                        <p>147 Listados</p>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2">
                                    <div className="features-box">
                                        <div className="img-box">
                                            <Image height='268' width='361' src="/images/service10.jpg" alt="" />
                                            <a href="#" className="img-tag">Más visto</a>
                                        </div>
                                        <h4>Staff</h4>
                                        <p>26 Listados</p>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2">
                                    <div className="features-box">
                                        <div className="img-box">
                                            <Image height='268' width='361' src="/images/service9.jpg" alt="" />
                                        </div>
                                        <h4>Video</h4>
                                        <p>234 Listados</p>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2 ">
                                    <div className="features-box">
                                        <div className="img-box">
                                            <Image height='268' width='361' src="/images/service8.jpg" alt="" />
                                        </div>
                                        <h4>Bebidas</h4>
                                        <p>14 Listados</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <MyLink className="btn-red-outline lg:mt-6 md:mt-6 sm:mt-0" href="/">
                                    VER MENOS
                                </MyLink>
                            </div>
                        </div>
                        <div className="tab-pane opacity-0" id="DESTACADOS-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">2</div>
                        <div className="tab-pane opacity-0" id="VISTOS-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">3</div>
                        <div className="tab-pane opacity-0" id="POPULARES-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">4</div>
                        <div className="tab-pane opacity-0" id="FAVORITOS-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">5</div>
				</div>  
                </div>
            </div>
        </section>

        <section className="locations-section bg-white">
            <div className="container mx-auto sm:px-4">
                <div className="large-heading">
                    <h2 className="uppercase">LOCACIONES</h2>
                </div>
                <div className="default-heading text-end">  
                    <h2><span>Un lugar especial</span> para ti</h2>
                </div>
                <div className="tab-slider">
                    <ul className="flex flex-wrap list-none pl-0 mb-0 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 justify-end" id="locationTabs" role="tablist">
                        <li className="" role="presentation">
                            <button className="inline-block py-2 px-4 no-underline active" id="location1-tab" data-bs-toggle="tab" data-bs-target="#lTODO-tab-pane"
                                type="button" role="tab" aria-controls="location1-tab-pane" aria-selected="true">TODO</button>
                        </li>
                        <li className="" role="presentation">
                            <button className="inline-block py-2 px-4 no-underline" id="location2-tab" data-bs-toggle="tab" data-bs-target="#lDESTACADOS-tab-pane"
                                type="button" role="tab" aria-controls="location2-tab-pane" aria-selected="false">DESTACADOS</button>
                        </li>
                        <li className="" role="presentation">
                            <button className="inline-block py-2 px-4 no-underline" id="location3-tab" data-bs-toggle="tab" data-bs-target="#lVISTOS-tab-pane"
                                type="button" role="tab" aria-controls="location3-tab-pane" aria-selected="false">MÁS VISTOS</button>
                        </li>
                        <li className="" role="presentation">
                            <button className="inline-block py-2 px-4 no-underline" id="location4-tab" data-bs-toggle="tab" data-bs-target="#lPOPULARES-tab-pane"
                                type="button" role="tab" aria-controls="location4-tab-pane" aria-selected="false">POPULARES</button>
                        </li>
                        <li className="" role="presentation">
                            <button className="inline-block py-2 px-4 no-underline" id="location5-tab" data-bs-toggle="tab" data-bs-target="#lFAVORITOS-tab-pane"
                                type="button" role="tab" aria-controls="location5-tab-pane" aria-selected="false">FAVORITOS</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="locationTabscont">
                    <LocationsServiceSlider  />
                    </div>
                </div>
            </div>
        </section>

        <section className="section-cta bg-white">
            <div className="container mx-auto sm:px-4">
                <div className="large-heading text-center">
                    <h2 className="uppercase">ANÚNCIATE</h2>
                </div>
                <div className="cta-wrapper">
                    <div className="cta-thumb">
                        <div className="thumb-inner">
                            <Image className="img-cta w-full" alt="" src="/images/ctaa.jpg" height='592' width='344' />
                        </div>
                    </div>
                    <div className="cta-box">
                        <div className="inner-content">
                            <div className="default-heading mb-4 text-center">
                                <h2><span>Ofrece</span> tus servicios</h2>
                            </div>
                            <p className="text-center">
                                Miles de usuarios cotizando justo lo que tú ofreces.
                            </p>
                            <span className="dividers">/</span>
                            <p>
                                Ya sea que tengas una locación que se puede usar para eventos, 
                                algún servicio o simplemente algún talento que quieras mostrar, 
                                One Night Guest es el lugar indicado para ti. 
                            </p>
                            <p className="mt-4">
                                Sólo tienes que registrarte y mostrarte al mundo, 
                                crea tu anuncio perfecto ¡ES GRATIS!
                            </p>
                            <div className="text-center">
                                <MyLink className="btn-cta btn-red" href="/mainpage/profilepro">
                                    CONOCER PLANES
                                </MyLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        
        <section className="our-testimonials mt-5">
            <div className="container2 pl-[21.5%] pr-[22%] " >
                <div className="default-heading">
                    <h2><span>Lo que dicen</span> de nosotros</h2>
                </div>
                <Whattheysay_slider images={Whattheysay_sliders} heading={'Lo que dicen'} heading2={'de nosotros'} />
            </div>
        </section>

    </div>
  )
}