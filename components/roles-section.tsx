import { GraduationCap, Users, Stethoscope, CheckCircle2 } from "lucide-react"

const roles = [
  {
    icon: GraduationCap,
    title: "Docentes",
    description:
      "Registra avances, crea informes pedagogicos y accede al historial de cada estudiante en tiempo real desde cualquier dispositivo.",
    features: [
      "Registro de logros por area curricular",
      "Generacion de informes automaticos",
      "Comunicacion directa con SAANEE",
      "Calendario de actividades adaptadas",
    ],
    color: "oklch(0.42 0.12 210)",
    lightBg: "oklch(0.42 0.12 210 / 0.08)",
    badge: "Para docentes",
  },
  {
    icon: Stethoscope,
    title: "Especialistas SAANEE",
    description:
      "Supervisa el progreso de multiples estudiantes, diseña estrategias de intervencion y coordina con los equipos educativos.",
    features: [
      "Panel de seguimiento multiestudiante",
      "Planes de intervencion personalizados",
      "Alertas de riesgo pedagogico",
      "Reportes estadisticos y visuales",
    ],
    color: "oklch(0.55 0.12 165)",
    lightBg: "oklch(0.55 0.12 165 / 0.08)",
    badge: "Para SAANEE",
    featured: true,
  },
  {
    icon: Users,
    title: "Padres y Familias",
    description:
      "Mantente informado del progreso escolar de tu hijo, comunicate con su equipo educativo y participa activamente en su desarrollo.",
    features: [
      "Seguimiento en tiempo real",
      "Notificaciones de avances y logros",
      "Chat con docentes y especialistas",
      "Acceso a recursos de apoyo en casa",
    ],
    color: "oklch(0.72 0.16 60)",
    lightBg: "oklch(0.72 0.16 60 / 0.08)",
    badge: "Para familias",
  },
]

export function RolesSection() {
  return (
    <section id="roles" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.42 0.12 210)" }}>
            Tres roles, una plataforma
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-foreground text-balance leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Disenado para cada miembro
            <br />
            del equipo educativo
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Cada rol tiene su propio espacio personalizado, con las herramientas exactas que necesita
            para apoyar al estudiante con discapacidad auditiva.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {roles.map((role) => {
            const Icon = role.icon
            return (
              <div
                key={role.title}
                className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  role.featured ? "ring-2" : ""
                }`}
                style={{
                  background: role.featured ? role.lightBg : "white",
                  borderColor: role.featured ? role.color : "var(--border)",
                  ringColor: role.featured ? role.color : undefined,
                }}
              >
                {role.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full text-white"
                    style={{ background: role.color }}
                  >
                    Nucleo SAANEE
                  </div>
                )}

                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-6"
                  style={{ background: role.lightBg, color: role.color }}
                >
                  {role.badge}
                </div>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: role.lightBg }}
                >
                  <Icon size={26} style={{ color: role.color }} />
                </div>

                <h3
                  className="text-2xl font-bold text-foreground mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {role.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  {role.description}
                </p>

                <ul className="space-y-3">
                  {role.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: role.color }}
                      />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
