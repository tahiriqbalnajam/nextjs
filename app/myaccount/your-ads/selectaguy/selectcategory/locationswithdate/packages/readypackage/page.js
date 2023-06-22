import Image from 'next/image';
import Link from 'next/link';
import LeftNav from '@/components/LeftNav'
import Input from '@/components/TextInput'
import TextArea from '@/components/TextArea'
import MyLink from '@/components/mylink';


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
                            <div className="main-content-area w-full readypackage">
                                <div className="services-quote mt-5 pt-5">
                                    <div className="default-heading h-lg text-center mt-5 pt-5">
                                        <h2><span className="color-default">¡LISTO!</span></h2>
                                    </div>
                                    <div className="text-center mb-20 mt-16 flex justify-center ">
                                        <Image src="/images/line2.png" height='80' width='70' alt="" />
                                    </div>
                                    <div className="default-heading text-center">
                                        <h2><span className='mb-2'>Estamos revisando tu anuncio.</span> En breve lo podrás ver publicado.</h2>
                                    </div>
                                    <div className="mb-4 text-center mt-14 pt-5">
                                        <MyLink href="/myaccount/your-ads" className="btn-red">Regresar</MyLink>
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