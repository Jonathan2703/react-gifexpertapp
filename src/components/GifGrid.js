import React, {  } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridltem } from './GifGridltem';

export const GifGrid = ({ category }) => {
    const {data:imagenes,loading}=useFetchGifs(category);
    return (
        <>
            <h3 className='card animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='card animate__animated animate__flash'>loading</p>}
            <div className='card-grid'>
                {
                    imagenes.map((img) => (
                        <GifGridltem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
