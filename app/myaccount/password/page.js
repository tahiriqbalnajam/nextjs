import Image from 'next/image';
import Link from 'next/link';
import Input from '../../components/TextInput'
import Button from '../../components/Button'
import InputMail from '../../components/MailInput.js'

export default function Home() {
  return (
        <section  className="lg:py-20 py-5 bg-white">
            <div  className="container mx-auto px-4 max-w-[92%]">
                <h3  className="text-4xl mb-16">Mi <span  className="font-bold">Cuenta</span></h3>
                <div  className="flex flex-wrap">
                    <aside  className="w-1/5">
                        <div  className="border-r-2">
                            <ul  className="py-20">
                                <li><a href="#"  className="active flex mb-10 text-2xl border-r-4 border-red-600"><span  className="w-10 mr-2 inline-block"><Image src="/images/info.png" width='50' height='50' alt=""  className="text-center" /></span> Info</a></li>
                                <li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/favo.png" alt=""  className="text-center" width='50' height='50' /></span> Favoritos</a></li>
                                <li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/quotes.png" alt=""  className="text-center" width='50' height='50' /></span> Cotizaciones</a></li>
                                <li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/your-ads.png" alt=""  className="text-center" width='50' height='50' /></span> Tus Anuncios</a></li>
                                <li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/pro.png" alt=""  className="text-center" width='50' height='50' /></span> PRO</a></li>
                                <li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/your-profile.png" alt=""  className="text-center" width='50' height='50' /></span> Tu Perfil</a></li>
                                <li><a href="#"  className="flex mb-10 text-2xl text-colorRed signoff">Cerrar Sesión</a></li>
                            </ul>
                        </div>
                    </aside>

                    
                    <div  className="w-4/5 pl-28">
                        <div  className="flex items-center justify-between mb-16">
                            <div  className="flex items-center">
                                <div  className="relative w-40 border-2 rounded-full border-red-600">
                                    <Image src="/images/user-profile-img.png" alt="" width='156' height='156' />
                                    <Image src="/images/edit.png" alt="" width='35' height='35'  className="absolute bottom-0 right-0 cursor-pointer" />
                                </div>
                                <div  className="ml-14">
                                    <h3  className="text-3xl mb-3">Bernardo Gonzalez</h3>
                                    <h3  className="text-xl font-bold">CDMX</h3>
                                </div>
                            </div>
                        </div>
                        <form action="">
                            <div  className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-24 w-2/4">
                                <div  className="mb-12">
                                    <label for="name"  className="block mb-1 text-lg font-bold text-colorBlack">Tu contraseña actual</label>
                                    <Input placeholder="**********" type="password"/>
                                    
                                </div>
                                <div  className="mb-12">
                                    <label for="name"  className="block mb-1 text-lg font-bold text-colorBlack">Nueva Contraseña</label>
                                    <Input placeholder="**********" type="password"/>
                                </div>
                                <div  className="mb-12">
                                    <label for="name"  className="block mb-1 text-lg font-bold text-colorBlack">Repite nueva contraseña</label>
                                    <Input placeholder="**********" type="password"/>
                                </div>
                                <div  className="mb-12 container mx-0 min-w-full flex flex-col items-center">
                                    <Button type="submit" button="primary" text="Actualizar"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}