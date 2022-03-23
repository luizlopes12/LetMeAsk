
import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import logoImg from '../assets/images/logo.svg'
import Button from '../components/Button'
import RoomCode from '../components/RoomCode'
import '../styles/room.scss'
import { database } from '../services/firebase'
import Question from '../components/Question'
import useRoom from '../hooks/useRoom'

type RoomParams = {
    id: string;
}

const AdminRoom = () => {
    // const { user } = useAuth()
    const params = useParams<RoomParams>()
    const roomId = params.id
    const { questions, title} = useRoom(roomId)

  return (
    <section id='page-room'>
        <header>
            <div className="content">
                <img src={logoImg} alt="Let me ask" />
                <div>
                <RoomCode code={`${roomId}`}/>
                <Button isOutlined>Encerrar sala</Button>
                </div>
            </div>
        </header>
        <main>
            <div className="room-title">
                <h1>Sala {title}</h1>
                {questions.length > 0 &&
                    <span>{questions.length} Pergunta{questions.length > 1 ? 's':''}</span>
                } 
            </div>

            <div className="question-list">
            {questions.map((question)=>{
                return(
                    <Question 
                    key={question.id}
                    content={question.content}
                    author={question.author}
                    />
                )
            })}
            </div>
        </main>
    </section>
  )
}

export default AdminRoom