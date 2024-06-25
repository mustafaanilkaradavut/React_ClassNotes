import React, { memo } from "react";

const HeaderMemo = memo(({ user }) => {
  console.log("Render => HeaderMemo Component");
  return (
    <div className="text-center text-success">
      HeaderMemo Component : {user}
    </div>
  );
});

export default HeaderMemo;

//__ memo kullanımı biz işlem yaptığımızda headerMemo tekrar render olmaz. Çünkü memo ile sarmarlayarak,
//__ eğer kendisiyle alakalı bir işlem yoksa işlem uygulanmaz.

//? memo component bazında kullanılır.
