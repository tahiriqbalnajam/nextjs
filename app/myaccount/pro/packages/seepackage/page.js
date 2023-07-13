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
                        <div className="main-content-area packagedetails">
                            <div className="pro-section mt-5">
                                <div className="default-heading">
                                    <h2>Paquetes <span className="color-default">PRO</span></h2>
                                </div>
                                <div className="pro-packages-list">
                                    <form className="default-form">
                                        <div className="mb-4">
                                            <div className="label-bg">
                                                <label for="">De 1 a 5 anuncios $89,99/<small>mes</small></label>
                                                <p className="color-default text-end">($17,99 cada anuncio)</p>
                                            </div>
                                            <div className="input-btn">
                                                <Input type="text" placeholder="Ver detalles" />
                                                <MyLink href='myaccount/pro/packages/seepackage/packagedetails'><button>Comprar Ahora</button></MyLink>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="label-bg">
                                                <label for="">De 6 a 10 anuncios $129,99/<small>mes</small></label>
                                                <p className="color-default text-end">($12,99 cada anuncio)</p>
                                            </div>
                                            <div className="input-btn">
                                                <Input type="text" placeholder="Ver detalles" />
                                                <MyLink href='myaccount/pro/packages/seepackage/packagedetails'><button>Comprar Ahora</button></MyLink>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="label-bg">
                                                <label for="">De 11 a 15 anuncios $139,99/<small>mes</small></label>
                                                <p className="color-default text-end">($9,99 cada anuncio)</p>
                                            </div>
                                            <div className="input-btn">
                                                <Input type="text" placeholder="Ver detalles" />
                                                <MyLink href='myaccount/pro/packages/seepackage/packagedetails'><button>Comprar Ahora</button></MyLink>
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