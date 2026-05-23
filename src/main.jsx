import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  Briefcase,
  Scale,
  ShieldCheck,
  FileText,
  Search,
  Users,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ChevronRight,
  Menu,
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: Briefcase,
    title: "Derecho corporativo",
    text: "Asesoría integral para empresas, contratos, gobiernos corporativos, negociación y prevención de contingencias.",
  },
  {
    icon: Users,
    title: "Derecho laboral",
    text: "Defensa estratégica, autodespidos, investigaciones internas, cumplimiento laboral y relaciones con trabajadores.",
  },
  {
    icon: Scale,
    title: "Litigios y arbitrajes",
    text: "Representación judicial, diseño de teoría del caso, gestión probatoria y solución eficiente de controversias.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance y ética",
    text: "Modelos preventivos, protocolos, matrices de riesgo, control interno y cultura de cumplimiento.",
  },
  {
    icon: Search,
    title: "Investigaciones internas",
    text: "Sumarios, investigaciones corporativas, entrevistas, análisis documental e informes ejecutivos.",
  },
  {
    icon: FileText,
    title: "Informes jurídicos",
    text: "Opiniones legales, análisis normativo, dictámenes privados, revisión de documentos y estrategia legal.",
  },
];

const strengths = [
  "Enfoque personalizado",
  "Confidencialidad estricta",
  "Visión estratégica",
  "Respuesta oportuna",
];

function Logo({ compact = false }) {
  return (
    <div className="logo">
      <div className="logo-mark">
        <span className="logo-s">S</span>
        <span className="logo-b">B</span>
      </div>
      {!compact && (
        <div className="logo-text">
          <div className="logo-name">SOLAR BONILLA</div>
          <div className="logo-sub">
            <span></span>ABOGADOS<span></span>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav>
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#areas">Áreas</a>
            <a href="#metodo">Método</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a className="btn btn-outline header-button" href="#contacto">
            Agenda una reunión
          </a>
          <button className="menu-button" aria-label="Menú">
            <Menu />
          </button>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Asesoría jurídica estratégica</p>
            <h1>Derecho corporativo, laboral y estratégico para empresas y personas.</h1>
            <div className="divider"></div>
            <p className="hero-text">
              Solar Bonilla Abogados entrega soluciones legales de alto estándar, con criterio empresarial,
              confidencialidad y defensa rigurosa de los intereses del cliente.
            </p>
            <div className="hero-actions">
              <a className="btn btn-light" href="#areas">
                Nuestros servicios <ChevronRight size={16} />
              </a>
              <a className="btn btn-outline" href="#contacto">
                Contacto
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="brand-card"
          >
            <div className="brand-logo-box">
              <div className="brand-mark">
                <span className="brand-s">S</span>
                <span className="brand-b">B</span>
              </div>
              <div className="brand-name">SOLAR BONILLA</div>
              <div className="brand-sub">ABOGADOS</div>
            </div>
            <div className="strength-grid">
              {strengths.map((item) => (
                <div key={item} className="strength-item">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="nosotros" className="about">
        <div className="container split">
          <div>
            <p className="eyebrow dark">Nosotros</p>
            <h2>Asesoría legal con visión jurídica y criterio de negocio.</h2>
          </div>
          <div className="body-copy">
            <p>
              La práctica se orienta a entregar acompañamiento jurídico permanente, defensa estratégica y soluciones
              preventivas para empresas, ejecutivos y personas que requieren decisiones legales claras, fundadas y
              oportunas.
            </p>
            <p>
              El sello de Solar Bonilla Abogados combina rigor técnico, pensamiento estratégico, confidencialidad y
              capacidad de transformar problemas complejos en cursos de acción concretos.
            </p>
          </div>
        </div>
      </section>

      <section id="areas" className="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">Áreas de práctica</p>
            <h2>Servicios jurídicos especializados</h2>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="service-card">
                <Icon className="service-icon" strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="method">
        <div className="container split">
          <div>
            <p className="eyebrow">Método de trabajo</p>
            <h2>Claridad, estrategia y ejecución.</h2>
          </div>
          <div className="method-grid">
            {[
              ["01", "Diagnóstico jurídico y comercial del caso."],
              ["02", "Definición de riesgos, objetivos y alternativas."],
              ["03", "Ejecución documental, judicial o negociadora."],
              ["04", "Seguimiento, reporte y ajuste estratégico."],
            ].map(([n, t]) => (
              <div key={n} className="method-item">
                <div>{n}</div>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow dark">Contacto</p>
            <h2>Conversemos sobre su asunto legal.</h2>
            <p className="contact-text">
              Para consultas, representación o asesoría permanente, complete el formulario o solicite directamente una
              reunión profesional.
            </p>
            <div className="contact-list">
              <div><Mail /> contacto@solarbonilla.cl</div>
              <div><Phone /> +56 9 XXXX XXXX</div>
              <div><MapPin /> Chile</div>
            </div>
          </div>
          <form
            className="contact-form"
            action="mailto:contacto@solarbonilla.cl"
            method="post"
            encType="text/plain"
          >
            <input name="nombre" placeholder="Nombre" />
            <input name="correo" placeholder="Correo" />
            <input name="telefono" placeholder="Teléfono" />
            <textarea name="mensaje" placeholder="Describa brevemente su consulta"></textarea>
            <button className="btn btn-primary" type="submit">
              <CalendarDays size={16} /> Solicitar reunión
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <Logo />
          <p>© {new Date().getFullYear()} Solar Bonilla Abogados. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
