import Button from "../../components/Button";
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import { NewRoomStyles } from "./styled";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";

const NewRoom = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [newRoom, setNewRoom] = useState("");

  const handleCreateRoom = (e: FormEvent) => {
    e.preventDefault();
    if (newRoom.trim() === "") {
      return;
    }
    const roomRef = database.ref("rooms");
    const firebaseRoom = roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });
    navigate(`/rooms/${firebaseRoom.key}`);
  };
  return (
    <NewRoomStyles>
    <section id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Let Me ask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(e) => setNewRoom(e.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </section>
    </NewRoomStyles>
  );
};

export default NewRoom;
