import { ShieldCheck } from "lucide-react"

export function HowItWorks() {
  return (
    <section id="seguridad" className="bg-white py-7 border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
        <ShieldCheck size={17} className="text-[#3B82F6] flex-shrink-0" />
        <p className="text-sm text-[#374151]">
          <span className="font-semibold text-[#1E3A5F]">Seguridad y confidencialidad de datos garantizadas.</span>{" "}
          Cumplimiento de la Ley N.° 29973 – Ley General de la Persona con Discapacidad y normativa MINEDU vigente.
        </p>
      </div>
    </section>
  )
}
