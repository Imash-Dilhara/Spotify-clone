import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];

  return (
    <>
        <Navbar/>
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
            <img className='w-84 rounded' src={albumData.image} alt="" />
            <div className="flex flex-col">
                <p>PLay List</p>
                <h2 className='text-5xl mb-4 font-bold md:text-7xl'>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='mt-1'>
                    <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                    <b>Spotify</b>
                </p>
            </div>
        </div>
    </>
  )
}

export default DisplayAlbum
