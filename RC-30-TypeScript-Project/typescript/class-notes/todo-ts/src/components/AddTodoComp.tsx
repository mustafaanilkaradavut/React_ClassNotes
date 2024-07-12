import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import React, { useState } from "react";

const AddTodoComp = ({
  addTodo,
}: {
  addTodo: (task: string) => Promise<void>;
}) => {
  const [task, setTask] = useState(""); //? Type Inference
  // const [task, setTask] = useState(""); //__ Her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.

  const handleClick = () => {
    console.log(task);
    addTodo(task);
    setTask(""); //__ Console yazdırdıktan sonra inputu silmek için.
  };

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: { xs: "flex-start", sm: "center" },
        m: { xs: 1, sm: "auto" },
        height: { xs: "120px", sm: "80px" },
      }}>
      <TextField
        id="outlined-basic"
        label="New Todo"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        inputProps={{ maxLength: 40 }}
      />
      <Button
        variant="contained"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
        endIcon={<SaveIcon />}
        onClick={handleClick}
        disabled={!task.trim()}>
        {/* task.trim'de trim ekleme sebebimiz boşlukları dahil etmemesi ve save tuşunun yazı yok veya boşluk varken çalışmaması. */}
        Save Todo
      </Button>
    </Box>
  );
};

export default AddTodoComp;
