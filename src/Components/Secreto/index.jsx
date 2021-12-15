import React from 'react';
import candado from '../../Assets/candadoAbierto.webp';

const Secreto = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                textAlign: 'center'
            }}
        >
            <img src = {candado} alt="candado"
                style={{
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </div>
    )
}

export default Secreto
