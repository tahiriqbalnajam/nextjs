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
                                    <h3 className="color-default mt-2"><span>PRO<small> $89,99/mes</small></span></h3>
                                </div>
                                <div className="pro-packages-list">
                                    <form className="default-form">
                                        <div className="mb-4">
                                            <label className='pl-2' for="">Calle</label>
                                            <Input type="text" placeholder="Nombre de la calle"/>
                                        </div>
                                        <div className="flex flex-wrap">
                                            <div className="md:w-1/2  sm:w-full pr-4">
                                                <div className="mb-4">
                                                    <label className='pl-2' for="">No Exterior</label>
                                                    <Input type="text" placeholder="45654"/>
                                                </div>
                                            </div>
                                            <div className="md:w-1/2  sm:w-full pl-4">
                                                <div className="mb-4">
                                                    <label className='pl-2' for="">No Interior</label>
                                                    <Input type="text" placeholder="22"/>
                                                </div>
                                            </div>
                                            <div className="md:w-1/2 sm:w-full pr-4">
                                                <div className="mb-4">
                                                    <label for="">Colonia</label>
                                                    <Input type="text" placeholder="55 12345678"/>
                                                </div>
                                            </div>
                                            <div className="md:w-1/2 sm:w-full pl-4">
                                                <div className="mb-4">
                                                    <label className='pl-2' for="">Alcaldía / Municipio</label>
                                                    <Input type="text" placeholder="05300"/>
                                                </div>
                                            </div>
                                            <div className="md:w-1/2 sm:w-full pr-4">
                                                <div className="mb-4">
                                                    <label className='pl-2' for="">Código Postal</label>
                                                    <Input type="text" placeholder="005300"/>
                                                </div>
                                            </div>
                                            <div className="md:w-1/2 sm:w-full pl-4">
                                                <div className="mb-4">
                                                    <label className='pl-2' for="">Estado</label>
                                                    <Input type="text" placeholder="CDMX"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4 text-center">
                                            <MyLink href="myaccount/pro/packages/seepackage/packagedetails/paymenttype" className="btn-red">Siguiente</MyLink>
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