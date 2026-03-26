"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Plus, Clock, MapPin, Users, ChevronLeft, ChevronRight, Video, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock events data
const events = [
  {
    id: "1",
    title: "Reunión con familia Rodríguez",
    date: "2025-03-26",
    time: "10:00 AM",
    duration: "45 min",
    type: "reunion_familiar",
    location: "Sala de reuniones",
    student: "Sofía Rodríguez",
    attendees: ["Elena Pérez", "Juan Rodríguez", "Esp. Roberto Quispe"],
    status: "confirmado",
  },
  {
    id: "2",
    title: "Evaluación trimestral - Carlos",
    date: "2025-03-27",
    time: "11:30 AM",
    duration: "30 min",
    type: "evaluacion",
    location: "Aula 3B",
    student: "Carlos Mendoza",
    attendees: ["Esp. Ana Torres"],
    status: "pendiente",
  },
  {
    id: "3",
    title: "Capacitación LSP - Nivel intermedio",
    date: "2025-03-28",
    time: "3:00 PM",
    duration: "2 hrs",
    type: "capacitacion",
    location: "Virtual - Zoom",
    student: null,
    attendees: ["Equipo SAANEE"],
    status: "confirmado",
  },
  {
    id: "4",
    title: "Observación de aula - SAANEE",
    date: "2025-03-31",
    time: "9:00 AM",
    duration: "1 hr",
    type: "observacion",
    location: "Aula 3B",
    student: null,
    attendees: ["Esp. Roberto Quispe"],
    status: "confirmado",
  },
]

const pastEvents = [
  {
    id: "5",
    title: "Reunión inicio de año - Familia Rodríguez",
    date: "2025-03-10",
    time: "10:00 AM",
    type: "reunion_familiar",
    student: "Sofía Rodríguez",
    status: "completado",
  },
  {
    id: "6",
    title: "Evaluación mensual - Comunicación",
    date: "2025-03-05",
    time: "11:00 AM",
    type: "evaluacion",
    student: "Sofía Rodríguez",
    status: "completado",
  },
]

function getEventTypeStyle(type: string) {
  switch (type) {
    case "reunion_familiar":
      return { bg: "bg-[#E0F2FE]", border: "border-[#BAE6FD]", text: "text-[#0284C7]", label: "Reunión familiar" }
    case "evaluacion":
      return { bg: "bg-[#F3E8FF]", border: "border-[#DDD6FE]", text: "text-[#7C3AED]", label: "Evaluación" }
    case "capacitacion":
      return { bg: "bg-[#ECFDF5]", border: "border-[#A7F3D0]", text: "text-[#059669]", label: "Capacitación" }
    case "observacion":
      return { bg: "bg-[#FEF3C7]", border: "border-[#FDE68A]", text: "text-[#D97706]", label: "Observación" }
    default:
      return { bg: "bg-[#F3F4F6]", border: "border-[#E5E7EB]", text: "text-[#6B7280]", label: "Otro" }
  }
}

function getStatusStyle(status: string) {
  switch (status) {
    case "confirmado":
      return { bg: "bg-[#D1FAE5]", text: "text-[#059669]" }
    case "pendiente":
      return { bg: "bg-[#FEF3C7]", text: "text-[#D97706]" }
    case "completado":
      return { bg: "bg-[#F3F4F6]", text: "text-[#6B7280]" }
    default:
      return { bg: "bg-[#F3F4F6]", text: "text-[#6B7280]" }
  }
}

