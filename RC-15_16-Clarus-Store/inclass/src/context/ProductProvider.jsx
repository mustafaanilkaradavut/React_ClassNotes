import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

//.. 1- contexti oluşturuz.
const ProductContext = createContext();

//__ react hooklarını javascript fonksyionları içerisinde kullanamadığımız için custom hooklara ihtiyaç duyarız.
//? custom hooklar use keywordü ile başlamak zorunda
//* custom hooklar jsx return etmez.
//__ zorunlu değil tüketim yaparken sadece kolaylık sağlıyor.
export const useProductsContext = () => {
  return useContext(ProductContext);
};
//? contexte ihtiyaç duymamızın sebebi detail sayfasına gittikten sonra geri geldiğimizde hem kullanıcının yazdığı query hem de api den gelen sonuçların kaybolmamasıni istememiz.
//__ Ayrıca products sayfasında yapsaydık veri çekme işlemini her sayfa render olduğunda arama olmadığı halde apiye istek atacaktı.

//.. 2- sarmalayıcı componenti oluştur. Saklanan veriler,fonksiyonlar burada tanımlanır ve buradan paylaşılır

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  console.log(products);
  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [search]); //__ search state'i değiştikçe getData fonksiyonu çalışsın

  const values = { products, loading, setSearch, search };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

//__ Context oluşturma nedenlerimiz : detay sayfasına gidip geldiğimizde dataların kaybolmaması. Gidip gelme işlerimde sürekli data çekme işlerimlerinin olmaması için.

export default ProductProvider;
