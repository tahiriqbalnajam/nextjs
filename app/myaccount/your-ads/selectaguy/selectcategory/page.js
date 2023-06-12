import Image from 'next/image';
import Link from 'next/link';
import LeftNav from '@/components/LeftNav'

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
                            <div class="main-content-area w-full">
                                <div class="your-ads mt-5 pt-5">
                                    <div class="default-heading">
                                        <h2>Selecciona una <span>Categoría</span></h2>
                                    </div>
                                    <div class="category-list">
                                        <a href="#" class="active"><span><Image height='50' width='50' src="/images/propiedades.png" alt="" /></span> Propiedades </a>
                                        <a href="#"><span><Image height='50' width='50' src="/images/barcos.png" alt="" /></span> Barcos <i class="fa-solid fa-check"></i></a>
                                        <a href="#"><span><Image height='50' width='50' src="/images/jardines.png" alt="" /></span> Jardines <i class="fa-solid fa-check"></i></a>
                                        <a href="#"><span><Image height='50' width='50' src="/images/salones.png" alt=""/></span> Salones de fiestas <i class="fa-solid fa-check"></i></a>
                                        <a href="#"><span><Image height='50' width='50' src="/images/hotels.png" alt=""/></span> Hoteles <i class="fa-solid fa-check"></i></a>
                                        <a href="#"><span><Image height='50' width='50' src="/images/tickets.png" alt=""/></span> Boletos <i class="fa-solid fa-check"></i></a>
                                        <a href="/myaccount/your-ads/selectaguy/selectcategory/locations"><span><Image height='50' width='50' src="/images/terrazas.png" alt=""/></span> Terrazas <i class="fa-solid fa-check"></i></a>
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