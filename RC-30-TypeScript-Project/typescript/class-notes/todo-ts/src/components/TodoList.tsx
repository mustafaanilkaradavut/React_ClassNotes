import { Grid, Typography } from "@mui/material";
import TodoListItem from "./TodoListItem";
import React from "react";
import "./style.css";

interface ITodoList extends ITodoListFn {
  todos: ITodoType[];
}

//!      3.YOL React.FC Kullanımı

//__ React.FC bir functional component'i ifade eder. Bileşenin işlevsel bir yapıda olduğunu ve React tarafından kullanılabileceğini belirtir.
//?  React.FC, bileşenlere props tanımlamak ve JSX döndürmek için kullanılan bir  genel tip (generic type) olarak kullanılır. Bu tip bileşenin alacağı props'ların tipini belirtmek için kullanılır. Props'ların tipini belirtmek, bileşenin daha güvenli ve hatasız olmasını sağlar.
//..  Ancan React.FC kullanmak zorunlu değildir. Fonksiyonel bir bileşen, sadece fonksiyon olarakda tanımlanabilir ve React.FC kullanmadan da props alabilir ve JSX döndürebilir.
//__ FC, "FunctionComponent" kelimelerinin kısatlmasadır.

const TodoList: React.FC<ITodoList> = ({ todos, deleteTodo, toggleTodo }) => {
  const progressTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        mt: 3,
      }}>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-progress"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "0.5rem",
        }}>
        <Typography
          className="title"
          color="secondary"
          align="center"
          variant="h4">
          InProgress Todos
        </Typography>
        {progressTodos.length ? (
          progressTodos.map((todo) => (
            <TodoListItem
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              todo={todo}
              key={todo.id}
            />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No InProgress Todos!
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-completed"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid green",
          borderRadius: "0.5rem",
        }}>
        <Typography
          className="title"
          sx={{ color: "green" }}
          align="center"
          variant="h4">
          Completed Todos
        </Typography>
        {completedTodos.length ? (
          completedTodos.map((todo) => (
            <TodoListItem
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              todo={todo}
              key={todo.id}
            />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Completed Todos!
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
export default TodoList;
