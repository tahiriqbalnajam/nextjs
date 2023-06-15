import LeftNav from '@/components/LeftNav'
import Link from 'next/link';

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
						<div class="main-content-area openservicetomail">
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
														<p class="gray-color">Cumpleaños</p>
													</th>
													<th>
														Asistentes
														<p class="gray-color">56</p>
													</th>
													<th>
														Presupuesto
														<p class="gray-color">$150,000MXN</p>
													</th>
													<th>
														Estado
														<p class="gray-color">$150,000MXN</p>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td colspan="4">
														<h4>Servicios</h4>
														Propiedades, terrazas & jardines
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="default-heading text-center mt-5 pt-5">
									<h2><span className='pb-3'>Estamos preparando tu propuesta.</span><br />En breve nos comunicaremos contigo.</h2>
								</div>
								<div class="mb-4 text-center">
									<Link href="/myaccount/quote" class="btn-red">Regresar</Link>
								</div>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </section>
  )
}