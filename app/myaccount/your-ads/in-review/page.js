import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/TextInput'
import LeftNav from '@/components/LeftNav'
import InputMail from '@/components/MailInput.js'
import SubmitButton from '@/components/SubmitButton.js'
import Button from '@/components/Button'
import ButtonLink from '@/components/ButtonLink'
import H2 from '@/components/H2'


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
                            <div class="main-content-area w-full">
                                <div class="services-quote mt-5 pt-5 w-full">
                                <div class="default-heading flex justify-between w-full">
                                    <h2>Mis <span>Anuncios</span> </h2>
                                    <Link href="/myaccount/your-ads/selectaguy" class="btn-red text-capitalize">Crear Anuncio</Link>
                                </div>
                                <div class="services-quote-box">
                                    <div class="list-quotes-header">
                                        <Link href="/myaccount/your-ads" >Publicados <span>1</span></Link>
                                        <Link href="/myaccount/your-ads/in-review" className='active'>En revisión <span>1</span></Link>

                                    </div>
                                </div>
                                <div class="list-quotes-table">
                                    <table class="table default-table w-full">
                                        <thead>
                                            <tr>
                                                <th>Anuncio</th>
                                                <th colspan="2">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Hotel</td>
                                                <td>En revisión</td>
                                                <td class="text-end"><a href="#" class="view-btn"><i class="fa-solid fa-eye"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
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