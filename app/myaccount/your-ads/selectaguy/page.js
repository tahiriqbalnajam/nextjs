import Image from 'next/image';
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
                    <div  className="w-4/5">
                        <div  className="flex items-center justify-between mb-16">
                            <div className="main-content-area w-full">
                                <div className="your-ads mt-5 pt-5">
                                    <div className="default-heading">
                                        <h2>Selecciona un <span> Tipo</span> </h2>
                                    </div>
                                    <div className="flex flex-wrap ">
                                        <div className="md:w-1/2 pr-4 pl-4 sm:w-full">
                                            <div className="your-ads-box ">
                                                <h4>Locación</h4>
                                                <MyLink href='myaccount/your-ads/selectaguy/selectcategory'>
                                                    <div className='flex justify-center'>
                                                        <Image height='50' width='50' src="/images/terrazas.png" alt="" />
                                                    </div>
                                                </MyLink>
                                                <p>Es ideal si tienes un lugar para rentar. Ej. Casa, salón de fiestas, terraza, etc</p>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 pr-4 pl-4 sm:w-full">
                                            <div className="your-ads-box">
                                                <h4>Servicio</h4>
                                                <MyLink href='myaccount/your-ads/selectaguy/selectcategory'>
                                                <div className='flex justify-center'>
                                                    <Image height='50' width='50' src="/images/hotels.png" alt="" />
                                                </div>
                                                </MyLink>
                                                <p>Es ideal cuando amenizas un evento. Ej, músico, decoración, alimentos, etc</p>
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