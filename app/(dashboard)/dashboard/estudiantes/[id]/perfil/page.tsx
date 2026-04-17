"use client"

import { use, useState } from "react"
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
  ShieldAlert,
  HandHelping,
  Star,
  ChevronDown,
  ChevronUp,
  Pencil,
  X,
  Check,
  Plus,
  Trash2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

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

// Barreras
const barreras = [
  {
    tipo: "Comunicación",
    descripcion: "Dificultad para comprender instrucciones orales largas sin apoyo visual",
    color: { bg: "#FEF2F2", border: "#FECACA", text: "#DC2626" },
  },
  {
    tipo: "Ambiente",
    descripcion: "Espacios con ruido excesivo dificultan el uso efectivo del audífono",
    color: { bg: "#FEF3C7", border: "#FDE68A", text: "#D97706" },
  },
  {
    tipo: "Actitudinal",
    descripcion: "Algunos compañeros desconocen la LSP, limitando interacción social",
    color: { bg: "#F3E8FF", border: "#DDD6FE", text: "#7C3AED" },
  },
]

// Apoyos
const apoyos = [
  {
    tipo: "Tecnológico",
    descripcion: "Audífono bilateral Phonak Sky M70 con conectividad bluetooth",
    funcion: "Amplificación auditiva",
    intensidad: "Permanente",
    color: { bg: "#EEF2FF", border: "#C7D2FE", text: "#4F46E5" },
  },
  {
    tipo: "Humano",
    descripcion: "Intérprete de LSP disponible 3 días por semana",
    funcion: "Interpretación",
    intensidad: "Parcial",
    color: { bg: "#ECFDF5", border: "#A7F3D0", text: "#059669" },
  },
  {
    tipo: "Pedagógico",
    descripcion: "Material visual adaptado y ubicación preferencial en el aula",
    funcion: "Acceso curricular",
    intensidad: "Permanente",
    color: { bg: "#FFF7ED", border: "#FED7AA", text: "#EA580C" },
  },
  {
    tipo: "Familiar",
    descripcion: "Madre con conocimiento avanzado de LSP, refuerzo en casa",
    funcion: "Refuerzo extraescolar",
    intensidad: "Diario",
    color: { bg: "#FDF2F8", border: "#FBCFE8", text: "#DB2777" },
  },
]

