import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export function CtaSection() {
  return (
    <>
      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="rounded-3xl px-10 py-20"
            style={{ background: "var(--hero-bg)" }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "oklch(0.72 0.16 60)" }}>
              Empieza hoy
            </p>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white text-balance leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Transforma el seguimiento
              pedagogico de tu institucion
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "oklch(0.75 0.03 210)" }}>
              Solicita una demo gratuita y descubre como SignaEdu puede mejorar la comunicacion
              y el seguimiento de tus estudiantes con discapacidad auditiva.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-10 gap-2 font-semibold text-base"
                style={{ background: "oklch(0.72 0.16 60)", color: "oklch(0.15 0.02 220)" }}
              >
                Solicitar demo gratuita
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 font-semibold text-base border-white/30 text-white hover:bg-white/10"
              >
                Hablar con el equipo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-16" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
            {[
              { icon: Mail, label: "Correo", value: "contacto@signaedu.pe" },
              { icon: Phone, label: "Telefono", value: "+51 (01) 234-5678" },
              { icon: MapPin, label: "Ubicacion", value: "Lima, Peru" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.42 0.12 210 / 0.1)" }}
                >
                  <Icon size={20} style={{ color: "oklch(0.42 0.12 210)" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
                  <p className="font-semibold text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-border py-10"
        style={{ background: "var(--hero-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
            </div>
            <span className="text-white font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Signa<span style={{ color: "oklch(0.72 0.16 60)" }}>Edu</span>
            </span>
          </div>
          <p className="text-sm" style={{ color: "oklch(0.55 0.03 210)" }}>
            © 2025 SignaEdu. Plataforma de seguimiento pedagogico inclusivo.
          </p>
          <div className="flex gap-6">
            {["Privacidad", "Terminos", "Soporte"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm hover:text-white transition-colors"
                style={{ color: "oklch(0.55 0.03 210)" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
