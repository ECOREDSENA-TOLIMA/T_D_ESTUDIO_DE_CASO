export default {
  global: {
    componenteFormativo: 'Estrategia de aprendizaje Estudio de caso',
    descripcionCurso:
      'El estudio de casos es una estrategia didáctica de aprendizaje para favorecer el aprendizaje de competencias y para facilitar la relación entre la teoría y la práctica. En este anexo estudio de caso se describe su definición, los componentes, los pasos para resolver el caso, recomendaciones, las herramientas digitales que se pueden utilizar y algunos ejemplos, igualmente se incluyen los referentes bibliográficos correspondientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estudio de caso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Componentes del estudio de caso',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Pasos para resolver un estudio de caso',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Recomendaciones para resolver el estudio de caso',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Herramientas digitales se pueden utilizar para la elaboración de estudios de caso',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Ejemplo de estudio de caso',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Referentes Bibliográficos',
            hash: 't_1_7',
          },
        ],
      },
    ],
    subMenu: [],
  },

  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