// Fortalezas
const fortalezas = [
  {
    tipo: "Cognitiva",
    descripcion: "Excelente memoria visual y capacidad de abstracción",
    color: { bg: "#ECFDF5", border: "#A7F3D0", text: "#059669" },
  },
  {
    tipo: "Social",
    descripcion: "Facilidad para establecer vínculos y trabajar en equipo",
    color: { bg: "#EEF2FF", border: "#C7D2FE", text: "#4F46E5" },
  },
  {
    tipo: "Comunicativa",
    descripcion: "Dominio fluido de LSP y lectura labial básica",
    color: { bg: "#FFF7ED", border: "#FED7AA", text: "#EA580C" },
  },
  {
    tipo: "Emocional",
    descripcion: "Alta resiliencia y actitud positiva frente a desafíos",
    color: { bg: "#FDF2F8", border: "#FBCFE8", text: "#DB2777" },
  },
]

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [showAllBarreras, setShowAllBarreras] = useState(false)
  const [showAllApoyos, setShowAllApoyos] = useState(false)
  const [showAllFortalezas, setShowAllFortalezas] = useState(false)

  // Edit modes
  const [editingAuditiva, setEditingAuditiva] = useState(false)
  const [editingBarreras, setEditingBarreras] = useState(false)
  const [editingApoyos, setEditingApoyos] = useState(false)
  const [editingFortalezas, setEditingFortalezas] = useState(false)

  // Editable state — info auditiva
  const [auditivaForm, setAuditivaForm] = useState({
    hearingLevel: student.hearingLevel,
    hearingAid: student.hearingAid,
    communicationMethod: student.communicationMethod,
    diagnosisDate: student.diagnosisDate,
  })
  const [auditivaDraft, setAuditivaDraft] = useState(auditivaForm)

  // Editable state — barreras, apoyos, fortalezas
  const [barrerasList, setBarrerasList] = useState(barreras)
  const [barrerasDraft, setBarrerasDraft] = useState(barreras)

  const [apoyosList, setApoyosList] = useState(apoyos)
  const [apoyosDraft, setApoyosDraft] = useState(apoyos)

  const [fortalezasList, setFortalezasList] = useState(fortalezas)
  const [fortalezasDraft, setFortalezasDraft] = useState(fortalezas)

  // Handlers — info auditiva
  const handleEditAuditiva = () => {
    setAuditivaDraft({ ...auditivaForm })
    setEditingAuditiva(true)
  }
  const handleCancelAuditiva = () => {
    setEditingAuditiva(false)
  }
  const handleSaveAuditiva = () => {
    setAuditivaForm({ ...auditivaDraft })
    setEditingAuditiva(false)
  }

  // Handlers — barreras
  const handleEditBarreras = () => {
    setBarrerasDraft(barrerasList.map(b => ({ ...b, color: { ...b.color } })))
    setEditingBarreras(true)
  }
  const handleCancelBarreras = () => setEditingBarreras(false)
  const handleSaveBarreras = () => {
    setBarrerasList([...barrerasDraft])
    setEditingBarreras(false)
  }
  const handleUpdateBarrera = (idx: number, field: string, value: string) => {
    setBarrerasDraft(prev => prev.map((b, i) => i === idx ? { ...b, [field]: value } : b))
  }
  const handleDeleteBarrera = (idx: number) => {
    setBarrerasDraft(prev => prev.filter((_, i) => i !== idx))
  }
  const handleAddBarrera = () => {
    setBarrerasDraft(prev => [...prev, {
      tipo: "",
      descripcion: "",
      color: { bg: "#FEF2F2", border: "#FECACA", text: "#DC2626" },
    }])
  }

  // Handlers — apoyos
  const handleEditApoyos = () => {
    setApoyosDraft(apoyosList.map(a => ({ ...a, color: { ...a.color } })))
    setEditingApoyos(true)
  }
  const handleCancelApoyos = () => setEditingApoyos(false)
  const handleSaveApoyos = () => {
    setApoyosList([...apoyosDraft])
    setEditingApoyos(false)
  }
  const handleUpdateApoyo = (idx: number, field: string, value: string) => {
    setApoyosDraft(prev => prev.map((a, i) => i === idx ? { ...a, [field]: value } : a))
  }
  const handleDeleteApoyo = (idx: number) => {
    setApoyosDraft(prev => prev.filter((_, i) => i !== idx))
  }
  const handleAddApoyo = () => {
    setApoyosDraft(prev => [...prev, {
      tipo: "",
      descripcion: "",
      funcion: "",
      intensidad: "",
      color: { bg: "#EEF2FF", border: "#C7D2FE", text: "#4F46E5" },
    }])
  }

  // Handlers — fortalezas
  const handleEditFortalezas = () => {
    setFortalezasDraft(fortalezasList.map(f => ({ ...f, color: { ...f.color } })))
    setEditingFortalezas(true)
  }
  const handleCancelFortalezas = () => setEditingFortalezas(false)
  const handleSaveFortalezas = () => {
    setFortalezasList([...fortalezasDraft])
    setEditingFortalezas(false)
  }
  const handleUpdateFortaleza = (idx: number, field: string, value: string) => {
    setFortalezasDraft(prev => prev.map((f, i) => i === idx ? { ...f, [field]: value } : f))
  }
  const handleDeleteFortaleza = (idx: number) => {
    setFortalezasDraft(prev => prev.filter((_, i) => i !== idx))
  }
  const handleAddFortaleza = () => {
    setFortalezasDraft(prev => [...prev, {
      tipo: "",
      descripcion: "",
      color: { bg: "#ECFDF5", border: "#A7F3D0", text: "#059669" },
    }])
  }

  const visibleBarreras = showAllBarreras ? barrerasList : barrerasList.slice(0, 2)
  const visibleApoyos = showAllApoyos ? apoyosList : apoyosList.slice(0, 2)
  const visibleFortalezas = showAllFortalezas ? fortalezasList : fortalezasList.slice(0, 2)
  
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
        <Link href={`/dashboard/estudiantes/${id}`}>
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
        {/* Left Column - Info personal y académica */}
        <div className="space-y-6">
          {/* Hearing Information */}
          <Card className="border-[#E5E7EB]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold text-[#1E3A5F] flex items-center gap-2">
                  <Ear size={18} className="text-[#8B5CF6]" />
                  Información auditiva
                </CardTitle>
                {!editingAuditiva ? (
                  <Button variant="ghost" size="sm" onClick={handleEditAuditiva} className="gap-1.5 text-[#6B7280] hover:text-[#1E3A5F]">
                    <Pencil size={14} />
                    Editar
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={handleCancelAuditiva} className="gap-1.5 text-[#6B7280]">
                      <X size={14} />
                      Cancelar
                    </Button>
                    <Button size="sm" onClick={handleSaveAuditiva} className="gap-1.5 bg-[#1E3A5F] hover:bg-[#2D4A6F] text-white">
                      <Check size={14} />
                      Guardar
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {!editingAuditiva ? (
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-[#F9FAFB]">
                    <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">Nivel auditivo</p>
                    <p className="text-sm text-[#374151] font-medium">{auditivaForm.hearingLevel}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F9FAFB]">
                    <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">Dispositivo auditivo</p>
                    <p className="text-sm text-[#374151] font-medium">{auditivaForm.hearingAid}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F9FAFB]">
                    <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">Método de comunicación</p>
                    <p className="text-sm text-[#374151] font-medium">{auditivaForm.communicationMethod}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F9FAFB]">
                    <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">Fecha de diagnóstico</p>
                    <p className="text-sm text-[#374151] font-medium">{auditivaForm.diagnosisDate}</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">Nivel auditivo</Label>
                    <Input
                      value={auditivaDraft.hearingLevel}
                      onChange={e => setAuditivaDraft(d => ({ ...d, hearingLevel: e.target.value }))}
                      className="border-[#E5E7EB] text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">Dispositivo auditivo</Label>
                    <Input
                      value={auditivaDraft.hearingAid}
                      onChange={e => setAuditivaDraft(d => ({ ...d, hearingAid: e.target.value }))}
                      className="border-[#E5E7EB] text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">Método de comunicación</Label>
                    <Input
                      value={auditivaDraft.communicationMethod}
                      onChange={e => setAuditivaDraft(d => ({ ...d, communicationMethod: e.target.value }))}
                      className="border-[#E5E7EB] text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">Fecha de diagnóstico</Label>
                    <Input
                      value={auditivaDraft.diagnosisDate}
                      onChange={e => setAuditivaDraft(d => ({ ...d, diagnosisDate: e.target.value }))}
                      className="border-[#E5E7EB] text-sm"
                      placeholder="dd/mm/aaaa"
                    />
                  </div>
                </div>
              )}
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
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-[#F9FAFB]">
                  <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">
                    Institución
                  </p>
                  <p className="text-sm text-[#374151] font-medium">{student.school}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#F9FAFB]">
                  <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">
                    Ingreso
                  </p>
                  <p className="text-sm text-[#374151] font-medium">{student.enrollmentDate}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#F9FAFB]">
                  <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide mb-1">
                    Grado actual
                  </p>
                  <p className="text-sm text-[#374151] font-medium">{student.grade} - {student.section}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Barreras */}
          <Card className="border-[#E5E7EB]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold text-[#1E3A5F] flex items-center gap-2">
                  <ShieldAlert size={18} className="text-[#DC2626]" />
                  Barreras identificadas
                  <span className="text-xs font-normal text-[#9CA3AF]">{barrerasList.length}</span>
                </CardTitle>
                {!editingBarreras ? (
                  <Button variant="ghost" size="sm" onClick={handleEditBarreras} className="gap-1.5 text-[#6B7280] hover:text-[#1E3A5F]">
                    <Pencil size={14} />
                    Editar
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={handleCancelBarreras} className="gap-1.5 text-[#6B7280]">
                      <X size={14} />
                      Cancelar
                    </Button>
                    <Button size="sm" onClick={handleSaveBarreras} className="gap-1.5 bg-[#1E3A5F] hover:bg-[#2D4A6F] text-white">
                      <Check size={14} />
                      Guardar
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {!editingBarreras ? (
                <>
                  {visibleBarreras.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg border" style={{ backgroundColor: item.color.bg, borderColor: item.color.border }}>
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="text-[10px] font-semibold shrink-0" style={{ borderColor: item.color.text, color: item.color.text, backgroundColor: "white" }}>
                          {item.tipo}
                        </Badge>
                        <p className="text-sm text-[#374151]">{item.descripcion}</p>
                      </div>
                    </div>
                  ))}
                  {barrerasList.length > 2 && (
                    <Button variant="ghost" size="sm" className="w-full text-[#6B7280] hover:text-[#1E3A5F]" onClick={() => setShowAllBarreras(!showAllBarreras)}>
                      {showAllBarreras ? <><ChevronUp size={14} className="mr-1" />Ver menos</> : <><ChevronDown size={14} className="mr-1" />Ver más ({barrerasList.length - 2})</>}
                    </Button>
                  )}
                </>
              ) : (
                <div className="space-y-3">
                  {barrerasDraft.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] space-y-2">
                      <div className="flex items-center gap-2">
                        <Input
                          value={item.tipo}
                          onChange={e => handleUpdateBarrera(idx, "tipo", e.target.value)}
                          placeholder="Tipo (ej: Comunicación)"
                          className="border-[#E5E7EB] text-sm h-8 w-36"
                        />
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteBarrera(idx)} className="ml-auto text-[#EF4444] hover:text-[#DC2626] hover:bg-[#FEF2F2] h-8 w-8 p-0">
                          <Trash2 size={14} />
                        </Button>
                      </div>
                      <Textarea
                        value={item.descripcion}
                        onChange={e => handleUpdateBarrera(idx, "descripcion", e.target.value)}
                        placeholder="Descripcion de la barrera..."
                        className="border-[#E5E7EB] text-sm min-h-[60px] resize-none"
                      />
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={handleAddBarrera} className="w-full gap-1.5 border-dashed border-[#D1D5DB] text-[#6B7280] hover:text-[#1E3A5F]">
                    <Plus size={14} />
                    Agregar barrera
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Apoyos */}
          <Card className="border-[#E5E7EB]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold text-[#1E3A5F] flex items-center gap-2">
                  <HandHelping size={18} className="text-[#059669]" />
                  Apoyos disponibles
                  <span className="text-xs font-normal text-[#9CA3AF]">{apoyosList.length}</span>
                </CardTitle>
                {!editingApoyos ? (
                  <Button variant="ghost" size="sm" onClick={handleEditApoyos} className="gap-1.5 text-[#6B7280] hover:text-[#1E3A5F]">
                    <Pencil size={14} />
                    Editar
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={handleCancelApoyos} className="gap-1.5 text-[#6B7280]">
                      <X size={14} />
                      Cancelar
                    </Button>
                    <Button size="sm" onClick={handleSaveApoyos} className="gap-1.5 bg-[#1E3A5F] hover:bg-[#2D4A6F] text-white">
                      <Check size={14} />
                      Guardar
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {!editingApoyos ? (
                <>
                  {visibleApoyos.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg border" style={{ backgroundColor: item.color.bg, borderColor: item.color.border }}>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <Badge variant="outline" className="text-[10px] font-semibold shrink-0" style={{ borderColor: item.color.text, color: item.color.text, backgroundColor: "white" }}>
                          {item.tipo}
                        </Badge>
                        <div className="flex gap-1.5">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-[#6B7280] border border-[#E5E7EB]">{item.funcion}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: item.color.text, color: "white" }}>{item.intensidad}</span>
                        </div>
                      </div>
                      <p className="text-sm text-[#374151]">{item.descripcion}</p>
                    </div>
                  ))}
                  {apoyosList.length > 2 && (
                    <Button variant="ghost" size="sm" className="w-full text-[#6B7280] hover:text-[#1E3A5F]" onClick={() => setShowAllApoyos(!showAllApoyos)}>
                      {showAllApoyos ? <><ChevronUp size={14} className="mr-1" />Ver menos</> : <><ChevronDown size={14} className="mr-1" />Ver más ({apoyosList.length - 2})</>}
                    </Button>
                  )}
                </>
              ) : (
                <div className="space-y-3">
                  {apoyosDraft.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] space-y-2">
                      <div className="flex items-center gap-2">
                        <Input
                          value={item.tipo}
                          onChange={e => handleUpdateApoyo(idx, "tipo", e.target.value)}
                          placeholder="Tipo (ej: Tecnológico)"
                          className="border-[#E5E7EB] text-sm h-8 w-32"
                        />
                        <Input
                          value={item.funcion}
                          onChange={e => handleUpdateApoyo(idx, "funcion", e.target.value)}
                          placeholder="Función"
                          className="border-[#E5E7EB] text-sm h-8 flex-1"
                        />
                        <Input
                          value={item.intensidad}
                          onChange={e => handleUpdateApoyo(idx, "intensidad", e.target.value)}
                          placeholder="Intensidad"
                          className="border-[#E5E7EB] text-sm h-8 w-28"
                        />
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteApoyo(idx)} className="text-[#EF4444] hover:text-[#DC2626] hover:bg-[#FEF2F2] h-8 w-8 p-0 shrink-0">
                          <Trash2 size={14} />
                        </Button>
                      </div>
                      <Textarea
                        value={item.descripcion}
                        onChange={e => handleUpdateApoyo(idx, "descripcion", e.target.value)}
                        placeholder="Descripcion del apoyo..."
                        className="border-[#E5E7EB] text-sm min-h-[60px] resize-none"
                      />
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={handleAddApoyo} className="w-full gap-1.5 border-dashed border-[#D1D5DB] text-[#6B7280] hover:text-[#1E3A5F]">
                    <Plus size={14} />
                    Agregar apoyo
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Fortalezas */}
          <Card className="border-[#E5E7EB]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold text-[#1E3A5F] flex items-center gap-2">
                  <Star size={18} className="text-[#F59E0B]" />
                  Fortalezas
                  <span className="text-xs font-normal text-[#9CA3AF]">{fortalezasList.length}</span>
                </CardTitle>
                {!editingFortalezas ? (
                  <Button variant="ghost" size="sm" onClick={handleEditFortalezas} className="gap-1.5 text-[#6B7280] hover:text-[#1E3A5F]">
                    <Pencil size={14} />
                    Editar
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={handleCancelFortalezas} className="gap-1.5 text-[#6B7280]">
                      <X size={14} />
                      Cancelar
                    </Button>
                    <Button size="sm" onClick={handleSaveFortalezas} className="gap-1.5 bg-[#1E3A5F] hover:bg-[#2D4A6F] text-white">
                      <Check size={14} />
                      Guardar
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {!editingFortalezas ? (
                <>
                  {visibleFortalezas.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg border" style={{ backgroundColor: item.color.bg, borderColor: item.color.border }}>
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="text-[10px] font-semibold shrink-0" style={{ borderColor: item.color.text, color: item.color.text, backgroundColor: "white" }}>
                          {item.tipo}
                        </Badge>
                        <p className="text-sm text-[#374151]">{item.descripcion}</p>
                      </div>
                    </div>
                  ))}
                  {fortalezasList.length > 2 && (
                    <Button variant="ghost" size="sm" className="w-full text-[#6B7280] hover:text-[#1E3A5F]" onClick={() => setShowAllFortalezas(!showAllFortalezas)}>
                      {showAllFortalezas ? <><ChevronUp size={14} className="mr-1" />Ver menos</> : <><ChevronDown size={14} className="mr-1" />Ver más ({fortalezasList.length - 2})</>}
                    </Button>
                  )}
                </>
              ) : (
                <div className="space-y-3">
                  {fortalezasDraft.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] space-y-2">
                      <div className="flex items-center gap-2">
                        <Input
                          value={item.tipo}
                          onChange={e => handleUpdateFortaleza(idx, "tipo", e.target.value)}
                          placeholder="Tipo (ej: Cognitiva)"
                          className="border-[#E5E7EB] text-sm h-8 w-36"
                        />
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteFortaleza(idx)} className="ml-auto text-[#EF4444] hover:text-[#DC2626] hover:bg-[#FEF2F2] h-8 w-8 p-0">
                          <Trash2 size={14} />
                        </Button>
                      </div>
                      <Textarea
                        value={item.descripcion}
                        onChange={e => handleUpdateFortaleza(idx, "descripcion", e.target.value)}
                        placeholder="Descripcion de la fortaleza..."
                        className="border-[#E5E7EB] text-sm min-h-[60px] resize-none"
                      />
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={handleAddFortaleza} className="w-full gap-1.5 border-dashed border-[#D1D5DB] text-[#6B7280] hover:text-[#1E3A5F]">
                    <Plus size={14} />
                    Agregar fortaleza
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
