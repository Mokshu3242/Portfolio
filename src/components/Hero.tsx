// src\components\Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6 sm:text-left sm:items-start">
      <h1 className="text-4xl font-bold text-black mb-4">
        Hi, I'm Mokshad Sankhe
      </h1>
      <p className="text-lg text-gray-600 max-w-md mb-6">
        AI & ML Enthusiast | Web Developer | Building modern web experiences
      </p>
      <div className="home_img"></div>
    </section>
  );
}
