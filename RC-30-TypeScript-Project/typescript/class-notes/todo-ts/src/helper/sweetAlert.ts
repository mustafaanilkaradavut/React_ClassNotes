import Swal from "sweetalert2";

//__ enum olarak tanımladık çünkü bizden ne bekliyorsa yanlış yazmayalım diye.
export enum SweetIcon {
  WARNING = "warning",
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
  QUESTION = "question",
}
export enum SweetPosition {
  TopStart = "top-start",
  Center = "center",
  BottomEnd = "bottom-end",
}

export const notify = (msg: string, icon: SweetIcon, position: SweetPosition) =>
  Swal.fire({
    title: "M.A.K. Todo App!",
    text: msg,
    icon: icon,
    timer: 3000,
    timerProgressBar: true,
    position: position,
  });
