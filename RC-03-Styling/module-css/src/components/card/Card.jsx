const Card = ({ lang, img }) => {
  return (
    <div>
      <div className="wrapper">
        <h1>{lang}</h1>
      </div>
      <img src="{img}" alt="{lang}" />
    </div>
  );
};

export default Card;
