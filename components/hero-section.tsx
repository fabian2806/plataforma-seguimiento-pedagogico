import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Play, ShieldCheck, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="bg-white pt-6 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[#EEF2FF] text-[#8B5CF6] border border-[#C4B5FD]">
            Proyecto de Tesis · Setiembre 2025 – Febrero 2026
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div>
            <h1 className="text-3xl lg:text-[2.6rem] font-extrabold text-[#1E3A5F] leading-[1.15] text-balance mb-3">
              Sistema de Información para el Seguimiento de Estudiantes con Discapacidad Auditiva
            </h1>

            <p className="text-base font-semibold text-[#374151] mb-3">
              Gestión pedagógica longitudinal, inclusiva y centrada en la familia
            </p>

            <p className="text-sm text-[#6B7280] leading-relaxed mb-8">
              Plataforma web que digitaliza el expediente nominal del estudiante, centraliza la
              comunicación entre docentes, familias y el equipo SAANEE, y estandariza el
              seguimiento pedagógico de estudiantes con discapacidad auditiva.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              <Button
                className="gap-2 bg-[#1E3A5F] hover:bg-[#16304f] text-white text-sm font-semibold rounded-md px-5 py-2.5"
              >
                <LayoutDashboard size={15} />
                Iniciar sesión en la plataforma
              </Button>
              <Button
                variant="outline"
                className="gap-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#F3F4F6] text-sm font-semibold rounded-md px-5 py-2.5"
              >
                <Play size={13} className="fill-[#1E3A5F]" />
                Ver recorrido del sistema
              </Button>
            </div>

            <p className="flex items-center gap-2 text-xs text-[#9CA3AF]">
              <ShieldCheck size={13} className="text-[#6B7280]" />
              Acceso seguro para Docentes, Familias y Equipo SAANEE. Interfaz accesible y compatible con LSP.
            </p>
          </div>

          {/* Right: Photo + floating badges */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB] aspect-[4/3]">
              <Image
                src="/images/hero-student.jpg"
                alt="Docente y estudiante practicando lengua de señas"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Top-right badge */}
            <div className="absolute -top-3 right-4 bg-white rounded-lg shadow-md border border-[#E5E7EB] px-3 py-2 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#22C55E]" />
              <span className="text-xs font-semibold text-[#374151]">Lengua de Señas Peruana (LSP)</span>
            </div>

            {/* Bottom badges */}
            <div className="absolute -bottom-3 left-3 flex gap-2">
              <div className="bg-white rounded-lg shadow-md border border-[#E5E7EB] px-3 py-2 flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#22C55E]" />
                <span className="text-xs font-semibold text-[#374151]">Seguimiento longitudinal</span>
              </div>
              <div className="bg-white rounded-lg shadow-md border border-[#E5E7EB] px-3 py-2 flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#22C55E]" />
                <span className="text-xs font-semibold text-[#374151]">Trabajo con familias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
