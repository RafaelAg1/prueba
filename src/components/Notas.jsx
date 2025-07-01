import { useState } from "react";
const notas = [
  {
    titulo: "Nota 1",
    texto: `Amor intenté escribirte un poema pero es q no se me da bien así q entonces mejor te
 escribo un nota
Mi vida te amo, cada día q hablo contigo me demuestras lo mucho q me amas, lo mucho
 q me valoras
 cada te quiero no lo olvidaré jamás, mi madre me dijo hoy mientras
 comíamos, necesito conocer ya a tu novia y yo
 No tengo dudas amor de q me quiero casar contigo y quiero tener hijos contigo, te voy a
 apoyar en todo en la vida, eres el amor de mi vida y lo mejor q me ha pasado jamás.
 Llevo ya una semana preparando tu regalo de cumpleaños y creo sinceramente q te va a
 encantar, mi amor encima hoy nos pusimos la estrellita los dos, aunque creas q es poco
 para mi me es 💜💜💜💜💜💜💜💜💜
 Lo mejor de mi vida mi negrita
 Le ganas a todas amor a todas
 Tienes todo lo q soñé y siempre quise
 Hablando de soñar hoy soñé contigo, aunq era un sueño q. estábamos los dos en la
 cama tirados super cansados y acurrucados viendo evangelion juntos un poco random
 pero q cuando me desperté casi me pongo a llorar porque no quería q se
 acabase
 Te amo mi vida, te quiero
 eres la mejor novia, eres perfecta, cada vez te quiero más y más enamorado de ti
 estoy`,
  },
  {
    titulo: "Nota 2",
    texto: `Mi negrita hermosa, otro día más que más me enamoro de ti, otro día más que quiero q
 seas tú esa persona q está a mi lado, la persona con la q voy a compartir el resto de mi
 vida, Amor eres la mejor novia del mundo, la niña más hermosa del mundo, cada vez q
 escucho tu voz cuando me envías un audio tendrías q ver como se me ilumina una
 sonrisa, cuando me lanzas un besito o cuando me dices un te quiero se me paraliza el
 tiempo y mi corazón palpita, es que eres todo lo que
 siempre quise, la persona q más
 amo en esta vida, desde q llegaste a mi vida, soy más feliz, cuando me das las buenas
 noches y los buenos días soy el niño más feliz del mundo
 Aunque cuando te vas a dormir me pongo triste me pongo a leer nuestras
 conversaciones y a ver tus fotitos que tengo, a veces me pongo con el libro que te estoy
 escribiendo y otras veces pues te escribo notitas como esta
 Amor, te quiero, mi novia le gana a cualquiera, eres la mejor, la más hermosa y bella del
 universo, del mundo mundial, y te mereces todo en esta vida, a mi lado no te faltará
 nada, Te amo cariño
 te amo mi negra hermosa, te quiero`,
  },
  {
    titulo: "Nota 3",
    texto: `Mi amooor ya mañana vuelvo pa casita y quiero decir q te he echado mucho de
 menossss, no paraba de pensar en tu en cada momento, cada vez q me preguntaban por
 ti se me iluminaban los ojos y me salía una sonrisa de punta a punta.
 Te amo amor, te quiero muchísimo. No hay dudas de q me quiero casar contigo, quiero
 verte crecer a mi lado, hacerte feliz, comer muchos kebabs juntos, regalarte mil flores y
 escribirte un libro(cosa q estoy empezando a hacer) mi madre cada día me preguntaba, y
 tu novia que tal esta, y a mí eso me hace super feliz, tenerte a mi lado me ha mejorado mi
 día a día desde que te conozco
 cada te amo, me saca una sonrisilla que me da la vida, cuando me mandas vídeos de
 besos tienes solamente q ver mi reacción
 Te amo amor💜
 Te amaré siempre💜
 Te quiero💜`,
  },
  {
    titulo: "Nota 4",
    texto: `Mi amooor te quiero muchiiiiiisisisisisisisisimo aunq esté en alicante no paro de pensar
 en ti, cierro los ojos y veo tu carita tan linda con tus ojitos achinados cuando sonríes,
 cada vez q voy a dormir veo tus fotitos y les doy bechitos tumbado en la cama
 Amor de vd algunas noches es q hasta lloro de tenerte, lloro de felicidad de q conseguí
 lo q siempre soñé, una mujer increíble, tan linda, tan graciosa, que es q me da hasta
 ganas de llorar
 Mi madre no me para de preguntar por ti por whatsss y le voy contando como vas y todo
 eso, mi madre te ama casi igual que yo
 Te amo mi amor`,
  },
  {
    titulo: "Nota 5",
    texto: `Mi amor ya estarás dormidita porque tienes q estar cansada de ser la mejor novia del
 mundo además de ser la mujer más hermosa de todas.
 Super linda y super mona mi
 niña
 te amooo amor, descansa bien esta noche que ya queda poquito de la semana para
 acabar y así podrás llamarme todos los días todo el día
 Te quiero un millón amor te amo demasiado, eres lo mejor de mi vida, desde q te
 conozco mi vida ha ido a mejor, me has salvado un año muy malo, me encanta como me
 tratas, la forma en la q me hablas
 eres la mejor niña del mundo amor
 No sabes cuánto me alegro de q lo q me dijiste, q desde q me conoces ha ido a mejor tu
 vida, de verdad me eche a llorar
 Te quiero amor💜`,
  },
  {
    titulo: "Nota 6",
    texto: `Mi amor estarás ya mimiendo y solamente quiero decirte q te amo muchísimo, no me canso
 jamás de quererte y amarte tanto como te amo.
 amor eres mi vida, la niña más hermosa de
 mundo mundiaaaal
 Mi laura te amo demasiado, eres el amor de mi vida y mi persona favorita del mundo, tengo
 ya hasta ganas de casarnos y de vivir juntitos es q me gustas tanto y estoy tan enamorado de ti
 que
 Te quiero mucho mi negrita
 Te amo`,
  },
  {
    titulo: "Nota 7",
    texto: `Mi amooor estarás dormida ya cuando te he escrito esto pero solamente quiero recordarte q me
 siento muy afortunado de tenerte a mi lado, lo mejor q me pasó en la vida de vd, nunca tuve
 esta sensación de estar tan pero tan feliz.
 Me hace muy feliz verte ilusionada por cosas, ver
 como me cuentas tu día, cuando me dices un te quiero me mata.
 Te quiero mucho amor
 muchísimo
 de pequeñito soñé todo lo q tú me das, y es q soy tan pero tan feliz q tendrías q ver cómo se
 emociona hasta mi mami cada vez q me ve reír al teléfono o cuando le hablo de ti.
 Te amo`,
  },
  {
    titulo: "Nota 8",
    texto: `Amoooor hoy tienes examen y te va a salir increíble porq eres la mejor niña, mi bb, mi amor, el
 amor de mi vida.
 Eres lo mejor q me ha pasado jamás la vd, estoy super feliz de haberte conocido y nunca jamás
 sentí algo como esta sensación mi amor.
 Desde chiquitito soñé exactamente una mujer como
 tú. De vd eres perfecta es q
 Amor eres lo mejor de mi vida. Te amo muchísimo de vd💜💜💜 Así q ahora a descansar mi
 amor q te dolerá la espalda del peso de tener el mejor novio del mundo
 De vd amor cada vez q me sonríes q me dices un te amo, mi corazón es q se me para, eres mi
 todo.
 Lo vamos a conseguir amor, quiero casarme contigo y formar una familia, serías la mejor
 madre del mundo`,
  },
  {
    titulo: "Nota 9",
    texto: `mi amooor te quiero mucho
 cada día q pasa más obsesionado y enamorado estoy de ti, me
 tienes super enamorado, soy completamente tuyo.
 No veo futuro sin ti, eres lo único q quiero en mi vida, eres la niña más hermosa del mundo q
 cada vez q te veo se me mueven los piececitos es la primera vez q noto q me he
 enamorado de vd nunca pero jamás noté algo parecido y joder cómo te quiero.
 Eres la mejor
 amor de vd, mi novia es la mejor la más guapa y hermosa, con una voz super linda y con esos
 ojitos q me matan cada vez q se te achinan mi amor💜💜💜
 Me siento super afortunado de haberte conocido y lo quiero todo contigo, desde q seas mi
 novia hasta q seas mi esposa y vivir contigo toda mi vida a tu lado`,
  },
  {
    titulo: "Nota 10",
    texto: `Mi niña descansa muy bieeen estarás ya dormida así q únicamente te escribo esta pa decirte q
 te quiero muchito mucho
 Nunca me canso de hablar contigo, de escuchar esa voz tan hermosa q tienes amooor.
 Jamás
 estuve tan feliz y emocionado amor, q bonito q seas parte de mi vida, mi novia es la mejor.
 Conectamos increíble la vd, quiero pasar toda mi vida a tu lado amor.
 Cada noche me tiro casi
 10 minutos antes de dormir únicamente viendo tu foto de fondo de pantalla, de hecho lo acabo
 de hacer y te escribo esto para irme a dormir.
 Solamente quería recordarte que eres lo más
 bonito de mi vida. Te quiero amor`,
  },
  {
    titulo: "Nota 11",
    texto: `Mi amor, en fin otro día siendo la persona a la q más amo, a la q me hace mejorar cada día y
 ser mejor en todos los aspectos de mi vida.
 En el momento q me dijiste q es la primera vez q de
 verdad te enamoras, tendrías q haberme visto lo feliz y emocionado q me puse, me haces
 volver a creer en mí mismo.
 Me haces todos los días increíble, cada vez q me das los buenos
 días mi día entero mejora el hecho de tenerte en mi vida es algo q jamás pensé q valoraría
 tanto, y es que joder, hasta un te amo se me queda corto con todo lo q quiero decirte.
 me haces
 muy feliz de vd, no se q más decirte q no te haya dicho ya.
 Te amo muchísimo mi amor
 Eres mi todo mi niña, mi mujer, mi persona favorita, mi amor y mi esposa y también el amor de
 mi vida te quiero amor`,
  },
  {
    titulo: "Nota 12",
    texto: `Mi amor, justo hace unas horas te enseñé la nota.
 q escribí ayer, no te salían ni las palabras,
 es algo que jamás olvidaré, verte como casi llorabas, me hace sanarme por dentro, solamente
 quiero que seas tú de verdad la persona con la que quiero pasar el resto de mis dios, cada vez
 que te llamo, me encanta hablar contigo, ver cómo me has dicho que desde que te conozco
 has ido a mejor, jamás me pude alegrar tanto por alguien de verdad mi amor
 Definitivamente eres tú, lo tienes todo, y aunq no te salgan las palabras, todo lo dice tu cara, el
 hecho de ver tus ojitos con cada línea de la carta q leías me hace algo por dentro que nunca
 sentí, luego de enseñártela estuvimos 45 minutos sin hablar únicamente mirándonos a los
 ojos, sonriendo, dando besitos al móvil, y es que joder, definitivamente eres el amor de mi vida,
 no tengo dudas, sé lo dije a mi madre, y es que solamente tenías que ver su cara.
 Te amo
 demasiado
 Solamente el hecho de que me has dicho que todo ha mejorado desde q me conoces me hace
 llorar justo después de colgarte`,
  },
  {
    titulo: "Nota 13",
    texto: `mi laura💜💜💜💜💜💜 el anillo a te compraste el otro día, se lo dije a mi madre y literalmente pude ver
 una lágrima de la emoción q se le caía, nunca me ha visto tan feliz con una persona en la vida
 por eso te quiero tanto y te valoro demasiado, eres la indicada de vd, el amor de mi vida sin
 duda la sensación más preciosa que he sentido en la vida, en cuanto a lo q me valoras, lo bien
 q me tratas y sobre todo lo linda que eres te amo muchísimo.
 Eres el amor de mi vida sin lugar
 a dudas💜💜💜💜💜💜💜`,
  },
  {
    titulo: "Nota 14",
    texto: `mi laura
 cada día más jodidamente enamorado de ti, algún día yo creo q voy a explotar y
 todo, en fin te amo muchitooo, quiero estar toda la vida a tu lado, eres la mejor y el amor de mi
 vida, nunca sentí esta sensación y me encanta q tú seas mi personita.
 Me siento muy amado
 por ti, te quiero
 Te quiero de verdad te amo demasiado mi negrita. La niña q más quiero en todo el mundo`,
  },
];

