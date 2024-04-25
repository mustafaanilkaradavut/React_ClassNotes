const Event = () => {
  //.. Event handler fonksiyonunun tanımlanması.

  const handlePress = (e) => {
    alert("It's approved !");
    console.log(e);
    console.log("ID:", e.target.id);
    console.log("NAME:", e.target.name);
  };

  function handleExit(msg) {
    console.log(msg);
  }

  const handleMsgChange = function () {
    message = "Hello friends of REACT";
  };

  let message = "Have a nice day FS16"; //? Local değişken. Burada'da ilk çalıştığı değer yazılır. İçeride değer değiştirildiğinde bu DOM'a yansımaz.

  //? Bir componentin return kısmı 3 farkl yöntem ile yeniden render edilir .
  //__  1-  Herhangi bir state değişirse,
  //__  2-  Props değişirse,
  //__  3-  Refresh force edilirse (tercih edilen bir durum olmaz.)
  return (
    <div>
      <h1>Events</h1>
      {/* Event */}
      <button onClick={handlePress} id="btn" name="my-button">
        Press
      </button>

      {/* Eğer bir event fonksiyonun parametresi olması gerekiyorsa bu fonksiyon bir arrow fonks. tarafından çağrılmalıdır. Aksi takdirde event fonksiyonu, event gerçekleşmeden çağrılır. */}
      <button onClick={() => alert("Deleting")}>Delete</button>

      <button onClick={() => handleExit(message)}>Exit</button>

      <button onClick={handleMsgChange}>Change</button>

      <p>{message}</p>
    </div>
  );
};

export default Event;

//.. "message" console'da güncellendiğini ancak DOM'da güncellenmediğini gördük.
//* Bunun sebebi REACT'ın aksi belirtilmediği sürece elementleri static olarak kabul etmesinden kaynaklanır.

//* React bunu DOM işlemlerini minimize etmk için yapmaktadır.
//* REACT'a hangi elementlerin interaktif olduğunu belirtmek gerekir.
//__ React'a elementlerin interaktif olduğunu belirtmek için state'ler kullanılır.
//__ State, elementlerin değişiklik durumlarını tutan nesnelerdir.

//? React Js'de stateleri kullanmak için 2 ayrı Component yapısı bulunmaktadır.
//__    1.  Hooks   (Functional Components).
//__    2.  Statefull Classes   (Class Components).

//* Biz şu ana kadar uygulamalarımızda Fonksiyonel Component'leri kullandık.
//* Yaygın kullanım Fonksiyonel Component'lerdir.
