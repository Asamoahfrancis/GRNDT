import React from "react";
import Image from "next/image";
const Trustedcustomers = () => {
  return (
    <div className="bg-black mt-20 text-white px-10 py-4">
      <p className="text-[30px]  text-center">
        Our Porfolio of Trusted Customers
      </p>
      <section className="grid grid-cols-7   py-5 place-items-center">
        <Image
          src="/KNVAS.png"
          width={134}
          height={60}
          alt="Picture of the author"
        />
        <Image
          src="/invactor.png"
          width={136}
          height={80}
          alt="Picture of the author"
        />
        <Image
          src="/mireku.png"
          width={139}
          height={84}
          alt="Picture of the author"
        />
        <Image
          src="/maroon.png"
          width={144}
          height={88}
          alt="Picture of the author"
        />
        <Image
          src="/buk.png"
          width={136}
          height={82}
          alt="Picture of the author"
        />
        <Image
          src="/DFK.png"
          width={172}
          height={104}
          alt="Picture of the author"
        />
        <Image
          src="/Tema.png"
          width={138}
          height={84}
          alt="Picture of the author"
        />
      </section>
    </div>
  );
};

export default Trustedcustomers;
