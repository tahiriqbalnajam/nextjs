import Input from '@/components/TextInput'
import Image from 'next/image'
import TextArea from '@/components/TextArea'
import LeftNav from '@/components/LeftNav'
import Link from 'next/link';
import Serviceslider from '@/components/service-slider'
import Whattheysay_slider from '@/components/Whattheysayslider'

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
                            <a className="sociallink" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a className="sociallink" href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a className="sociallink" href="#"><i className="fa-brands fa-soundcloud"></i></a>
                            <a className="sociallink" href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
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
                    <hr className="m-0" />
                </div>
            </section>
            <section className="section-terrece">
                <div className="container min-w-lg mx-auto sm:px-4">
                    <div className="large-heading">
                        <h2> <Link href="/myaccount/yourprofile" className="backlink"><i className="fa-solid fa-angle-left"></i></Link> Terraza</h2>
                    </div>
                    <Serviceslider images={Servicesfeatured} />
                    <div className="flex flex-wrap ">
                        <div className="xl:w-2/3 pr-4 pl-4 lg:w-3/5">
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
                            </div>
                        </div>
                        <div className="xl:w-1/3 pr-4 pl-4 lg:w-2/5">
                            <div className="terrece-col mt-5">
                                <h2 className="highlighted-price">$89,000<span>MXN</span></h2>
                                <ul className="location-meta">
                                    <li>
                                        <i className="fa-regular fa-clock"></i>
                                        <span><strong>10hrs</strong> de servicio</span>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-users"></i>
                                        <span>Capacidad <strong>320 personas</strong></span>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-people-roof"></i>
                                        <span>Locación <strong>/ Terrazas</strong></span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-heart"></i>
                                        <span>Calificación <strong>4.8</strong></span>
                                    </li>
                                </ul>
                                <hr className="mt-8 mb-4" />
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
                                <hr className="my-4" />
                                <p>
                                    Cuajimalpa de Morelos, CDMX, México.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container min-w-lg mx-auto sm:px-4 mb-5">
                <div class="our-testimonials px-20 border">              
                    <Whattheysay_slider images={Whattheysay_sliders} heading={Whattheysay_sliders_heading} />
                </div>
            </section>
        </section>
  )
}