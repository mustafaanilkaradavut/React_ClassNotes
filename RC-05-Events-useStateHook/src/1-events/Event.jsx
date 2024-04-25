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
  const message = "Have a nice day FS16";
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
    </div>
  );
};

export default Event;
