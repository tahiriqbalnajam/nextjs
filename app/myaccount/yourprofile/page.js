import Input from '../../components/TextInput'
import Image from 'next/image'
import TextArea from '../../components/TextArea'
import LeftNav from '../../components/LeftNav'
import MyLink from '@/components/mylink';

export default function Home() {
  return (
        <section  className="lg:py-20 py-5 bg-white">
            <div  className="container mx-auto px-4 max-w-[92%]">
                <h3  className="text-4xl mb-16">Mi <span  className="font-bold">Cuenta</span></h3>
                <div  className="flex flex-wrap">
                    <aside  className="w-1/5">
                        <div  className="border-r-2">
                           <LeftNav />
                        </div>
                    </aside>  
                    <div className="w-4/5">
                        <div className="main-content-area">
                            <div className="your-ads">
                                <div className="default-heading flex justify-between items-center">
                                    <h2>Tu <span>Perfil</span></h2>
                                    <MyLink href="/myaccount/yourprofile/visitprofile" className="btn-red capitalize">Visitar Perfil</MyLink>
                                </div>
                                <div className="add-ads-images">
                                    <form className="default-form field-icon-red">
                                        <p>Esta es la forma en la que las personas te ven a ti y a tus servicios dentro de nuestra<br/>plataforma. Si eres PRO podrás personalizarlo tanto como quieras.</p>
                                        <div className="flex flex-wrap  mt-5">
                                            <div className="md:w-1/2 sm:w-full">
                                                <h5>Imagen Principal</h5>
                                                <p>Puedes arrastrar y soltarla desde tu ordenador</p>
                                                <div className="flex flex-wrap ">
                                                    <div className="md:w-1/2 pr-2 pl-2 sm:w-1/2">
                                                        <div className="add-image-upload active flex justify-center">
                                                            <Image src="/images/img-upload.png" alt="" height='35' width='35' />
                                                            <p>Agrega o arrastra fotos aquí</p>
                                                        </div>
                                                    </div>
                                                    <div className="md:w-1/2 pr-2 pl-2 sm:w-1/2">
                                                        <div className="add-image-upload active  img-added">
                                                            <Image src="/images/img5.jpg" alt="" height='50' width='180' />
                                                            <div className="image-upload-overlay">
                                                                <span>Actual</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-1/2 sm:w-full ">
                                                <h5>Logotipo</h5>
                                                <p>Tu logo aparecerá sobre la imagen principal</p>
                                                <div className="flex flex-wrap ">
                                                    <div className="md:w-1/2 sm:w-1/2 pr-2 pl-2">
                                                        <div className="add-image-upload active flex justify-center">
                                                            <Image src="/images/img-upload.png" alt="" height='35' width='35' />
                                                            <p>Agrega o arrastra fotos aquí</p>
                                                        </div>
                                                    </div>
                                                    <div className="md:w-1/2 sm:w-1/2 pr-2 pl-2">
                                                        <div className="add-image-upload active img-added">
                                                            <Image src="/images/img5.jpg" alt="" height='50' width='180' />
                                                            <div className="image-upload-overlay">
                                                                <span>Actual</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap  mt-5">
                                            <div className="md:w-1/2 sm:w-full pr-4">
                                                <label for="">Titulo</label>
                                                <p className='h-[3rem]'>Si tienes un nombre comercial es momento de agregarlo</p>
                                                <div className="mb-4 mt-2">
                                                    <Input type="text" placeholder="Terrazas ONG" />
                                                </div>
                                            </div>
                                            <div className="md:w-1/2 sm:w-full pl-4">
                                                <label for="">Subtitulo</label>
                                                <p className='h-[3rem]'>Coloca un mensaje de impacto</p>
                                                <div className="mb-4 mt-2">
                                                    <Input type="text" placeholder="Lorem ipsum dolor sit amet, consect….." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4 mt-4">
                                            <label for="">Descripción</label>
                                            <p>Cuéntale al mundo sobre ti y sobre lo que haces</p>
                                            <TextArea rows='8' cols='5' placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                                        </div>
                                        <div className="flex flex-wrap  mt-5">
                                            <div className="md:w-1/2 pr-4 sm:w-full">
                                                <label for="">Compartir archivo</label>
                                                <p className='h-[3rem]'>Si tienes un nombre comercial es momento de agregarlo</p>
                                                <div className="mb-4 mt-2">
                                                    <div className="field-icon">
                                                        <Input type="text"  placeholder="Terrazas.pdf" />
                                                        <span><Image src="/images/img-upload-sm.png" alt="" height='25' width='25' /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-1/2 sm:w-full">
                                                <label for="">Nombre del botón</label>
                                                <p className='h-[3rem]'>Personaliza el nombre de tu botón.</p>
                                                <div className="mb-4 mt-2">
                                                    <Input type="text" placeholder="Lorem ipsum dolor sit amet, consect….." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4 pt-4">
                                            <label>Desactivar PopUp de WhatsApp <i className="fa-solid fa-lock"></i> <small className="color-default">Solo con PRO</small></label>
                                            <div className="custom-radio-button-wrapp mt-3 pb-4">
                                                <div className="custom-radio-button pt-4">
                                                    <Input type="radio" id="Si" name="radio-group" checked />
                                                    <label for="Si">Si</label>
                                                </div>
                                                <div className="custom-radio-button pt-4">
                                                    <Input type="radio" id="No" name="radio-group" />
                                                    <label for="No">No</label>
                                                </div>
                                            </div>
                                            <hr className="border-red" />
                                        </div>
                                        <div className="mb-4">
                                            <label for="">Tus anuncios</label>
                                            <p>Selecciona que anuncio/s quieres publicar en tu perfil. Recuerda que si estas en la versión gratuita sólo podrás escoger un sólo anuncio.</p>
                                            <div className="flex flex-wrap mt-4">
                                                <div className="md:w-1/3 pr-4 sm:w-full">
                                                    <div className="features-box">
                                                        <div className="img-box">
                                                            <Image src="/images/services1-1.jpg" alt="" height='300' width='300' />
                                                            <a href="#" className="img-icon icon-bg"><i className="fa-solid fa-ellipsis"></i></a>
                                                            <div className="overlay-img">
                                                                <a href="#">Actual</a>
                                                            </div>
                                                        </div>
                                                        <h4>Terraza</h4>
                                                    </div>
                                                </div>
                                                <div className="md:w-1/3 pr-4 sm:w-full">
                                                    <div className="features-box">
                                                        <div className="img-box">
                                                            <Image src="/images/services2-2.jpg" alt="" height='300' width='300' />
                                                            <a href="#" className="img-icon icon-bg"><i className="fa-solid fa-ellipsis"></i></a>
                                                            <div className="overlay-img">
                                                                <a href="#">Actual</a>
                                                            </div>
                                                        </div>
                                                        <h4>Hotel</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                       


                    </div>
                </div>
            </div>
        </section>
  )
}