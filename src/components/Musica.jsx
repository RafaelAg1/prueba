import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const canciones = [
  {
    titulo: "Muchas Caricias - Dellafuente, Maka, Nano Cortés",
    archivo: "/music/muchas-caricias.mp3",
  },
  {
    titulo: "Te como la cara - Dellafuente, Maka",
    archivo: "/music/te-como-la-cara.mp3",
  },
  {
    titulo: "No vendo humo - Dellafuente",
    archivo: "/music/no-vendo-humo.mp3",
  },
  {
    titulo: "Cuenta Conmigo - Cruz Cafuné",
    archivo: "/music/cuenta-conmigo.mp3",
  },
  {
    titulo: "Deseandote - Frankie Ruiz",
    archivo: "/music/deseandote.mp3",
  },
  {
    titulo: "Be my baby - The Ronettes",
    archivo: "/music/be-my-baby.mp3",
  },
];

export default function MusicPlayer() {
  const [indice, setIndice] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [volumen, setVolumen] = useState(0.5); // volumen inicial a 50%
  const audioRef = useRef(null);

  // Actualizar volumen en el audio cuando cambie el estado 'volumen'
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volumen;
    }
  }, [volumen]);

  const reproducir = () => {
    audioRef.current.play();
    setReproduciendo(true);
  };

  const pausar = () => {
    audioRef.current.pause();
    setReproduciendo(false);
  };

  const siguiente = () => {
    const nuevo = (indice + 1) % canciones.length;
    setIndice(nuevo);
    setReproduciendo(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const anterior = () => {
    const nuevo = (indice - 1 + canciones.length) % canciones.length;
    setIndice(nuevo);
    setReproduciendo(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const manejarVolumen = (e) => {
    setVolumen(parseFloat(e.target.value));
  };

  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-xl rounded-xl px-4 py-3 flex items-center gap-4 border border-pink-300">
      <audio
        ref={audioRef}
        src={canciones[indice].archivo}
        onEnded={siguiente}
      />
      <button onClick={anterior} title="Anterior">
        <FaBackward className="text-pink-500 text-xl" />
      </button>
      <button onClick={reproduciendo ? pausar : reproducir} title="Play/Pausa">
        {reproduciendo ? (
          <FaPause className="text-pink-500 text-xl" />
        ) : (
          <FaPlay className="text-pink-500 text-xl" />
        )}
      </button>
      <button onClick={siguiente} title="Siguiente">
        <FaForward className="text-pink-500 text-xl" />
      </button>

      <span className="ml-2 text-sm text-gray-700 font-semibold max-w-xs truncate">
        {canciones[indice].titulo}
      </span>

      {/* Slider de volumen */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volumen}
        onChange={manejarVolumen}
        title="Volumen"
        className="w-24 slider-morado"
      />
    </div>
  );
}
