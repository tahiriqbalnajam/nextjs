import Image from 'next/image';
import Link from 'next/link';
import Input from './TextInput.js'
import SubmitButton from './SubmitButton.js'


export default function Nav() {
	
    return (
		<body className='font-Ubuntufont'>
			
            <section  className="lg:py-20 py-5 bg-white">
		<div  className="container mx-auto px-4 max-w-[92%]">
			<h3  className="text-4xl mb-16">Mi <span  className="font-bold">Cuenta</span></h3>
			<div  className="flex flex-wrap">
				<aside  className="w-1/5">
					<div  className="border-r-2">
						<ul  className="py-20">
							<li><a href="#"  className="active flex mb-10 text-2xl border-r-4 border-red-600"><span  className="w-10 mr-2 inline-block"><Image src="/images/info.png" width='50' height='50' alt=""  className="text-center" /></span> Info</a></li>
							<li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/favo.png" alt=""  className="text-center" width='50' height='50' /></span> Favoritos</a></li>
							<li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/quotes.png" alt=""  className="text-center" width='50' height='50' /></span> Cotizaciones</a></li>
							<li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/your-ads.png" alt=""  className="text-center" width='50' height='50' /></span> Tus Anuncios</a></li>
							<li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/pro.png" alt=""  className="text-center" width='50' height='50' /></span> PRO</a></li>
							<li><a href="#"  className="flex mb-10 text-2xl"><span  className="w-10 mr-2 inline-block"><Image src="/images/your-profile.png" alt=""  className="text-center" width='50' height='50' /></span> Tu Perfil</a></li>
							<li><a href="#"  className="flex mb-10 text-2xl text-colorRed signoff">Cerrar Sesión</a></li>
						</ul>
					</div>
				 </aside>

				
				<div  className="w-4/5 pl-28">
					<div  className="flex items-center justify-between mb-16">
						<div  className="flex items-center">
							<div  className="relative w-40 border-2 rounded-full border-red-600">
								<Image src="/images/user-profile-img.png" alt="" width='156' height='156' />
								<Image src="/images/edit.png" alt="" width='35' height='35'  className="absolute bottom-0 right-0 cursor-pointer" />
							</div>
							<div  className="ml-14">
								<h3  className="text-3xl mb-3">Bernardo Gonzalez</h3>
								<h3  className="text-xl font-bold">CDMX</h3>
							</div>
						</div>
						<a href="#"  className="text-xl text-colorRed inline-block">Contraseña</a>
					</div>
					<form action="">
						<div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-24">
							<div  className="mb-12">
								<label for="name"  className="block mb-1 text-lg font-bold text-colorBlack">Name</label>
								<Input placeholder="Bernie"/>
								
							</div>
							<div  className="mb-12">
								<label for="name"  className="block mb-1 text-lg font-bold text-colorBlack">Name</label>
								<Input placeholder="Bernie"/>
							</div>
							<div  className="mb-12">
								<label for="name"  className="block mb-1 text-lg font-bold text-colorBlack">Name</label>
								<Input placeholder="Bernie"/>
							</div>
							<div  className="mb-12">
								<label for="name"  className="block mb-1 text-lg font-bold text-colorBlack">Name</label>
								<Input placeholder="Bernie"/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	        </section>


	<footer className="footer-1 bg-footerGray pt-8 sm:pt-20 pb-2">
		<div className="container mx-auto px-4 max-w-[92%]">
			<div className="sm:flex sm:flex-wrap sm:-mx-6 md:py-4">
				<div className="px-6 sm:w-1/2 md:w-1/4 xl:w-1/4">
					<Image src="/images/logo.png" height='28' width='205'  alt="" />
					<p className="mt-6 mb-4 text-white text-lg">Síguenos</p>
					<div className="flex sm:justify-center xl:justify-start">
						<a href="#" className="w-12 h-11 text-2xl rounded text-center py-2 text-colorBlack bg-white hover:text-white hover:bg-blue-600">
							<i className="fa-brands fa-facebook-f"></i>
						</a>
						<a href="#" className="w-12 h-11 text-2xl rounded text-center py-2 ml-4 text-colorBlack bg-white hover:text-white hover:bg-blue-400">
							<i className="fa-brands fa-instagram"></i>
						</a>
						<a href="#" className="w-12 h-11 text-2xl rounded text-center py-2 ml-4 text-colorBlack bg-white hover:text-white hover:bg-red-600">
							<i className="fa-brands fa-soundcloud"></i>
						</a>
						<a href="#" className="w-12 h-11 text-2xl rounded text-center py-2 ml-4 text-colorBlack bg-white hover:text-white hover:bg-red-600">
							<i className="fa-brands fa-youtube"></i>
						</a>
					</div>
				</div>
				<div className="px-6 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
					<h5 className="text-xl font-bold mb-6 text-white">Compañía</h5>
					<ul className="list-none footer-links">
						<li className="mb-4">
							<a href="#" className="text-white hover:text-colorRed text-xl">Nosotros </a>
						</li>
						<li className="mb-4">
							<a href="#" className="text-white hover:text-colorRed text-xl">Anúnciate</a>
						</li>
						<li className="mb-4">
							<a href="#"
								className="text-white hover:text-colorRed text-xl">Contacto</a>
						</li>
					</ul>
				</div>
				<div className="px-6 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
					<h5 className="text-xl font-bold mb-6 text-white">Soporte</h5>
					<ul className="list-none footer-links">
						<li className="mb-4">
							<a href="#" className="text-white hover:text-colorRed text-xl">FAQS</a>
						</li>
						<li className="mb-4">
							<a href="#" className="text-white hover:text-colorRed text-xl">Cómo funciona</a>
						</li>
						<li className="mb-4">
							<a href="#"
								className="text-white hover:text-colorRed text-xl">Ayuda</a>
						</li>
					</ul>
				</div>
				<div className="px-6 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
					<h5 className="text-xl font-bold mb-6 text-white">Newsletter</h5>
					<p className="text-white text-md">Suscríbete a nuestro boletín y entérate primero de nuestras novedades y servicios.</p>
					<div className="mt-12 relative">
						<Input placeholder='Email' className='bg-fieldGray h-14 p-3 w-full border-none focus:outline-none focus:shadow-outline'/>
						<span className="absolute right-4 top-3 text-colorRed"><i className="fa-solid fa-arrow-right"></i></span>
					</div>
				</div>
			</div>

			<div className="my-6 py-6 border-t border-gray-500">
				<p className="text-white text-center">© 2023 One Night Guest | Diseñado por TwoTap Media</p>
			</div>
		</div>
	</footer>
		</body>
    );
}
