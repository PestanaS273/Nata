"use client";

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

interface Heart {
  id: number;
  left: string;
  size: number;
  duration: number;
}

export default function Home() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts,
        {
          id: Math.random(),
          left: Math.random() * 100 + "vw",
          size: Math.random() * 30 + 10,
          duration: Math.random() * 5 + 3
        }
      ]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setFullYear(targetDate.getFullYear());
    targetDate.setMonth(1);
    targetDate.setDate(15);
    targetDate.setHours(19, 30, 0, 0);

    const updateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft("¡Es hora de la cena!");
      }
    };

    const timer = setInterval(updateTimeLeft, 1000);
    updateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-pink-100">
      {/* Imágenes de fondo */}
      <div className=" top-0 left-0 w-full h-full flex flex-wrap justify-center items-center">
        <Image src="/3BB3E6CC-9881-451E-A026-0422CE4B0592.JPG" width={150} height={150} alt="Decoración" className="absolute top-10 left-10 opacity-50 rotate-6" />
        <Image src="/7b9077ed-e6e0-4cc5-9507-f1402710e217.JPG" width={150} height={150} alt="Decoración" className="absolute top-20 right-10 opacity-50 -rotate-6" />
      </div>
      {/* Corazones animados */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: "-100vh" }}
          transition={{ duration: heart.duration, ease: "linear" }}
          className="absolute text-red-400 text-4xl"
          style={{ left: heart.left, fontSize: heart.size, top: "90vh" }}
        >
          ❤️
        </motion.div>
      ))}

      <div className='h-screen w-full flex flex-col items-center justify-center text-center relative z-10'>
      {/* Mensaje principal */}
      <h1 className="text-6xl font-bold text-red-600 drop-shadow-md z-10">
        Pensabas que no? 
      </h1>
      <p className="mt-4 text-2xl text-gray-700 z-10">
        Obvio que quiero invitarte a que pasemos un San Valentin especial ❤️
      </p>

      {/* Botón para ver invitación */}
      <Link href="#invitacion">
        <Button className="mt-10 bg-red-500 hover:bg-red-600 text-white py-3 px-6 text-lg rounded-lg shadow-lg z-10">
          Ver invitación
        </Button>
      </Link>
      </div>

      {/* Sección de la invitación */}
      <div id="invitacion" className="w-full min-h-screen flex flex-col justify-center items-center text-center p-6 bg-black mt-16 rounded-lg shadow-lg">
        <h2 className="text-3xl font-cursive text-white">
          Me encantaria que tengamos una cena especial de San Valentín el 15 de febrero a las 19:30. ❤️
        </h2>
        <p className="text-xl text-gray-500 mt-4">Tiempo restante: {timeLeft}</p>
        <p className="text-xl text-gray-700 mt-10"> Sigue bajando...</p>
      </div>



      {/* Álbum de fotos */}
      <div className="w-full bg-gray-300 py-10 flex flex-wrap justify-center gap-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-red-500 w-full text-center mb-6">Vamos a añadir mas fotos acá... ❤️</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <Image src="/3BB3E6CC-9881-451E-A026-0422CE4B0592.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg rotate-2" />
          <Image src="/7b9077ed-e6e0-4cc5-9507-f1402710e217.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg -rotate-2" />
          <Image src="/949ead19-0fdb-4167-9c56-3a4fc9c30674.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg rotate-2" />
          <Image src="/9789c420-9707-44f0-9486-dda5775cdb73.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg -rotate-2" />

          <Image src="/a0db860c-d64e-4ec0-b975-c9595ee11aac.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg rotate-2" />
          <Image src="/ce989347-7ecf-441e-b979-1d75179254f8.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg -rotate-2" />
          <Image src="/d7399c5b-b4a9-4b55-aae0-45b2ce466b64.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg rotate-2" />
          <Image src="/d7182890-5012-43b5-a0db-63d37f905eb4.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg -rotate-2" />

          <Image src="/f03e0fce-4b23-4a38-b2a7-efbe71171d8e.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg rotate-2" />
          <Image src="/IMG_0269.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg -rotate-2" />
          <Image src="/IMG_2280.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg rotate-2" />
          <Image src="/IMG_2671.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg -rotate-2" />

          <Image src="/IMG_2770.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg rotate-2" />
          <Image src="/IMG_2942.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg -rotate-2" />
          <Image src="/IMG_3182.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg rotate-2" />
          <Image src="/IMG_4286.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg -rotate-2" />

          <Image src="/IMG_5010.JPG" width={200} height={200} alt="Recuerdo" className="rounded-lg shadow-lg rotate-2" />
          
        </div>
      </div>
    </div>
  );
}