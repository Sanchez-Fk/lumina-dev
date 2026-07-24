<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Lumina Dev crea experiencias digitales con intención, claridad y movimiento." />
    <title>Lumina Dev — Experiencias digitales que brillan</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="styles.css" />
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    <script defer src="script.js"></script>
  </head>
  <body>
    <div class="scroll-progress" aria-hidden="true"><span></span></div>
    <div class="grain" aria-hidden="true"></div>
    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="Lumina Dev, inicio"><span class="brand-mark">L</span> LUMINA<span>DEV</span></a>
      <nav id="site-nav" aria-label="Navegación principal">
        <a href="#servicios">Servicios</a>
        <a href="#proceso">Proceso</a>
        <a href="#proyectos">Prototipos</a>
        <a href="#planes">Planes</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <a class="header-cta" href="#contacto">Hablemos <span>↗</span></a>
      <button class="menu-toggle" type="button" aria-label="Abrir navegación" aria-expanded="false" aria-controls="site-nav"><i></i><i></i></button>
    </header>

    <main>
      <section id="inicio" class="hero section-shell">
        <div class="hero-orb orb-one" aria-hidden="true"></div><div class="hero-orb orb-two" aria-hidden="true"></div>
        <div class="hero-copy">
          <p class="eyebrow hero-reveal">Estudio digital independiente <span></span> 2026</p>
          <h1 aria-label="Diseñamos lo que tu próxima gran idea merece.">
            <span class="line"><span class="hero-reveal">Diseñamos lo que</span></span>
            <span class="line italic"><span class="hero-reveal">tu próxima</span></span>
            <span class="line"><span class="hero-reveal">gran idea merece.</span></span>
          </h1>
          <div class="hero-bottom hero-reveal">
            <p>Webs que se sienten vivas, explican con claridad y convierten curiosidad en confianza.</p>
            <a href="#proyectos" class="round-link" aria-label="Ver prototipos"><span>Explorar<br />proyectos</span><b>↓</b></a>
          </div>
        </div>
        <div class="hero-art" aria-label="Composición visual de Lumina Dev">
          <div class="halo"></div>
          <p class="art-label top">ESTRATEGIA / DISEÑO / CÓDIGO</p>
          <div class="hero-card card-main"><span>01</span><strong>ideas<br />en órbita</strong><i></i></div>
          <div class="hero-card card-side"><span>∞</span><small>formas<br />con propósito</small></div>
          <p class="art-label bottom">SCROLL PARA DESCUBRIR <b>↓</b></p>
        </div>
      </section>

      <section class="signal-strip" aria-label="Capacidades principales">
        <div class="signal-track"><span>ESTRATEGIA</span><i>✦</i><span>DISEÑO CON INTENCIÓN</span><i>✦</i><span>DESARROLLO A MEDIDA</span><i>✦</i><span>SEO Y RENDIMIENTO</span><i>✦</i><span>ESTRATEGIA</span><i>✦</i><span>DISEÑO CON INTENCIÓN</span><i>✦</i></div>
      </section>

      <section id="servicios" class="services section-shell">
        <div class="section-intro">
          <p class="eyebrow">01 — Lo que hacemos</p>
          <h2>Una presencia digital que <em>se siente inevitable.</em></h2>
        </div>
        <div class="service-list">
          <article class="service-item reveal-item"><span class="number">(01)</span><div class="service-icon">↗</div><div><h3>Landing pages</h3><p>Tu propuesta, reducida a su versión más clara y convincente.</p></div><span class="service-arrow">→</span></article>
          <article class="service-item reveal-item"><span class="number">(02)</span><div class="service-icon">◎</div><div><h3>Identidad web</h3><p>Sistemas visuales que hacen que una marca se reconozca al instante.</p></div><span class="service-arrow">→</span></article>
          <article class="service-item reveal-item"><span class="number">(03)</span><div class="service-icon">✳</div><div><h3>Experiencias interactivas</h3><p>Movimiento y detalle que invitan a quedarse un poco más.</p></div><span class="service-arrow">→</span></article>
        </div>
      </section>

      <section id="proceso" class="process">
        <div class="process-sticky section-shell">
          <div class="process-copy"><p class="eyebrow">02 — Construimos en capas</p><h2>No es solo una página.<br /><em>Es una impresión.</em></h2><p>Deconstruimos tu idea hasta encontrar aquello que merece ser recordado.</p></div>
          <div class="exploded-device" aria-label="Proceso de diseño en cuatro capas">
            <div class="device-layer layer-result"><span>RESULTADO</span><div class="result-dot"></div><b>Listo para<br />conectar.</b></div>
            <div class="device-layer layer-seo"><span>VISIBILIDAD</span><div class="seo-lines"><i></i><i></i><i></i></div><b>SEO que<br />trabaja.</b></div>
            <div class="device-layer layer-code"><span>CÓDIGO</span><code>&lt;lumina /&gt;<br /> motion = true;<br /><i>build();</i></code></div>
            <div class="device-layer layer-design"><span>DISEÑO</span><div class="shape-one"></div><div class="shape-two"></div><b>La idea<br />toma forma.</b></div>
            <div class="layer-index"><span>01</span><span>02</span><span>03</span><span>04</span></div>
          </div>
        </div>
      </section>

      <section class="narrative section-shell">
        <div class="narrative-sticky">
          <div class="narrative-title"><p class="eyebrow">03 — De la idea a la pantalla</p><h2>Una historia<br />que avanza<br /><em>con intención.</em></h2><div class="story-progress"><span></span></div></div>
          <div class="story-steps">
            <article class="story-step is-active" data-step="01"><span>01</span><div><p class="story-kicker">DESCUBRIR</p><h3>Encontramos el centro de gravedad.</h3><p>Antes de diseñar, aclaramos la oferta, las personas a las que hablas y el siguiente paso que quieres provocar.</p><ul><li>Mapa de objetivos</li><li>Arquitectura de contenido</li><li>Dirección visual</li></ul></div><div class="story-art art-discover"><i></i><b>¿Por qué<br />ahora?</b></div></article>
            <article class="story-step" data-step="02"><span>02</span><div><p class="story-kicker">DISEÑAR</p><h3>Convertimos claridad en una experiencia.</h3><p>Construimos una jerarquía que se entiende a primera vista y un sistema visual que se reconoce sin explicaciones.</p><ul><li>Wireframes narrativos</li><li>Sistema de interfaz</li><li>Prototipo navegable</li></ul></div><div class="story-art art-design"><i></i><i></i><b>Forma<br />+ ritmo</b></div></article>
            <article class="story-step" data-step="03"><span>03</span><div><p class="story-kicker">ACTIVAR</p><h3>Hacemos que cada detalle cumpla una función.</h3><p>Programamos con atención al rendimiento, a la accesibilidad y a la forma en que la gente realmente navega.</p><ul><li>Interacciones con sentido</li><li>SEO técnico</li><li>Medición preparada</li></ul></div><div class="story-art art-launch"><i></i><b>Listo<br />para salir.</b></div></article>
          </div>
        </div>
      </section>

      <section id="proyectos" class="projects section-shell">
        <div class="project-heading"><p class="eyebrow">04 — Tipos de página</p><h2>Una web para cada<br /><em>objetivo.</em></h2><p>Cada formato tiene una función clara. Abre cualquiera para explorar un prototipo funcional.</p></div>
        <div class="project-grid">
          <a class="project-card type-card corporate-card" href="prototipos/prototipo.html?tipo=corporativa"><span class="card-icon">⌂</span><div class="type-preview corp-preview"><i></i><i></i><i></i><b></b></div><div class="card-info"><strong>Corporativa <i>→</i></strong><p>Presencia institucional sólida y profesional.</p><span>SEO &nbsp; · &nbsp; Responsive &nbsp; · &nbsp; Equipo</span><em>Ver prototipo</em></div></a>
          <a class="project-card type-card shop-card" href="prototipos/prototipo.html?tipo=ecommerce"><span class="card-icon">⌑</span><div class="type-preview shop-preview"><i></i><i></i><i></i><i></i><b></b></div><div class="card-info"><strong>E-commerce <i>→</i></strong><p>Tu tienda online lista para vender 24/7.</p><span>Carrito &nbsp; · &nbsp; Pagos &nbsp; · &nbsp; Catálogo</span><em>Ver prototipo</em></div></a>
          <a class="project-card type-card blog-card" href="prototipos/prototipo.html?tipo=blog"><span class="card-icon">▤</span><div class="type-preview blog-preview"><i></i><i></i><i></i><i></i><b></b></div><div class="card-info"><strong>Blog <i>→</i></strong><p>Comparte contenido y posiciónate como referente.</p><span>Artículos &nbsp; · &nbsp; SEO &nbsp; · &nbsp; Categorías</span><em>Ver prototipo</em></div></a>
          <a class="project-card type-card portfolio-card" href="prototipos/prototipo.html?tipo=portafolio"><span class="card-icon">▦</span><div class="type-preview portfolio-preview"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="card-info"><strong>Portafolio <i>→</i></strong><p>Muestra tu trabajo con un diseño memorable.</p><span>Galería &nbsp; · &nbsp; Casos &nbsp; · &nbsp; Animado</span><em>Ver prototipo</em></div></a>
          <a class="project-card type-card landing-card" href="prototipos/prototipo.html?tipo=landing"><span class="card-icon">ϟ</span><div class="type-preview landing-preview"><i></i><i></i><i></i></div><div class="card-info"><strong>Landing page <i>→</i></strong><p>Una sola página, un solo objetivo: convertir.</p><span>Conversión &nbsp; · &nbsp; Rápida &nbsp; · &nbsp; Leads</span><em>Ver prototipo</em></div></a>
        </div>
      </section>

      <section class="case-feature">
        <div class="case-copy section-shell"><p class="eyebrow">05 — Una experiencia completa</p><div><h2>Del primer vistazo<br />al <em>sí, quiero saber más.</em></h2><p>Una web no tiene que gritar para funcionar. Ordenamos la información, damos peso a lo esencial y usamos movimiento solo cuando ayuda a entender mejor.</p><a href="#contacto" class="text-link">Construyamos la tuya <span>↗</span></a></div></div>
        <div class="case-window section-shell"><div class="window-frame"><div class="window-bar"><span></span><span></span><span></span><b>luminadev.studio / proyecto</b></div><div class="window-content"><div class="case-orbit orbit-a"></div><div class="case-orbit orbit-b"></div><p>UNA NUEVA FORMA DE ESTAR CERCA</p><h3>Todo empieza<br />con una <em>buena señal.</em></h3><button type="button" data-demo-toast="Una interacción diseñada para guiar, no interrumpir.">Descubrir ahora <b>↗</b></button><div class="case-badge">Construido para<br />avanzar <span>↓</span></div></div></div><div class="case-captions"><span>01. Mensaje claro</span><span>02. Prueba tangible</span><span>03. Acción sencilla</span></div></div>
      </section>

      <section id="planes" class="pricing section-shell">
        <div class="pricing-heading"><p class="eyebrow">06 — Formas de trabajar</p><h2>El alcance correcto<br /><em>para este momento.</em></h2><p>Un punto de partida claro. Cada plan se adapta a la historia y necesidad de tu negocio.</p></div>
        <div class="pricing-grid">
          <article class="price-card"><p class="plan-label">ESENCIAL</p><h3>Presencia<br />concentrada.</h3><p class="price-description">Para lanzar una propuesta clara y hacer que se vea tan bien como se explica.</p><p class="price">Desde <b>US$390</b></p><ul><li>Landing de hasta 5 secciones</li><li>Diseño a medida</li><li>Formulario de contacto</li><li>Optimización móvil</li></ul><a href="#contacto">Quiero empezar <span>→</span></a></article>
          <article class="price-card featured"><span class="plan-tag">EL MÁS ELEGIDO</span><p class="plan-label">IMPULSO</p><h3>Una experiencia<br />que mueve.</h3><p class="price-description">Para marcas que necesitan una web completa, memorable y preparada para crecer.</p><p class="price">Desde <b>US$790</b></p><ul><li>Web de hasta 10 páginas</li><li>Animaciones con propósito</li><li>SEO técnico esencial</li><li>Analítica y soporte inicial</li></ul><a href="#contacto">Hablemos del proyecto <span>→</span></a></article>
          <article class="price-card"><p class="plan-label">SISTEMA</p><h3>Una plataforma<br />para escalar.</h3><p class="price-description">Para proyectos que necesitan catálogo, contenido, flujos y una arquitectura más robusta.</p><p class="price">A medida <b>✦</b></p><ul><li>E-commerce o contenido</li><li>Prototipo de flujos</li><li>Sistema de componentes</li><li>Integraciones necesarias</li></ul><a href="#contacto">Diseñar el alcance <span>→</span></a></article>
        </div>
        <p class="pricing-note">¿No sabes por dónde comenzar? Una conversación corta basta para encontrar el formato correcto.</p>
      </section>

      <section class="voices section-shell">
        <div class="voices-head"><p class="eyebrow">07 — Lo que cambia</p><div><span class="quote-mark">“</span><p id="quote-text">Por fin sentimos que nuestra web cuenta lo que hacemos sin tener que explicarlo tres veces.</p><div class="quote-person"><b id="quote-name">Camila Rojas</b><span id="quote-role">Fundadora, Casa Nativa</span></div></div><div class="quote-controls"><button class="quote-prev" type="button" aria-label="Testimonio anterior">←</button><span><b id="quote-index">01</b> / 03</span><button class="quote-next" type="button" aria-label="Testimonio siguiente">→</button></div></div>
      </section>

      <section id="preguntas" class="faq section-shell">
        <div class="faq-title"><p class="eyebrow">08 — Preguntas frecuentes</p><h2>Todo empieza<br />con una buena<br /><em>conversación.</em></h2></div>
        <div class="faq-list">
          <article class="faq-item"><button aria-expanded="false"><span>¿Cuánto tiempo toma crear una página?</span><b>+</b></button><div><p>Una landing puede estar lista entre 2 y 3 semanas. Una web más completa normalmente necesita entre 4 y 6 semanas, según el contenido y los flujos.</p></div></article>
          <article class="faq-item"><button aria-expanded="false"><span>¿Necesito tener todo el contenido listo?</span><b>+</b></button><div><p>No. Te guiamos con una estructura de contenido, preguntas y prioridades para que no tengas que resolverlo todo antes de empezar.</p></div></article>
          <article class="faq-item"><button aria-expanded="false"><span>¿La página podrá crecer después?</span><b>+</b></button><div><p>Sí. Diseñamos con sistemas y componentes reutilizables, para que añadir una sección, producto o artículo no implique volver a empezar.</p></div></article>
          <article class="faq-item"><button aria-expanded="false"><span>¿Qué pasa luego de publicar?</span><b>+</b></button><div><p>Te entregamos una guía de uso y un período de soporte inicial. Si el proyecto lo necesita, también definimos una bolsa mensual de evolución.</p></div></article>
        </div>
      </section>

      <section id="contacto" class="contact section-shell">
        <div class="contact-intro"><p class="eyebrow">09 — Próximo paso</p><h2>Tu idea merece<br /><em>un lugar para brillar.</em></h2><p>Cuéntanos qué estás construyendo. Te respondemos con claridad, no con un pitch de ventas.</p><div class="contact-channels"><a href="mailto:ingeniero.sanchez.06@gmail.com">ingeniero.sanchez.06@gmail.com <span>↗</span></a><a href="https://wa.me/573052624583?text=Hola%20Lumina%20Dev%2C%20quiero%20hablar%20sobre%20un%20proyecto" target="_blank" rel="noopener">Escríbenos por WhatsApp <span>↗</span></a></div></div>
        <form class="contact-form" action="https://formspree.io/f/mjgnarvq" method="POST">
          <label>Tu nombre<input required name="nombre" placeholder="¿Cómo te llamas?" autocomplete="name" /></label>
          <label>Tu email<input required type="email" name="email" placeholder="Para responderte" autocomplete="email" /></label>
          <label>Cuéntanos un poco<textarea required name="mensaje" rows="3" placeholder="¿Qué te gustaría crear?"></textarea></label>
          <button class="send-button" type="submit"><span>Enviar mensaje</span><b>↗</b></button>
          <small>Al enviar, aceptas que conversemos sobre tu proyecto.</small>
        </form>
      </section>
    </main>

    <footer><a class="brand" href="#inicio"><span class="brand-mark">L</span> LUMINA<span>DEV</span></a><p>© 2026 · Hecho desde la curiosidad</p><div><a href="#proyectos">Prototipos</a><a href="#contacto">Contacto</a><a href="#inicio">Arriba ↑</a></div></footer>

  </body>
</html>
