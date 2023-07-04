import Image from 'next/image';
import LeftNav from '@/components/LeftNav'
import MyLink from '@/app/components/MyLink';

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
							<div className="main-content-area w-full">
								<div className="services-quote mt-5 pt-5">
									<div className="default-heading h-lg text-center mt-5 pt-5">
										<h2><span className="color-default">¡GRACIAS!</span></h2>
									</div>
									<div className="flex justify-center mb-5 mt-5">
										<Image src="/images/line2.png" alt="" height='50' width='50' />
									</div>
									<div className="default-heading text-center">
										<h2 className='mb-5 mt-5'><span>Estamos preparando tu propuesta.</span></h2>
										<h2>En breve nos comunicaremos contigo.</h2>
									</div>
									<div className="mb-4 text-center mt-5 pt-5">
										<MyLink href="/myaccount/quote" className="btn-red capitalize">Regresar</MyLink>
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