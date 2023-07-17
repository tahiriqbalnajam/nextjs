import Image from 'next/image';
import LeftNav from '@/components/LeftNav'
import Input from '@/components/TextInput'
import TextArea from '@/components/TextArea'
import MyLink from '@/app/components/MyLink';
import '../../../../../css/style.css'
import SoloCornProPopup from '@/app/components/SoloCornProPopup';
import Dropdowns from '@/app/components/MainPageAllDropdowns';

const toggletext = [
    {
        text: 'Escoge una red',
    },
    {
        text: 'Escoge una red',
    },
    {
        text: 'Escoge una red',
    }
  ];

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
                        <div  className="flex items-center justify-between mb-16">
                            <div  className="main-content-area w-full">
                                <div  className="your-ads">
                                    <div  className="default-heading">
                                        <h2>Locación / <span>Terraza</span></h2>
                                    </div>
                                    <div  className="add-ads-images">
                                        <form  className="default-form border-fields field-icon-red">
                                            <h5>Agrega fotos a tu anuncio</h5>
                                            <p>Puedes arrastrar las imágenes para ordenarlas</p>
                                            <div  className="flex flex-wrap  mb-5">
                                                <div  className="md:w-1/4 pr-4 sm:w-1/2">
                                                    <div  className="add-image-upload active  flex justify-center">
                                                        <label for="file-input">
                                                            <Image height='50' width='50' src="/images/img-upload.png" alt="" />
                                                        </label>
                                                        <div className='hidden '>
                                                            <Input id="file-input" type="file"  />
                                                        </div>
                                                        <p>Agrega o arrastra fotos aquí</p>
                                                    </div>
                                                </div>
                                                <div  className="md:w-1/4 pr-4 pl-4 sm:w-1/2 ">
                                                    <div  className="add-image-upload  flex justify-center">
                                                        <label for="file-input">
                                                            <Image height='50' width='50' src="/images/img-upload.png" alt="" />
                                                        </label>
                                                        <div className='hidden '>
                                                            <Input id="file-input" type="file"  />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="md:w-1/4 pr-4 pl-4 sm:w-1/2">
                                                    <div  className="add-image-upload flex justify-center">
                                                        <label for="file-input">
                                                            <Image height='50' width='50' src="/images/img-upload.png" alt="" />
                                                        </label>
                                                        <div className='hidden '>
                                                            <Input id="file-input" type="file"  />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="md:w-1/4 pl-4 sm:w-1/2">
                                                    <div  className="add-image-upload flex justify-center">
                                                        <label for="file-input">
                                                            <Image height='50' width='50' src="/images/img-upload.png" alt="" />
                                                        </label>
                                                        <div className='hidden '>
                                                            <Input id="file-input" type="file"  />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="mb-4">
                                                <Input  type="text"  className="h-[50px] block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200  " placeholder="Escribe un titulo para tu anuncio"/>
                                            </div>
                                            <div  className="mb-4">
                                                <TextArea rows='6' cols='4' placeholder="La descripción perfecta para mostrar lo que ofreces" className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200  ' />
                                            </div>
                                            <div  className="mb-4 mt-8">
                                                <div  className="custom-radio-button">
                                                    <Input type="radio" id="Mail" name="radio-group" />
                                                    <label for="Mail">Tu servicio o producto se vende o renta por unidades</label>
                                                </div>
                                            </div>
                                            <div  className="flex flex-wrap mt-4 mb-4">
                                                <div  className="md:w-1/2 pr-4 sm:w-full mt-4 mb-4">
                                                    <div  className="mb-4">
                                                        <label>Precio desde</label>
                                                        <Input  type="text"  className="mt-[9px] h-[50px] block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200  " placeholder="$0.00" />
                                                    </div>
                                                </div>
                                                <div  className="md:w-1/2 pl-4 sm:w-full mt-4 mb-4">
                                                    <div  className="mb-4">
                                                        <label>Máximo de reservaciones por día</label>
                                                        <Input  type="text"  className="mt-[9px] h-[50px] block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200  " placeholder="0" />
                                                    </div>
                                                </div>
                                                <div  className="mb-4">
                                                    <div  className="custom-radio-button">
                                                        <Input  type="radio" id="Mail2" name="radio-group2" />
                                                        <label for="Mail2" className='text-[#000000]'>¿Este precio sólo durará un tiempo en especifico?</label>
                                                    </div>
                                                </div>
                                                <div  className="pt-4 w-full">
                                                    <div  className="mb-4">
                                                        <label>Ubicación</label>
                                                        <Input type="text" className="mt-[9px] h-[66px] block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-[#9ca3af] border border-gray-200 " placeholder="Donde te encuentras?"/>
                                                    </div>
                                                </div>
                                                <div  className="md:w-1/2 pr-4 sm:w-full mt-4 mb-4">
                                                    <div  className="mb-4">
                                                        <label>Capicaded</label>
                                                        <Input  type="text" className="mt-2 h-[50px] block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200  " placeholder="No de asistentes que puedes atender" />
                                                    </div>
                                                </div>
                                                <div  className="md:w-1/2 pl-4 sm:w-full mt-4 mb-4">
                                                    <div  className="mb-4">
                                                        <label>Tiempeo de servicio</label>
                                                        <Input type="text" className="mt-2 h-[50px] block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200  " placeholder="Por cuantas horas ofreces tus servicios" />
                                                    </div>
                                                </div>
                                                <div  className="md:w-1/2 pr-4 sm:w-full mt-4 mb-4">
                                                    <div  className="mb-4">
                                                        <label>Tipos de eventos</label>
                                                        <Input  type="text" className="mt-2 h-[50px] block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200  " placeholder="Que eventos se pueden realizer?" />
                                                    </div>
                                                </div>
                                                <div  className="md:w-1/2 pl-4 sm:w-full mt-4 mb-4">
                                                    <div  className="mb-4">
                                                        <label>Haste que horario operas</label>
                                                        <Input type="text" className="mt-2 h-[50px] block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200  " placeholder="Horario de servicio" />
                                                    </div>
                                                </div>
                                                <div  className="mb-2 mt-4">
                                                    <label>Tus Redes Sociales <i  className="fa-solid fa-lock"></i> <small  className="color-default">Solo con Premium & Pro</small></label>
                                                    <p>Coloca el link de tus redes sociales</p>
                                                </div>
                                                <div  className="flex flex-wrap mt-4 mb-4 w-full">
                                                    <div  className="md:w-1/2 pr-4 sm:w-full">
                                                    <Dropdowns toggletext={toggletext} firstitem="Escoge una red" customclassName="locationdtoggle"/>
                                                        
                                                    </div>
                                                    <div  className="md:w-1/2 pl-4 sm:w-full">
                                                        <div  className="mb-4">
                                                            <Input type="text"  className="block h-[66px] appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 mt-[9px]" placeholder="Pega tu link aquí"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="mb-6 flex flex-wrap w-full">
                                                    <div  className="mb-2 mt-4">
                                                        <label>Tu Sitio Web <i  className="fa-solid fa-lock"></i> <small  className="color-default">Solo con PRO</small></label>
                                                        <p>Coloca el link de tus redes sociales</p>
                                                    </div>
                                                    <SoloCornProPopup />
                                                </div>
                                                <div  className="mb-4 w-full flex justify-center">
                                                    <MyLink href="/myaccount/your-ads/selectaguy/selectcategory"  className="btn-red-outline me-0 mt-2 lg:me-2">Atrás</MyLink>
                                                    <MyLink href="/myaccount/your-ads/selectaguy/selectcategory/locationswithdate"  className="btn-red mt-2 ms-0 lg:ms-2">Siguiente</MyLink>
                                                </div>
                                            </div>
                                        </form>
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