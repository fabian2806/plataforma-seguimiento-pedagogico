"use client"

import { useState } from "react"
import { Search, Plus, MoreHorizontal, Edit, Trash2, UserCheck, UserX, Users, GraduationCap, UserCog, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"

type UserRole = "docente" | "padre" | "saanee" | "admin"

interface MockUser {
  id: string
  name: string
  email: string
  phone: string
  role: UserRole
  status: "active" | "inactive"
  createdAt: string
  lastLogin?: string
}

// Mock users data
const initialUsers: MockUser[] = [
  {
    id: "1",
    name: "María Elena Castro",
    email: "mcastro@signaedu.pe",
    phone: "987 654 321",
    role: "docente",
    status: "active",
    createdAt: "15 Ene 2025",
    lastLogin: "Hoy",
  },
  {
    id: "2",
    name: "Roberto Quispe",
    email: "rquispe@signaedu.pe",
    phone: "912 345 678",
    role: "saanee",
    status: "active",
    createdAt: "20 Ene 2025",
    lastLogin: "Ayer",
  },
  {
    id: "3",
    name: "Elena Pérez",
    email: "eperez@gmail.com",
    phone: "945 678 123",
    role: "padre",
    status: "active",
    createdAt: "25 Ene 2025",
    lastLogin: "Hace 2 días",
  },
  {
    id: "4",
    name: "Carlos Mendoza",
    email: "cmendoza@signaedu.pe",
    phone: "956 789 234",
    role: "docente",
    status: "active",
    createdAt: "10 Feb 2025",
    lastLogin: "Hoy",
  },
  {
    id: "5",
    name: "Ana García",
    email: "agarcia@signaedu.pe",
    phone: "978 123 456",
    role: "saanee",
    status: "inactive",
    createdAt: "5 Feb 2025",
  },
  {
    id: "6",
    name: "Juan Rodríguez",
    email: "jrodriguez@gmail.com",
    phone: "934 567 890",
    role: "padre",
    status: "active",
    createdAt: "1 Mar 2025",
    lastLogin: "Hace 1 semana",
  },
]

const roleConfig: Record<UserRole, { label: string; color: string; bg: string }> = {
  admin: { label: "Administrador", color: "text-[#1E3A5F]", bg: "bg-[#E5E7EB]" },
  docente: { label: "Docente", color: "text-[#3B82F6]", bg: "bg-[#EEF2FF]" },
  padre: { label: "Padre/Tutor", color: "text-[#8B5CF6]", bg: "bg-[#F3E8FF]" },
  saanee: { label: "SAANEE", color: "text-[#059669]", bg: "bg-[#ECFDF5]" },
}

const emptyUser = {
  name: "",
  email: "",
  phone: "",
  role: "docente" as UserRole,
  password: "",
}

export default function UsuariosPage() {
  const [users, setUsers] = useState<MockUser[]>(initialUsers)
  const [search, setSearch] = useState("")
  const [roleFilter, setRoleFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<MockUser | null>(null)
  const [formData, setFormData] = useState(emptyUser)

  // Filter users
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    const matchesRole = roleFilter === "all" || user.role === roleFilter
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    return matchesSearch && matchesRole && matchesStatus
  })

  const handleOpenCreate = () => {
    setEditingUser(null)
    setFormData(emptyUser)
    setIsDialogOpen(true)
  }

  const handleOpenEdit = (user: MockUser) => {
    setEditingUser(user)
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      password: "",
    })
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (editingUser) {
      // Update existing user
      setUsers(users.map((u) =>
        u.id === editingUser.id
          ? { ...u, name: formData.name, email: formData.email, phone: formData.phone, role: formData.role }
          : u
      ))
    } else {
      // Create new user
      const newUser: MockUser = {
        id: String(Date.now()),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        status: "active",
        createdAt: new Date().toLocaleDateString("es-PE", { day: "numeric", month: "short", year: "numeric" }),
      }
      setUsers([newUser, ...users])
    }
    setIsDialogOpen(false)
    setFormData(emptyUser)
  }

  const handleToggleStatus = (userId: string) => {
    setUsers(users.map((u) =>
      u.id === userId ? { ...u, status: u.status === "active" ? "inactive" : "active" } : u
    ))
  }

  const handleDelete = (userId: string) => {
    setUsers(users.filter((u) => u.id !== userId))
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1E3A5F]">Gestión de Usuarios</h1>
          <p className="text-sm text-[#6B7280]">
            Administra docentes, padres/tutores y especialistas SAANEE.
          </p>
        </div>
        <Button onClick={handleOpenCreate} className="gap-2 bg-[#1E3A5F] hover:bg-[#2D4A6F] text-white">
          <Plus size={16} />
          Nuevo usuario
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="border-[#E5E7EB]">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#EEF2FF]">
                <Users size={20} className="text-[#3B82F6]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1E3A5F]">{users.length}</p>
                <p className="text-xs text-[#6B7280]">Total usuarios</p>
              </div>
            </div>
            <div className="mt-3 flex gap-3 text-xs">
              <span className="flex items-center gap-1 text-[#059669]">
                <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                {users.filter((u) => u.status === "active").length} activos
              </span>
              <span className="flex items-center gap-1 text-[#6B7280]">
                <span className="w-2 h-2 rounded-full bg-[#9CA3AF]"></span>
                {users.filter((u) => u.status === "inactive").length} inactivos
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#E5E7EB]">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#EEF2FF]">
                <GraduationCap size={20} className="text-[#3B82F6]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1E3A5F]">{users.filter((u) => u.role === "docente").length}</p>
                <p className="text-xs text-[#6B7280]">Docentes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#E5E7EB]">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#F3E8FF]">
                <UserCog size={20} className="text-[#8B5CF6]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1E3A5F]">{users.filter((u) => u.role === "padre").length}</p>
                <p className="text-xs text-[#6B7280]">Padres/Tutores</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#E5E7EB]">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#ECFDF5]">
                <Shield size={20} className="text-[#059669]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1E3A5F]">{users.filter((u) => u.role === "saanee").length}</p>
                <p className="text-xs text-[#6B7280]">SAANEE</p>
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
                placeholder="Buscar por nombre o email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 border-[#E5E7EB]"
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full sm:w-[180px] border-[#E5E7EB]">
                <SelectValue placeholder="Filtrar por rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los roles</SelectItem>
                <SelectItem value="docente">Docentes</SelectItem>
                <SelectItem value="padre">Padres/Tutores</SelectItem>
                <SelectItem value="saanee">SAANEE</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[150px] border-[#E5E7EB]">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="active">Activos</SelectItem>
                <SelectItem value="inactive">Inactivos</SelectItem>
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
              <TableRow className="border-[#E5E7EB]">
                <TableHead className="text-[#6B7280]">Usuario</TableHead>
                <TableHead className="text-[#6B7280]">Rol</TableHead>
                <TableHead className="text-[#6B7280]">Estado</TableHead>
                <TableHead className="text-[#6B7280]">Último acceso</TableHead>
                <TableHead className="text-[#6B7280] text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-[#9CA3AF]">
                    No se encontraron usuarios
                  </TableCell>
                </TableRow>
              ) : (
                filteredUsers.map((user) => (
                  <TableRow key={user.id} className="border-[#E5E7EB]">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className={`${roleConfig[user.role].bg} ${roleConfig[user.role].color} text-xs font-semibold`}>
                            {user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-[#1E3A5F]">{user.name}</p>
                          <p className="text-xs text-[#9CA3AF]">{user.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`${roleConfig[user.role].bg} ${roleConfig[user.role].color} border-transparent text-xs`}>
                        {roleConfig[user.role].label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          user.status === "active"
                            ? "bg-[#ECFDF5] text-[#059669] border-transparent"
                            : "bg-[#F3F4F6] text-[#6B7280] border-transparent"
                        }`}
                      >
                        {user.status === "active" ? "Activo" : "Inactivo"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-[#6B7280]">
                      {user.lastLogin || "Nunca"}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal size={16} className="text-[#6B7280]" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleOpenEdit(user)} className="gap-2">
                            <Edit size={14} />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleToggleStatus(user.id)} className="gap-2">
                            {user.status === "active" ? (
                              <>
                                <UserX size={14} />
                                Desactivar
                              </>
                            ) : (
                              <>
                                <UserCheck size={14} />
                                Activar
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleDelete(user.id)} className="gap-2 text-[#DC2626]">
                            <Trash2 size={14} />
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-[#1E3A5F]">
              {editingUser ? "Editar usuario" : "Nuevo usuario"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-sm text-[#374151]">Nombre completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej: María Elena Castro"
                className="border-[#E5E7EB]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm text-[#374151]">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="correo@ejemplo.com"
                  className="border-[#E5E7EB]"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm text-[#374151]">Teléfono</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="987 654 321"
                  className="border-[#E5E7EB]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-sm text-[#374151]">Rol</Label>
                <Select value={formData.role} onValueChange={(value: UserRole) => setFormData({ ...formData, role: value })}>
                  <SelectTrigger className="border-[#E5E7EB]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="docente">Docente</SelectItem>
                    <SelectItem value="padre">Padre/Tutor</SelectItem>
                    <SelectItem value="saanee">SAANEE</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-sm text-[#374151]">
                  {editingUser ? "Nueva contraseña" : "Contraseña"}
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder={editingUser ? "Dejar vacío para mantener" : "••••••••"}
                  className="border-[#E5E7EB]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="border-[#E5E7EB] text-[#374151]">
                Cancelar
              </Button>
              <Button onClick={handleSave} className="bg-[#1E3A5F] hover:bg-[#2D4A6F] text-white">
                {editingUser ? "Guardar cambios" : "Crear usuario"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
