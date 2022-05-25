import {useContext} from 'react'
import './perfil.css'
import {SesionContext} from '../../Context/SesionContext'
export default function Perfil(){
    const {datas} = useContext(SesionContext) 
  //  let {image,nombre,apellido} = JSON.parse(datas)
     return <div className='container-perfil'>
        <div className='container-img'>
            <img src={datas.image} alt={datas.nombre} />
        </div>
        <div className='container-nombre'>
            <h4>{datas.nombre } {datas.apellido}</h4>
        </div>
    </div> 
    
}