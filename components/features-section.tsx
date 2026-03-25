import { Users, Target, Accessibility, ListChecks } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "3",
    label: "Roles integrados",
    sub: "Docente · Familia · SAANEE",
  },
  {
    icon: Target,
    value: "360°",
    label: "Seguimiento longitudinal",
    sub: "Evolución pedagógica continua",
  },
  {
    icon: Accessibility,
    value: "100%",
    label: "Enfoque inclusivo",
    sub: "Diseñado para LSP y accesibilidad",
  },
  {
    icon: ListChecks,
    value: "39",
    label: "Requisitos funcionales",
    sub: "Alineados al MINEDU",
  },
]

export function FeaturesSection() {
  return (
    <section id="beneficios" className="bg-[#1E3A5F] py-12">
      <div
        className="max-w-6xl mx-auto px-6"
        style={{
          background: "linear-gradient(135deg, #1E3A5F 0%, #312e81 100%)",
          borderRadius: "1rem",
        }}
      >
        <div className="rounded-xl py-10 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={20} className="text-[#93C5FD]" />
                    <span className="text-3xl font-extrabold text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm font-semibold text-white">{stat.label}</p>
                  <p className="text-xs text-[#93C5FD]">{stat.sub}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
