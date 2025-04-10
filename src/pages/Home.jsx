import React from "react";

const Home = () => {
  return (
    <>
      <div className="h-dvh flex flex-col justify-center items-center">
        <div className="max-w-[633px] w-full flex flex-col justify-center items-center gap-y-4 text-white text-center">
          <h1 className="text-4xl font-bold">
            Assalomu alaykum, Men <br />
            <span className="text-[#39965F]">Akbarov Azizbek</span>man
          </h1>
          <p className="text-[#ffffffb3] font-normal text-lg">
            Veb dasturchi va dizayner sifatida natijaga yo'naltirilgan ishchi.
            Veb-saytlar va veb-ilovalarni yaratish va boshqarish orqali umumiy
            mahsulot muvaffaqiyatiga erishish maqsadimdir.
          </p>
          <button className="py-2 px-11 rounded-lg bg-[#39965F] text-white font-normal text-lg cursor-pointer">
            Loyihalar
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
