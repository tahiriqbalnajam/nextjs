import Input from '@/components/TextInput'
import Serviceslider from '@/components/ServiceSlider'
import Whattheysay_slider from '@/app/components/TestimonialsElservicioSlider'
import TextArea from '@/components/TextArea'
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
        <section  className="lg:py-20 py-5 bg-white">
            <div  className="container mx-auto px-4 publishedadds">
           
            <section className="section-terrece">
                <div className="container min-w-lg mx-auto sm:px-4">
                    <div className="large-heading">
                        <h2> <MyLink href="/myaccount/your-ads" className="backlink"><i className="fa-solid fa-angle-left"></i></MyLink> Terraza</h2>
                    </div>
                    <Serviceslider images={Servicesfeatured} />
                    <div className="flex flex-wrap ">
                        <div className="xl:w-2/3 pr-4 pl-4 lg:w-3/5">
                            <div className="terrece-col">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                    mollit anim id est laborum.
                                </p>
                                <div className="map-container">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 pr-4 pl-4 lg:w-2/5">
                            <div className="terrece-col">
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
                                <hr className="my-4" />
                                <div className="review-form">
                                    <p className="mb-4 lg:pb-2">Deja una <strong>Reseña</strong></p>
                                    <div className="mb-4">
                                        <Input className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" type="text" placeholder="Nombre" />
                                    </div>
                                    <div className="mb-4">
                                        <Input className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" type="email" placeholder="Correo Electrónico" />
                                    </div>
                                    <div className="mb-4">
                                        <TextArea rows='8' cols='4' placeholder="Reseña" />
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

            <section className="container min-w-lg mx-auto sm:px-4 mb-5">
                <div className="our-testimonials p-12 border">
                <div className="default-heading">
                    <h2>
                        <span>Reseñas</span>
                    </h2>
                </div>
                <Whattheysay_slider />
                </div>
            </section>
            </div>
        </section>
  )
}