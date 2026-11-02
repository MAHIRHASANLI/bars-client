import React from "react";

const InfoComponent = ({ store, placeUrl }:{ store: any; placeUrl: string }) => {
    const link = "font-semibold text-[#0071e3] no-underline hover:underline ";

  return (
    <div>
      {" "}
      <h3 className="mt-1 text-lg font-semibold">{store.name}</h3>
     < span className="text-sm text-gray-500">{store.district}</span>
      <div className="mt-2 space-y-1.5 text-sm ">
        <p>
          Ünvan:{" "}
          <a href={placeUrl} target="_blank" rel="noreferrer" className={link}>
            {store.address}
          </a>
        </p>
        <p>
          Telefon nömrəsi:{" "}
          <a href={`tel:${store.phones.replace(/\s/g, "")}`} className={link}>
            {store.phones}
          </a>
        </p>
        <p>Saat: {store.hours}</p>
      </div>
    </div>
  );
};

export default InfoComponent;
