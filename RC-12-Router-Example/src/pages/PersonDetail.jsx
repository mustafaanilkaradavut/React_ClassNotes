import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
//__ useParams personalDetail kısmındaki componentte id'yi yakalar ve döndürür.
import NotFound from "./NotFound";
import spinner from "../img/Spinner-2.gif";

const PersonDetail = () => {
  const [person, setPerson] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  //__ Sayfa'ya atılan isteğin yüklenmesi uzun sürdüğü vakit, loading kısmında veri yüklenene kadar göstereceğimiz resim.

  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id);
  const getPerson = () => {
    setLoading(true);
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          setLoading(false);
          throw new Error("User can not be found");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false); //__ İsteğimiz başarılı veya başarısız olsa dahil işlem bittiğinde loading görselinin bitmesi.
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);

  //? Conditional rendering

  if (loading) {
    return (
      <div className="text-center">
        <img src={spinner} alt="" />
      </div>
    );
  } else if (error) {
    return <NotFound />;
  } else {
    return (
      <div className="container text-center mt-4">
        <img className="rounded" src={person?.avatar} />

        <h6>
          {person?.first_name} {person?.last_name}
        </h6>
        <p>{person?.email}</p>
        <div>
          <button className="btn btn-danger" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="btn btn-success" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
