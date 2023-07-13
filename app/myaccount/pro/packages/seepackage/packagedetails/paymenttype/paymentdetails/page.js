import Input from '@/components/TextInput'
import LeftNav from '@/components/LeftNav'
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
                                    <h3 className="color-default mt-6"><span>PRO<small> $89,99/mes</small></span></h3>
                                </div>
                                <div className="default-heading mt-16">
                                    <h2>Estás apunto de ser un <span>Pro</span></h2>
                                </div>
                                <div className="card-form mt-20">
                                    <form className="default-form field-border-bottom">
                                        <div className="mb-6">
                                            <Input type="text" placeholder="Nombre Completo" />
                                        </div>
                                        <div className="mb-6">
                                            <Input type="text" placeholder="0000 - 0000 - 0000 - 0000" />
                                        </div>
                                        <div className="flex flex-wrap mb-6">
                                            <div className="md:w-1/3 pr-4 sm:w-full /">
                                                <div className="mb-4">
                                                    <Input type="text" placeholder="Código de Seguridad" />
                                                </div>
                                            </div>
                                            <div className="md:w-1/3 pr-4 pl-4 sm:w-full /">
                                                <div className="mb-4">
                                                    <Input type="text" placeholder="Mes de vencimiento" />
                                                </div>
                                            </div>
                                            <div className="md:w-1/3 pl-4 sm:w-full /">
                                                <div className="mb-4">
                                                    <Input type="text" placeholder="Año de vencimiento" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4 mt-16 text-center">
                                            <MyLink href="/myaccount/pro/packages/seepackage/packagedetails/paymenttype/paymentdetails/thankyou" className="btn-red">Aceptar</MyLink>
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