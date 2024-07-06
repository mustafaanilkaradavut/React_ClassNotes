import { Container } from "@mui/material";
import { Header } from "../components/Header";
import { useState } from "react";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number; // id değeri string ya da number olabilir.
  todo?: string; // Bu alan zorunlu değil optional. Eğer varsa type'ı string.
}
// interface yazarken baş harfi best practice olarak büyük "I" ile başlar.

const Main = () => {
  //   const [todos, setTodos] = useState([] as ITodoType[]); //__ 1. Yol
  //   const { todos, setTodos } = useState<Array<ITodoType>>([]); //__ 2. Yol
  const [todos, setTodos] = useState<ITodoType[]>([]); //.. 3. Yol ve En Yaygın Kullanımı.
  return (
    <Container>
      <Header />
      <button onClick={() => setTodos([{ id: 5, isDone: false, task: "asd" }])}>
        Click
      </button>
    </Container>
  );
};

export default Main;
