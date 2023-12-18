<template lang="pug">
  .curso-main-container.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Estudio de caso
  
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Definición
      
      .row.mb-5
        .col-md-6.mb-3
          figure
              img(src='@/assets/curso/temas/tema1/img-1.png', alt='')
        .col-md-6 
          p El estudio de caso es un enfoque de investigación que se utiliza para generar una comprensión profunda y multifacética de un tema complejo en su contexto de la vida real, son historias que se utilizan como herramienta didáctica para mostrar la aplicación de una teoría o concepto a situaciones reales. Dependiendo del objetivo que pretenden cumplir, los casos pueden basarse en hechos y ser deductivos cuando hay una respuesta correcta, o pueden basarse en el contexto cuando son múltiples soluciones. 
          p Los aprendices pueden hacerse cargo de un caso y analizar la información clave para encontrar soluciones a los problemas. Esto permite: 
  
          .row
            .col-lg-12
              .cajon.color-primario.p-4.mb-4(style="background-color:#CDF5E2")
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Determinar la información pertinente.
                  li 
                    i.lista-ul__vineta
                    | Identificar el problema y sus parámetros.
                  li 
                    i.lista-ul__vineta
                    | Identificar posibles soluciones.
                  li 
                    i.lista-ul__vineta
                    | Formar estrategias e ideas para la acción
                  li 
                    i.lista-ul__vineta
                    | Toma decisiones para solucionar los problemas.
  
      Separador 
      
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Componentes del estudio de caso
  
      p.mb-4 Un estudio de caso se compone por:
  
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span 1
          | <strong>Introducción:</strong> presenta el caso, incluidos los antecedentes y los estudios previos del tema. 
        li 
          .lista-ol--cuadro__vineta
            span 2
          | <strong>Objetivos:</strong> describen el propósito del estudio y las preguntas específicas que está tratando de responder. 
        li 
          .lista-ol--cuadro__vineta
            span 3
          | <strong>Método:</strong> explica cómo se llevó a cabo el estudio, por ejemplo: qué métodos de investigación utilizó para recopilar datos: entrevistas, observaciones, cuestionarios, entre otros. 
        li 
          .lista-ol--cuadro__vineta
            span 4
          | <strong>Resultados:</strong> describe lo que encontró a través de sus investigaciones, por ejemplo: los principales temas que surgieron en entrevistas, respuestas a cuestionarios, observaciones significativas. 
        li 
          .lista-ol--cuadro__vineta
            span 5
          | <strong>Las preguntas de investigación:</strong> son aquellas que se deben responder para resolver el caso, se deben tener en cuenta los conceptos, dimensiones, factores y variables que puedan afectar el caso sobre el cual es necesario obtener información. 
        li 
          .lista-ol--cuadro__vineta
            span 6
          | <strong>Referencias bibliográficas:</strong> incluir las referencias en que se basaron para la creación del caso. 
  
      Separador 
  
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Pasos para resolver un estudio de caso
  
      .row.justify-content-center.mt-5
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-primario.p-4.col-ipad(style="background-color:#CDF5E2")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/decorador-1.svg' alt='AvatarTop')
            p(style="color:#000 !important") <strong style="color:#000 !important">Lectura:</strong> realizar lectura, analizar el caso e identificar el problema: preguntas, hechos críticos, protagonistas, alternativas de solución. 
  
          .tarjeta.color-primario.p-4.col-ipad(style="background-color:#CDF5E2")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/decorador-2.svg' alt='AvatarTop')
            p(style="color:#000 !important") <strong style="color:#000 !important">Obtención de datos:</strong> en caso de no ser suministrados los datos, realizar entrevistas, encuestas, obtención de catálogos, revisión en base de datos o la estrategia que sea necesaria con el fin de obtener la información necesaria para la resolución del problema. 
  
          .tarjeta.color-primario.p-4.col-ipad(style="background-color:#CDF5E2")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/decorador-3.svg' alt='AvatarTop')
            p(style="color:#000 !important") <strong style="color:#000 !important">Análisis global:</strong> realizar una comparación de los datos obtenidos con otros estudios similares que puede encontrar en las bases de datos institucionales. 
  
          .tarjeta.color-primario.p-4.col-ipad(style="background-color:#CDF5E2")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/decorador-4.svg' alt='AvatarTop')
            p(style="color:#000 !important") <strong style="color:#000 !important">Análisis profundo:</strong> responder las preguntas de investigación con base en los datos obtenidos. 
  
          .tarjeta.color-primario.p-4.col-ipad(style="background-color:#CDF5E2")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/decorador-5.svg' alt='AvatarTop')
            p(style="color:#000 !important") <strong style="color:#000 !important">Solución:</strong> plantear la solución o posibles soluciones al caso, argumentando cada una.
  
          .tarjeta.color-primario.p-4.col-ipad(style="background-color:#CDF5E2")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/decorador-6.svg' alt='AvatarTop')
            p(style="color:#000 !important") <strong style="color:#000 !important">Conclusiones:</strong> establecer los resultados de la investigación teniendo en cuenta las implicaciones de la misma. 
  
      Separador 
      
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Recomendaciones para resolver el estudio de caso
      
      .tarjeta.tarjeta.p-4.mb-5.mt-0(style="background-color:#FAFFD7")(data-aos="flip-up")
        .row.justify-content-center.align-items-center 
          .col-md-8.mb-3
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Considerar las perspectivas, alternativas o explicaciones rivales al interpretar los datos, incluso en el caso de estudios meramente descriptivos o exploratorios. 
              li 
                i.lista-ul__vineta
                | Identificar los hechos más importantes que rodean el caso. 
              li 
                i.lista-ul__vineta
                | Identificar el problema o los problemas claves. 
              li 
                i.lista-ul__vineta
                | Especificar soluciones de acción alternativas. 
              li 
                i.lista-ul__vineta
                | Recomendar 1 o varias soluciones al caso. 
  
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema1/img-2.svg', alt='Imagen decorativa')
      
      Separador 
  
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Herramientas digitales que se pueden utilizar para la elaboración de estudios de caso
  
      .row.justify-content-center.align-items-center.mb-5
        .col-10(data-aos="fade-down-right")
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Bases de datos institucionales")
              .col-md-12.mb-4.mb-md-0
                p Consultas a documentos científicos con el fin de encontrar datos e información de calidad
  
              .row.justify-content-center.align-items-center.mb-2
                .col-10.col-md-10.col-lg-12
                  figure
                    img.mb-3(src='@/assets/curso/temas/tema1/img-3.png', alt='Texto que describa la imagen')
              
              .d-grid.col-2.mx-auto.col-ipad
                a.boton.color-acento-botones.texto-blanco(href="http://biblioteca.sena.edu.co/paginas/bases.html" target="_blank")
                  span Enlace web
                  i.fas.fa-file-code
  
            .row(numero="2" titulo="Corrector <em>Online</em>")
              .col-md-12.mb-4.mb-md-0
                p Revisión y mejora de gramática de textos
  
              .row.justify-content-center.align-items-center.mb-0
                .col-10.col-md-10.col-lg-12
                  figure
                    img.mb-3(src='@/assets/curso/temas/tema1/img-4.png', alt='Texto que describa la imagen')
  
              .d-grid.col-2.mx-auto.col-ipad
                a.boton.color-acento-botones.texto-blanco(href="https://www.correctoronline.es/" target="_blank")
                  span Enlace web
                  i.fas.fa-file-code
  
            .row(numero="3" titulo="Language <em>Tool</em>")
              .col-md-12.mb-4.mb-md-0
                p Revisión de ortografía y estilo
  
              .row.justify-content-center.align-items-center.mb-0
                .col-10.col-md-10.col-lg-12
                  figure
                    img.mb-3(src='@/assets/curso/temas/tema1/img-5.png', alt='Texto que describa la imagen')
            
              .d-grid.col-2.mx-auto.col-ipad
                a.boton.color-acento-botones.texto-blanco(href="https://languagetool.org/es" target="_blank")
                  span Enlace web
                  i.fas.fa-file-code
      
      Separador 
  
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.6 Ejemplo de estudio de caso

      p.mb-5 A continuaciòn se plantea un estudio de caso con alternativas de solución:    

      .row.justify-content-center.align-items-center.mb-4
        .col-10(data-aos="fade-down-right")
          .tarjeta.tarjeta.p-4.mb-5.mt-0(style="background-color:#FAFFD7")(data-aos="flip-up")
            .row.justify-content-center.align-items-center 
              .col-md-7.mb-3
                h3 CASO CHEMCO
                p Fundada en 1965, CHEMCO es un fabricante líder de baterías de automóvil en el mercado del Reino Unido. Desde entonces, ha estado a cargo del Sr. Jones, el fundador y propietario de la firma. En 1999, la empresa decidió apostar por la diversificación ampliando la línea de productos. El nuevo producto fueron baterías para carretillas elevadoras. Al mismo tiempo, el Sr. Marek fue nombrado vicepresidente senior de marketing de la empresa. Sin embargo, poco después de su exitosa diversificación hacia baterías para montacargas, las ventas en este segmento comenzaron a caer de manera constante. El Sr. Marek quería introducir algunos cambios radicales en la publicidad y la marca del nuevo negocio, pero el anticuado Sr. Jones rechazó la propuesta. 
      
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img-7.svg', alt='Imagen decorativa')

          .tarjeta.tarjeta.p-4.mb-5.mt-0(style="background-color:#CDF5E2")(data-aos="flip-up")
            .row.justify-content-center.align-items-center 
              .col-md-12.mb-0
                p En esta coyuntura en 2012, la empresa está perdiendo fuertemente en el negocio de baterías para montacargas y su participación en el mercado de baterías para automóviles también está disminuyendo. Jones le ha pedido a Marek que muestre un cambio de rumbo en la empresa dentro de un año. <strong>¿Qué medidas debería tomar el Sr. Marek para sacar a la empresa de sus problemas?</strong>

      .row.align-items-center.mb-4
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/icono.png', style="width: 15px" ,alt='').m-auto
        .col-auto.bg-c8(style="z-index:1")
          .p-2
            h3.mb-0.ms-3 Alternativas de solución
  
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-primario.p-5(style="background-color:#CDF5E2")
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema1/decorador-7.svg', alt='Texto que describa la imagen')
            
          h2.text-center(style="color:#000 !important") Alternativa 1
          ul.lista-ul(style="color:#000 !important")
            li(style="color:#000 !important") 
              i.lista-ul__vineta(style="color:#000 !important")
              | Proteger la imagen de calidad de la empresa en la industria del automóvil.
            li(style="color:#000 !important") 
              i.lista-ul__vineta(style="color:#000 !important")
              | Producto rediseñado para reducir el costo de fabricación.
            li(style="color:#000 !important") 
              i.lista-ul__vineta(style="color:#000 !important")
              | Precio bajo que le permita competir con el productor español.
  
        .col-md.tarjeta.color-acento-botones.p-5(style="background-color:#FAFFD7")
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema1/decorador-8.svg', alt='Texto que describa la imagen')
            
          h2.text-center(style="color:#000 !important") Alternativa 2
          ul.lista-ul(style="color:#000 !important")
            li(style="color:#000 !important") 
              i.lista-ul__vineta(style="color:#000 !important")
              | Aprovechar el liderazgo en calidad en el mercado de baterías de automóvil.
            li(style="color:#000 !important") 
              i.lista-ul__vineta(style="color:#000 !important")
              | Ofrecer pruebas de confiabilidad, garantías extendidas, etc. para promover una imagen de calidad.
            li(style="color:#000 !important")
              i.lista-ul__vineta(style="color:#000 !important")
              | Fijar precios más altos para extraer el excedente de estas ventajas.
  
      .row.align-items-center.mb-4
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/icono.png', style="width: 15px" ,alt='').m-auto
        .col-auto.bg-c8(style="z-index:1")
          .p-2
            h3.mb-0.ms-3 Recomendaciones
  
      p.mb-5 En este caso se recomienda la alternativa 1. Dado que la empresa opera en una industria que tiene un bajo crecimiento, por lo tanto, puede expandir la participación de mercado y las ventas solo tomando los clientes de otros jugadores. Por lo tanto, debe enfrentar al competidor español de frente fijando un precio agresivo para su producto. Al mismo tiempo, el lanzamiento de un producto de bajo precio con la misma marca erosiona la imagen de alta calidad en el mercado de baterías para automóviles. Por lo tanto, la mejor opción es optar por una marca fuera de la marca para apuntar a los clientes de montacargas que son cada vez más sensibles a los precios. Esto permitirá a la empresa protegerse de la amenaza a corto plazo y fortalecer su posición a largo plazo.
  
      
      
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
