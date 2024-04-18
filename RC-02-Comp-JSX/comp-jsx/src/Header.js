//__ Componantlerin dosya isimleri büyük harfle başlar.

function Header() {
  //?     JS Alanıdır.
  const yazi = "Hello FS16";
  return (
    <header>
      {/* JSX Alanı Yorum Satırıdır. */}
      {/* CSS import edilmese bile burada tanımladığımız class style'ı kullanılır. */}
      <h1 className="par">{yazi}</h1>
    </header>
  );
}

export default Header;
