//? REACT burayı global olarak tanımlar. Buraya verilen değer ve ögeler diğer sayfalarda kullanılabilir olur.
//? Bu dosyayı biz kendimiz açarız.

type AddFn = (task: string) => Promise<void>;
type ToggleFn = (todo: ITodoType) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number; // id değeri string ya da number olabilir.
  todo?: string; // Bu alan zorunlu değil optional. Eğer varsa type'ı string.
}

interface ITodoListFn {
  deleteTodo: DeleteFn;
  toggleTodo: ToggleFn;
}
