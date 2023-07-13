import Input from '@/components/TextInput'
import TextArea from '@/components/TextArea'
import YouProfileServiceSlider from '@/components/YouProfileServiceSlider'
import Whattheysay_slider from '@/app/components/TestimonialsElservicioSlider'
import MyLink from '@/app/components/MyLink';

const Servicesfeatured = [
    {
      url: '/images/img1.jpg',
      heading: '',
      paragraph: '',
    },
    {
      url: '/images/img2.jpg',
      heading: '',
      paragraph: '',
    },
{
      url: '/images/img3.jpg',
      heading: '',
      paragraph: '',
    },
{
      url: '/images/img4.jpg',
      heading: '',
      paragraph: '',
    },
{
      url: '/images/img1.jpg',
      heading: '',
      paragraph: '',
    },
{
      url: '/images/img2.jpg',
      heading: '',
      paragraph: '',
    },
{
      url: '/images/img3.jpg',
      heading: '',
      paragraph: '',
    },
{
      url: '/images/img4.jpg',
      heading: '',
      paragraph: '',
    },
  ];

  const Whattheysay_sliders_heading =[
        "Reseñas"
]

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

export default function Home() {
  return (
        <section  className="lg:pb-20 pb-5 bg-white visitprofile">
            <section className="banner-terrece">
                <div className="container mx-auto sm:px-4 banner-terrece-caption">
                    <span className="banner-logos"> <i className="fa-solid fa-hippo"></i> </span>
                    <h2>Terrazas ONG</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
            </section>
            <section className="terrece-whiteboard">
                <div className="container min-w-lg mx-auto sm:px-4">
                    <div className="whiteboard-inner">
                        <div className="social-icons">
                            <span className='text-[#ff5a60] text-[27px] font-normal pr-4'><i className="fa-brands fa-facebook-f"></i></span>
                            <span  className='text-[#ff5a60] text-[27px] font-norma pr-4'><i className="fa-brands fa-instagram"></i></span>
                            <span  className='text-[#ff5a60] text-[27px] font-normal pr-4'><i className="fa-brands fa-soundcloud"></i></span>
                            <span className='text-[#ff5a60] text-[27px] font-normal'><i className="fa-brands fa-youtube"></i></span>
                        </div>
                        <div className='text-[#ff5a60] text-[20px] mt-8 font-semibold'>www.terrazasong.com.pk</div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a href="" className="btn-red">Descargar presentation</a>
                    </div>
                    <hr className="m-0 border-[#ff5a60] ml-[85px] mr-[85px]" />
                </div>
            </section>
            <section className="mycustomsection"></section>
            <section className="section-terrece">
                <div className="container min-w-lg mx-auto sm:px-4">
                    <div className="large-heading mb-8">
                        <h2> Terraza</h2>
                    </div>
                    <div className='visitprofileslider'>
                    <YouProfileServiceSlider/>
                    </div>
                    <div className="flex flex-wrap ">
                        <div className="xl:w-2/3 pr-4 lg:w-3/5">
                            <div className="terrece-col">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.
                                </p>
                                <div className="custom-video ratio ratio-16x9">
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/zpOULjyy-n8"  title="YouTube video" allowfullscreen></iframe>
                                </div>
                                <div className="map-container">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"></iframe>
                                </div>
                                <div className='text-[25px] mt-[35px] mb-[35px]'><span className='font-bold'>Politicas  </span> & Restricciones</div>
                                
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 pr-4 pl-4 lg:w-2/5">
                        
                            <div className="terrece-col ">
                                <div className='text-center text-[22px] relative top-[-29px] font-medium'>Desde:</div>
                                <h2 className="highlighted-price">$89,000<span>MXN</span></h2>
                                <ul className="location-meta">
                                    <li>
                                        <i className="fa-solid fa-people-roof"></i>
                                        <span>Locación <strong>/ Terrazas</strong></span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-heart"></i>
                                        <span>Calificación <strong>4.8</strong></span>
                                    </li>
                                    <hr className="mt-8 mb-4 border-[#ff5a60]" />
                                    <li className='text-center'>
                                        <span className='w-full text-center text-[#ff5a60] font-semibold'>Detallos<strong></strong></span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-star"></i>
                                        <span><strong>1 Reservacion Por dia</strong> </span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-star"></i>
                                        <span> Capacidad <strong>320 personas</strong></span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-star"></i>
                                        <span><strong>10hrs</strong> de servicio</span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-star"></i>
                                        <span><strong>Eventos</strong></span>
                                        <div className='relative grid top-[44px] left-[-77px] text-[14px] font-medium w-full'>
                                            <div><span className='text-[#ff5a60]'>- </span>    Bodas</div>
                                            <div><span className='text-[#ff5a60]'>- </span>    Cumpleanos</div>
                                            <div><span className='text-[#ff5a60]'>- </span>    Eventos Corporativos</div>
                                        </div>
                                    </li>
                                    <li className='pt-4'>
                                        <i className="fa-regular fa-star"></i>
                                        <span><strong>Horarios</strong></span>
                                    </li>
                                    <li>
                                        <div className='relative grid top-[-30px] left-[52px] text-[14px] font-medium w-full'>
                                            <div className=''><span className='text-[#ff5a60]'>- </span>    Lunes a Jueves de 11:00-02:00hrs</div>
                                            <div className=''><span className='text-[#ff5a60]'>- </span>    Viernes y Sábado de 11:00 - 05:00hrs </div>
                                            <div className=''><span className='text-[#ff5a60]'>- </span>    Domingos: de 11:00-23:00hrs</div>
                                        </div>
                                    </li>
                                    
                                    <li className='personal'>
                                        <i className="fa-regular fa-star"></i>
                                        <span><strong>Personal</strong></span></li><li>
                                        <div className='relative grid top-[-30px] left-[52px] text-[14px] font-medium w-full'>
                                            <div className=''><span className='text-[#ff5a60]'>- </span>    Meseros</div>
                                            <div className=''><span className='text-[#ff5a60]'>- </span>    Bartender</div>
                                            <div className=''><span className='text-[#ff5a60]'>- </span>    Seguridad</div>
                                        </div>
                                    </li>

                                    
                                    
                                </ul>
                                <hr className="mt-2 mb-8 border-[#ff5a60]" />
                                <div className="review-form">
                                    <p className="mb-4 lg:pb-2">Deja una <strong>Reseña</strong></p>
                                    <div className="mb-4">
                                        <Input type="text" placeholder="Nombre" />
                                    </div>
                                    <div className="mb-4">
                                        <Input type="email" placeholder="Correo Electrónico" />
                                    </div>
                                    <div className="mb-4">
                                        <TextArea rows="8" cols='5' className="bg-fieldGray p-3 w-full border-none focus:outline-none focus:shadow-outline" placeholder="Reseña"></TextArea>
                                    </div>
                                    <div className="text-center">
                                        <button type="button" className="btn-red btn-review">Enviar</button>
                                    </div>
                                </div>
                             
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container min-w-lg mx-auto sm:px-4 mb-5">
                <div className="our-testimonials px-20 border">  
                    <div className="default-heading"><h2><span>Reseñas</span></h2></div>            
                    <Whattheysay_slider />
                </div>
            </section>
        </section>
  )
}