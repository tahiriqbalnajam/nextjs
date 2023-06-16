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
                    <div  className="w-4/5">
                        <div class="main-content-area">
                            <div class="services-quote mt-5 pt-5">
                                <div class="default-heading h-lg text-center mt-5 pt-5">
                                    <h2><span class="color-default">¡Muy pronto!</span></h2>
                                </div>
                                <div class="text-center mb-5 mt-5 flex justify-center">
                                    <Image src="/images/line2.png" height='50' width='50' alt="" />
                                </div>
                                <div class="default-heading text-center">
                                    <h2><span className='pb-3'>Estamos revisando tu anuncio.</span> En breve lo podrás ver publicado.</h2>
                                </div>
                                <div class="mb-4 text-center mt-5 pt-5">
                                    <Link href="/myaccount/your-ads/in-review" class="btn-red capitalize">Regresar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}