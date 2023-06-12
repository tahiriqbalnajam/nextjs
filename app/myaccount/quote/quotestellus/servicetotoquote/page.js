import Image from 'next/image';
import Input from '@/components/TextInput'
import QoutesImageSlider from '@/components/qoutes-slider'
import LeftNav from '@/components/LeftNav'
import TextArea from '@/components/TextArea'
import Link from 'next/link';


export default function Home() {
  return (
        <section  className="lg:py-20 py-5 bg-white font-[Ubuntu, sans-serif]">
            <div  className="container mx-auto px-4">
                <h3  className="text-4xl mb-16">Mi <span  className="font-bold">Cuenta</span></h3>
                <div  className="flex flex-wrap">
                    <aside  className="w-1/5">
                        <div  className="border-r-2">
							<LeftNav />
                        </div>
                    </aside>
					<div  className="w-4/5 mt-10">
                        <div  className="flex items-center justify-between mb-16">
							<div class="main-content-area w-full">
								<div class="services-quote mt-5 pt-5">
									<div class="default-heading h-lg text-center mt-5 pt-5">
										<h2><span class="color-default">¡Gracias!</span></h2>
									</div>
									<div class="flex justify-center mb-5 mt-5">
										<Image src="/images/line2.png" alt="" height='50' width='50' />
									</div>
									<div class="default-heading text-center">
										<h2 className='mb-5 mt-5'><span>Estamos preparando tu propuesta.</span></h2>
										<h2>En breve nos comunicaremos contigo.</h2>
									</div>
									<div class="mb-4 text-center mt-5 pt-5">
										<Link href="/myaccount/quote" class="btn-red capitalize">Regresar</Link>
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