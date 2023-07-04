import Image from 'next/image';
import LeftNav from '../../components/LeftNav'
import '../../css/style.css';

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
            <div  className="w-4/5 pl-40">
                               
                <div className="main-content-areas">
					<div className="favoritos-wrapp mt-5 pt-5">
						<div className="flex flex-wrap ">
							<div className="md:w-1/3 pr-4 sm:w-full pl-4">
								<div className="features-box">
									<div className="img-box">
										<Image src="/images/services1-1.jpg" alt="" height='352' width='262' />
										<a href="#" className="img-icon"><i className="fa-regular fa-heart"></i></a>
										<div className="overlay-img">
											<a href="#"><i className="fa-solid fa-plus"></i></a>
										</div>
									</div>
									<h4>Propiedades</h4>
									<p>75 Listados</p>
								</div>
							</div>
							<div className="md:w-1/3 pl-4 sm:w-full pr-4">
								<div className="features-box">
									<div className="img-box">
										<Image src="/images/services2-2.jpg" alt="" height='352' width='262' />
										<a href="#" className="img-icon"><i className="fa-regular fa-heart"></i></a>
										<div className="overlay-img">
											<a href="#"><i className="fa-solid fa-plus"></i></a>
										</div>
									</div>
									<h4>Propiedades</h4>
									<p>75 Listados</p>
								</div>
							</div>
							<div className="md:w-1/3 pl-4 sm:w-full pr-4 ">
								<div className="features-box">
									<div className="img-box">
										<Image src="/images/services3-3.jpg" alt="" height='352' width='262' />
										<a href="#" className="img-icon"><i className="fa-regular fa-heart"></i></a>
										<div className="overlay-img">
											<a href="#"><i className="fa-solid fa-plus"></i></a>
										</div>
									</div>
									<h4>Propiedades</h4>
									<p>75 Listados</p>
								</div>
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