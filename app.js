/**
 * CARLA ÁLVAREZ - ERGONOMÍA APLICADA AL TRABAJO REAL
 * Modern Antigravity Interactivity & Animation Engine
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. BILINGUAL DICTIONARY (ES / EN)
  // =========================================================================
  const translations = {
    es: {
      nav_home: "Inicio",
      nav_services: "Servicios",
      nav_methodology: "Metodología",
      nav_standards: "Estándares",
      nav_about: "Nosotros",
      nav_contact: "Contacto",

      hero_badge: "Ergonomía de Precisión & SST",
      hero_title_main: "ERGONOMÍA APLICADA AL TRABAJO REAL",
      hero_subtitle: "TAREAS MÁS SALUDABLES, EFICIENTES Y SOSTENIBLES.",
      hero_description: "Soluciones ergonómicas orientadas a prevenir lesiones y mejorar el desempeño operativo en entornos laborales reales.",
      hero_btn_eval: "Solicitar evaluación",
      hero_btn_services: "Ver servicios",

      strat_tag: "Impacto Comprobado",
      strat_title_1: "¿POR QUÉ LA ERGONOMÍA ES",
      strat_title_2: "ESTRATÉGICA?",
      pillar_1: "Reduce Lesiones",
      pillar_2: "Fortalece Bienestar",
      pillar_3: "Mejora Productividad",
      pillar_4: "Optimiza Recursos",
      pillar_5: "Cumplimiento Normativo",

      what_tag: "Enfoque Práctico",
      what_title: "¿QUÉ HACEMOS?",
      what_desc: "Observamos el trabajo real y proponemos mejoras prácticas adaptadas al contexto operativo.",
      what_callout: "Análisis técnico de posturas y alcances en maquinaria y estaciones de trabajo.",

      serv_tag: "Intervención Operativa",
      serv_title: "SERVICIOS EN TERRENO",

      s1_title: "EVALUACIÓN ERGONÓMICA DEL PUESTO",
      s1_desc: "Analizamos posturas, esfuerzos, movimientos repetitivos, estrés de contacto y condiciones del entorno para identificar riesgos y oportunidades de mejora en la tarea.",

      s2_title: "ERGONOMÍA PREVENTIVA",
      s2_desc: "Diseñamos acciones preventivas simples y efectivas que se integran al trabajo diario, reduciendo riesgos antes de que se manifiesten.",

      s3_title: "FACTORES PSICOSOCIALES",
      s3_desc: "Analizamos aspectos del trabajo que influyen en el bienestar, el ritmo laboral y la comunicación, fortaleciendo el clima laboral y la sostenibilidad del desempeño.",

      s4_title: "DIAGNÓSTICO INTEGRAL DE CONDICIONES DE TRABAJO",
      s4_desc: "Realizamos evaluaciones objetivas y globales que integran los riesgos físicos con la percepción del trabajador, generando diagnósticos claros y accionables.",

      s5_title: "ORGANIZACIÓN DEL TRABAJO",
      s5_desc: "Evaluamos la distribución de tareas, tiempos y flujos operativos para disminuir sobrecargas y mejorar el rendimiento global del equipo.",

      s6_title: "MEJORA DEL PUESTO Y HERRAMIENTAS",
      s6_desc: "Proponemos ajustes en puestos, métodos y herramientas para facilitar la tarea, reducir el esfuerzo innecesario y mejorar la experiencia de trabajo.",

      vcap_badge: "Sistema Dinámico & Dinámica de Gestión",
      vcap_title: "¿CÓMO TRABAJAMOS?",
      vcap_subtitle: "SISTEMA VCAP DE GESTIÓN DE RIESGOS ERGONÓMICOS",
      vcap_intro: "En entornos operativos complejos, la ergonomía no puede gestionarse como una acción aislada. Requiere un sistema estructurado, dinámico y orientado a resultados. El modelo VCAP integra diagnóstico, intervención y mejora continua, adaptado a su realidad.",

      vcap_v_action: "VALORAR",
      vcap_v_title: "DIAGNÓSTICO Y PRIORIZACIÓN DEL RIESGO ERGONÓMICO",
      vcap_v_desc: "Evaluación técnica basada en métodos reconocidos para medir y clasificar los riesgos en el sistema de trabajo.",
      vcap_v_li1: "Identificación de peligros en tareas reales.",
      vcap_v_li2: "Aplicación de metodologías (posturales, repetitividad, carga física).",
      vcap_v_li3: "Ponderación del riesgo (de niveles críticos a condiciones aceptables).",
      vcap_v_li4: "Generación de una línea base para la toma de decisiones.",

      vcap_c_action: "CREAR",
      vcap_c_title: "DISEÑO DE SOLUCIONES Y PROGRAMA ERGONÓMICO",
      vcap_c_desc: "Desarrollo de estrategias de intervención alineadas con la operación y los recursos de su empresa.",
      vcap_c_li1: "Diseño de medidas de control (ingeniería, administrativas y organizacionales).",
      vcap_c_li2: "Desarrollo de programas ergonómicos estructurados.",
      vcap_c_li3: "Integración con sistemas de gestión existentes.",
      vcap_c_li4: "Definición de responsables, indicadores y trazabilidad.",

      vcap_a_action: "APLICAR",
      vcap_a_title: "IMPLEMENTACIÓN EFECTIVA EN CAMPO",
      vcap_a_desc: "Puesta en marcha práctica de los controles ergonómicos garantizando la aceptación del personal.",
      vcap_a_li1: "Implementación de controles ergonómicos.",
      vcap_a_li2: "Capacitación y sensibilización del personal.",
      vcap_a_li3: "Acompañamiento en la ejecución de cambios.",
      vcap_a_li4: "Verificación de cumplimiento operativo.",

      vcap_p_action: "POTENCIAR",
      vcap_p_title: "SEGUIMIENTO, OPTIMIZACIÓN Y MEJORA CONTINUA",
      vcap_p_desc: "Aseguramiento de la sostenibilidad técnica y madurez de la cultura preventiva en la organización.",
      vcap_p_li1: "Seguimiento de indicadores ergonómicos.",
      vcap_p_li2: "Evaluación de efectividad de los controles.",
      vcap_p_li3: "Retroalimentación del sistema y mejora progresiva.",
      vcap_p_li4: "Consolidación de la cultura preventiva.",

      std_tag: "Rigor Normativo & Científico",
      std_title_1: "ESTÁNDARES Y REFERENCIAS",
      std_title_2: "TÉCNICAS EN ERGONOMÍA",
      std_sub_title: "RIGOR NORMATIVO Y PRECISIÓN TÉCNICA APLICADOS AL TRABAJO REAL",
      std_intro_desc: "En nuestros proyectos, fusionamos el cumplimiento estricto de la legislación boliviana con los estándares internacionales más avanzados. Este marco garantiza soluciones con validez legal y precisión científica, optimizando tanto el bienestar del trabajador como la productividad de la empresa.",

      std_bolivia_card_title: "MARCO NORMATIVO NACIONAL (BOLIVIA)",
      std_bolivia_card_desc: "Nuestra gestión asegura la conformidad ante entes reguladores bolivianos según normativa SST (NTS & NB).",
      std_bolivia_btn: "Ver Marco Normativo Bolivia",

      std_intl_card_title: "ESTÁNDARES INTERNACIONALES (ISO & SAE)",
      std_intl_card_desc: "Criterios técnicos de alta precisión para el análisis de factores humanos y diseño ergonómico de ingeniería.",
      std_intl_btn: "Ver Estándares ISO / SAE",

      sci_title: "REFERENCIAS CIENTÍFICAS Y ORGANISMOS DE SALUD",
      sci_subtitle: "Nuestras metodologías están respaldadas por las instituciones líderes a nivel mundial:",
      sci_quality_title: "GARANTÍA DE CALIDAD BASADA EN EVIDENCIA",
      sci_quality_desc: "Este robusto respaldo técnico nos permite desarrollar soluciones basadas en evidencia, integrando con exactitud el diseño del puesto, las capacidades humanas y las exigencias del entorno laboral.",

      about_tag: "Liderazgo & Experiencia",
      about_title_1: "DETRÁS DE LA",
      about_title_2: "ERGONOMÍA",
      about_motto: "DISEÑAR EL TRABAJO PENSANDO EN LAS PERSONAS",
      about_p1: "Diseñadora Industrial de la Universidad de Chile, especialista en Ergonomía y con formación de posgrado en Educación Superior.",
      about_p2: "Cuenta con formación internacional en Evaluación de la Ergonomía de Puestos de Trabajo por la Universitat Politècnica de València, España.",
      about_p3: "Actualmente realiza un Doctorado en Ciencias de la Ingeniería, centrado en el desarrollo de un sistema complejo de gestión ergonómica.",
      about_p4: "Cuenta con amplia experiencia en docencia e investigación universitaria, así como en la producción académica, con libros y artículos científicos vinculados al diseño, la ergonomía y la ingeniería.",
      about_equip: "NUESTRO EQUIPO PROFESIONAL",
      about_p5: "Contamos con un equipo multidisciplinario de profesionales especializados, comprometidos con brindar servicios técnicos basados en conocimiento especializado, experiencia y criterios profesionales reconocidos.Nuestro equipo está compuesto por profesionales altamente calificados, con una amplia experiencia en el campo de la ergonomía y la seguridad en el trabajo.",
  

      contact_tag: "Inicie su Evaluación",
      contact_title: "CONTACTO DIRECTO",
      contact_desc: "Conversemos sobre cómo optimizar la salud de sus colaboradores y la eficiencia de sus operaciones.",
      form_name: "Nombre completo",
      form_email: "Correo electrónico",
      form_message: "Cuéntenos algo que nos ayude a prepararnos para la reunión",
      form_submit: "Enviar Solicitud",
      contact_direct_dm: "DM Carla Álvarez",
      contact_phone: "Cel / WhatsApp",
      contact_address_label: "Ubicación",
      contact_address: "Av. José María Avilés Nº 3547. Tarija - Bolivia.",
      footer_rights: "Todos los derechos reservados. Ergonomía Aplicada al Trabajo Real.",  
      footer_goback: "Volver arriba",
    },
    en: {
      nav_home: "Home",
      nav_services: "Services",
      nav_methodology: "Methodology",
      nav_standards: "Standards",
      nav_about: "About Us",
      nav_contact: "Contact",

      hero_badge: "Precision Ergonomics & OHS",
      hero_title_main: "ERGONOMICS APPLIED TO REAL WORK",
      hero_subtitle: "HEALTHIER, MORE EFFICIENT AND SUSTAINABLE TASKS.",
      hero_description: "Ergonomic solutions oriented toward injury prevention and operational performance enhancement in real workplace contexts.",
      hero_btn_eval: "Request Evaluation",
      hero_btn_services: "View Services",

      strat_tag: "Proven Impact",
      strat_title_1: "WHY IS ERGONOMICS",
      strat_title_2: "STRATEGIC?",
      pillar_1: "Reduces Injuries",
      pillar_2: "Strengthens Well-being",
      pillar_3: "Boosts Productivity",
      pillar_4: "Optimizes Resources",
      pillar_5: "Regulatory Compliance",

      what_tag: "Hands-on Approach",
      what_title: "WHAT WE DO",
      what_desc: "We observe real work and propose practical improvements adapted to the operational context.",
      what_callout: "Technical analysis of postures and reaches in machinery and workstations.",

      serv_tag: "On-Site Operations",
      serv_title: "FIELD SERVICES",

      s1_title: "WORKSTATION ERGONOMIC EVALUATION",
      s1_desc: "We examine postures, physical efforts, repetitive movements, contact stress, and environmental factors to identify risks and opportunities for improvement in the task.",

      s2_title: "PREVENTIVE ERGONOMICS",
      s2_desc: "We design simple and effective preventive actions that integrate seamlessly into daily work, minimizing risks before they manifest.",

      s3_title: "PSYCHOSOCIAL FACTORS",
      s3_desc: "We analyze work aspects that affect well-being, work pace, and communication, strengthening the organizational climate and performance sustainability.",

      s4_title: "COMPREHENSIVE WORKING CONDITIONS DIAGNOSIS",
      s4_desc: "We conduct objective and comprehensive assessments integrating physical hazards with employee perception, generating clear and actionable diagnostics.",

      s5_title: "WORK ORGANIZATION",
      s5_desc: "We evaluate task distribution, time scheduling, and operational workflows to alleviate overloads and enhance global team performance.",

      s6_title: "WORKSTATION & TOOL IMPROVEMENT",
      s6_desc: "We propose targeted adjustments to workstations, methods, and tools to streamline tasks, remove unnecessary strain, and improve the work experience.",

      vcap_badge: "Structured Risk Framework",
      vcap_title: "HOW DO WE WORK?",
      vcap_subtitle: "VCAP ERGONOMIC RISK MANAGEMENT SYSTEM",
      vcap_intro: "In complex operational settings, ergonomics cannot be managed as an isolated event. It demands a structured, dynamic, and results-driven system. The VCAP model combines diagnosis, intervention, and continuous improvement, tailored to your workplace reality.",

      vcap_v_action: "VALUE (ASSESS)",
      vcap_v_title: "DIAGNOSIS & ERGONOMIC RISK PRIORITIZATION",
      vcap_v_desc: "Technical evaluation using recognized methodologies to quantify and classify work system risks.",
      vcap_v_li1: "Hazard identification in real operational tasks.",
      vcap_v_li2: "Application of validated methods (posture, repetition, physical load).",
      vcap_v_li3: "Risk weighting (from critical hazards to acceptable conditions).",
      vcap_v_li4: "Generation of an evidence-based decision baseline.",

      vcap_c_action: "CREATE",
      vcap_c_title: "SOLUTION DESIGN & ERGONOMIC PROGRAM",
      vcap_c_desc: "Development of targeted intervention strategies aligned with company operations and resources.",
      vcap_c_li1: "Control measure engineering (technical, administrative, organizational).",
      vcap_c_li2: "Development of structured ergonomic programs.",
      vcap_c_li3: "Integration with existing corporate OHS management systems.",
      vcap_c_li4: "Definition of ownership, performance indicators, and traceability.",

      vcap_a_action: "APPLY",
      vcap_a_title: "EFFECTIVE ON-SITE IMPLEMENTATION",
      vcap_a_desc: "Hands-on rollout of ergonomic controls ensuring acceptance and operational discipline.",
      vcap_a_li1: "Deployment of physical and procedural ergonomic controls.",
      vcap_a_li2: "Staff training, awareness, and postural coaching.",
      vcap_a_li3: "Field guidance during operational changes.",
      vcap_a_li4: "Operational compliance verification and audit.",

      vcap_p_action: "POWER UP (SUSTAIN)",
      vcap_p_title: "MONITORING, OPTIMIZATION & CONTINUOUS IMPROVEMENT",
      vcap_p_desc: "Long-term safeguarding of technical ergonomics and organizational preventive culture.",
      vcap_p_li1: "Ongoing monitoring of ergonomic KPI metrics.",
      vcap_p_li2: "Post-intervention effectiveness evaluation.",
      vcap_p_li3: "System feedback loops and iterative refinement.",
      vcap_p_li4: "Consolidation of an enduring preventive workplace culture.",

      std_tag: "Technical & Scientific Rigor",
      std_title_1: "STANDARDS & TECHNICAL",
      std_title_2: "REFERENCES IN ERGONOMICS",
      std_sub_title: "REGULATORY RIGOR AND SCIENTIFIC PRECISION APPLIED TO REAL WORK",
      std_intro_desc: "In our projects, we merge strict compliance with Bolivian legislation with leading international human factors engineering standards. This framework guarantees solutions backed by legal validity and scientific precision.",

      std_bolivia_card_title: "NATIONAL REGULATORY FRAMEWORK (BOLIVIA)",
      std_bolivia_card_desc: "Our management ensures full compliance with Bolivian OHS authorities and regulations (NTS & NB).",
      std_bolivia_btn: "View Bolivia Regulatory Details",

      std_intl_card_title: "INTERNATIONAL STANDARDS (ISO & SAE)",
      std_intl_card_desc: "High-precision technical criteria for human factors analysis and ergonomic engineering design.",
      std_intl_btn: "View ISO / SAE Standards",

      sci_title: "SCIENTIFIC REFERENCES & HEALTH BODIES",
      sci_subtitle: "Our methodologies are supported by globally recognized authority institutions:",
      sci_quality_title: "EVIDENCE-BASED QUALITY GUARANTEE",
      sci_quality_desc: "This robust technical foundation enables us to craft evidence-based solutions that harmonize workstation design, human physical capacities, and operational demands.",

      about_tag: "Leadership & Track Record",
      about_title_1: "BEHIND THE",
      about_title_2: "ERGONOMICS",
      about_motto: "DESIGNING WORK AROUND PEOPLE",
      about_p1: "Industrial Designer from Universidad de Chile, specialist in Ergonomics with postgraduate credentials in Higher Education.",
      about_p2: "International specialization in Workstation Ergonomic Evaluation from Universitat Politècnica de València, Spain.",
      about_p3: "Currently pursuing a Ph.D. in Engineering Sciences, focused on complex ergonomic management systems.",
      about_p4: "Extensive university lecturing and research experience, with authored books and peer-reviewed scientific papers in design, ergonomics, and engineering.",
      about_equip: "OUR PROFESSIONAL TEAM",
      about_p5: "We have a multidisciplinary team of specialized professionals committed to providing technical services based on specialized knowledge, experience, and recognized professional standards. Our team consists of highly qualified professionals with extensive experience in the fields of ergonomics and workplace safety.",

      contact_tag: "Initiate Your Consultation",
      contact_title: "DIRECT CONTACT",
      contact_desc: "Let us discuss how to protect your team's physical health while maximizing operational efficiency.",
      form_name: "Full Name",
      form_email: "Corporate Email",
      form_message: "Tell us about your operational context to prepare our meeting",
      form_submit: "Send Request",
      contact_direct_dm: "DM Carla Álvarez",
      contact_phone: "Phone / WhatsApp",
      contact_address_label: "Address",
      contact_address: "Av. José María Avilés Nº 3547. Tarija - Bolivia.",
      footer_rights: "All rights reserved. Ergonomics Applied to Real Work.",
      footer_goback: "Back to Top"
    }
  };

  let currentLang = 'es';

  function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    document.querySelectorAll('.lang-pill').forEach(pill => {
      if (pill.getAttribute('data-lang') === lang) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    localStorage.setItem('calvarez_lang', lang);
  }

  // =========================================================================
  // 2. THEME SWITCHER (Light / Dark Mode)
  // =========================================================================
  const themeBtn = document.getElementById('theme-toggle');
  
  function initTheme() {
    const savedTheme = localStorage.getItem('calvarez_theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      updateThemeIcon(true);
    } else {
      document.body.classList.remove('dark-theme');
      updateThemeIcon(false);
    }
  }

  function updateThemeIcon(isDark) {
    if (!themeBtn) return;
    themeBtn.innerHTML = isDark
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`;
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-theme');
      localStorage.setItem('calvarez_theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    });
  }

  // =========================================================================
  // 3. ANTIGRAVITY MORPHING PARTICLES & PHYSICS CANVAS
  // =========================================================================
  function initAntigravityCanvas() {
    const canvas = document.getElementById('antigravity-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width * 0.5,
      y: height * 0.5,
      prevX: width * 0.5,
      prevY: height * 0.5,
      radius: 170,
      active: false
    };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
      mouse.active = false;
    });

    // Particle class with physics repulsion (Anti-Gravity effect)
    class Particle {
      constructor(x, y) {
        this.originX = x;
        this.originY = y;
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 1.2;
        this.baseColor = Math.random() > 0.4 ? 'rgba(143, 184, 42, ' : 'rgba(0, 194, 203, ';
        this.alpha = Math.random() * 0.5 + 0.2;
        this.friction = 0.92;
        this.spring = 0.035;
      }

      update() {
        // Distance to cursor
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (mouse.active && dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 7;
          const angle = Math.atan2(dy, dx);
          // Repel from cursor (anti-gravity deflection)
          this.vx -= Math.cos(angle) * force;
          this.vy -= Math.sin(angle) * force;
        }

        // Spring back to home position
        const homeDx = this.originX - this.x;
        const homeDy = this.originY - this.y;
        this.vx += homeDx * this.spring;
        this.vy += homeDy * this.spring;

        // Apply friction
        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        ctx.fillStyle = this.baseColor + this.alpha + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let particles = [];
    function initParticles() {
      particles = [];
      const density = Math.floor((width * height) / 16000);
      const count = Math.min(Math.max(density, 45), 110);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push(new Particle(x, y));
      }
    }

    initParticles();

    // Subtle sinusoidal wave animation overlay
    let waveOffset = 0;
    function drawWaves() {
      waveOffset += 0.015;
      const isDark = document.body.classList.contains('dark-theme');
      ctx.strokeStyle = isDark ? 'rgba(143, 184, 42, 0.08)' : 'rgba(0, 92, 110, 0.06)';
      ctx.lineWidth = 1;

      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 15) {
          const y = height * (0.35 + j * 0.22) +
            Math.sin(x * 0.003 + waveOffset + j) * 45 +
            Math.cos(x * 0.0015 - waveOffset * 0.5) * 25;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      // Draw interactive connections
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const isDark = document.body.classList.contains('dark-theme');
            const linkAlpha = (1 - dist / 110) * (isDark ? 0.18 : 0.09);
            ctx.strokeStyle = `rgba(143, 184, 42, ${linkAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      drawWaves();
      requestAnimationFrame(render);
    }

    render();
  }

  // =========================================================================
  // 4. CUSTOM MAGNETIC CURSOR (Antigravity Style)
  // =========================================================================
  function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const dot = document.getElementById('custom-cursor-dot');
    const badge = document.getElementById('custom-cursor-badge');
    if (!cursor || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let isHovering = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function updateCursor() {
      // Lerp smoothing
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Interactive element hover listeners
    const interactiveElements = document.querySelectorAll(
      'a, button, .service-card, .norm-modal-card, .vcap-card, .pillar-item, .ergonomic-hotspot'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        isHovering = true;
        let badgeText = el.getAttribute('data-cursor-badge') || 'Ver';
        if (badge) badge.textContent = badgeText;
      });

      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        isHovering = false;
      });
    });
  }

  // =========================================================================
  // 5. STICKY HEADER & MOBILE DRAWER
  // =========================================================================
  function initHeader() {
    const headerWrapper = document.getElementById('header-wrapper');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        headerWrapper.classList.add('scrolled');
      } else {
        headerWrapper.classList.remove('scrolled');
      }
    });

    if (menuToggle && mobileDrawer) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        mobileDrawer.classList.toggle('open');
        document.body.style.overflow = mobileDrawer.classList.contains('open') ? 'hidden' : '';
      });

      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          menuToggle.classList.remove('open');
          mobileDrawer.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }
  }

  // =========================================================================
  // 6. SERVICES CAROUSEL / SLIDER (Touch & Drag)
  // =========================================================================
  function initServicesSlider() {
    const track = document.getElementById('services-track');
    const prevBtn = document.getElementById('services-prev');
    const nextBtn = document.getElementById('services-next');
    const dotsContainer = document.getElementById('services-dots');
    const wrapper = document.getElementById('services-carousel-wrapper');

    if (!track || !wrapper) return;

    const cards = track.querySelectorAll('.service-card');
    const totalCards = cards.length;
    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    // Generate pagination dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        dot.setAttribute('aria-label', `Ir a servicio ${i + 1}`);
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
    }

    function getVisibleCardsCount() {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }

    function updateSlider() {
      const visibleCount = getVisibleCardsCount();
      const maxIndex = Math.max(0, totalCards - visibleCount);
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      if (currentIndex < 0) currentIndex = 0;

      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = 28;
      currentTranslate = -currentIndex * (cardWidth + gap);
      prevTranslate = currentTranslate;
      track.style.transform = `translateX(${currentTranslate}px)`;

      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((d, idx) => {
          d.classList.toggle('active', idx === currentIndex);
        });
      }
    }

    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const visibleCount = getVisibleCardsCount();
        const maxIndex = totalCards - visibleCount;
        if (currentIndex < maxIndex) {
          currentIndex++;
        } else {
          currentIndex = 0; // loop
        }
        updateSlider();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          const visibleCount = getVisibleCardsCount();
          currentIndex = Math.max(0, totalCards - visibleCount);
        }
        updateSlider();
      });
    }

    // Drag & Swipe listeners
    wrapper.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      track.style.transition = 'none';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const currentX = e.clientX;
      const diff = currentX - startX;
      track.style.transform = `translateX(${prevTranslate + diff}px)`;
    });

    window.addEventListener('mouseup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      track.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
      const diff = e.clientX - startX;
      if (diff < -60) {
        const visibleCount = getVisibleCardsCount();
        if (currentIndex < totalCards - visibleCount) currentIndex++;
      } else if (diff > 60) {
        if (currentIndex > 0) currentIndex--;
      }
      updateSlider();
    });

    // Touch support
    wrapper.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      track.style.transition = 'none';
    }, { passive: true });

    wrapper.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      track.style.transform = `translateX(${prevTranslate + diff}px)`;
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      track.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
      const diff = e.changedTouches[0].clientX - startX;
      if (diff < -50) {
        const visibleCount = getVisibleCardsCount();
        if (currentIndex < totalCards - visibleCount) currentIndex++;
      } else if (diff > 50) {
        if (currentIndex > 0) currentIndex--;
      }
      updateSlider();
    });

    window.addEventListener('resize', updateSlider);
  }

  // =========================================================================
  // 7. VCAP INTERACTIVE 4-PHASE SYSTEM
  // =========================================================================
  function initVCAP() {
    const tabs = document.querySelectorAll('.vcap-tab-btn');
    const cards = document.querySelectorAll('.vcap-card');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const phase = tab.getAttribute('data-vcap');

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        cards.forEach(card => {
          if (card.getAttribute('data-phase') === phase) {
            card.classList.add('active');
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          } else {
            card.classList.remove('active');
          }
        });
      });
    });

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const phase = card.getAttribute('data-phase');
        tabs.forEach(t => {
          t.classList.toggle('active', t.getAttribute('data-vcap') === phase);
        });
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  }

  // =========================================================================
  // 8. 3D CARD TILT EFFECT (Subtle Modern Touch)
  // =========================================================================
  function init3DTilt() {
    const tiltCards = document.querySelectorAll('.service-card, .norm-modal-card, .about-photo-card');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // =========================================================================
  // 9. MODALS ENGINE (Bolivia SST & International ISO/SAE)
  // =========================================================================
  function initModals() {
    const triggers = document.querySelectorAll('[data-modal-target]');
    const closeBtns = document.querySelectorAll('.modal-close-btn');
    const overlays = document.querySelectorAll('.modal-overlay');

    triggers.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-modal-target');
        const modal = document.getElementById(targetId);
        if (modal) {
          modal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    function closeAllModals() {
      overlays.forEach(m => m.classList.remove('open'));
      document.body.style.overflow = '';
    }

    closeBtns.forEach(btn => {
      btn.addEventListener('click', closeAllModals);
    });

    overlays.forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          closeAllModals();
        }
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllModals();
    });
  }

  // =========================================================================
  // 10. CONTACT FORM & DIRECT ACTIONS
  // =========================================================================
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const toast = document.getElementById('toast-msg');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email) {
        alert('Por favor complete los campos obligatorios.');
        return;
      }

      // Show toast confirmation
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 5000);
      }

      // Optionally compose WhatsApp link
      const text = encodeURIComponent(
        `Hola Carla Álvarez, soy ${name} (${email}). Consulta: ${message || 'Deseo solicitar una evaluación ergonómica.'}`
      );
      const waUrl = `https://wa.me/59165812090?text=${text}`;

      // Reset form
      form.reset();

      // Open WhatsApp in new tab
      window.open(waUrl, '_blank');
    });
  }

  // =========================================================================
  // 11. INITIALIZATION & BINDING
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initAntigravityCanvas();
    initCustomCursor();
    initHeader();
    initServicesSlider();
    initVCAP();
    init3DTilt();
    initModals();
    initContactForm();

    // Language Toggle Click Handlers
    const langPills = document.querySelectorAll('.lang-pill');
    langPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const lang = pill.getAttribute('data-lang');
        setLanguage(lang);
      });
    });

    // Check saved language
    const savedLang = localStorage.getItem('calvarez_lang') || 'es';
    setLanguage(savedLang);
  });

})();
