import Input from '@/components/TextInput'
import LeftNav from '@/components/LeftNav'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import MyLink from '@/components/mylink';
 

export default function Home() {
  return (
        <section  className="lg:py-20 py-5 bg-white ">
            <div  className="container mx-auto px-4 max-w-[100%]">
                <h3  className="text-4xl mb-16">Mi <span  className="font-bold">Cuenta</span></h3>
                <div  className="flex flex-wrap">
                    <aside  className="w-1/5">
                        <div  className="border-r-2">
                           <LeftNav />
                        </div>
                    </aside>
                    <div  className="w-4/5">
                        <div className="main-content-area w-full thankyou">
                            <div className="services-quote mt-5 pt-5">
                            <div className="default-heading h-lg text-center mt-5 pt-5">
                                <h2>Ahora eres todo un <span className="color-default">Pro</span></h2>
                            </div>
                            <div className="text-center mb-12 mt-8  flex justify-center">
                                <Image height='50' width='50' src="/images/line2.png" alt="" />
                            </div>
                            <div className="default-heading text-center">
                                <h3><span>Gracias por comprar tu licencia.</span></h3>
                                <p className="mt-6 text-[20px]"><b>Ahora podrás utilizar todas las funciones que tenemos<br />para que llegues más lejos con nuestros anuncios.</b></p>
                            </div>
                            <div className="mb-4 text-center mt-5 pt-5">
                                <MyLink href="/myaccount/yourprofile" className="btn-red text-[8px]">Usar en mis Anuncios</MyLink>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}