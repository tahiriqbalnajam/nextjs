import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/TextInput'
import Serviceslider from '@/components/service-slider'
import Whattheysay_slider from '@/components/Whattheysayslider'
import TextArea from '@/components/TextArea'

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
           
            <section class="section-terrece">
                <div class="container min-w-lg mx-auto sm:px-4">
                    <div class="large-heading">
                        <h2> <Link href="/myaccount/your-ads" class="backlink"><i class="fa-solid fa-angle-left"></i></Link> Terraza</h2>
                    </div>
                    <Serviceslider images={Servicesfeatured} />
                    <div class="flex flex-wrap ">
                        <div class="xl:w-2/3 pr-4 pl-4 lg:w-3/5">
                            <div class="terrece-col">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                    mollit anim id est laborum.
                                </p>
                                <div class="map-container">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"></iframe>
                                </div>
                            </div>
                        </div>
                        <div class="xl:w-1/3 pr-4 pl-4 lg:w-2/5">
                            <div class="terrece-col">
                                <h2 class="highlighted-price">$89,000<span>MXN</span></h2>
                                <ul class="location-meta">
                                    <li>
                                        <i class="fa-regular fa-clock"></i>
                                        <span><strong>10hrs</strong> de servicio</span>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-users"></i>
                                        <span>Capacidad <strong>320 personas</strong></span>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-people-roof"></i>
                                        <span>Locación <strong>/ Terrazas</strong></span>
                                    </li>
                                    <li>
                                        <i class="fa-regular fa-heart"></i>
                                        <span>Calificación <strong>4.8</strong></span>
                                    </li>
                                </ul>
                                <hr class="my-4" />
                                <div class="review-form">
                                    <p class="mb-4 lg:pb-2">Deja una <strong>Reseña</strong></p>
                                    <div class="mb-4">
                                        <Input class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" type="text" placeholder="Nombre" />
                                    </div>
                                    <div class="mb-4">
                                        <Input class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" type="email" placeholder="Correo Electrónico" />
                                    </div>
                                    <div class="mb-4">
                                        <TextArea rows='8' cols='4' placeholder="Reseña" />
                                    </div>
                                    <div class="text-center">
                                        <button type="button" class="btn-red btn-review">Enviar</button>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <p>
                                    Cuajimalpa de Morelos, CDMX, México.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="container min-w-lg mx-auto sm:px-4 mb-5">
                <div class="our-testimonials p-12 border">
                <Whattheysay_slider images={Whattheysay_sliders} heading={Whattheysay_sliders_heading} />
                </div>
            </section>
            </div>
        </section>
  )
}