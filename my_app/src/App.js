import React from 'react'



import Sura_All_Fatiha from './Sura/Sura_All_Fatiha'
import Sura_All_Bakara from "./Sura/Sura_All_Bakara"

export default function App() {
  return (<>

    <div className="title">
        <h2>পবিত্র আল-কুরআন</h2>
        <h4>বাংলা উচ্চারণ, সহজ বাংলা অনুবাদ</h4>
    </div>

    <div className="Suci_Portro">
        <button className='button'> ১। সূরা আল ফাতিহা</button>
        <button className='button'> ২। সূরা আল বাকারা</button>
        <button className='button'> ৩। সূরা আলে ইমরান</button>
        <button className='button'> ৪। সূরা আন নিসা</button>
        <button className='button'> ৫। সূরা আল মায়িদা</button>
        <button className='button'> ৬। সূরা আল আন'আম</button>
        <button className='button'> ৭। সূরা আল আ'রাফ</button>
        <button className='button'> ৮। সূরা আল আনফাল</button>
        <button className='button'> ৯। সূরা আত তাওবা</button>
        <button className='button'> ১০। সূরা ইউনুস</button>

    </div>
  
  
    <Sura_All_Fatiha />
    <Sura_All_Bakara />
  
  
  </>)
}
