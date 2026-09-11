import foto1 from '../assets/iamges/bootstrap/dashboard.PNG'
import foto2 from '../assets/iamges/bootstrap/modern.PNG'
export default function Bootstrap() {
  return (
    <>
      <div className="boxes grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
            hidden opacity-0 scale-95 transition-opacity 
            duration-500 ease-in-out " id="box_bootstrap" style={{display: "grid", opacity: 1, transform: "scale(1)"}}>
                <article className="relative mt-5">
                    <div>
                        <img className="p-5 bg-subSecondary rounded-lg w-full" src={foto1} alt="photo"/>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity- hover:opacity-100 
                    flex justify-around items-center flex-col
                    w-full h-full py-7 bg-subSecondary opacity-0 
                    transition-opacity duration-500 ease-linear
                    ">
                        <p className="font-bold text-white">landin page dynamic</p>
                        <a href="https://lawyer-site-ma.netlify.app/" target="_blank" className="p-2 bg-main rounded-lg font-bold hover:bg-white hover:text-black text-white">Github Demo</a>
                    </div>
                </article>
                <article className="relative mt-5">
                    <div>
                        <img className="p-5 bg-subSecondary rounded-lg w-full" src={foto2} alt="photo"/>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity- hover:opacity-100 
                    flex justify-around items-center flex-col
                    w-full h-full py-7 bg-subSecondary opacity-0 
                    transition-opacity duration-500 ease-linear
                    ">
                        <p className="font-bold text-white">modern page</p>
                        <a href="https://modern-landing-page1.netlify.app/" target="_blank" className="p-2 bg-main rounded-lg font-bold hover:bg-white hover:text-black text-white">Github Demo</a>
                    </div>
                </article>
            </div>
    </>
  )
}
