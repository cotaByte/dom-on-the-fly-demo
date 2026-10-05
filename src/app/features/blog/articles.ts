export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  theme: 'blue' | 'cyan' | 'violet';
  icon: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export const articles: Article[] = [
  {
    slug: 'interfaces-que-se-adaptan',
    category: 'Diseño de producto',
    title: 'Interfaces que se adaptan a las personas',
    excerpt:
      'Una mirada a los pequeños cambios que hacen que un producto digital se sienta realmente tuyo.',
    author: 'Marina Soler',
    date: '24 sep 2026',
    readTime: '8 min de lectura',
    theme: 'blue',
    icon: '✦',
    sections: [
      {
        heading: 'El contexto cambia la experiencia',
        paragraphs: [
          'Dos personas pueden abrir la misma aplicación y necesitar cosas muy distintas. Una quiere encontrar un dato concreto; otra necesita comprender el panorama completo. Una interfaz adaptable no intenta adivinarlo todo: escucha una intención, ofrece una respuesta clara y deja al usuario conservar el control.',
          'Durante años hemos diseñado recorridos para el usuario promedio. El resultado suele ser una suma de menús, filtros y atajos que deben servir para cualquier situación. Sin embargo, las necesidades reales aparecen en momentos específicos. A veces bastaría con un botón que lleve al final de un artículo o con una forma más visible de comparar dos cifras.',
          'La clave está en cambiar la escala de la personalización. No hace falta reconstruir una aplicación entera para mejorar una tarea. Un ajuste pequeño, reversible y situado en el lugar correcto puede aportar más valor que una gran pantalla de preferencias.',
        ],
      },
      {
        heading: 'Diseñar para una intención',
        paragraphs: [
          'Cuando alguien formula lo que quiere hacer con sus propias palabras, nos ofrece una señal muy rica. «Quiero volver arriba» describe una acción. «Quiero leer sin distracciones» sugiere una presentación distinta. «Necesito destacar este dato» habla de jerarquía visual. Cada petición puede convertirse en una propuesta concreta que la persona revisa antes de aplicarla.',
          'Esa propuesta tiene que encajar con el lenguaje del producto. Tipografía, espaciado, color y movimiento son pistas que ayudan a que un elemento nuevo parezca parte de la página. La coherencia importa porque reduce la fricción: el usuario entiende antes qué puede tocar y qué ocurrirá después.',
          'También importa la reversibilidad. Si un cambio aparece al instante, debería poder deshacerse igual de rápido. Guardar la decisión para futuras visitas tiene sentido solo cuando la persona comprende qué se ha añadido y dónde lo encontrará.',
        ],
      },
      {
        heading: 'Lo pequeño también puede impresionar',
        paragraphs: [
          'Una buena demostración no necesita prometer una interfaz completamente autónoma. Puede mostrar una cadena corta y honesta: una petición, una interpretación, una vista previa y un resultado útil. El momento en que el elemento reaparece tras navegar demuestra que la idea va más allá de un efecto visual pasajero.',
          'Los mejores experimentos ponen a prueba las costuras del diseño. ¿Qué pasa si el artículo cambia de longitud? ¿Si el usuario abre la página en móvil? ¿Si el tema usa otros colores? Estas preguntas convierten un prototipo vistoso en un aprendizaje técnico valioso.',
        ],
      },
    ],
  },
  {
    slug: 'datos-con-historia',
    category: 'Datos y visualización',
    title: 'Los datos también cuentan historias',
    excerpt:
      'Tablas, contexto y decisiones: cómo transformar una colección de números en una herramienta útil.',
    author: 'Daniel Ríos',
    date: '18 sep 2026',
    readTime: '6 min de lectura',
    theme: 'cyan',
    icon: '◈',
    sections: [
      {
        heading: 'Una tabla es el principio',
        paragraphs: [
          'Las tablas permiten comparar con precisión, pero una tabla sola no siempre responde a la pregunta que ha llevado a alguien hasta ella. Ordenar, buscar y abrir un detalle son gestos sencillos que convierten datos estáticos en una conversación con la información.',
          'El diseño debe mostrar qué datos están disponibles y qué significa cada uno. Una cabecera clara, estados de carga visibles y mensajes de error comprensibles son parte de la experiencia, no un añadido al final del desarrollo.',
          'Cuando la información llega de una API externa, también cambia con el tiempo. La interfaz debe seguir siendo estable aunque falle una petición o tarde unos segundos más de lo esperado.',
        ],
      },
      {
        heading: 'Densidad sin ruido',
        paragraphs: [
          'Un buen listado ofrece detalles suficientes para elegir la siguiente acción. Un panel lateral puede ampliar el contexto sin obligar a abandonar la página. Así se mantiene la referencia visual y se facilita la comparación.',
          'El equilibrio entre densidad y claridad depende de la tarea. En ocasiones importa ver veinte filas a la vez. En otras, tres tarjetas bien explicadas permiten avanzar más rápido. El objetivo no es mostrar menos datos, sino darles una estructura que ayude a decidir.',
        ],
      },
      {
        heading: 'La siguiente capa',
        paragraphs: [
          'Imagina poder pedir «marca los elementos que me interesan» o «añade un acceso rápido a los detalles». Son cambios pequeños, pero acercan la interfaz a la pregunta concreta de cada persona.',
          'Para que estos cambios sean fiables deben tener un lugar estable en la página, una representación que pueda guardarse y un comportamiento fácil de comprobar. La flexibilidad gana valor cuando también es predecible.',
        ],
      },
    ],
  },
  {
    slug: 'crear-con-menos-friccion',
    category: 'Construir en público',
    title: 'Crear con menos fricción',
    excerpt:
      'Por qué los proyectos pequeños y bien explicados pueden enseñar más que las grandes promesas.',
    author: 'Lucía Vidal',
    date: '11 sep 2026',
    readTime: '5 min de lectura',
    theme: 'violet',
    icon: '↗',
    sections: [
      {
        heading: 'Una idea que se puede enseñar',
        paragraphs: [
          'Cuando compartimos un proyecto, mostramos tanto el resultado como las decisiones que lo hicieron posible. Una demostración breve funciona mejor cuando el problema se reconoce al instante y el cambio aparece delante de los ojos.',
          'Elegir un alcance pequeño también ayuda a terminar. Tres ejemplos bien resueltos permiten aprender sobre empaquetado, integración y diseño sin perder semanas persiguiendo casos excepcionales.',
        ],
      },
      {
        heading: 'Aprender construyendo',
        paragraphs: [
          'Crear una librería obliga a pensar en sus límites. ¿Qué configuración necesita la aplicación que la instala? ¿Qué parte del estado pertenece a la librería? ¿Cómo se documenta una capacidad sin prometer más de lo que hace?',
          'La aplicación de ejemplo responde a muchas de estas preguntas. Si la librería se entiende y funciona en páginas con formatos distintos, su API empieza a tener sentido fuera del proyecto original.',
        ],
      },
      {
        heading: 'El valor del detalle',
        paragraphs: [
          'La primera impresión llega con el diseño; la confianza llega al interactuar. Un enlace activo, una transición discreta o un mensaje de error claro hacen que una demo resulte más convincente.',
          'Construir en público invita a mejorar esos detalles. Cada iteración es una oportunidad para contar qué problema apareció, qué decisión tomaste y qué aprendiste al comprobarla.',
        ],
      },
    ],
  },
];
