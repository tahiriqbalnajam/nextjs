import Image from 'next/image';
import Link from 'next/link';
import Input from './TextInput.js'
import InputMail from './MailInput.js'
import SubmitButton from './SubmitButton.js'
import DropdownMenu from './togglemenu.js';
import Settingtogglemenu from './settingtogglemenu.js';
import MyLink from '@/app/components/MyLink.js';

export default function Nav() {
	
    return (
		<header  className="py-2 px-4 shadow bg-colorBlack">
			<nav>
				<div className="container mx-auto">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center justify-between flex-grow">
							<div className="flex-shrink-0">
								<h1 className="text-lg font-semibold tracking-widest text-white uppercase">
									<MyLink href="/">
										<Image src="/images/logo.png" alt="" height='28' width='205'  />
									</MyLink>
								</h1>
							</div>
							<div className="hidden lg:block">
								<div className="flex items-center">
									<a href="#"
										className="flex flex-row items-center px-3 py-2 ml-4 text-base font-medium text-gray-300 rounded-md hover:text-colorRed focus:outline-none">
										<span className="ml-2">Posts</span>
									</a>
									<div className="relative">
										
										<DropdownMenu />
									</div>
								</div>
							</div>
						</div>
						<div className="hidden lg:block">
							<div className="flex items-center ml-4 md:ml-6">
								<Settingtogglemenu /> 
							</div>
						</div>
						<div className="flex -mr-2 lg:hidden">
							<button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
								<svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
									<path className="inline-flex"
										stroke-linecap="round" stroke-linejoin="round"   />
									<path className="hidden" stroke-linecap="round"
										stroke-linejoin="round"   d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="hidden lg:hidden">
					<div className="container px-6 mx-auto">
						<div className="pt-2 pb-3">
							<a href="#"
								className="feather feather-home flex flex-row items-center px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none"
									stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round">
									
									<polyline points="9 22 9 12 15 12 15 22"></polyline>
								</svg>
								<span className="ml-2">Dashboard</span>
							</a>
							<a href="#"
								className="feather feather-file flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none"
									stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round">
									<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
									<polyline points="13 2 13 9 20 9"></polyline>
								</svg>
								<span className="ml-2">Posts</span>
							</a>
							<div className="relative">
								<button className="feather feather-folder flex flex-row items-center w-full px-3 py-2 mt-1 text-base font-medium text-left text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none"
										stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round">
										<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">
										</path>
									</svg>
									<span className="mx-2">Pages</span>
									<svg xmlns="http://www.w3.org/2000/svg"
										className="w-4 h-4 mt-1 transform feather feather-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor"
										stroke-linecap="round" stroke-linejoin="round">
										<polyline points="6 9 12 15 18 9"></polyline>
									</svg>
								</button>
								<div className="px-2 py-2 mt-2 bg-white rounded-md shadow-xs"
									role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
									<a href="#"
										className="flex flex-row items-center px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
										role="menuitem">
										Pages-1
									</a>
									<a href="#"
										className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
										role="menuitem">
										Pages-2
									</a>
									<a href="#"
										className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
										role="menuitem">
										Pages-3
									</a>
								</div>
							</div>
							<a href="#"
								className="feather feather-message-circle flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none"
									stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round">
									<path
										d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
									</path>
								</svg>
								<span className="ml-2">Comments</span>
							</a>
							<div className="relative">
						
							</div>
							<a href="#"
								className="ffeather feather-settings lex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none"
									stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="3"></circle>
									<path
										d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
									</path>
								</svg>
								<span className="ml-2">Settings</span>
							</a>
						</div>
					</div>
					<div className="container px-6 mx-auto">
						<div className="py-4 border-t border-gray-700">
							<button className="flex items-center w-full focus:outline-none">
								<div className="flex items-center w-full text-left">
									<div className="flex-shrink-0">
										<img className="w-10 h-10 rounded-full"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt="" />
									</div>
									<div className="ml-3">
										<div className="text-base font-medium leading-none text-white">Tom Cook</div>
										<div className="mt-1 text-sm font-medium leading-none text-gray-400">tom@example.com</div>
									</div>
								</div>
								<div className="text-white">
									<svg xmlns="http://www.w3.org/2000/svg"
										className="w-4 h-4 mt-1 transform feather feather-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor"
										stroke-linecap="round" stroke-linejoin="round">
										<polyline points="6 9 12 15 18 9"></polyline>
									</svg>
								</div>
							</button>
							<div className="py-2 mt-4 bg-white rounded-md shadow-xs"
								role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
								<a href="#"
									className="flex flex-row items-center px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
									role="menuitem">
									<svg xmlns="http://www.w3.org/2000/svg" className="feather feather-user w-4 h-4" viewBox="0 0 24 24" fill="none"
										stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round">
										<path id="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
									<span className="ml-2">Your Profile</span>
								</a>
								<a href="#"
									className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
									role="menuitem">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 feather feather-settings" viewBox="0 0 24 24" fill="none"
										stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round">
										<circle cx="12" cy="12" r="3"></circle>
										<path
											d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
										</path>
									</svg>
									<span className="ml-2">Settings</span>
								</a>
								<a href="#"
									className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-red-500 rounded-md hover:text-red-700 hover:bg-red-200 focus:outline-none focus:text-red-700 focus:bg-red-200"
									role="menuitem">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 feather feather-log-out" viewBox="0 0 24 24" fill="none"
										stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round">
										<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
										<polyline points="16 17 21 12 16 7"></polyline>
										<line x1="21" y1="12" x2="9" y2="12"></line>
									</svg>
									<span className="ml-2">Sign out</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
    );
}
