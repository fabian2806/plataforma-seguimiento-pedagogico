const steps = [
  {
    number: "01",
    title: "Registro de la institución",
    description:
      "La institución educativa se registra en SignaEdu. Se configuran los perfiles de docentes, especialistas SAANEE y se vinculan los estudiantes con discapacidad auditiva.",
  },
  {
    number: "02",
    title: "Vinculación de familias",
    description:
      "Los padres y tutores reciben una invitación para crear su cuenta. Se establece el canal de comunicación directa con el equipo educativo de su hijo.",
  },
  {
    number: "03",
    title: "Seguimiento continuo",
    description:
      "Docentes y especialistas SAANEE registran avances, crean planes de intervención y generan informes. Las familias acceden a actualizaciones en tiempo real.",
  },
  {
    number: "04",
    title: "Mejora y adaptación",
    description:
      "La plataforma genera análisis del progreso estudiantil. El equipo educativo ajusta estrategias pedagógicas y celebra los logros alcanzados.",
  },
]

export function HowItWorks() {
  return (
    <section id="plataforma" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.42 0.12 210)" }}>
              Como funciona
            </p>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-foreground text-balance leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              De la inscripcion al
              seguimiento integral
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              SignaEdu se integra facilmente en los procesos de tu institucion educativa. En pocos pasos,
              tienes un ecosistema digital completo para el acompanamiento de estudiantes con discapacidad auditiva.
            </p>

            <div className="space-y-10">
              {steps.map((step, i) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                      style={{ background: "oklch(0.42 0.12 210)" }}
                    >
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 mt-2" style={{ background: "oklch(0.42 0.12 210 / 0.2)" }} />
                    )}
                  </div>
                  <div className="pb-10">
                    <h3
                      className="text-lg font-bold text-foreground mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual mockup */}
          <div className="relative">
            <div
              className="rounded-3xl p-8 space-y-5"
              style={{ background: "var(--hero-bg)" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold" style={{ color: "oklch(0.72 0.16 60)" }}>
                    INFORME MENSUAL
                  </p>
                  <p className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                    Sofia Rodriguez
                  </p>
                  <p className="text-sm" style={{ color: "oklch(0.65 0.03 210)" }}>
                    3° de Primaria · IE San Miguel
                  </p>
                </div>
                <div
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: "oklch(0.55 0.12 165 / 0.2)", color: "oklch(0.65 0.12 165)" }}
                >
                  Mayo 2025
                </div>
              </div>

              {/* Progress bars */}
              {[
                { area: "Comunicacion", value: 82, color: "oklch(0.42 0.12 210)" },
                { area: "Lectoescritura", value: 74, color: "oklch(0.55 0.12 165)" },
                { area: "Matematica", value: 90, color: "oklch(0.72 0.16 60)" },
                { area: "Habilidades Sociales", value: 68, color: "oklch(0.65 0.14 30)" },
              ].map((item) => (
                <div key={item.area}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-white font-medium">{item.area}</p>
                    <p className="text-sm font-bold text-white">{item.value}%</p>
                  </div>
                  <div className="h-2 rounded-full w-full" style={{ background: "oklch(0.20 0.03 215)" }}>
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${item.value}%`, background: item.color }}
                    />
                  </div>
                </div>
              ))}

              {/* Comment */}
              <div
                className="rounded-2xl p-4 mt-2"
                style={{ background: "oklch(0.30 0.05 215)" }}
              >
                <p className="text-xs font-semibold mb-1" style={{ color: "oklch(0.72 0.16 60)" }}>
                  Observacion SAANEE
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.80 0.02 210)" }}>
                  Sofia muestra avances significativos en comunicacion en lengua de senas. Se recomienda
                  continuar con sesiones de refuerzo en habilidades sociales.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-5 -right-5 rounded-2xl p-4 shadow-xl bg-white border border-border"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ background: "oklch(0.55 0.12 165)" }} />
                <p className="text-xs font-semibold text-foreground">Nuevo logro</p>
              </div>
              <p className="text-sm font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                Meta alcanzada
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">Comunicacion 80%+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
