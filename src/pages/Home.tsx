import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'


const Home = () => {
    const navigate = useNavigate()
    const navigateToNewRoom = () =>{
        navigate('/rooms/new')
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
            <button className='create-room' onClick={navigateToNewRoom} >
                <img src={googleIconImg} alt="Logo do Google" />
                Crie sua sala com Google
            </button>
            <div className='separator'>Ou entre em uma sala</div>
            <form>
                <input 
                type="text" 
                placeholder='Digite o código da sala'
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