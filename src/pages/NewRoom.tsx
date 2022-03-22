import Button from '../components/Button'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import '../styles/auth.scss'

import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const NewRoom = () => {
  const {user, signInWithGoogle} = useAuth()
  
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
            <h2>Criar uma nova sala</h2>
            <form>
                <input 
                type="text" 
                placeholder='Nome da sala'
                />
                <Button type='submit'>
                    Criar sala
                </Button>
            </form>
            <p>
                Quer entrar em uma sala existente? <Link to='/'>Clique aqui</Link>
            </p>
        </div>
    </main>
    </section>
  )
}

export default NewRoom