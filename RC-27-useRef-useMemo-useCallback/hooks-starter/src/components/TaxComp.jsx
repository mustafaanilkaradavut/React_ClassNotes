import React, { memo } from "react";

const TaxComp = ({ taxData }) => {
  console.log("Render => TaxData Component");
  console.log(taxData);
  return <div>TaxComp</div>;
};

export default memo(TaxComp);

//__ memo'nun diğer kullanımı component'i export kısmında sarmalamaktır.