export default function NotasTarjetas() {
  const [indice, setIndice] = useState(0);
  const [animando, setAnimando] = useState(false);

  const siguienteNota = () => {
    if (animando) return; // evitar clicks múltiples

    setAnimando(true);
    setTimeout(() => {
      setIndice((prev) => (prev + 1) % notas.length);
      setAnimando(false);
    }, 600); // duración de la animación
  };

return (
  <div className="w-full max-w-md flex flex-col items-center justify-center min-h-[250px] bg-gradient-to-r from-pink-200 via-purple-400 to-indigo-400 p-6 rounded-xl shadow-xl">
    <h1 className="text-3xl font-bold mb-6 text-purple-700 text-center">
      Notas para ti 💜
    </h1>

    <div
      onClick={siguienteNota}
      className={`w-full bg-white rounded-xl shadow-lg p-6 cursor-pointer select-none
        transform transition-transform duration-500 ease-in-out
        ${animando ? "rotate-y-180" : ""}`}
      style={{
        backfaceVisibility: "hidden",
        perspective: "1000px",
      }}
    >
      <h2 className="text-xl font-semibold mb-3 text-purple-600">
        {notas[indice].titulo}
      </h2>
      <p className="text-gray-700 text-justify leading-relaxed whitespace-pre-line">
        {notas[indice].texto}
      </p>
    </div>

    <p className="mt-4 text-sm text-gray-600 text-center">
      Dale click en la tarjeta para ver la siguiente mi amor
    </p>
  </div>
)
}