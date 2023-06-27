"use client";
import Image from 'next/image';
import Link from 'next/link';
import MyLink from '@/components/mylink';
import { usePathname } from 'next/navigation';
import classNames from "classnames";
import '../css/style.css';

export default function Nav() {
    const currentPath = usePathname();
    return (
        <ul className="py-20 left-menu">
                <li>
                    <MyLink href="/myaccount/info" className={classNames('flex text-2xl', {'border-r-[5px] border-[#FF5A60] bordernav visited':currentPath.includes('myaccount/info')})}>
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/info.png" width='50' height='50' alt="" className="text-center" />
                        </span>
                        Info
                    </MyLink>
                </li>
         
                <li>
                    <MyLink href="/myaccount/favourites" className={classNames('flex text-2xl', {'border-r-[5px] border-[#FF5A60] bordernav visited':currentPath.includes('myaccount/favourites')})}>
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/favo.png" width='50' height='50' alt="" className="text-center" />
                        </span>
                        Favoritos
                    </MyLink>
                </li>

                <li>
                    <MyLink href="/myaccount/quote" className={classNames('flex text-2xl', {'border-r-[5px] border-[#FF5A60] bordernav visited':currentPath.includes('myaccount/quote')})}>
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/quotes.png" width='50' height='50' alt="" className="text-center" />
                        </span>
                        Cotizaciones
                    </MyLink>
                </li>

                <li>
                    <MyLink href="/myaccount/your-ads" className={classNames('flex text-2xl', {'border-r-[5px] border-[#FF5A60] bordernav visited':currentPath.includes('myaccount/your-ads')})}>
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/your-ads.png" alt="" className="text-center" width='50' height='50' />
                        </span>
                        Tus Anuncios
                    </MyLink>
                </li>

                <li>
                    <MyLink href="/myaccount/pro" className={classNames('flex text-2xl', {'border-r-[5px] border-[#FF5A60] bordernav visited':currentPath.includes('myaccount/pro')})}>
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/pro.png" alt="" className="text-center" width='50' height='50' />
                        </span>
                        PRO
                    </MyLink>
                </li>

                <li>
                    <MyLink href="/myaccount/yourprofile" className={classNames('flex text-2xl', {'border-r-[5px] border-[#FF5A60] bordernav visited':currentPath.includes('myaccount/yourprofile')})}>
                        <span className="w-10 mr-2 inline-block">
                            <Image src="/images/your-profile.png" alt="" className="text-center" width='50' height='50' />
                        </span>
                        Tu Perfil
                    </MyLink>
                </li>

            <li>
                <a href="#" className="flex text-2xl text-colorRed signoff">Cerrar Sesión</a>
            </li>
        </ul>
    );
}
