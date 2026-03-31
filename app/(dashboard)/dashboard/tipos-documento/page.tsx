"use client"

import { useState } from "react"
import { Search, Plus, MoreHorizontal, Edit, Trash2, Lock, FolderCog, FileText, CheckCircle, Clock, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/lib/auth"
import { useRouter } from "next/navigation"

// Tipos de documento mock
const initialTiposDocumento = [
  {
    id: "PEP",
    nombre: "Plan Educativo Personalizado",
    codigo: "PEP",
    descripcion: "Plan individualizado de objetivos y estrategias educativas para el estudiante",
    esObligatorio: true,
    esVersionable: true,
    esPeriodico: false,
    periodicidad: null,
    esPredefinido: true,
    activo: true,
    creadoPor: "Sistema",
    fechaCreacion: "01/01/2024",
  },
  {
    id: "IPP",
    nombre: "Informe Psicopedagógico",
    codigo: "IPP",
    descripcion: "Evaluación integral del desarrollo cognitivo, emocional y social del estudiante",
    esObligatorio: true,
    esVersionable: true,
    esPeriodico: false,
    periodicidad: null,
    esPredefinido: true,
    activo: true,
    creadoPor: "Sistema",
    fechaCreacion: "01/01/2024",
  },
  {
    id: "IB",
    nombre: "Informe Bimestral",
    codigo: "IB",
    descripcion: "Reporte periódico del progreso del estudiante en cada bimestre",
    esObligatorio: true,
    esVersionable: false,
    esPeriodico: true,
    periodicidad: "Bimestral",
    esPredefinido: true,
    activo: true,
    creadoPor: "Sistema",
    fechaCreacion: "01/01/2024",
  },
  {
    id: "IS",
    nombre: "Informe de Salida",
    codigo: "IS",
    descripcion: "Documento de cierre cuando el estudiante egresa o se traslada",
    esObligatorio: false,
    esVersionable: false,
    esPeriodico: false,
    periodicidad: null,
    esPredefinido: true,
    activo: true,
    creadoPor: "Sistema",
    fechaCreacion: "01/01/2024",
  },
  {
    id: "OTRO",
    nombre: "Otro",
    codigo: "OTRO",
    descripcion: "Documentos adicionales no categorizados",
    esObligatorio: false,
    esVersionable: false,
    esPeriodico: false,
    periodicidad: null,
    esPredefinido: true,
    activo: true,
    creadoPor: "Sistema",
    fechaCreacion: "01/01/2024",
  },
  {
    id: "CERT_MED",
    nombre: "Certificado Médico Audiológico",
    codigo: "CERT_MED",
    descripcion: "Certificado médico que acredita el diagnóstico audiológico del estudiante",
    esObligatorio: false,
    esVersionable: true,
    esPeriodico: false,
    periodicidad: null,
    esPredefinido: false,
    activo: true,
    creadoPor: "Admin Sistema",
    fechaCreacion: "15/02/2024",
  },
]

export default function TiposDocumentoPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [tiposDocumento, setTiposDocumento] = useState(initialTiposDocumento)
  const [search, setSearch] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingTipo, setEditingTipo] = useState<typeof initialTiposDocumento[0] | null>(null)
  const [formData, setFormData] = useState({
    nombre: "",
    codigo: "",
    descripcion: "",
    esObligatorio: false,
    esVersionable: false,
    esPeriodico: false,
    periodicidad: "",
  })

  // Redirect if not admin
  if (user?.role !== "admin") {
    router.push("/dashboard")
    return null
  }

  // Filter logic
  const filteredTipos = tiposDocumento.filter((tipo) => {
    const matchesSearch =
      tipo.nombre.toLowerCase().includes(search.toLowerCase()) ||
      tipo.codigo.toLowerCase().includes(search.toLowerCase())
    
    if (filterType === "predefinidos") return matchesSearch && tipo.esPredefinido
    if (filterType === "personalizados") return matchesSearch && !tipo.esPredefinido
    if (filterType === "obligatorios") return matchesSearch && tipo.esObligatorio
    if (filterType === "periodicos") return matchesSearch && tipo.esPeriodico
    return matchesSearch
  })

  const handleOpenCreate = () => {
    setEditingTipo(null)
    setFormData({
      nombre: "",
      codigo: "",
      descripcion: "",
      esObligatorio: false,
      esVersionable: false,
      esPeriodico: false,
      periodicidad: "",
    })
    setIsDialogOpen(true)
  }

  const handleOpenEdit = (tipo: typeof initialTiposDocumento[0]) => {
    if (tipo.esPredefinido) return // Cannot edit predefined types
    setEditingTipo(tipo)
    setFormData({
      nombre: tipo.nombre,
      codigo: tipo.codigo,
      descripcion: tipo.descripcion,
      esObligatorio: tipo.esObligatorio,
      esVersionable: tipo.esVersionable,
      esPeriodico: tipo.esPeriodico,
      periodicidad: tipo.periodicidad || "",
    })
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (!formData.nombre || !formData.codigo) return

    if (editingTipo) {
      // Update existing
      setTiposDocumento(tiposDocumento.map((t) =>
        t.id === editingTipo.id
          ? {
              ...t,
              ...formData,
              periodicidad: formData.esPeriodico ? formData.periodicidad : null,
            }
          : t
      ))
    } else {
      // Create new
      const newTipo = {
        id: formData.codigo.toUpperCase().replace(/\s+/g, "_"),
        ...formData,
        periodicidad: formData.esPeriodico ? formData.periodicidad : null,
        esPredefinido: false,
        activo: true,
        creadoPor: user?.name || "Admin",
        fechaCreacion: new Date().toLocaleDateString("es-PE"),
      }
      setTiposDocumento([...tiposDocumento, newTipo])
    }

    setIsDialogOpen(false)
    setEditingTipo(null)
  }

  const handleDelete = (id: string) => {
    const tipo = tiposDocumento.find((t) => t.id === id)
    if (tipo?.esPredefinido) return // Cannot delete predefined types
    setTiposDocumento(tiposDocumento.filter((t) => t.id !== id))
  }

  const handleToggleActive = (id: string) => {
    setTiposDocumento(tiposDocumento.map((t) =>
      t.id === id ? { ...t, activo: !t.activo } : t
    ))
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1E3A5F]">Tipos de Documento</h1>
          <p className="text-sm text-[#6B7280]">
            Gestiona las plantillas de documentos del sistema
          </p>
        </div>
        <Button onClick={handleOpenCreate} className="gap-2 bg-[#1E3A5F] hover:bg-[#2D4A6F] text-white">
          <Plus size={16} />
          Nuevo tipo
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="border-[#E5E7EB]">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#EEF2FF]">
                <FolderCog size={20} className="text-[#3B82F6]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1E3A5F]">{tiposDocumento.length}</p>
                <p className="text-xs text-[#6B7280]">Total tipos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#E5E7EB]">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#F3E8FF]">
                <Lock size={20} className="text-[#8B5CF6]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1E3A5F]">{tiposDocumento.filter((t) => t.esPredefinido).length}</p>
                <p className="text-xs text-[#6B7280]">Predefinidos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#E5E7EB]">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#ECFDF5]">
                <CheckCircle size={20} className="text-[#059669]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1E3A5F]">{tiposDocumento.filter((t) => t.esObligatorio).length}</p>
                <p className="text-xs text-[#6B7280]">Obligatorios</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#E5E7EB]">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#FEF3C7]">
                <Clock size={20} className="text-[#D97706]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1E3A5F]">{tiposDocumento.filter((t) => t.esPeriodico).length}</p>
                <p className="text-xs text-[#6B7280]">Periódicos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="border-[#E5E7EB]">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <Input
                placeholder="Buscar por nombre o código..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 border-[#E5E7EB]"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-[200px] border-[#E5E7EB]">
                <SelectValue placeholder="Filtrar por tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="predefinidos">Predefinidos</SelectItem>
                <SelectItem value="personalizados">Personalizados</SelectItem>
                <SelectItem value="obligatorios">Obligatorios</SelectItem>
                <SelectItem value="periodicos">Periódicos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="border-[#E5E7EB]">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9FAFB] hover:bg-[#F9FAFB]">
                <TableHead className="text-[#6B7280] font-semibold">Código</TableHead>
                <TableHead className="text-[#6B7280] font-semibold">Nombre</TableHead>
                <TableHead className="text-[#6B7280] font-semibold">Características</TableHead>
                <TableHead className="text-[#6B7280] font-semibold">Origen</TableHead>
                <TableHead className="text-[#6B7280] font-semibold">Estado</TableHead>
                <TableHead className="text-[#6B7280] font-semibold text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTipos.map((tipo) => (
                <TableRow key={tipo.id} className="hover:bg-[#F9FAFB]">
                  <TableCell>
                    <Badge variant="outline" className="font-mono text-xs">
                      {tipo.codigo}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-[#1E3A5F]">{tipo.nombre}</p>
                      <p className="text-xs text-[#6B7280] max-w-[300px] truncate">{tipo.descripcion}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {tipo.esObligatorio && (
                        <Badge className="text-[10px] bg-[#ECFDF5] text-[#059669] border-transparent">
                          Obligatorio
                        </Badge>
                      )}
                      {tipo.esVersionable && (
                        <Badge className="text-[10px] bg-[#EEF2FF] text-[#4F46E5] border-transparent gap-1">
                          <RefreshCw size={10} />
                          Versionable
                        </Badge>
                      )}
                      {tipo.esPeriodico && (
                        <Badge className="text-[10px] bg-[#FEF3C7] text-[#D97706] border-transparent gap-1">
                          <Clock size={10} />
                          {tipo.periodicidad}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {tipo.esPredefinido ? (
                      <Badge variant="outline" className="text-[10px] gap-1 text-[#6B7280]">
                        <Lock size={10} />
                        Sistema
                      </Badge>
                    ) : (
                      <div className="text-xs text-[#6B7280]">
                        <p>{tipo.creadoPor}</p>
                        <p className="text-[#9CA3AF]">{tipo.fechaCreacion}</p>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`text-[10px] ${
                        tipo.activo
                          ? "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]"
                          : "bg-[#F3F4F6] text-[#6B7280] border-[#E5E7EB]"
                      }`}
                    >
                      {tipo.activo ? "Activo" : "Inactivo"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {!tipo.esPredefinido && (
                          <DropdownMenuItem onClick={() => handleOpenEdit(tipo)}>
                            <Edit size={14} className="mr-2" />
                            Editar
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem onClick={() => handleToggleActive(tipo.id)}>
                          {tipo.activo ? (
                            <>
                              <CheckCircle size={14} className="mr-2" />
                              Desactivar
                            </>
                          ) : (
                            <>
                              <CheckCircle size={14} className="mr-2" />
                              Activar
                            </>
                          )}
                        </DropdownMenuItem>
                        {!tipo.esPredefinido && (
                          <DropdownMenuItem
                            onClick={() => handleDelete(tipo.id)}
                            className="text-red-600"
                          >
                            <Trash2 size={14} className="mr-2" />
                            Eliminar
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Info note */}
      <div className="p-4 rounded-lg bg-[#FEF3C7] border border-[#FDE68A]">
        <div className="flex gap-3">
          <Lock size={18} className="text-[#D97706] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-[#92400E]">Tipos predefinidos</p>
            <p className="text-xs text-[#B45309] mt-1">
              Los tipos de documento marcados como &quot;Sistema&quot; vienen precargados y no pueden ser editados ni eliminados. 
              Esto garantiza la integridad del expediente del estudiante. Solo puedes crear nuevos tipos personalizados o activar/desactivar los existentes.
            </p>
          </div>
        </div>
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-[#1E3A5F]">
              {editingTipo ? "Editar tipo de documento" : "Nuevo tipo de documento"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="codigo">Código *</Label>
                <Input
                  id="codigo"
                  placeholder="Ej: CERT_AUD"
                  value={formData.codigo}
                  onChange={(e) => setFormData({ ...formData, codigo: e.target.value.toUpperCase() })}
                  className="border-[#E5E7EB] font-mono"
                  disabled={!!editingTipo}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre *</Label>
                <Input
                  id="nombre"
                  placeholder="Nombre del tipo"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="border-[#E5E7EB]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="descripcion">Descripción</Label>
              <Textarea
                id="descripcion"
                placeholder="Describe el propósito de este tipo de documento..."
                value={formData.descripcion}
                onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                className="border-[#E5E7EB] min-h-[80px]"
              />
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#F9FAFB]">
                <div>
                  <Label className="text-sm font-medium">Obligatorio</Label>
                  <p className="text-xs text-[#6B7280]">El estudiante debe tener este documento</p>
                </div>
                <Switch
                  checked={formData.esObligatorio}
                  onCheckedChange={(checked) => setFormData({ ...formData, esObligatorio: checked })}
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-[#F9FAFB]">
                <div>
                  <Label className="text-sm font-medium">Versionable</Label>
                  <p className="text-xs text-[#6B7280]">Permite múltiples versiones del documento</p>
                </div>
                <Switch
                  checked={formData.esVersionable}
                  onCheckedChange={(checked) => setFormData({ ...formData, esVersionable: checked })}
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-[#F9FAFB]">
                <div>
                  <Label className="text-sm font-medium">Periódico</Label>
                  <p className="text-xs text-[#6B7280]">Se genera en intervalos regulares</p>
                </div>
                <Switch
                  checked={formData.esPeriodico}
                  onCheckedChange={(checked) => setFormData({ ...formData, esPeriodico: checked })}
                />
              </div>

              {formData.esPeriodico && (
                <div className="space-y-2 pl-3">
                  <Label>Periodicidad</Label>
                  <Select
                    value={formData.periodicidad}
                    onValueChange={(value) => setFormData({ ...formData, periodicidad: value })}
                  >
                    <SelectTrigger className="border-[#E5E7EB]">
                      <SelectValue placeholder="Seleccionar periodicidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Semanal">Semanal</SelectItem>
                      <SelectItem value="Quincenal">Quincenal</SelectItem>
                      <SelectItem value="Mensual">Mensual</SelectItem>
                      <SelectItem value="Bimestral">Bimestral</SelectItem>
                      <SelectItem value="Trimestral">Trimestral</SelectItem>
                      <SelectItem value="Semestral">Semestral</SelectItem>
                      <SelectItem value="Anual">Anual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button
              className="bg-[#1E3A5F] hover:bg-[#2D4A6F] text-white"
              onClick={handleSave}
              disabled={!formData.nombre || !formData.codigo}
            >
              {editingTipo ? "Guardar cambios" : "Crear tipo"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
