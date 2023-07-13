import Input from '@/components/TextInput'
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
                        <div className="main-content-area w-full">
                            <div className="pro-section mt-5">
                                <div className="default-heading">
                                    <h2>Paquetes / <span>PRO</span></h2>
                                    <h3 className="color-default mt-8"><span>PRO<small> $89,99/mes</small></span></h3>
                                </div>
                                <div className="default-heading mt-[4rem]">
                                    <h2>Forma de <span>pago</span></h2>
                                </div>
                                <div className="pro-packages-list mt-[6rem]">
                                    <form className="default-form">
                                        <div className="fdfhfhg mb-8">
                                            <div className="custom-radio-button w-full">
                                               <Input type="radio" id="cards" name="radio-group" />
                                                <label className='w-full pb-4' for="cards">Tarjeta de Crédito / Débito <Image height='150' width='150' src="/images/cards.jpg" alt="" className="ms-2 inline" /></label>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="mb-14 mt-[4rem]">
                                            <div className="custom-radio-button">
                                               <Input type="radio" id="paypal" name="radio-group" />
                                                <label className='pb-4' for="paypal">Paypal <Image height='110' width='110' src="/images/paypal.jpg" alt="" className="ms-2 inline" /></label>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="mb-4 text-center">
                                            <MyLink href="/myaccount/pro/packages/seepackage/packagedetails/paymenttype/paymentdetails" className="btn-red">Siguiente</MyLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}