"use client";
import Image from 'next/image';
import Link from 'next/link';
import Input from './TextInput.js';
import InputMail from './MailInput.js';
import SubmitButton from './SubmitButton.js';
import DropdownMenu from './togglemenu.js';
import Settingtogglemenu from './settingtogglemenu.js';
import MyLink from '@/components/mylink';
import { usePathname } from 'next/navigation';


export default function Nav() {
    const currentPath = usePathname();
    console.log(currentPath);
    return (
        <ul className="py-20">
            {currentPath === '/myaccount/info' ? (
                <li>
                    <MyLink href="/myaccount/info" className="active flex mb-10 text-2xl border-r-4 border-red-600 visited">
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/info.png" width='50' height='50' alt="" className="text-center" />
                        </span>
                        Info
                    </MyLink>
                </li>
            ) : (
                <li>
                    <MyLink href="/myaccount/info" className="active flex mb-10 text-2xl border-r-4 border-red-600  ">
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/info.png" width='50' height='50' alt="" className="text-center" />
                        </span>
                        Info
                    </MyLink>
                </li>
            )}

            {currentPath === '/myaccount/favourites' ? (
                <li>
                    <MyLink href="/myaccount/favourites" className="active flex mb-10 text-2xl visited">
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/favo.png" width='50' height='50' alt="" className="text-center" />
                        </span>
                        Favoritos
                    </MyLink>
                </li>
            ) : (
                <li>
                    <MyLink href="/myaccount/favourites" className="active flex mb-10 text-2xl  ">
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/favo.png" width='50' height='50' alt="" className="text-center" />
                        </span>
                        Favoritos
                    </MyLink>
                </li>
            )}

            {currentPath === '/myaccount/quote' ? (
                <li>
                    <MyLink href="/myaccount/quote" className="active flex mb-10 text-2xl visited">
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/quotes.png" width='50' height='50' alt="" className="text-center" />
                        </span>
                        Cotizaciones
                    </MyLink>
                </li>
            ) : (
                <li>
                    <MyLink href="/myaccount/quote" className="active flex mb-10 text-2xl  ">
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/quotes.png" width='50' height='50' alt="" className="text-center" />
                        </span>
                        Cotizaciones
                    </MyLink>
                </li>
            )}

            {currentPath === '/myaccount/your-ads' ? (
                <li>
                    <MyLink href="/myaccount/your-ads" className="active flex mb-10 text-2xl visited">
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/your-ads.png" alt="" className="text-center" width='50' height='50' />
                        </span>
                        Tus Anuncios
                    </MyLink>
                </li>
            ) : (
                <li>
                    <MyLink href="/myaccount/your-ads" className="active flex mb-10 text-2xl  ">
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/your-ads.png" alt="" className="text-center" width='50' height='50' />
                        </span>
                        Tus Anuncios
                    </MyLink>
                </li>
            )}

            {currentPath === '/myaccount/pro' ? (
                <li>
                    <MyLink href="/myaccount/pro" className="active flex mb-10 text-2xl visited">
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/pro.png" alt="" className="text-center" width='50' height='50' />
                        </span>
                        PRO
                    </MyLink>
                </li>
            ) : (
                <li>
                    <MyLink href="/myaccount/pro" className="active flex mb-10 text-2xl  ">
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/pro.png" alt="" className="text-center" width='50' height='50' />
                        </span>
                        PRO
                    </MyLink>
                </li>
            )}

            {currentPath === '/myaccount/yourprofile' ? (
                <li>
                    <MyLink href="/myaccount/yourprofile" className="active flex mb-10 text-2xl visited">
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/your-profile.png" alt="" className="text-center" width='50' height='50' />
                        </span>
                        Tu Perfil
                    </MyLink>
                </li>
            ) : (
                <li>
                    <MyLink href="/myaccount/yourprofile" className="active flex mb-10 text-2xl">
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/your-profile.png" alt="" className="text-center" width='50' height='50' />
                        </span>
                        Tu Perfil
                    </MyLink>
                </li>
            )}

            <li>
                <a href="#" className="flex mb-10 text-2xl text-colorRed signoff">Cerrar Sesión</a>
            </li>
        </ul>
    );
}
