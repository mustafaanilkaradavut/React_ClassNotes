import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/instructors">Instructors</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

//__ Buradaki etiketler a etiketi ile kullanırsak sayfa sürekli reflesh olur. Bu bizim istemediğimiz bir durumdur.
//__ Sayfanın reflesh olmaması ve hızlı aksiyon için <NavLink> </NavLink> kullanırız.
//__ Server'dan Client'a çekerek hızlı bir şekilde surfing yaparız.

//__ Link ve NavLink arasındaki fark ise NavLink mevcut bağlantıya "active" adına bir class verir. Buda bizim ilgili bağlantı ile alakalı css kodları yazmamızı sağlar.

export default Nav;
