import foto1 from "../assets/iamges/js/to do list.PNG";
import foto2 from "../assets/iamges/js/fylo.PNG";
import foto3 from "../assets/iamges/js/stop wacth.PNG";
import foto4 from "../assets/iamges/js/weather.PNG";
import foto5 from "../assets/iamges/js/tic tac.PNG";
export default function Javascript() {
    return (
        <>
        <div
            className="boxes grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
            hidden opacity-0 scale-95 transition-opacity 
            duration-500 ease-in-out "
            id="box_javascript"
            style={{ display: "grid", opacity: 1, transform: "scale(1)" }}
        >
            <article className="relative mt-5">
            <div>
                <img
                className="p-5 bg-subSecondary rounded-lg w-full"
                src={foto1}
                alt="photo"
                />
            </div>
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 opacity- hover:opacity-100 
                    flex justify-around items-center flex-col
                    w-full h-full py-7 bg-subSecondary opacity-0 
                    transition-opacity duration-500 ease-linear
                    "
            >
                <p className="font-bold text-white">To Do App ( Crud )</p>
                <a
                href="https://mahmoud-abdelkarim777.github.io/to-do-app/"
                target="_blank"
                className="p-2 bg-main rounded-lg font-bold hover:bg-white hover:text-black text-white"
                >
                Github Demo
                </a>
            </div>
            </article>
            <article className="relative mt-5">
            <div>
                <img
                className="p-5 bg-subSecondary rounded-lg w-full"
                src={foto2}
                alt="photo"
                />
            </div>
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 opacity- hover:opacity-100 
                    flex justify-around items-center flex-col
                    w-full h-full py-7 bg-subSecondary opacity-0 
                    transition-opacity duration-500 ease-linear
                    "
            >
                <p className="font-bold text-white">landin page</p>
                <a
                href="https://mahmoud-abdelkarim777.github.io/PRODIGY_WD_01/"
                target="_blank"
                className="p-2 bg-main rounded-lg font-bold hover:bg-white hover:text-black text-white"
                >
                Github Demo
                </a>
            </div>
            </article>
            <article className="relative mt-5">
            <div>
                <img
                className="p-5 bg-subSecondary rounded-lg w-full"
                src={foto3}
                alt="photo"
                />
            </div>
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 opacity- hover:opacity-100 
                    flex justify-around items-center flex-col
                    w-full h-full py-7 bg-subSecondary opacity-0 
                    transition-opacity duration-500 ease-linear
                    "
            >
                <p className="font-bold text-white">Stop Watch App</p>
                <a
                href="https://mahmoud-abdelkarim777.github.io/PRODIGY_WD_02/"
                target="_blank"
                className="p-2 bg-main rounded-lg font-bold hover:bg-white hover:text-black text-white"
                >
                Github Demo
                </a>
            </div>
            </article>
            <article className="relative mt-5">
            <div>
                <img
                className="p-5 bg-subSecondary rounded-lg w-full"
                src={foto4}
                alt="photo"
                />
            </div>
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 opacity- hover:opacity-100 
                    flex justify-around items-center flex-col
                    w-full h-full py-7 bg-subSecondary opacity-0 
                    transition-opacity duration-500 ease-linear
                    "
            >
                <p className="font-bold text-white">Weather App</p>
                <a
                href="https://mahmoud-abdelkarim777.github.io/PRODIGY_WD_05/"
                target="_blank"
                className="p-2 bg-main rounded-lg font-bold hover:bg-white hover:text-black text-white"
                >
                Github Demo
                </a>
            </div>
            </article>
            <article className="relative mt-5">
            <div>
                <img
                className="p-5 bg-subSecondary rounded-lg w-full"
                src={foto5}
                alt="photo"
                />
            </div>
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 opacity- hover:opacity-100 
                    flex justify-around items-center flex-col
                    w-full h-full py-7 bg-subSecondary opacity-0 
                    transition-opacity duration-500 ease-linear
                    "
            >
                <p className="font-bold text-white">Tic Tac Toe</p>
                <a
                href="https://mahmoud-abdelkarim777.github.io/PRODIGY_WD_03/"
                target="_blank"
                className="p-2 bg-main rounded-lg font-bold hover:bg-white hover:text-black text-white"
                >
                Github Demo
                </a>
            </div>
            </article>
        </div>
        </>
    );
}
