import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GrifGrid = ({category}) => {
    // const [images, setImages] = useState([]);

    // // funciona igual que el componentDidMount en los components de clases, en los componentes funcionales se usa useEffect
    // // el segundo argumento (el array) indica que si una dependencia cambia su valor vuelve a ejecutar el useEffect
    // useEffect(() => {
    //     // getGifs(category).then(images => setImages(images));

    //     // la manera corta de retornar el objeto en el then cuando el argumento se pasa al metodo unicamente
    //     getGifs(category).then(setImages);
    // }, [category]);

    // usamos el custom hooks, y renombramos la propiedad "data" como "images"
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    images.map((img) => (
                        // <GifGridItem
                        //     key={img.id}
                        //     img={img}
                        // />

                        // se pueden enviar todos los atributos del objeto como props independientes cada uno de ellos usando el operador spread
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
