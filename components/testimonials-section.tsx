import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "SignaEdu transformó la manera en que trabajo con mis estudiantes con discapacidad auditiva. Ahora puedo llevar un registro detallado y comunicarme con los padres sin esfuerzo.",
    name: "Prof. Carmen Valdivia",
    role: "Docente de Primaria",
    school: "IE Los Pinos",
    initials: "CV",
    color: "oklch(0.42 0.12 210)",
  },
  {
    quote:
      "Como especialista SAANEE, gestionar el seguimiento de múltiples estudiantes era muy complejo. Con esta plataforma tengo todo centralizado y puedo actuar rápido cuando un niño lo necesita.",
    name: "Lic. Roberto Quispe",
    role: "Especialista SAANEE",
    school: "UGEL Norte",
    initials: "RQ",
    color: "oklch(0.55 0.12 165)",
    featured: true,
  },
  {
    quote:
      "Por fin puedo saber cómo va mi hija en el colegio sin esperar meses. Recibo notificaciones de sus logros y puedo escribirle directamente a su maestra. Es increíble.",
    name: "María Elena Torres",
    role: "Madre de familia",
    school: "IE San Miguel",
    initials: "MT",
    color: "oklch(0.72 0.16 60)",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24" style={{ background: "var(--section-alt)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.42 0.12 210)" }}>
            Testimonios
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-foreground text-balance leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Lo que dice nuestra
            comunidad educativa
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`bg-white rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                t.featured ? "ring-2" : ""
              }`}
              style={{
                borderColor: t.featured ? t.color : "var(--border)",
                ringColor: t.featured ? t.color : undefined,
              }}
            >
              <div>
                <Quote size={28} className="mb-5" style={{ color: t.color }} />
                <p className="text-foreground leading-relaxed text-sm mb-8">
                  &quot;{t.quote}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs text-muted-foreground">{t.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact numbers */}
        <div
          className="mt-16 rounded-3xl p-12 grid grid-cols-2 lg:grid-cols-4 gap-10"
          style={{ background: "var(--hero-bg)" }}
        >
          {[
            { value: "+120", label: "Estudiantes registrados" },
            { value: "15+", label: "Instituciones aliadas" },
            { value: "98%", label: "Satisfaccion docente" },
            { value: "3x", label: "Mejora en comunicacion familiar" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-5xl font-extrabold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "oklch(0.72 0.16 60)" }}
              >
                {stat.value}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.70 0.03 210)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
