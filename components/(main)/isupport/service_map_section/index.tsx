import React from "react";

const ServiceMapComponent = () => {
  return (
      <iframe
      className="w-full h-75 md:h-100 overflow-hidden rounded-2xl shadow-sm"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8593.763851623029!2d49.9175404201459!3d40.40100023839918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030630066481b55%3A0xbc08e54c0ab75c59!2sEnerji-N%20MMC!5e0!3m2!1str!2saz!4v1791458067387!5m2!1str!2saz"
        loading="lazy"
      ></iframe>
  );
};

export default ServiceMapComponent;
