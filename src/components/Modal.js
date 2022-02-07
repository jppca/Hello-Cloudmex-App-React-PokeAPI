
import { useState } from "react";

export function Modal({ pokemon }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button className="content-card__btn hover:text-white hover:bg-green-500" onClick={() => setShowModal(true)}>Más imágenes</button>
            {showModal ? (
                <div>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="w-auto my-6 max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-xl">
                                        IMÁGENES
                                    </span>
                                </div>
                                <div className="p-10 flex-20 w-80 place-content-center">
                                    <img className="content-card__img sm:mx-18 sm:h-24" src={pokemon.sprites.front_shiny} alt="" />
                                    <img className="content-card__img sm:mx-18 sm:h-24" src={pokemon.sprites.back_shiny} alt="" />
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
            ) : null}
        </div>
    );
}