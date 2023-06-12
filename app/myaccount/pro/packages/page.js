import Input from '@/components/TextInput'
import LeftNav from '@/components/LeftNav'
import Button from '@/components/Button'
import Image from 'next/image'

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
                            <div class="pro-section mt-5">
                            <div class="default-heading">
                                <h2><span>Misma Plataforma</span> muchos<br />beneficios más.</h2>
                            </div>
                            <div class="pro-packages">
                                <div class="flex flex-wrap ">
                                    <div class="md:w-1/3 pr-4 pl-4 sm:w-full">
                                        <div class="ads-price-box">
                                            <h3>Plus</h3>
                                            <Image height='40' width='40' src="/images/line.png" alt="" />
                                            <a href="#">Ver paquetes</a>
                                        </div>
                                    </div>
                                    <div class="md:w-1/3 pr-4 pl-4 sm:w-full">
                                        <div class="ads-price-box">
                                            <h3>Pro</h3>
                                            <Image height='40' width='40' src="/images/line.png" alt="" />
                                            <a href="#">Ver paquetes</a>
                                        </div>
                                    </div>
                                    <div class="md:w-2/3 pr-4 pl-4 sm:w-full text-center mt-5">
                                        <p class="fw-semibold">Conoce los paquetes tenemos para cuando<br />tienes más de un anuncio premium.</p>
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