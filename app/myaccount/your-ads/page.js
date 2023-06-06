import Image from 'next/image';
import Link from 'next/link';
import Input from '../../components/TextInput'
import LeftNav from '../../components/LeftNav'
import InputMail from '../../components/MailInput.js'
import SubmitButton from '../../components/SubmitButton.js'
import Button from '../../components/Button'
import ButtonLink from '../../components/ButtonLink'
import H2 from '../../components/H2'


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
                                        <H2 textlow="Mis" texthigh="Anuncios" />
                                        <ButtonLink href="#" text="Crear Anuncio" />
                                    </div>
                                    <div class="services-quote-box">
                                        <div class="list-quotes-header">
                                            <a href="#" class="active">Publicados <span>1</span></a>
                                            <a href="#">En revisión <span>1</span></a>
                                        </div>
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