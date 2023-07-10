import Image from 'next/image';
import Input from '@/components/TextInput'
import QoutesImageSlider from '@/app/components/QoutesSlider'
import LeftNav from '@/components/LeftNav'
import TextArea from '@/components/TextArea'
import MyLink from '@/app/components/MyLink'

export default function Home() {
  return (
        <section  className="lg:py-20 py-5 bg-white font-[Ubuntu, sans-serif] qoutetellus">
            <div  className="container mx-auto px-4 max-w-[92%]">
                <h3  className="text-4xl mb-16">Mi <span  className="font-bold">Cuenta</span></h3>
                <div  className="flex flex-wrap">
                    <aside  className="w-1/5">
                        <div  className="border-r-2">
							<LeftNav />
                        </div>
                    </aside>
                    <div className="w-4/5 main-content-area2 pl-28">
						<div className="your-event mt-5 pt-5">
							<div className="default-heading">
								<h2><span>Cuéntanos</span> sobre tu evento</h2>
							</div>
							<form className="default-form border-fields">
								<div className="mb-4">
									<label for="">Tipo de evento</label>
									<Input type="password" className="block appearance-none mt-1 h-14 w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-[#797979] " placeholder="Boda, cumpleaños, empresarial, etc" />
								</div>
								<div className="mb-4">
									<label for="">No Aproximado de Asistentes</label>
									<Input type="password" className="block appearance-none mt-1 h-14 w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-[#797979] " placeholder="" />
								</div>
								<div className="mb-4">
									<label for="">Presupuesto</label>
									<Input type="password" className="block appearance-none mt-1 h-14 w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-[#797979] " placeholder="$0.00" />
								</div>
								<div className="mb-4">
									<label htmlFor="">Presupuesto</label>
								</div>
								<QoutesImageSlider />
								<div className="mb-4">
									<label for="">Creemos que estos también te podrían interesar</label>
									<div className="flex flex-wrap mt-3 custom-col20">
										<div className="relative flex-grow max-w-[108px] flex-1 pl-[12px]">
											<div className="service-box service-box2">
												<Image src="/images/propiedades.png" alt="" height='40' width='40' />
												<p>Propiedades</p>
											</div>
										</div>
										<div className="relative flex-grow max-w-[117px] flex-1 pl-[20px]">
											<div className="service-box service-box2">
												<Image src="/images/propiedades.png" alt="" height='40' width='40' />
												<p>Propiedades</p>
											</div>
										</div>
									</div>
								</div>
								<div className="mb-4">
									<label for="">Mensaje</label>
									<TextArea id="mytextarea" name="w3review" rows="6" cols="50" />
								</div>
								<div className="mb-4">
									<label for="">¿Cómo te contactamos?</label>
									<div className="custom-radio-button-wrapp mt-3">
										<div className="custom-radio-button">
											<Input type="radio" id="Mail" value="Mail" className="bg-white" name="radio-group"  />
											<label for="Mail">Mail</label>
										</div>
										<div className="custom-radio-button">
											<Input type="radio" id="Llamada" value="Llamada" name="radio-group" />
											<label for="Llamada">Llamada</label>
										</div>
										<div className="custom-radio-button">
											<Input type="radio" id="WhatsApp" value="WhatsApp" name="radio-group" />
											<label for="WhatsApp">WhatsApp</label>
										</div>
										<div className="custom-radio-button">
											<Input type="radio" id="Todo" value="Todo" name="radio-group" />
											<label for="Todo">Todo</label>
										</div>
									</div>
								</div>
								<div className="mb-4 text-end">
									<MyLink href="/myaccount/quote/quotestellus/servicetotoquote" className="btn-red">Enviar</MyLink>
								</div>
							</form>
						</div>
				</div>                                        
                </div>
            </div>
        </section>
  )
}