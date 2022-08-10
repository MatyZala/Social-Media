import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {


    const [modalOpened , setModalOpened] = useState(false)
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Tú Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem' 
            onClick={()=> setModalOpened(true)}
            />
            <ProfileModal modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            />
            </div>
        </div>

        <div className="info">
            <span>
                <b>Estado </b>
            </span>
            <span>Casado</span>
        </div>
        <div className="info">
            <span>
                <b>Vive en </b>
            </span>
            <span>Cordoba</span>
        </div>
        <div className="info">
            <span>
                <b>Trabaja en </b>
            </span>
            <span>Full-Stack Developer</span>
        </div>

        <button className='button logout-button'>Cerrar sesión</button>

    </div>
  )
}

export default InfoCard