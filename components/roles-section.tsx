import { FileText, CalendarCheck, MessageSquare } from "lucide-react"

const modules = [
  {
    icon: FileText,
    title: "Expediente Nominal Digital",
    description:
      "Historial pedagógico completo, evolución, indicadores e informes en un solo lugar.",
  },
  {
    icon: CalendarCheck,
    title: "Coordinación y Eventos",
    description:
      "Agenda compartida, citaciones, confirmación de asistencia y registro de resultados.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación en Tiempo Real",
    description:
      "Observaciones diarias, notificaciones y seguimiento conjunto con las familias.",
  },
]

export function RolesSection() {
  return (
    <section id="modulos" className="bg-[#F3F4F6] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl font-bold text-[#1E3A5F] text-center mb-8">
          ¿Qué incluye el sistema?
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {modules.map((mod) => {
            const Icon = mod.icon
            return (
              <div
                key={mod.title}
                className="bg-white rounded-xl p-5 border border-[#E5E7EB] flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#3B82F6]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1E3A5F] mb-1">{mod.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{mod.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
