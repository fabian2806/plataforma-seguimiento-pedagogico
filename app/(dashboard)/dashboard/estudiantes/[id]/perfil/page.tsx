"use client"

import Link from "next/link"
import {
  ArrowLeft,
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Heart,
  FileText,
  GraduationCap,
  Ear,
  MessageSquare,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Mock student data
const student = {
  id: "1",
  name: "Sofía Rodríguez Pérez",
  grade: "3° Primaria",
  section: "A",
  age: 8,
  birthDate: "15/03/2017",
  dni: "12345678",
  address: "Av. Los Pinos 123, San Miguel, Lima",
  status: "activo",
  enrollmentDate: "01/03/2023",
  initials: "SR",
  hearingLevel: "Hipoacusia severa bilateral",
  hearingAid: "Audífono bilateral Phonak Sky M70",
  communicationMethod: "Lengua de Señas Peruana (LSP) + lectura labial",
  diagnosisDate: "20/06/2018",
  school: "IE San Miguel",
  teacher: "Prof. María Castro",
  saanee: "Esp. Roberto Quispe",
}

const familyContacts = [
  {
    name: "Elena Pérez de Rodríguez",
    relation: "Madre",
    phone: "+51 999 888 777",
    email: "elena.perez@email.com",
    address: "Av. Los Pinos 123, San Miguel, Lima",
    occupation: "Contadora",
    primary: true,
  },
  {
    name: "Juan Rodríguez Torres",
    relation: "Padre",
    phone: "+51 999 777 666",
    email: "juan.rodriguez@email.com",
    address: "Av. Los Pinos 123, San Miguel, Lima",
    occupation: "Ingeniero Civil",
    primary: false,
  },
]

const academicHistory = [
  { year: "2025", grade: "3° Primaria", status: "En curso" },
  { year: "2024", grade: "2° Primaria", status: "Aprobado" },
  { year: "2023", grade: "1° Primaria", status: "Aprobado" },
]

export default function ProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6 space-y-6">
      {/* Back button and header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/estudiantes">
          <Button variant="ghost" size="icon" className="text-[#6B7280] hover:text-[#1E3A5F]">
            <ArrowLeft size={20} />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[#1E3A5F]">Perfil del estudiante</h1>
          </div>
          <p className="text-sm text-[#6B7280]">
            Información personal y datos del estudiante
          </p>
        </div>
        <Link href={`/dashboard/estudiantes/${params.id}`}>
          <Button className="gap-2 bg-[#1E3A5F] hover:bg-[#2D4A6F] text-white">
            <FileText size={16} />
            Ver expediente
          </Button>
        </Link>
      </div>

      {/* Profile Header Card */}
      <Card className="border-[#E5E7EB]">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="h-24 w-24 flex-shrink-0">
              <AvatarFallback className="bg-[#EEF2FF] text-[#3B82F6] text-3xl font-semibold">
                {student.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <h2 className="text-xl font-bold text-[#1E3A5F]">{student.name}</h2>
                <Badge
                  variant="outline"
                  className="w-fit text-xs border-[#10B981] text-[#059669] bg-[#D1FAE5]"
                >
                  Activo
                </Badge>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#6B7280]">
                <span className="flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-[#3B82F6]" />
                  {student.grade} - Sección {student.section}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#3B82F6]" />
                  {student.age} años ({student.birthDate})
                </span>
                <span className="flex items-center gap-1.5">
                  <User size={14} className="text-[#3B82F6]" />
                  DNI: {student.dni}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                <MapPin size={14} className="text-[#9CA3AF]" />
                {student.address}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Hearing Information */}
          <Card className="border-[#E5E7EB]">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-[#1E3A5F] flex items-center gap-2">
                <Ear size={18} className="text-[#8B5CF6]" />
                Información auditiva
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="p-3 rounded-lg bg-[#F9FAFB]">
                  <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">
                    Nivel auditivo
                  </p>
                  <p className="text-sm text-[#374151] font-medium">{student.hearingLevel}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#F9FAFB]">
                  <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">
                    Dispositivo auditivo
                  </p>
                  <p className="text-sm text-[#374151] font-medium">{student.hearingAid}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#F9FAFB]">
                  <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">
                    Método de comunicación
                  </p>
                  <p className="text-sm text-[#374151] font-medium">{student.communicationMethod}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#F9FAFB]">
                  <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">
                    Fecha de diagnóstico
                  </p>
                  <p className="text-sm text-[#374151] font-medium">{student.diagnosisDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic History */}
          <Card className="border-[#E5E7EB]">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-[#1E3A5F] flex items-center gap-2">
                <GraduationCap size={18} className="text-[#3B82F6]" />
                Historial académico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {academicHistory.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#F9FAFB]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-[#1E3A5F]">{item.year}</span>
                      <span className="text-sm text-[#6B7280]">{item.grade}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        item.status === "En curso"
                          ? "border-[#3B82F6] text-[#3B82F6] bg-[#EEF2FF]"
                          : "border-[#10B981] text-[#059669] bg-[#D1FAE5]"
                      }`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Card */}
          <Card className="border-[#E5E7EB]">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-[#1E3A5F] flex items-center gap-2">
                <User size={18} className="text-[#3B82F6]" />
                Equipo asignado
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F9FAFB]">
                <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center">
                  <span className="text-sm text-white font-semibold">MC</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#374151]">{student.teacher}</p>
                  <p className="text-xs text-[#6B7280]">Docente de aula</p>
                </div>
                <Button variant="ghost" size="sm" className="text-[#3B82F6]">
                  <MessageSquare size={16} />
                </Button>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F9FAFB]">
                <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center">
                  <span className="text-sm text-white font-semibold">RQ</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#374151]">{student.saanee}</p>
                  <p className="text-xs text-[#6B7280]">Especialista SAANEE</p>
                </div>
                <Button variant="ghost" size="sm" className="text-[#8B5CF6]">
                  <MessageSquare size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Family Contacts */}
          <Card className="border-[#E5E7EB]">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-[#1E3A5F] flex items-center gap-2">
                <Heart size={18} className="text-[#EF4444]" />
                Contactos familiares
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {familyContacts.map((contact, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-[#1E3A5F]">{contact.name}</p>
                        {contact.primary && (
                          <Badge variant="outline" className="text-[10px] border-[#3B82F6] text-[#3B82F6]">
                            Principal
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-[#6B7280]">{contact.relation} · {contact.occupation}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-[#6B7280]">
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-[#9CA3AF]" />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={14} className="text-[#9CA3AF]" />
                      <span>{contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#9CA3AF]" />
                      <span className="text-xs">{contact.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Enrollment Info */}
          <Card className="border-[#E5E7EB]">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-[#1E3A5F] flex items-center gap-2">
                <Calendar size={18} className="text-[#F59E0B]" />
                Información de matrícula
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-[#F9FAFB]">
                <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">
                  Institución educativa
                </p>
                <p className="text-sm text-[#374151] font-medium">{student.school}</p>
              </div>
              <div className="p-3 rounded-lg bg-[#F9FAFB]">
                <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">
                  Fecha de ingreso
                </p>
                <p className="text-sm text-[#374151] font-medium">{student.enrollmentDate}</p>
              </div>
              <div className="p-3 rounded-lg bg-[#F9FAFB]">
                <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">
                  Grado actual
                </p>
                <p className="text-sm text-[#374151] font-medium">{student.grade} - Sección {student.section}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
