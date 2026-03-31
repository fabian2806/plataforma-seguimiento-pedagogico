"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, MoreVertical, Eye, FileText, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useAuth } from "@/lib/auth"
import { AdminStudentsList } from "@/components/admin/admin-students-list"

// Mock data
const students = [
  {
    id: "1",
    name: "Sofía Rodríguez Pérez",
    grade: "3° Primaria",
    age: 8,
    status: "activo",
    priority: false,
    lastUpdate: "Hace 2 horas",
    entries: 24,
    initials: "SR",
    hearingLevel: "Hipoacusia severa bilateral",
  },
  {
    id: "2",
    name: "Carlos Mendoza Ruiz",
    grade: "4° Primaria",
    age: 9,
    status: "activo",
    priority: true,
    lastUpdate: "Hace 1 día",
    entries: 31,
    initials: "CM",
    hearingLevel: "Hipoacusia profunda",
  },
  {
    id: "3",
    name: "Ana García Torres",
    grade: "2° Primaria",
    age: 7,
    status: "activo",
    priority: false,
    lastUpdate: "Hace 3 días",
    entries: 18,
    initials: "AG",
    hearingLevel: "Hipoacusia moderada",
  },
  {
    id: "4",
    name: "Luis Fernández Díaz",
    grade: "5° Primaria",
    age: 10,
    status: "activo",
    priority: false,
    lastUpdate: "Hace 4 días",
    entries: 42,
    initials: "LF",
    hearingLevel: "Hipoacusia severa unilateral",
  },
  {
    id: "5",
    name: "María López Sánchez",
    grade: "3° Primaria",
    age: 8,
    status: "inactivo",
    priority: false,
    lastUpdate: "Hace 2 semanas",
    entries: 15,
    initials: "ML",
    hearingLevel: "Hipoacusia profunda bilateral",
  },
  {
    id: "6",
    name: "Pedro Ramírez Vega",
    grade: "1° Primaria",
    age: 6,
    status: "activo",
    priority: true,
    lastUpdate: "Hace 5 horas",
    entries: 8,
    initials: "PR",
    hearingLevel: "Hipoacusia severa",
  },
]

export default function EstudiantesPage() {
  const { user } = useAuth()
  const [search, setSearch] = useState("")
  const [filterGrade, setFilterGrade] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  // Admin ve la lista CRUD
  if (user?.role === "admin") {
    return <AdminStudentsList />
  }

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase())
    const matchesGrade = filterGrade === "all" || student.grade === filterGrade
    const matchesStatus = filterStatus === "all" || student.status === filterStatus
    return matchesSearch && matchesGrade && matchesStatus
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1E3A5F]">Estudiantes</h1>
          <p className="text-sm text-[#6B7280]">
            Gestiona los expedientes de tus estudiantes asignados
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
          <Input
            placeholder="Buscar por nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-white border-[#E5E7EB] focus-visible:ring-[#3B82F6]"
          />
        </div>
        <Select value={filterGrade} onValueChange={setFilterGrade}>
          <SelectTrigger className="w-[160px] bg-white border-[#E5E7EB]">
            <SelectValue placeholder="Grado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los grados</SelectItem>
            <SelectItem value="1° Primaria">1° Primaria</SelectItem>
            <SelectItem value="2° Primaria">2° Primaria</SelectItem>
            <SelectItem value="3° Primaria">3° Primaria</SelectItem>
            <SelectItem value="4° Primaria">4° Primaria</SelectItem>
            <SelectItem value="5° Primaria">5° Primaria</SelectItem>
            <SelectItem value="6° Primaria">6° Primaria</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[140px] bg-white border-[#E5E7EB]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="activo">Activo</SelectItem>
            <SelectItem value="inactivo">Inactivo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results count */}
      <div className="flex items-center gap-2 text-sm text-[#6B7280]">
        <Filter size={14} />
        <span>{filteredStudents.length} estudiantes encontrados</span>
      </div>

      {/* Student Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStudents.map((student) => (
          <Card
            key={student.id}
            className={`border-[#E5E7EB] hover:shadow-md transition-shadow ${
              student.priority ? "ring-1 ring-[#F59E0B]" : ""
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-11 w-11">
                    <AvatarFallback
                      className={`text-sm font-semibold ${
                        student.priority
                          ? "bg-[#FEF3C7] text-[#D97706]"
                          : "bg-[#EEF2FF] text-[#3B82F6]"
                      }`}
                    >
                      {student.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-[#1E3A5F]">{student.name}</p>
                    <p className="text-xs text-[#6B7280]">{student.grade} · {student.age} años</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-[#9CA3AF]">
                      <MoreVertical size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/estudiantes/${student.id}`}>
                        <Eye size={14} className="mr-2" />
                        Ver expediente
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileText size={14} className="mr-2" />
                      Nueva entrada
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Calendar size={14} className="mr-2" />
                      Programar evento
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2 mb-3">
                <p className="text-xs text-[#6B7280]">{student.hearingLevel}</p>
                <div className="flex items-center gap-2">
                  {student.priority && (
                    <Badge variant="outline" className="text-[10px] border-[#F59E0B] text-[#D97706] bg-[#FEF3C7]">
                      Prioritario
                    </Badge>
                  )}
                  <Badge
                    variant="outline"
                    className={`text-[10px] ${
                      student.status === "activo"
                        ? "border-[#10B981] text-[#059669] bg-[#D1FAE5]"
                        : "border-[#9CA3AF] text-[#6B7280] bg-[#F3F4F6]"
                    }`}
                  >
                    {student.status === "activo" ? "Activo" : "Inactivo"}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#E5E7EB]">
                <div className="text-xs text-[#9CA3AF]">
                  <span className="font-medium text-[#374151]">{student.entries}</span> entradas
                </div>
                <div className="text-xs text-[#9CA3AF]">
                  Actualizado {student.lastUpdate}
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Link href={`/dashboard/estudiantes/${student.id}/perfil`} className="flex-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-[#6B7280] hover:text-[#1E3A5F] hover:bg-[#F3F4F6]"
                  >
                    Ver perfil
                  </Button>
                </Link>
                <Link href={`/dashboard/estudiantes/${student.id}`} className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-[#3B82F6] border-[#3B82F6] hover:bg-[#EEF2FF]"
                  >
                    Ver expediente
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
