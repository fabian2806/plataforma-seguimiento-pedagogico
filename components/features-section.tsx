import {
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  FileText,
  MessageSquare,
  Shield,
  Smartphone,
} from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Seguimiento en tiempo real",
    description: "Visualiza el progreso academico y comunicativo de cada estudiante con graficos interactivos actualizados automaticamente.",
    size: "large",
  },
  {
    icon: MessageSquare,
    title: "Comunicacion integrada",
    description: "Chat seguro entre docentes, especialistas SAANEE y familias, con historial completo de conversaciones.",
    size: "small",
  },
  {
    icon: FileText,
    title: "Informes automaticos",
    description: "Genera informes pedagogicos detallados con un clic, listos para imprimir o compartir digitalmente.",
    size: "small",
  },
  {
    icon: BookOpen,
    title: "Planes de intervencion",
    description: "Crea y gestiona planes de intervencion personalizados por estudiante, con metas medibles y fechas de revision.",
    size: "large",
  },
  {
    icon: Bell,
    title: "Alertas inteligentes",
    description: "Notificaciones automaticas cuando un estudiante presenta rezago o alcanza un logro importante.",
    size: "small",
  },
  {
    icon: Calendar,
    title: "Gestion de agenda",
    description: "Programa sesiones SAANEE, reuniones con familias y evaluaciones directamente en la plataforma.",
    size: "small",
  },
  {
    icon: Shield,
    title: "Privacidad y seguridad",
    description: "Datos protegidos con cifrado de extremo a extremo. Cumple con normativas de proteccion de datos educativos.",
    size: "small",
  },
  {
    icon: Smartphone,
    title: "Acceso movil",
    description: "Disponible en cualquier dispositivo. App web responsiva optimizada para uso desde celular.",
    size: "small",
  },
]

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-24" style={{ background: "var(--section-alt)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.42 0.12 210)" }}>
            Funcionalidades
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-foreground text-balance leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Todo lo que necesitas
            <br />
            en un solo lugar
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Herramientas especificamente disenadas para el seguimiento pedagogico de estudiantes
            con discapacidad auditiva en instituciones educativas inclusivas.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Feature 1 - large */}
          <FeatureCard feature={features[0]} className="md:col-span-2 lg:col-span-2" />
          {/* Feature 2 */}
          <FeatureCard feature={features[1]} />
          {/* Feature 3 */}
          <FeatureCard feature={features[2]} />
          {/* Feature 4 */}
          <FeatureCard feature={features[4]} />
          {/* Feature 5 */}
          <FeatureCard feature={features[5]} />
          {/* Feature 6 - large */}
          <FeatureCard feature={features[3]} className="md:col-span-2 lg:col-span-2" />
          {/* Feature 7 */}
          <FeatureCard feature={features[6]} />
          {/* Feature 8 */}
          <FeatureCard feature={features[7]} />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  className = "",
}: {
  feature: (typeof features)[0]
  className?: string
}) {
  const Icon = feature.icon
  return (
    <div
      className={`bg-white rounded-2xl p-7 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: "oklch(0.42 0.12 210 / 0.1)" }}
      >
        <Icon size={22} style={{ color: "oklch(0.42 0.12 210)" }} />
      </div>
      <h3
        className="text-lg font-bold text-foreground mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
    </div>
  )
}
