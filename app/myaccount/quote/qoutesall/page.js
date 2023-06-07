import LeftNav from '../../../components/LeftNav'
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
						<div class="main-content-area">
							<div class="services-quote mt-5 pt-5">
								<div class="default-heading">
									<h2><span>Servicios</span> para cotizar</h2>
								</div>
								<div class="services-quote-box">
									<a href="#" class="btn-red w-full">Cotizar nuevo servicio</a>
									<h4 class="heading-sm">Listado de cotizaciones</h4>
									<div class="list-quotes-header">
										<Link href="/myaccount/quote">Abiertos <span>1</span></Link>
										<Link href="/myaccount/quote/qoutesclosed">Cerrados <span>4</span></Link>
										<Link href="/myaccount/quote/qoutesall" class="active">Todos <span>5</span></Link>
									</div>
									<div class="list-quotes-table">
										<table class="w-full max-w-full mb-4 bg-transparent default-table">
											<thead>
												<tr>
													<th>Tipo de Evento</th>
													<th colspan="2">Estado</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Cumpleanos</td>
													<td>Preparando Propuesta</td>
													<td class="text-end"><a href="#" class="view-btn"><i class="fa-solid fa-eye"></i></a></td>
												</tr>
												<tr>
													<td>Boda</td>
													<td>Propuesta entregada</td>
													<td class="text-end"><a href="#" class="view-btn"><i class="fa-solid fa-eye"></i></a></td>
												</tr>
												<tr>
													<td>Evento corporativo</td>
													<td>Cancelada</td>
													<td class="text-end"><a href="#" class="view-btn"><i class="fa-solid fa-eye"></i></a></td>
												</tr>
												<tr>
													<td>Fiesta privado</td>
													<td>Concretado</td>
													<td class="text-end"><a href="#" class="view-btn"><i class="fa-solid fa-eye"></i></a></td>
												</tr>
												<tr>
													<td>Cumpleaños</td>
													<td>Pendiente de pago</td>
													<td class="text-end"><a href="#" class="view-btn"><i class="fa-solid fa-eye"></i></a></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>

							</div>
						</div>
                    </div>
                </div>
            </div>
        </section>
  )
}