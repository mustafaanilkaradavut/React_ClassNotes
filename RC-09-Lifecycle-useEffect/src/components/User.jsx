import { useState, useEffect } from "react";

const User = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    dob: "",
    picture: "",
    city: "",
    cell: "",
  });

  const getUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    setUserData(data.results[0]); //__ getUser güncellemiş oluruz.
  };

  //?         componentDidMount + componentWillUnmount
  useEffect(() => {
    //* bu kısım ilk render sonrası bir kere çalışır.
    const timerID = setInterval(getUser, 5000); //__ 5 saniye'de bir bize yeni bir veri getirmesi.
    getUser();

    //?        componentWillUnmount
    return () => {
      //?* Bu kısım da component DOM'Dan kaldırıldığında bir kere çalışır.
      console.log("Timer iptal edildi.");
      clearInterval(timerID); //__ Uygulama iptali sonrası otomatik veri akışının arka planda akışını durdurur.
    };
  }, []); //?             depedency array

  return (
    <div className="">
      <img className="rounded-circle m-4" src={userData.picture.large} alt="" />
      <p>Hi, My Name is</p>
      <h2>{userData.name.first + " " + userData.name.last}</h2>
      <h4>{userData.email}</h4>
      <h5>{userData.dob.date}</h5>
      <h4>{userData.city}</h4>
      <h6>{userData.cell}</h6>

      <button className="btn btn-warning" onClick={getUser}>
        New User
      </button>
    </div>
  );
};

export default User;
