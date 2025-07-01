import { useState, useRef } from "react";
import "./App.css";
import MusicPlayer from "./components/Musica";
import NotasTarjetas from "./components/Notas";
import Cosas from "./components/Cosas";

function App() {
  const [mostrandoContenido, setMostrandoContenido] = useState(false);
  const [poemaActual, setPoemaActual] = useState(0);
  const audioRef = useRef(null);
  const [mostrarCarta, setMostrarCarta] = useState(false);

  const poemas = [
    {
      titulo: "💜1",
      texto: `Mi negrita, mi bb, mi amor,
late por ti todo mi corazón.
Tu sonrisa me vuelve loco, tu voz me acaricia,
estar a tu lado es pura melodía.🥰

Desde que llegaste, todo va mejor
te amo infinito, con todo mi amor.
Soy tuyo por siempre mi negrita,
con esta nota te expreso todo mi amor 💜`,
    },
    {
      titulo: "💜2",
      texto: `Mi negrita, mi bb, mi niña,
eres mi calma, mi risa, mi vida.
Tus ojitos me guían, tu sonrisa es mi hogar,
a tu lado, nada me va a faltar. 💜🥰

Desde que existes en mi vida, todo tiene color,
te pienso en silencio, te sueño sin parar.
Mi negrita, mi niña , mi amor,
contigo aprendí lo que es amar. 💜`,
    },
    {
      titulo: "💜3",
      texto: `Mi laura, mi niña, mi amor,
eres mi guía, mi sol, mi luz en este mundo.
Tu risa me curó , tu amor me volvió mejor ,
mi corazón contigo siempre se sintió amado. 💜🥰

Cada día contigo es un regalo,
a tu lado el mundo nunca es malo.
Te amo sin parar, sin fin, sin medida,
mi negrita, tú eres quien escribe mi vida. 💜`,
    },
  ];

  const siguientePoema = () => {
    setPoemaActual((prev) => (prev + 1) % poemas.length);
  };

  const iniciar = () => {
    setMostrandoContenido(true);
    audioRef.current.play();
  };

  return (
    <div className="font-sans min-h-screen bg-pink-200">
      {!mostrandoContenido ? (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-500">
            Feliz Día de la Novia 💜
          </h1>
          <p className="mt-4 text-lg text-gray-700">Dale click mi amor 💜</p>
          <button
            onClick={iniciar}
            className="mt-6 bg-pink-300 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition cursor-pointer text-lg"
          >
            Entrar 💕
          </button>
        </div>
      ) : (
        <div className="relative px-4 py-6 max-w-xl mx-auto">
          {/* Botón carta fijo y grande */}
          <button
            onClick={() => setMostrarCarta(true)}
            className="fixed top-4 right-4 bg-white p-4 rounded-full shadow-lg hover:bg-purple-200 transition text-4xl sm:text-5xl"
            title="Ver carta"
            aria-label="Ver carta"
          >
            📩
          </button>

          <div className="flex flex-col items-center justify-center mt-6 gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-600 text-center">
              Feliz Día de la Novia, mi negrita 💜
            </h1>
            <img
              src="/img/snoopy.webp"
              alt="Snoopy"
              className="w-36 sm:w-48 rounded-xl shadow-lg bg-white"
            />
          </div>

          <section className="flex flex-col items-center bg-pink-100 px-4 py-6 mt-8 rounded-lg shadow-md gap-6 text-center">
            {/* Carta animada */}
            {mostrarCarta && (
              <div className="fixed top-20 right-4 bg-white border border-purple-300 shadow-lg p-5 rounded-lg max-w-sm z-50 animate-fade-in">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-purple-600">
                    Mi cartita pa ti mi negrita bella 💜💌
                  </h3>
                  <button
                    onClick={() => setMostrarCarta(false)}
                    className="text-red-500 hover:text-red-700 text-xl"
                    aria-label="Cerrar carta"
                  >
                    ❌
                  </button>
                </div>
                <p className="text-gray-700 text-sm text-justify whitespace-pre-line">
                  Amor, esta es solo una pequeña nota para recordarte cuánto te
                  amo 💜. Eres lo mejor que me ha pasado y cada día contigo es
                  un regalo. Gracias, mi negrita bella. Quiero pasar el resto de
                  mis dias a tu lado, cada dia que paso contigo me hace querer
                  estar a tu lado más aun, cada día mas jodidamente más
                  enamorado y orgulloso de ti. Mi amor te quiero💜💜
                  {"\n\n"}En febrero te probé y desde entonces solo quiero tu
                  boca
                  {"\n"}
                  Mi monólogo interno es tu voz 💜
                  {"\n"}Mi color favorito es tu amor💜
                </p>
              </div>
            )}

            <h2 className="text-2xl font-semibold text-pink-600">
              {poemas[poemaActual].titulo}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line max-w-xl text-justify">
              {" "}
              {poemas[poemaActual].texto}
            </p>
            <button
              onClick={siguientePoema}
              className="bg-purple-500 text-white px-6 py-3 rounded hover:bg-purple-700 transition cursor-pointer text-lg"
            >
              Siguiente poema →
            </button>

            <NotasTarjetas />
          </section>
        </div>
      )}
      <MusicPlayer ref={audioRef} />
      <Cosas />
    </div>
  );
}

export default App;
