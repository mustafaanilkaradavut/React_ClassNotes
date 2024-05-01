export const appointmentData = [
  {
    id: 1,
    customer: "Timmy Donaldson",
    day: new Date(),
    process: true,
    artist: "Yasmin Vermeda",
  },
  {
    id: 2,
    customer: "Bobbie Martel",
    day: new Date(),
    process: false,
    artist: "Paye Allien",
  },
  {
    id: 3,
    customer: "Elisa Daniel",
    day: new Date(),
    process: true,
    artist: "Sammy Goohr",
  },
];

export const artistData = [
  {
    id: 1,
    name: "Sammy Gooh",
    area: "Tribal Tattoos",
    img: "./img/imgm1.webp",
  },
  {
    id: 2,
    name: "Paye Allien",
    area: "Realistic Tattoos",
    img: "./img/imgw1.webp",
  },
  {
    id: 3,
    name: "Barry Helenski",
    area: "Geometric Tattoos",
    img: "./img/imgm2.webp",
  },
  {
    id: 4,
    name: "Igor Tatarinovski",
    area: "3D Tattoos",
    img: "./img/imgm3.webp",
  },
  {
    id: 5,
    name: "Yasmin Vermada",
    area: "Anime Tattoos",
    img: "./img/imgw3.webp",
  },
  {
    id: 6,
    name: "Elizabeth O'Neil",
    area: "Traditional Tattoos",
    img: "./img/imgw2.webp",
  },
  {
    id: 7,
    name: "Gregor Mountain",
    area: "Minimalist Tattoos",
    img: "./img/imgm4.webp",
  },
  {
    id: 8,
    name: "Fatima Fesele",
    area: "Japanese Tattoos",
    img: "./img/imgw4.webp",
  },
];

//__ Buradaki dataları public dosyasına koyma sebebimiz img gibi static verilerimizi aşağıdaki gibi yazabiliriz.
//__ Aynı zamanda projemizi build dediğimiz zaman, public'de olan dosyalarımız image klasörümüz src klasörleri ile aynı yere gelecektir.
//.. Burada named export yapılmıştır. Çünkü sayfa üzerinde 2 tane export ögesi bulunur. Default bir kere yapılır.
