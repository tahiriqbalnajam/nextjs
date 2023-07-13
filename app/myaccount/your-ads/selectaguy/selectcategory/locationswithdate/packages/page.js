import Image from 'next/image';
import LeftNav from '@/components/LeftNav'
import MyLink from '@/app/components/MyLink';


export default function Home() {
  return (
        <section  className="lg:py-20 py-5 bg-white">
            <div  className="container mx-auto px-4 max-w-[95%]">
                <h3  className="text-4xl mb-16">Mi <span  className="font-bold">Cuenta</span></h3>
                <div  className="flex flex-wrap">
                    <aside  className="w-1/5">
                        <div  className="border-r-2">
                           <LeftNav />
                        </div>
                    </aside>
                    <div  className="w-4/5">
                        <div  className="flex items-center justify-between mb-16">
                            <div className="main-content-area w-full">
                                <div className="your-ads">
                                    <div className="default-heading">
                                        <h2>Locación / <span>Terraza</span></h2>
                                    </div>
                                    <div className="ads-packages">
                                        <p>Puedes arrastrar las imágenes para ordenarlas</p>
                                        <div className="flex flex-wrap ">
                                            <div className="md:w-1/3 pr-4 sm:w-full ">
                                                <div className="ads-price-box free-active">
                                                    <h3>Gratis</h3>
                                                    <p>Tu plan Actual</p>
                                                    <Image height='60' width='60' src="/images/line2.png" alt="" /> 
                                                    <MyLink href="/myaccount/your-ads/selectaguy/selectcategory/locationswithdate/packages/readypackage">Continuar Así</MyLink>
                                                </div>
                                            </div>
                                            <div className="md:w-1/3 pr-2 pl-2 sm:w-full ">
                                                <div className="ads-price-box">
                                                    <h3>Gratis</h3>
                                                    <h4>$19.99<span>/mes</span></h4>
                                                    <Image height='60' width='60' src="/images/line.png" alt="" />
                                                    <MyLink href="/myaccount/your-ads/selectaguy/selectcategory/locationswithdate/packages/readypackage">Empezar ahora</MyLink>
                                                </div>
                                            </div>
                                            <div className="md:w-1/3 pl-4 sm:w-full ">
                                                <div className="ads-price-box">
                                                    <h3>Pro</h3>
                                                    <h4>$29.99<span>/mes</span></h4>
                                                    <Image height='60' width='60' src="/images/line.png" alt="" />
                                                    <MyLink href="/myaccount/your-ads/selectaguy/selectcategory/locationswithdate/packages/readypackage">Empezar ahora</MyLink>
                                                </div>
                                            </div>
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