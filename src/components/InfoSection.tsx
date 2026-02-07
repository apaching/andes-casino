import Button from "./Button";

interface InfoItem {
  id: string;
  title: string;
  description: string;
  hasLink?: boolean;
  hasButton?: boolean;
  buttonText?: string;
}

const info: InfoItem[] = [
  {
    id: "1",
    title: "Juega al casino online en FUN88",
    description:
      "Si quieres jugar casino en línea y estás buscando el ideal para ti, es muy importante que tomes en cuenta cuáles son las mejores opciones, y también revises a profundidad la plataforma en la que vas a jugar.\n\nEl día de hoy te presentamos a FUN88 Mexico y te contamos por qué es uno de los mejores online casinos online.",
  },
  {
    id: "2",
    title: "¿Qué son los juegos de casino?",
    description:
      "Los juegos de casino ofrecen una experiencia de entretenimiento, pero también incorporan una línea de pagos, lo que permite a los jugadores jugar por dinero real.\n\nTambién existen las opciones de casino bono sin depositar, sin embargo, estas no permiten obtener fondos, pero sí podrás pasar un buen tiempo de entretenimiento.\n\nOpciones como caliente casino mx, casino twin lions Guadalajara y jubilee Monterrey son opciones de casinos físicos que ofrecen soporte para jugadores mexicanos.",
  },
  {
    id: "3",
    title: "Tipos de juegos de casino",
    description:
      "Los tipos de juegos son muy variados, por ejemplo en caliente México casino podrás encontrar las típicas tragamonedas de los casinos físicos, pero las opciones Online ofrecen en la actualidad un mayor número de juegos.\n\nJugar casino en línea significa tener la posibilidad de acceder a un gran número de opciones, trasladando la experiencia de una tragamonedas física directamente a un entorno digital.\n\nExisten un gran número de tragamonedas con jugabilidades diferentes, entre las cuales se incluyen:",
  },
  {
    id: "4",
    title: "Tragamonedas clásicas",
    description:
      "Tragamonedas que replican la experiencia de las máquinas clásicas, tanto en mecánica como temática. Destacan las opciones de frutas, con tableros de 3x5.",
  },
  {
    id: "5",
    title: "Tragamonedas con Jackpots progresivos",
    description:
      "Versiones que además de las líneas de pago tradicionales, agregan un pote acumulado, al cual se suma una nueva ventaja, cada que un jugador pierde. Al lograr la combinación ganadora, el jugador se lleva todo el pote.",
  },
  {
    id: "6",
    title: "Juegos tipo Crash",
    description:
      "Juegos rápidos, donde un objeto, ocasionalmente una aeronave, comienza a volar. Entre más suba el objeto, mayor será el premio que podrás ganar.",
  },
  {
    id: "7",
    title: "Megaways",
    description:
      "Son tragamonedas que ofrecen jugabilidades muy emocionantes. Suelen tener muchos símbolos diferentes, además de una gran cantidad de líneas de pago.",
  },
  {
    id: "8",
    title: "Tragamonedas en formato cascada",
    description:
      "Mecánica de juego donde nuevos símbolos caen cada que el jugador consigue puntos ganadores. Las ganancias potenciales son enormes, ya que con cada grupo ganador aparecerán más símbolos que permiten crear rachas ganadoras.",
    hasButton: true,
    buttonText: "Regístrate para jugar en vivo",
  },
  {
    id: "9",
    title: "Blackjack",
    description:
      "Juego de cartas clásico donde un jugador debe alcanzar los 21 puntos sin pasarse. El objetivo es vencer a la mano del crupier, para ganar la apuesta.",
    hasLink: true,
  },
  {
    id: "10",
    title: "Baccarat",
    description:
      "Un juego de cartas que se caracteriza por su lujo y simplicidad. Dos manos se enfrentan uno a uno, buscando alcanzar la combinación ganadora.",
    hasLink: true,
  },
  {
    id: "11",
    title: "Póquer",
    description:
      "El póker es uno de los juegos en línea más populares, principalmente porque fue de los primeros en llevarse a una experiencia a distancia. Replica las reglas del póker físico.",
  },
  {
    id: "12",
    title: "Ruleta",
    description:
      "Ve como un crupier hace girar una rueda, y al detenerse se entregan los premios según lo apostado. Tiene opciones de pago 50/50, lo que lo hace una opción muy cómoda a considerar.",
    hasLink: true,
  },
  {
    id: "13",
    title: "Bingo",
    description:
      "Se trata de un sorteo que se realiza en tiempo real. Se hace rodar una tómbola de la cual se van extrayendo números poco a poco. El jugador ganador es el que complete su tabla con los números que van saliendo.",
    hasLink: true,
    hasButton: true,
    buttonText: "¿Quieres saber más?",
  },
  {
    id: "14",
    title: "Bono casino deposito",
    description:
      "Una opción para considerar el casino donde vas a jugar es tomar en cuenta los diferentes bonos de bienvenida.\n\nLos bonos de bienvenida son ofrecidos por los casinos para atraer a jugadores nuevos a su plataforma, y con base a ellos se registren y hagan un primer depósito de fondos.\n\nTambién hay casinos bonos bienvenida gratis sin depósito, dónde con tan sólo registrarte, ya comenzarás a ganar una apuesta gratuita, o bien promociones de giros gratis.",
    hasLink: true,
  },
  {
    id: "15",
    title: "¿Por qué FUN88?",
    description:
      "Recomendamos usar FUN88 porque es uno de los casinos bonos bienvenida gratis sin depósito en México online. Con tan sólo registrarte ya estarás ganando, recibiendo bonos como la posibilidad de realizar un juego gratis, siempre y cuando hayas completado el proceso de verificación KYC.\n\nTambién ofrece un interesante bono de bienvenida donde obtendrás $50 pesos de regalo, una modalidad de bono casino sin depósito, ya que no tendrás que hacer ningún depósito para poder ganarlo.\n\nAdemás de todo, jugar casino en línea en FUN88 será una de las mejores experiencias, ya que ofrece un excelente número de juegos de casino, donde tendrás más de 5000 opciones diferentes, lo que hace a este el best casino.\n\nPor si fuera poco, podrás hacer apuestas deportivas en las disciplinas más difundidas a nivel internacional, y también podrás ver los deportes especializados en el panorama nacional.",
    hasButton: true,
    buttonText: "Registrate Ahora",
  },
];

export default function InfoSection() {
  return (
    <section className="w-full">
      <ul className="flex flex-col">
        {info.map((item) => (
          <li key={item.id} className="flex flex-col">
            <h3
              className={`${item.hasLink ? "text-primary hover:cursor-pointer" : "text-txt"} text-[26px]`}
            >
              {item.title}
            </h3>
            <p className="text-txt text-[16px]">{item.description}</p>
            {item.hasButton && (
              <Button buttonStyle="bg-primary rounded-3xl px-[32px] py-[8px] mx-auto mb-2.5">
                {<p className="text-md px-2 text-white">{item.buttonText}</p>}
              </Button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
