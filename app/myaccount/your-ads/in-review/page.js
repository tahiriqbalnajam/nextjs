
import LeftNav from '@/components/LeftNav'
import MyLink from '@/app/components/MyLink';


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
                    <div  className="w-4/5 pl-28">
                        <div  className="flex items-center justify-between mb-16">
                            <div className="main-content-area w-full">
                                <div className="services-quote mt-5 pt-5 w-full">
                                <div className="default-heading flex justify-between w-full">
                                    <h2>Mis <span>Anuncios</span> </h2>
                                    <MyLink href="/myaccount/your-ads/selectaguy" className="btn-red text-capitalize">Crear Anuncio</MyLink>
                                </div>
                                <div className="services-quote-box">
                                    <div className="list-quotes-header">
                                        <MyLink href="/myaccount/your-ads" >Publicados <span>1</span></MyLink>
                                        <MyLink href="/myaccount/your-ads/in-review" className='active'>En revisión <span>1</span></MyLink>

                                    </div>
                                </div>
                                <div className="list-quotes-table">
                                    <table className="table default-table w-full">
                                        <thead>
                                            <tr>
                                                <th>Anuncio</th>
                                                <th colspan="2">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Hotel</td>
                                                <td>En revisión</td>
                                                <td className="text-end"><MyLink href="/myaccount/your-ads/in-review/comingsoon" className="view-btn"><i className="fa-solid fa-eye"></i></MyLink></td>
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