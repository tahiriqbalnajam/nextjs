import Input from '../../components/TextInput'
import Image from 'next/image'
import InputMail from '../../components/MailInput'
import LeftNav from '../../components/LeftNav'
import Link from 'next/link';

export default function Home() {
  return (
        <section  className="bg-white">
            <div className='className="w-full'>
                <div  className="container mx-auto max-w-[100%]">
                    <div  className="flex flex-wrap">
                        <section id="main-banner">
                            <div class="container2">
                                <div class="banner-content">
                                    <h1><span>Encuentra & Reserva</span> el servicio o locación perfecta para que tu evento sea un éxito.</h1>
                                    <p>Promueve tus servicios y locaciones dentro de nuestra plataforma.</p>
                                    <div class="search-wrapp">
                                        <div class="search-box">
                                            <div class="row g-0">
                                                <div class="col-md-6 col-sm-12">
                                                    <div class="form-group">
                                                        <label>Qué estás buscando</label>
                                                        <Input type="text" class="form-control" placeholder="Ej. Comida, Salón de fiestas, audio" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-12">
                                                    <div class="form-group">
                                                        <label>Dónde</label>
                                                        <div class="field-icon">
                                                            <select class="form-control">
                                                                <option value="">Todo México</option>
                                                                <option value="">Todo México</option>
                                                                <option value="">Todo México</option>
                                                            </select>
                                                            <span><i class="fa-solid fa-chevron-down"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-12">
                                                    <div class="form-group">
                                                        <label>Precio</label>
                                                        <div class="field-icon">
                                                            <select class="form-control">
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
                                        <button class="search-submit">Buscar</button>
                                    </div>
                                    <div class="banner-slider-wrapp">
                                        <div class="owl-carousel owl-theme service-slider">
                                            <div class="item">
                                                <div class="service-box">
                                                    <Image src="/images/propiedades.png" alt="" height='50' width='50' />
                                                    <p>Propiedades</p>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="service-box">
                                                    <Image src="/images/barcos.png" alt="" height='50' width='50' />
                                                    <p>Barcos</p>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="service-box">
                                                    <Image src="/images/salones.png" alt="" height='50' width='50' />
                                                    <p>Salones de Fiesta</p>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="service-box">
                                                    <Image src="/images/terrazas.png" alt="" height='50' width='50' />
                                                    <p>Terrazas</p>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="service-box">
                                                    <Image src="/images/tickets.png" alt="" height='50' width='50' />
                                                    <p>Boletos</p>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="service-box">
                                                    <Image src="/images/jardines.png" alt=""height='50' width='50' /> 
                                                    <p>Jardines</p>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="service-box">
                                                    <Image src="/images/hotels.png" alt="" height='50' width='50' />
                                                    <p>Hoteles</p>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="service-box">
                                                    <Image src="/images/tickets.png" alt="" height='50' width='50' />
                                                    <p>Boletos</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="banner-link">
                                        <p>¿Ofreces algún servicio? <span>Anúnciate</span> con nosotros</p>
                                    </div>
                                </div>
                            </div>
                            <span class="banner-overlay"></span>
                        </section>
                    </div>
                </div>
            </div>
        </section>
  )
}