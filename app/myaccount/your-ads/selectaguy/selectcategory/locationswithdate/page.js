import Image from 'next/image';
import Link from 'next/link';
import LeftNav from '@/components/LeftNav'
import Input from '@/components/TextInput'
import TextArea from '@/components/TextArea'

import '../../../../../css/style.css'

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
                            <div class="main-content-area w-full">
                                <div class="your-ads">
                                    <div class="default-heading">
                                        <h2>Locación / <span>Terraza</span></h2>
                                    </div>
                                    <div class="add-ads-images">
                                        <form class="default-form border-fields field-icon-red">
                                            <h5>Agrega fotos a tu anuncio</h5>
                                            <p>Puedes arrastrar las imágenes para ordenarlas</p>
                                            <div class="flex flex-wrap  mb-5">
                                                <div class="md:w-1/4 pr-4 sm:w-1/2">
                                                    <div class="add-image-upload active  flex justify-center">
                                                        <label for="file-input">
                                                            <Image height='50' width='50' src="/images/img-upload.png" alt="" />
                                                        </label>
                                                        <div className='hidden '>
                                                            <Input id="file-input" type="file"  />
                                                        </div>
                                                        <p>Agrega o arrastra fotos aquí</p>
                                                    </div>
                                                </div>
                                                <div class="md:w-1/4 pr-4 pl-4 sm:w-1/2 ">
                                                    <div class="add-image-upload  flex justify-center">
                                                        <label for="file-input">
                                                            <Image height='50' width='50' src="/images/img-upload.png" alt="" />
                                                        </label>
                                                        <div className='hidden '>
                                                            <Input id="file-input" type="file"  />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="md:w-1/4 pr-4 pl-4 sm:w-1/2">
                                                    <div class="add-image-upload flex justify-center">
                                                        <label for="file-input">
                                                            <Image height='50' width='50' src="/images/img-upload.png" alt="" />
                                                        </label>
                                                        <div className='hidden '>
                                                            <Input id="file-input" type="file"  />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="md:w-1/4 pl-4 sm:w-1/2">
                                                    <div class="add-image-upload flex justify-center">
                                                        <label for="file-input">
                                                            <Image height='50' width='50' src="/images/img-upload.png" alt="" />
                                                        </label>
                                                        <div className='hidden '>
                                                            <Input id="file-input" type="file"  />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <Input  type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Escribe un titulo para tu anuncio"/>
                                            </div>
                                            <div class="mb-4">
                                                <TextArea rows='6' cols='4' placeholder="La descripción perfecta para mostrar lo que ofreces" className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' />
                                            </div>
                                            <div class="mb-4">
                                                <div class="custom-radio-button">
                                                    <Input type="radio" id="Mail" name="radio-group" />
                                                    <label for="Mail">Tu servicio o producto se vende o renta por unidades</label>
                                                </div>
                                            </div>
                                            <div class="flex flex-wrap mt-4 mb-4">
                                                <div class="md:w-1/2 pr-4 pl-4 sm:w-full mt-4 mb-4">
                                                    <div class="mb-4">
                                                        <label>Precio</label>
                                                        <Input  type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="$0.00" />
                                                    </div>
                                                </div>
                                                <div class="md:w-1/2 pr-4 pl-4 sm:w-full mt-4 mb-4">
                                                    <div class="mb-4">
                                                        <label>Precio de Temporada</label>
                                                        <Input  type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Porcentaje %" />
                                                        <p>Coloca el signo de más (+) o menos (-) de acuerdo al porcentaje que quieras aumentar o reducir en tu precio habitual.</p>
                                                    </div>
                                                </div>
                                                <div class="mb-4">
                                                    <div class="custom-radio-button">
                                                        <Input  type="radio" id="Mail2" name="radio-group2" />
                                                        <label for="Mail2">¿Este precio sólo durará un tiempo en especifico?</label>
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap mt-6">
                                                    <div class="md:w-1/2 pr-4 cols-m-12">
                                                        <label>Desde</label>
                                                        <div class="flex flex-wrap arrow-sm">
                                                            <div class="md:w-1/3 sm:w-full pr-4">
                                                                <div class="mb-4">
                                                                    <div class="field-icon">
                                                                        <select class="pl-4 text-[20px] block h-[70px] w-[100px] appearance-none py-1 px-2 mb-1 leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                                                                            <option value="">1</option>
                                                                            <option value="">2</option>
                                                                            <option value="">3</option>
                                                                            <option value="">4</option>
                                                                            <option value="">5</option>
                                                                            <option value="">6</option>
                                                                            <option value="">7</option>
                                                                            <option value="">8</option>
                                                                        </select>
                                                                        <span><i class="fa-solid fa-chevron-down relative right-[-5px]"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="md:w-1/3 sm:w-full pr-4 pl-4">
                                                                <div class="mb-4">
                                                                    <div class="field-icon">
                                                                        <select class="pl-4 text-[20px] block h-[70px] w-[100px] appearance-none py-1 px-2 mb-1 leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                                                                            <option value="">Mes</option>
                                                                            <option value="">Mes</option>
                                                                            <option value="">Mes</option>
                                                                        </select>
                                                                        <span><i class="fa-solid fa-chevron-down relative right-[-15px]"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="md:w-1/3 sm:w-full pr-4 pl-4">
                                                                <div class="mb-4">
                                                                    <div class="field-icon">
                                                                        <select class="pl-4 text-[20px] block h-[70px] w-[100px] appearance-none py-1 px-2 mb-1 leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                                                                            <option value="">Año</option>
                                                                            <option value="">Año</option>
                                                                            <option value="">Año</option>
                                                                        </select>
                                                                        <span><i class="fa-solid fa-chevron-down relative right-[-15px]"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="md:w-1/2 pr-4 pl-4 cols-m-12">
                                                    <label>Hasta</label>
                                                    <div class="flex flex-wrap  arrow-sm">
                                                        <div class="md:w-1/3 sm:w-full pr-4 ">
                                                            <div class="mb-4">
                                                                <div class="field-icon">
                                                                <select class="pl-4 text-[20px] block h-[70px] w-[100px] appearance-none py-1 px-2 mb-1 leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                                                                        <option value="">Día</option>
                                                                        <option value="">Día</option>
                                                                        <option value="">Día</option>
                                                                    </select>
                                                                    <span><i class="fa-solid fa-chevron-down relative right-[-10px]"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="md:w-1/3 sm:w-full pr-4 pl-4">
                                                            <div class="mb-4">
                                                                <div class="field-icon">
                                                                <select class="pl-4 text-[20px] block h-[70px] w-[100px] appearance-none py-1 px-2 mb-1 leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                                                                        <option value="">Mes</option>
                                                                        <option value="">Mes</option>
                                                                        <option value="">Mes</option>
                                                                    </select>
                                                                    <span><i class="fa-solid fa-chevron-down relative right-[-26px]"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="md:w-1/3 sm:w-full pr-4 pl-4">
                                                            <div class="mb-4">
                                                                <div class="field-icon">
                                                                <select class="pl-4 text-[20px] block h-[70px] w-[100px] appearance-none py-1 px-2 mb-1 leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                                                                        <option value="">Año</option>
                                                                        <option value="">Año</option>
                                                                        <option value="">Año</option>
                                                                    </select>
                                                                    <span><i class="fa-solid fa-chevron-down relative right-[-26px]"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="flex flex-wrap pt-4">
                                                    <div class="md:w-1/2 pr-4 sm:w-full">
                                                        <div class="mb-4">
                                                            <label>Ubicación</label>
                                                            <div class="field-icon">
                                                                <select class="h-[64px] block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                                                                    <option value="">País</option>
                                                                    <option value="">País</option>
                                                                    <option value="">País</option>
                                                                </select>
                                                                <span><i class="fa-solid fa-chevron-down"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="md:w-1/2 pr-4 pl-4 sm:w-full">
                                                        <div class="mb-4">
                                                            <label>Máximo de reservaciones por día</label>
                                                            <Input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="0"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-2 mt-4">
                                                    <label>Tus Redes Sociales <i class="fa-solid fa-lock"></i> <small class="color-default">Solo con Premium & Pro</small></label>
                                                    <p>Coloca el link de tus redes sociales</p>
                                                </div>
                                                <div class="flex flex-wrap mt-4 mb-4 w-full">
                                                    <div class="md:w-1/2 pr-4 sm:w-full">
                                                        <div class="mb-4">
                                                            <div class="field-icon">
                                                                <select class="h-[64px] block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                                                                    <option value="">Escoge una red</option>
                                                                    <option value="">Escoge una red</option>
                                                                    <option value="">Escoge una red</option>
                                                                </select>
                                                                <span><i class="fa-solid fa-chevron-down"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="md:w-1/2 pr-4 pl-4 sm:w-full">
                                                        <div class="mb-4">
                                                            <Input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Pega tu link aquí"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-6 mylove flex flex-wrap w-full">
                                                    <div class="mb-2 mt-4">
                                                        <label>Tu Sitio Web <i class="fa-solid fa-lock"></i> <small class="color-default">Solo con PRO</small></label>
                                                        <p>Coloca el link de tus redes sociales</p>
                                                    </div>
                                                    <Input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Pega tu link aquí" />
                                                </div>
                                                <div class="mb-4 w-full flex justify-center">
                                                    <Link href="/myaccount/your-ads/selectaguy/selectcategory" class="btn-red-outline me-0 mt-2 lg:me-2">Atrás</Link>
                                                    <Link href="/myaccount/your-ads/selectaguy/selectcategory/locationswithdate/packages" class="btn-red mt-2 ms-0 lg:ms-2">Siguiente</Link>
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