import LeftNav from '@/components/LeftNav'
import Link from 'next/link';
import TextArea from '@/components/TextArea'


export default function Home() {
  return (
        <section  className="lg:py-20 py-5 bg-white">
            <div  className="container mx-auto px-4 max-w-[100%]">
                <h3  className="text-4xl mb-16">Mi <span  className="font-bold">Cuenta</span></h3>
                <div  className="flex flex-wrap">
                    <aside  className="w-1/5">
                        <div  className="border-r-2">
                           <LeftNav />
                        </div>
                    </aside>
                    <div  className="w-4/5">
						<div class="main-content-area closedservicetomail">
							<div class="services-quote mt-5 pt-5">
								<div class="default-heading">
									<h2>Mi <span>Servicio</span> a cotizar</h2>
								</div>
								<div class="services-quote-box mb-5">
									<div class="list-quotes-table">
										<table class="w-full max-w-full mb-4 bg-transparent default-table">
											<thead>
												<tr className='text-left'>
													<th>
														Tipo de Evento
														<p class="gray-color">Evento<br />Corporativo</p>
													</th>
													<th>
														Asistentes
														<p class="gray-color">87</p>
													</th>
													<th>
														Presupuesto
														<p class="gray-color">$132,000MXN</p>
													</th>
													<th>
														Estado
														<p class="gray-color">Cancelado</p>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<h4>Servicios</h4>
														Propiedades,<br />terrazas & jardines
													</td>
													<td>
														<h4>Contacto</h4>
														Llamada
													</td>
													<td colspan="3">
														<h4>Última Llamada</h4>
														02/03/2023
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="default-heading text-center mt-5 pt-5 pl-2 pr-2">
									<h2>Lamentamos que tu <span className='pb-3'>evento</span> no se haya concretado.</h2>
								</div>
								<div class="mb-4 text-center mt-5 pt-5">
									<Link href="/myaccount/quote/quotestellus" class="btn-red capitalize">Cotizar nuevo evento</Link>
								</div>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </section>
  )
}