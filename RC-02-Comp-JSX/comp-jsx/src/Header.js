//__ Componantlerin dosya isimleri büyük harfle başlar.

function Header() {
  //?     JS Alanıdır.
  const yazi = "Hello FS16";
  return (
    <header>
      {/* JSX Alanı Yorum Satırıdır. */}
      <h1>{yazi}</h1>
    </header>
  );
}

export default Header;
