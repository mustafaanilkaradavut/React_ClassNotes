import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; //?    1. İşlem

const People = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate(); //?   2. İşlem atama yaparız.

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center g-3">
        {people?.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div
              key={id}
              className=" col-sm-12 col-md-6 col-lg-4"
              type="button"
              //? Absolute adressing
              // onClick={() => navigate(`/people/${id}`)}
              //? Relative
              onClick={() => navigate(`${id}`)}>
              {" "}
              {/* //__ kişi click edildiğinde yeni sayfaya gönlendiririz. */}
              {/* //! onClick içerisinde yani JS içerisinde bir component çağıralamaz. O yüzden Link kullanamayız ! */}
              <img className="rounded" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
