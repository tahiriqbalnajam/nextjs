import LeftNav from '@/components/LeftNav'
import Image from 'next/image'
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
                        <div className="main-content-area ">
                            <div className="pro-section mt-5">
                            <div className="default-heading">
                                <h2><span className='mb-2'>Misma Plataforma</span> muchos<br />beneficios más.</h2>
                            </div>
                            <div className="pro-packages pro-packages2">
                                <div className="flex flex-wrap ">
                                    <div className="md:w-[50%]  pr-4 pl-4 sm:w-full">
                                        <div className="ads-price-box">
                                            <h3>Plus</h3>
                                            <Image height='80' width='80' src="/images/line.png" alt="" />
                                            <MyLink href="/myaccount/pro/packages/seepackage">Ver paquetes</MyLink>
                                        </div>
                                    </div>
                                    <div className="md:w-[50%]  pr-4 pl-4 sm:w-full">
                                        <div className="ads-price-box">
                                            <h3>Pro</h3>
                                            <Image height='80' width='80' src="/images/line.png" alt="" />
                                            <MyLink href="/myaccount/pro/packages/seepackage">Ver paquetes</MyLink>
                                        </div>
                                    </div>
                                    <div className="md:w-[100%] mt-10 pr-4 pl-4 sm:w-full text-center">
                                        <p className="fw-semibold text-[21px] font-bold">Conoce los paquetes tenemos para cuando<br />tienes más de un anuncio premium.</p>
                                    </div>
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