export default function EventosPage() {
  const [currentWeek, setCurrentWeek] = useState(0)

  // Get current week dates
  const today = new Date()
  const startOfWeek = new Date(today)
  startOfWeek.setDate(today.getDate() - today.getDay() + 1 + currentWeek * 7)
  
  const weekDays = Array.from({ length: 5 }, (_, i) => {
    const day = new Date(startOfWeek)
    day.setDate(startOfWeek.getDate() + i)
    return day
  })

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("es-PE", { weekday: "short", day: "numeric" })
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1E3A5F]">Eventos</h1>
          <p className="text-sm text-[#6B7280]">
            Gestiona reuniones, evaluaciones y actividades programadas.
          </p>
        </div>
        <Button className="gap-2 bg-[#1E3A5F] hover:bg-[#2D4A6F] text-white">
          <Plus size={16} />
          Nuevo evento
        </Button>
      </div>

      {/* Week navigation */}
      <Card className="border-[#E5E7EB]">
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentWeek(currentWeek - 1)}
            >
              <ChevronLeft size={16} />
            </Button>
            <span className="text-sm font-medium text-[#1E3A5F]">
              {weekDays[0].toLocaleDateString("es-PE", { month: "long", year: "numeric" })}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentWeek(currentWeek + 1)}
            >
              <ChevronRight size={16} />
            </Button>
            {currentWeek !== 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-[#3B82F6]"
                onClick={() => setCurrentWeek(0)}
              >
                Hoy
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {/* Week days header */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            {weekDays.map((day, idx) => (
              <div
                key={idx}
                className={`text-center p-2 rounded-lg ${
                  isToday(day)
                    ? "bg-[#1E3A5F] text-white"
                    : "bg-[#F9FAFB] text-[#374151]"
                }`}
              >
                <p className="text-xs font-medium capitalize">{formatDate(day)}</p>
              </div>
            ))}
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-5 gap-2 min-h-[200px]">
            {weekDays.map((day, idx) => {
              const dayEvents = events.filter(
                (e) => e.date === day.toISOString().split("T")[0]
              )
              return (
                <div key={idx} className="space-y-2">
                  {dayEvents.length > 0 ? (
                    dayEvents.map((event) => {
                      const typeStyle = getEventTypeStyle(event.type)
                      return (
                        <div
                          key={event.id}
                          className={`p-2 rounded-lg border-l-2 ${typeStyle.bg} ${typeStyle.border} cursor-pointer hover:opacity-80 transition-opacity`}
                        >
                          <p className="text-[11px] font-medium text-[#1E3A5F] line-clamp-2">
                            {event.title}
                          </p>
                          <p className="text-[10px] text-[#6B7280] mt-1">
                            {event.time}
                          </p>
                        </div>
                      )
                    })
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <p className="text-[10px] text-[#9CA3AF]">Sin eventos</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming events list */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-[#E5E7EB]">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-[#1E3A5F] flex items-center gap-2">
              <Calendar size={18} className="text-[#3B82F6]" />
              Próximos eventos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {events.map((event) => {
              const typeStyle = getEventTypeStyle(event.type)
              const statusStyle = getStatusStyle(event.status)
              return (
                <div
                  key={event.id}
                  className={`p-3 rounded-lg border ${typeStyle.border} ${typeStyle.bg} bg-opacity-50`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className={`text-[10px] font-semibold ${typeStyle.text} border-current`}
                    >
                      {typeStyle.label}
                    </Badge>
                    <Badge className={`text-[10px] ${statusStyle.bg} ${statusStyle.text} border-0`}>
                      {event.status}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-[#1E3A5F] mb-2">{event.title}</p>
                  <div className="flex flex-wrap gap-3 text-[11px] text-[#6B7280]">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {event.date.split("-").reverse().join("/")} · {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      {event.location.includes("Virtual") ? <Video size={12} /> : <MapPin size={12} />}
                      {event.location}
                    </span>
                  </div>
                  {event.student && (
                    <div className="mt-2 flex items-center gap-1 text-[11px] text-[#3B82F6]">
                      <User size={12} />
                      {event.student}
                    </div>
                  )}
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Past events */}
        <Card className="border-[#E5E7EB]">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-[#1E3A5F] flex items-center gap-2">
              <Clock size={18} className="text-[#6B7280]" />
              Eventos pasados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pastEvents.map((event) => {
              const typeStyle = getEventTypeStyle(event.type)
              return (
                <div
                  key={event.id}
                  className="p-3 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className={`text-[10px] font-semibold text-[#6B7280] border-[#D1D5DB]`}
                    >
                      {typeStyle.label}
                    </Badge>
                    <span className="text-[10px] text-[#9CA3AF]">Completado</span>
                  </div>
                  <p className="text-sm font-medium text-[#374151] mb-1">{event.title}</p>
                  <p className="text-[11px] text-[#9CA3AF]">
                    {event.date.split("-").reverse().join("/")} · {event.time}
                  </p>
                </div>
              )
            })}
            <Button variant="ghost" size="sm" className="w-full text-[#6B7280] text-xs">
              Ver historial completo
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
