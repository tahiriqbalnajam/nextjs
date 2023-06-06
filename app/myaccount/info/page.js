import Image from 'next/image';
import Link from 'next/link';
import Input from '../../components/TextInput'
import InputMail from '../../components/MailInput'
import LeftNav from '../../components/LeftNav'

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
                            <a href="#"  className="text-xl text-colorRed inline-block">Contraseña</a>
                        </div>
                        <form action="">
                            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-24">
                                <div  className="mb-12">
                                    <label for="name"  className="block mb-1 text-lg font-bold text-colorBlack">Name</label>
                                    <Input placeholder="Bernie"/>
                                    
                                </div>
                                <div  className="mb-12">
                                    <label for="name"  className="block mb-1 text-lg font-bold text-colorBlack">Name</label>
                                    <Input placeholder="Bernie"/>
                                </div>
                                <div  className="mb-12">
                                    <label for="name"  className="block mb-1 text-lg font-bold text-colorBlack">Name</label>
                                    <Input placeholder="Bernie"/>
                                </div>
                                <div  className="mb-12">
                                    <label for="name"  className="block mb-1 text-lg font-bold text-colorBlack">Name</label>
                                    <Input placeholder="Bernie"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}