import Image from 'next/image'
import Nav from './components/Nav';
import Link from 'next/link'
import ExploraDropdownMenu from '@/components/exploratogglemenu.js';
import Settingtogglemenu from '@/components/settingtogglemenu.js';
import MyaccountFooter from './components/MyaccountFooter';
import Page from './myaccount/mainpage/page.js'
import PopupForm from './components/popupform.js';


export default function Home() {
  return (
    <main>
      <header className="main-header py-4 px-4 shadow bg-colorBlack">
            <nav>
              <div className="container mx-auto">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center justify-between flex-grow">
                    <div className="flex-shrink-0">
                      <h1 className="text-lg font-semibold tracking-widest text-white uppercase">
                        <a href="#">
                          <Image src="/images/logo.png" alt="" height='28' width='205'  />
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
                      <PopupForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
      </header>
      
      <Page />
      <MyaccountFooter />
      
      
    </main>
  )
}
