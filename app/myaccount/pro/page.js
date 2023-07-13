import Input from '@/components/TextInput'
import LeftNav from '@/components/LeftNav'
import Button from '@/components/Button'
import Link from 'next/link'
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
                                <div className="default-heading flex justify-between items-center">
                                    <h2><span className='pb-3'>Misma Plataforma</span> muchos beneficios más.</h2>
                                    <MyLink href="/myaccount/pro/packages" className="btn-red capitalize">PROMO VARIOS ANUNCIOS</MyLink>
                                </div>
                                <div className="pro-packages-list">
                                    <form className="default-form">
                                        <div className="mb-4">
                                            <div className="label-bg">
                                                <label for="">Pro $29,99/<small>mes</small></label>
                                            </div>
                                            <div className="input-btn">
                                                <Input placeholder="Ver detalles"/>
                                                <MyLink href='/myaccount/pro/whatsincluded'>
                                                    <Button className="pl-0 pr-0" type='button' text='Lo que Incluye' />
                                                </MyLink>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="label-bg">
                                                <label for="">Plus $19,99/<small>mes</small></label>
                                            </div>
                                            <div className="input-btn">
                                                <Input placeholder="Ver detalles"/> 
                                                <Link href='/myaccount/pro/whatsincludedplus'>
                                                    <Button className="pl-0 pr-0" type='button' text='Lo que Incluye' />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="label-bg">
                                                <label for="">Gratis</label>
                                            </div>
                                            <div className="input-btn">
                                                <Input placeholder="Ver detalles"/>
                                                <Link href='/myaccount/pro/whatsincluded'>
                                                    <Button className="pl-0 pr-0" type='button' text='Tu Plan Actual' />
                                                </Link>
                                            </div>
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