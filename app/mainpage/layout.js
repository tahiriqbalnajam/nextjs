import Nav from '../components/Nav';
import MyaccountFooter from '../components/MyaccountFooter';
import '../css/style.css';
import Image from 'next/image'
import ExploraDropdownMenu from '@/components/ExploraToggleMenu.js';
import Popupforms from '@/components/PopupForm.js';

export default function DashboardLayout({ children }) {
    return <body className=''>
        <header className="main-header main-header2 py-4 px-4 shadow bg-colorBlack" style={{ background: 'transparent' }}>
            <nav>
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-16">
                <div className="flex items-center justify-between flex-grow">
                    <div className="flex-shrink-0">
                    <h1 className="text-lg font-semibold tracking-widest text-white uppercase">
                        <a href="#">
                        <Image src="/images/logo.png" alt="" height='28' width='205' />
                        </a>
                    </h1>
                    </div>
                    <div className="hidden lg:block">
                    <div className="flex items-center">
                        <a href="#"
                        className="flex flex-row items-center px-3 py-2 ml-4 text-base font-medium text-gray-300 rounded-md hover:text-colorRed focus:outline-none">
                        <span className="ml-2"> INGRESA</span>
                        </a>
                        <div className="relative">
                        <ExploraDropdownMenu />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="flex items-center ml-4 md:ml-6">
                    <div className="header-btn text-[#ffffff] ">
                        <Popupforms />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        </header>
        {children}<MyaccountFooter /></body>;
}