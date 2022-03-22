import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase'


const Home = () => {
    const navigate = useNavigate()
    const [roomCode, setRoomCode] = useState('')
    const {user, signInWithGoogle} = useAuth()
    const handleCreateRoom = async() =>{
        if(!user){
            await signInWithGoogle()
        }
        navigate('/rooms/new')
    }

    const handleJoinRoom = async(e: FormEvent) =>{
        e.preventDefault()
        if(roomCode.trim() === ''){
            return
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get()

        if(!roomRef.exists()){
            alert('Room does not exists')
        }
        navigate(`rooms/${roomCode}`)
    }
  return (
    <section id='page-auth'>
    <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
    </aside>
    <main>
        <div className='main-content'>
            <img src={logoImg} alt="Let Me ask" />
            <button className='create-room' onClick={handleCreateRoom} >
                <img src={googleIconImg} alt="Logo do Google" />
                Crie sua sala com Google
            </button>
            <div className='separator'>Ou entre em uma sala</div>
            <form onSubmit={handleJoinRoom}>
                <input 
                type="text" 
                placeholder='Digite o código da sala'
                onChange={e => setRoomCode(e.target.value)}
                value={roomCode}
                />
                <Button type='submit'>
                    Entrar na sala
                </Button>
            </form>

        </div>
    </main>
    </section>
  )
}

export default Home