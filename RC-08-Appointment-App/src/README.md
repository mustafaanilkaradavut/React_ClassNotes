# Appointment App

# Kullanılan Paketler

- bootstrap and react-boostrap => https://react-bootstrap.netlify.app/
- react-icons => https://react-icons.github.io/react-icons/
  react-icons ücretsiz olan iconları bir araya toplayarak oluşturulmuş bir icon kütüphanesidir. Component düzeyinde iconların kullanımını sağlar. Kurulumu ve kullanımı oldukça basittir.

# Lifting State Up

React geliştiricilerinin bilmesi gereken yaygın bir kalıptır. Durumunuzu yönetmek için daha karmaşık (ve çoğu zaman gereksiz) kalıplardan kaçınmanıza yardımcı olur.

#### React Lifting State Up Nedir?

- React Lifting State Up, birden fazla component tarafından paylaşılan state'i, en yakın ortak ancestor component'e taşıma işlemidir. Bu, component'ler arasında state'i tutarlı ve organize bir şekilde yönetmeye yardımcı olur.

#### Neden Kullanılır?

- Birden fazla component tarafından aynı state'in kullanılması gerektiğinde
- State'in birden fazla component tarafından güncellenmesi gerektiğinde
- Component'leri daha bağımsız ve tekrar kullanılabilir hale getirmek için

React da veri akışı her zaman tek yönlüdür. Yukarıdan aşağıya. Sibling componentler arası veri akışı yoktur. Bu nedenle eğer aynı state e birden fazla componentte ihtiyaç duyuluyorsa veya statein hem parent componentten hem de child componentten yönetilmesi gerekiyorsa bu durumda Lifitng State Up konseptine ihtiyaç duyulur.

- Bu tarz durumlarda ilgili state ortak parente taşınarak orada tanımlanır ve oradan dağıtımı gerçekleştirilir. Setter metodunu da childlara props yoluyla ulaştırarak statein ilgili childlar tarafından güncellenmesi sağlanır. Böylelikle aslında react da veri akışının yönü değişmiş olur. Yani doğal olmayan yollardan aşağıdan yukarıya, kardeşler arası veri akışı sağlamış oluyoruz.

**Kullanırken tabiki de dikkatli olmak gerekir. Stateleri yukarı taşımanın renderları artıracağını unutmamalıyız.**

# Crypto: randomUUID() method

Yerleşik olarak bulunan(tarayıcı ortamında çalışır) bu metod random olarak unique identifier oluşturur. Local veriler oluştururken id değeri için kullanılabilir. Böylelikle 3rd party kütüphanelere ihtiyacı ortadan kaldırır uuid gibi.

- https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
-

# serve

- https://www.npmjs.com/package/serve
- build klasörünü görüntülemeye yarayan paket.
