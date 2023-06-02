import Image from 'next/image';
import Link from 'next/link';


export default function Nav() {
    return (
		<div className='main-div-header'>
			<header className="main-header inner-header">
				<div className="container-fluid">
				<nav className="navbar navbar-expand-lg">
					<Link className="navbar-brand" href="#">
						<Image src="/images/logo.png" alt="" width="64" height="64" />
					</Link>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" href="#" role="button"
									data-bs-toggle="dropdown" aria-expanded="false">
									EXPLORA
								</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="#">Action</Link></li>
									<li><Link className="dropdown-item" href="#">Another action</Link></li>
									<li><Link className="dropdown-item" href="#">Something else here</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" href="#" role="button"
									data-bs-toggle="dropdown" aria-expanded="false">
									AYUDA
								</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="#">Action</Link></li>
									<li><Link className="dropdown-item" href="#">Another action</Link></li>
									<li><Link className="dropdown-item" href="#">Something else here</Link></li>
								</ul>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="#">COTIZA</Link>
							</li>
						</ul>
					</div>
					<div className="header-profile">
						<div className="profile-box">
							<div className="dropdown">
								<div className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<span><Image src="/images/profile-Image.png" alt="" width="64" height="64" /></span> <p>BERNARDO GONZALEZ</p>  <i className="fa-solid fa-chevron-down"></i>
								</div>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="#">Action</Link></li>
									<li><Link className="dropdown-item" href="#">Another action</Link></li>
									<li><Link className="dropdown-item" href="#">Something else here</Link></li>
								</ul>
							</div>
						</div>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
							aria-expanded="false" aria-label="Toggle navigation">
							<i className="fa-solid fa-bars"></i>
						</button>
					</div>
				</nav>
				</div>
			</header>
			<section className="my-account-wrapp">
				<div className="container-lg">
					<div className="default-heading">
						<h2><span>Mi</span> Cuenta</h2>
					</div>
					<div className="my-account-innaer-wrapp font-Ubuntu font-sans-serif">
						<aside className="left-side-bar">
							<ul className="left-menu">
								<li><a href="#" className="active"><span><Image src="/images/info.png" alt="" width="64" height="64"/></span> Info</a></li>
								<li><a href="#"><span><Image src="/images/favo.png" alt="" width="64" height="64"/></span> Favoritos</a></li>
								<li><a href="#"><span><Image src="/images/quotes.png" alt="" width="64" height="64"/></span> Cotizaciones</a></li>
								<li><a href="#"><span><Image src="/images/your-ads.png" alt="" width="64" height="64"/></span> Tus Anuncios</a></li>
								<li><a href="#"><span><Image src="/images/pro.png" alt="" width="64" height="64"/></span> PRO</a></li>
								<li><a href="#"><span><Image src="/images/your-profile.png" alt="" width="64" height="64"/></span> Tu Perfil</a></li>
								<li><a href="#" className="signoff">Cerrar Sesión</a></li>
							</ul>
						</aside>
						<div className="main-content-area">
							<div className="user-profile-info-wrapp">
								<div className="user-profile-info">
									<div className="user-profile-Image">
										<Image src="/images/user-profile-img.png" alt="" width="64" height="64" />
										<a href="#"><Image src="/images/edit.png" alt="" width="64" height="64" /></a>
									</div>
									<div className="user-profile-name">
										<h3 className="font-bold">Bernardo González</h3>
										<h4 className="font-bold">CDMX</h4>
									</div>
								</div>
								<div className="password-box">
									<a href="#" className="font-bold">Password</a>
								</div>
							</div>
							<form className="default-form">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div className="form-group">
										<label for="" className="font-bold">User</label>
										<input type="text" className="form-control" placeholder="Bernie" />
									</div>
									<div className="form-group">
										<label for="" className="font-bold">Surnames</label>
										<input type="text" className="form-control" placeholder="gonzalez" />
									</div>
									<div className="form-group">
										<label for="" className="font-bold">Cell phone</label>
										<input type="text" className="form-control" placeholder="55 12345678" />
									</div>
									<div className="form-group">
										<label for="" className="font-bold">Names</label>
										<input type="text" className="form-control" placeholder="Bernard" />
									</div>
									<div className="form-group">
										<label for="" className="font-bold">Email</label>
										<input type="text" className="form-control" placeholder="Bernardo@twotapmedia.com" />
									</div>
									<div className="form-group">
										<label for="" className="font-bold">Location</label>
										<input type="text" className="form-control" placeholder="CDMX" />
									</div>
								</div>
								<div className="form-group text-center">
									<a href="#" className="btn-red" data-bs-toggle="modal" data-bs-target="#profileditModal">Save Changes</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>




			<div className="main-content-area">
							<div className="user-profile-info-wrapp">
								<div className="user-profile-info">
									<div className="user-profile-Image">
										<Image src="/images/user-profile-img.png" alt="" width="64" height="64" />
										<a href="#"><Image src="/images/edit.png" alt="" width="64" height="64" /></a>
									</div>
									<div className="user-profile-name">
										<h3 className="font-bold">Bernardo González</h3>
										<h4 className="font-bold">CDMX</h4>
									</div>
								</div>
								<div className="password-box">
									<a href="#" className="font-bold">Password</a>
								</div>
							</div>
							<form className="default-form">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div className="mb-4">
										<label for="" className="font-bold">User</label>
										<input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-slate-100 text-gray-800 border border-gray-200 rounded" placeholder="Bernie" />
									</div>
									<div className="mb-4">
										<label for="" className="font-bold">Surnames</label>
										<input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="gonzalez" />
									</div>
									<div className="mb-4">
										<label for="" className="font-bold">Cell phone</label>
										<input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="55 12345678" />
									</div>
									<div className="mb-4">
										<label for="" className="font-bold">Names</label>
										<input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Bernard" />
									</div>
									<div className="mb-4">
										<label for="" className="font-bold">Email</label>
										<input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Bernardo@twotapmedia.com" />
									</div>
									<div className="mb-4">
										<label for="" className="font-bold">Location</label>
										<input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="CDMX" />
									</div>
								</div>
								<div className="mb-4 text-center">
									<a href="#" className="btn-red" data-bs-toggle="modal" data-bs-target="#profileditModal">Save Changes</a>
								</div>
							</form>
						</div>
		</div>
    );
}
