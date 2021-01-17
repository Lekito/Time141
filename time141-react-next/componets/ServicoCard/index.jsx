import React from 'react';

export default function ServicoCard(props) {
    return(
        <div className="flex-grow bg-white shadow-xl rounded-md border-2 border-grey-300">
            <img className="h-20 " src={props.image} alt={props.subTitulo} />

            <div className="text-xl text-gray-900 font-semibold">
                {props.subTitulo} 
            </div>

            
        </div>
    );
}