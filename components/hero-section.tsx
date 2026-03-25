import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.7 0.05 210) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.05 210) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative circle */}
      <div
        className="absolute right-[-180px] top-[-180px] w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "oklch(0.42 0.12 210)" }}
      />
      <div
        className="absolute left-[-100px] bottom-[-100px] w-[400px] h-[400px] rounded-full opacity-8"
        style={{ background: "oklch(0.72 0.16 60)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: copy */}
        <div className="flex flex-col gap-8">
          <div>
            <Badge
              className="mb-6 text-xs font-semibold px-4 py-1.5 rounded-full border"
              style={{ background: "oklch(0.72 0.16 60 / 0.15)", borderColor: "oklch(0.72 0.16 60 / 0.4)", color: "oklch(0.72 0.16 60)" }}
            >
              Plataforma SAANEE — Educacion Inclusiva
            </Badge>
            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Seguimiento
              <br />
              <span style={{ color: "oklch(0.72 0.16 60)" }}>pedagógico</span>
              <br />
              que transforma vidas.
            </h1>
          </div>

          <p className="text-lg leading-relaxed" style={{ color: "oklch(0.78 0.02 210)" }}>
            SignaEdu conecta padres, docentes y especialistas SAANEE en una sola plataforma para el seguimiento
            integral de estudiantes con discapacidad auditiva. Comunicacion fluida, reportes en tiempo real
            y acompanamiento continuo.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 gap-2 font-semibold text-base"
              style={{ background: "oklch(0.72 0.16 60)", color: "oklch(0.15 0.02 220)" }}
            >
              Comenzar gratis
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 gap-2 font-semibold text-base border-white/30 text-white hover:bg-white/10"
            >
              <Play size={16} className="fill-white" />
              Ver demo
            </Button>
          </div>

          {/* Trust stats */}
          <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
            {[
              { value: "+120", label: "Estudiantes activos" },
              { value: "3", label: "Roles integrados" },
              { value: "98%", label: "Satisfaccion docente" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {stat.value}
                </p>
                <p className="text-sm" style={{ color: "oklch(0.65 0.03 210)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: dashboard mockup */}
        <div className="relative hidden lg:block">
          <div
            className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{ background: "oklch(0.32 0.05 215)" }}
          >
            {/* Mock browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-400 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
              <div className="flex-1 mx-4 rounded-full h-5" style={{ background: "oklch(0.25 0.04 215)" }} />
            </div>

            {/* Dashboard content */}
            <div className="p-6 space-y-4">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold" style={{ color: "oklch(0.72 0.16 60)" }}>Panel del Especialista</p>
                  <p className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>Seguimiento Semanal</p>
                </div>
                <div className="rounded-lg px-3 py-1 text-xs font-semibold" style={{ background: "oklch(0.72 0.16 60 / 0.15)", color: "oklch(0.72 0.16 60)" }}>
                  Activo
                </div>
              </div>

              {/* Student cards */}
              {[
                { name: "Sofia R.", grade: "3° Primaria", progress: 78, status: "En avance" },
                { name: "Mateo L.", grade: "5° Primaria", progress: 62, status: "Necesita apoyo" },
                { name: "Valeria G.", grade: "2° Primaria", progress: 91, status: "Excelente" },
              ].map((student, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex items-center gap-4"
                  style={{ background: "oklch(0.25 0.04 215)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: i === 1 ? "oklch(0.55 0.14 30)" : i === 2 ? "oklch(0.55 0.12 165)" : "oklch(0.42 0.12 210)" }}
                  >
                    {student.name.slice(0, 1)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-semibold text-white">{student.name}</p>
                      <p className="text-xs" style={{ color: "oklch(0.65 0.03 210)" }}>{student.progress}%</p>
                    </div>
                    <p className="text-xs mb-2" style={{ color: "oklch(0.60 0.03 210)" }}>{student.grade}</p>
                    <div className="h-1.5 rounded-full w-full" style={{ background: "oklch(0.20 0.03 215)" }}>
                      <div
                        className="h-1.5 rounded-full transition-all"
                        style={{
                          width: `${student.progress}%`,
                          background: i === 1 ? "oklch(0.65 0.14 30)" : i === 2 ? "oklch(0.65 0.12 165)" : "oklch(0.42 0.12 210)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick actions */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {["Informe", "Mensaje", "Agenda"].map((action) => (
                  <button
                    key={action}
                    className="rounded-xl py-2 text-xs font-semibold text-center transition-colors"
                    style={{ background: "oklch(0.25 0.04 215)", color: "oklch(0.72 0.16 60)" }}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Floating notification card */}
          <div
            className="absolute -bottom-6 -left-8 rounded-2xl p-4 shadow-xl border border-white/10 w-64"
            style={{ background: "white" }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                style={{ background: "oklch(0.42 0.12 210)" }}
              >
                M
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Nuevo mensaje</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  La especialista SAANEE actualizó el plan de Mateo.
                </p>
                <p className="text-xs mt-1" style={{ color: "oklch(0.42 0.12 210)" }}>Hace 2 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
