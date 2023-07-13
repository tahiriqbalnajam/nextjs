import LeftNav from '@/components/LeftNav'
import Link from 'next/link';
import MyLink from '@/app/components/MyLink';

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
						<div className="main-content-area openservicetomail">
							<div className="services-quote mt-5 pt-5">
								<div className="default-heading">
									<h2>Mi <span>Servicio</span> a cotizar</h2>
								</div>
								<div className="services-quote-box mb-5">
									<div className="list-quotes-table">
										<table className="w-full max-w-full mb-4 bg-transparent default-table">
											<thead>
												<tr className='text-left'>
													<th>
														Tipo de Evento
														<p className="gray-color">Cumpleaños</p>
													</th>
													<th>
														Asistentes
														<p className="gray-color">56</p>
													</th>
													<th>
														Presupuesto
														<p className="gray-color">$150,000MXN</p>
													</th>
													<th>
														Estado
														<p className="gray-color">$150,000MXN</p>
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
								<div className="default-heading text-center mt-5 pt-5">
									<h2><span className='pb-3'>Estamos preparando tu propuesta.</span><br />En breve nos comunicaremos contigo.</h2>
								</div>
								<div className="mb-4 text-center">
									<MyLink href="/myaccount/quote" className="btn-red">Regresar</MyLink>
								</div>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </section>
  )
}