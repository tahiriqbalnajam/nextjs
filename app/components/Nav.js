import Image from 'next/image';
import Link from 'next/link';


export default function Nav() {
    return (
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
								<span><Image src="/images/profile-img.png" alt="" width="64" height="64" /></span> <p>BERNARDO GONZALEZ</p>  <i className="fa-solid fa-chevron-down"></i>
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
    );
}
