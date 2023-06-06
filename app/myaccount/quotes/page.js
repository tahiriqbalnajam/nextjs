import Image from 'next/image';
import Link from 'next/link';
import Input from '../../components/TextInput'
import Button from '../../components/Button'
import QoutesImageSlider from '../../components/qoutes-slider'


import '../../css/style.css';

export default function Home() {
	
  return (
	
        <section  className="lg:py-20 py-5 bg-white">
            <div  className="container mx-auto px-4 max-w-[92%]">
                <h3  className="text-4xl mb-16">Mi <span  className="font-bold">Cuenta</span></h3>
                <div  className="flex flex-wrap">
                    <aside  className="w-1/5">
                        <div  className="border-r-2">
                            <ul  className="py-20">
                                <li><a href="#"  className="active flex mb-10 text-2xl border-r-4 border-red-600"><span  className="w-10 mr-2 inline-block"><Image src="/images/info.png" width='50' height='50' alt=""  className="text-center" /></span> Info</a></li>
                                <li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/favo.png" alt=""  className="text-center" width='50' height='50' /></span> Favoritos</a></li>
                                <li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/quotes.png" alt=""  className="text-center" width='50' height='50' /></span> Cotizaciones</a></li>
                                <li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/your-ads.png" alt=""  className="text-center" width='50' height='50' /></span> Tus Anuncios</a></li>
                                <li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/pro.png" alt=""  className="text-center" width='50' height='50' /></span> PRO</a></li>
                                <li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/your-profile.png" alt=""  className="text-center" width='50' height='50' /></span> Tu Perfil</a></li>
                                <li><a href="#"  className="flex mb-10 text-2xl text-colorRed signoff">Cerrar Sesión</a></li>
                            </ul>
                        </div>
                    </aside>

                    <div className="main-content-area">
					<div className="your-event mt-5 pt-5">
						<div className="default-heading">
							<h2><span>Cuéntanos</span> sobre tu evento</h2>
						</div>
						<form className="default-form border-fields">
							<div className="mb-4">
								<label for="">Tipo de evento</label>
								<Input type="password" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Boda, cumpleaños, empresarial, etc" />
							</div>
							<div className="mb-4">
								<label for="">No Aproximado de Asistentes</label>
								<Input type="password" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="" />
							</div>
							<div className="mb-4">
								<label for="">Presupuesto</label>
								<Input type="password" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="$0.00" />
							</div>
							<QoutesImageSlider />
							<div className="mb-4">
								<label for="">Creemos que estos también te podrían interesar</label>
								<div className="flex flex-wrap  mt-3 custom-col20">
									<div className="relative flex-grow max-w-full flex-1 px-4">
										<div className="service-box">
											<Image src="/images/propiedades.png" alt="" height='50' width='50' />
											<p>Propiedades</p>
										</div>
									</div>
									<div className="relative flex-grow max-w-full flex-1 px-4">
										<div className="service-box">
											<Image src="/images/propiedades.png" alt="" height='50' width='50' />
											<p>Propiedades</p>
										</div>
									</div>
								</div>
							</div>
							<div className="mb-4">
								<label for="">Mensaje</label>
								<textarea className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Cualquier detalle nos será de utilidad"></textarea>
							</div>
							<div className="mb-4">
								<label for="">¿Cómo te contactamos?</label>
								<div className="custom-radio-button-wrapp mt-3">
									<div className="custom-radio-button">
										<Input type="radio" id="Mail" name="radio-group" checked />
										<label for="Mail">Mail</label>
									</div>
									<div className="custom-radio-button">
										<Input type="radio" id="Llamada" name="radio-group" />
										<label for="Llamada">Llamada</label>
									</div>
									<div className="custom-radio-button">
										<Input type="radio" id="WhatsApp" name="radio-group" />
										<label for="WhatsApp">WhatsApp</label>
									</div>
									<div className="custom-radio-button">
										<Input type="radio" id="Todo" name="radio-group" />
										<label for="Todo">Todo</label>
									</div>
								</div>
							</div>
							
							<div className="mb-4 text-end">
								<a href="#" className="btn-red">Enviar</a>
							</div>
						</form>
					</div>
				</div>                    

                <div className="main-content-area">
					<div className="your-event mt-5 pt-5">
						<div className="default-heading">
							<h2><span>Cuéntanos</span> sobre tu evento</h2>
						</div>
						<form className="default-form border-fields">
							<div className="form-group">
								<label for="">Tipo de evento</label>
								<Input type="password" className="form-control" placeholder="Boda, cumpleaños, empresarial, etc" />
							</div>
							<div className="form-group">
								<label for="">No Aproximado de Asistentes</label>
								<Input type="password" className="form-control" placeholder="" />
							</div>
							<div className="form-group">
								<label for="">Presupuesto</label>
								<Input type="password" className="form-control" placeholder="$0.00" />
							</div>
							<div className="form-group">
								<label for="">Presupuesto</label>
								<div className="banner-slider-wrapp mt-3">
									<div className="owl-carousel owl-theme service-slider">
										<div className="item">
											<div className="service-box">
												<Image src="/images/propiedades.png" alt="" height='50' width='50' />
												<p>Propiedades</p>
											</div>
										</div>
										<div className="item">
											<div className="service-box">
												<Image src="/images/barcos.png" alt="" height='50' width='50' />
												<p>Barcos</p>
											</div>
										</div>
										<div className="item">
											<div className="service-box">
												<Image src="/images/salones.png" alt="" height='50' width='50' />
												<p>Salones de Fiesta</p>
											</div>
										</div>
										<div className="item">
											<div className="service-box">
												<Image src="/images/terrazas.png" alt="" height='50' width='50' />
												<p>Terrazas</p>
											</div>
										</div>
										<div className="item">
											<div className="service-box">
												<Image src="/images/tickets.png" alt="" height='50' width='50' />
												<p>Boletos</p>
											</div>
										</div>
										<div className="item">
											<div className="service-box">
												<Image src="/images/jardines.png" alt="" height='50' width='50' />
												<p>Jardines</p>
											</div>
										</div>
										<div className="item">
											<div className="service-box">
												<Image src="/images/hotels.png" alt="" height='50' width='50' />
												<p>Hoteles</p>
											</div>
										</div>
										<div className="item">
											<div className="service-box">
												<Image src="/images/tickets.png" alt=""height='50' width='50' />
												<p>Boletos</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="form-group">
								<label for="">Creemos que estos también te podrían interesar</label>
								<div className="row mt-3 custom-col20">
									<div className="col">
										<div className="service-box">
											<Image src="/images/propiedades.png" alt="" height='50' width='50' />
											<p>Propiedades</p>
										</div>
									</div>
									<div className="col">
										<div className="service-box">
											<Image src="/images/propiedades.png" alt="" height='50' width='50' />
											<p>Propiedades</p>
										</div>
									</div>
								</div>
							</div>
							<div className="form-group">
								<label for="">Mensaje</label>
								<textarea className="form-control" placeholder="Cualquier detalle nos será de utilidad"></textarea>
							</div>
							<div className="form-group">
								<label for="">¿Cómo te contactamos?</label>
								<div className="custom-radio-button-wrapp mt-3">
									<div className="custom-radio-button">
										<Input type="radio" id="Mail" name="radio-group" checked />
										<label for="Mail">Mail</label>
									</div>
									<div className="custom-radio-button">
										<Input type="radio" id="Llamada" name="radio-group" />
										<label for="Llamada">Llamada</label>
									</div>
									<div className="custom-radio-button">
										<Input type="radio" id="WhatsApp" name="radio-group" />
										<label for="WhatsApp">WhatsApp</label>
									</div>
									<div className="custom-radio-button">
										<Input type="radio" id="Todo" name="radio-group" />
										<label for="Todo">Todo</label>
									</div>
								</div>
							</div>
							
							<div className="form-group text-end">
								<a href="#" className="btn-red">Enviar</a>
							</div>
						</form>
					</div>
				</div>
                    
                </div>
            </div>
        </section>
  )
}