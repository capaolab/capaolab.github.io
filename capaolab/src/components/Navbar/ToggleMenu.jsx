import React from 'react';

const ToggleMenu = () => {
    return (
        <div className="w-full h-screen capitalize flex flex-col justify-start my-10 gap-5 px-5">
            <a className="text-xl" href="#carousel">Inicio</a>
            <a className="text-xl" href="#participar">Participar</a>
            <a className="text-xl" href="#work">O que fazemos</a>
            <a className="text-xl" href="#equipe">Equipe</a>
        </div>
    );
}

export default ToggleMenu;
