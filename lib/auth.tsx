"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"

// Mock users for prototyping
export const MOCK_USERS = [
  {
    id: "1",
    email: "admin@signaedu.pe",
    password: "admin123",
    name: "Administrador Sistema",
    role: "admin" as const,
    phone: "999 000 000",
  },
  {
    id: "2",
    email: "docente@signaedu.pe",
    password: "docente123",
    name: "María Elena Castro",
    role: "docente" as const,
    phone: "987 654 321",
  },
  {
    id: "3",
    email: "padre@signaedu.pe",
    password: "padre123",
    name: "Elena Pérez",
    role: "padre" as const,
    phone: "912 345 678",
  },
  {
    id: "4",
    email: "saanee@signaedu.pe",
    password: "saanee123",
    name: "Roberto Quispe",
    role: "saanee" as const,
    phone: "945 678 123",
  },
]

export type UserRole = "admin" | "docente" | "padre" | "saanee"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  phone: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const SESSION_KEY = "signaedu_session"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Load session on mount
  useEffect(() => {
    const stored = localStorage.getItem(SESSION_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setUser(parsed)
      } catch {
        localStorage.removeItem(SESSION_KEY)
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Find user by credentials
    const foundUser = MOCK_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )

    if (!foundUser) {
      return { success: false, error: "Credenciales incorrectas" }
    }

    // Create session (exclude password)
    const sessionUser: User = {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
      role: foundUser.role,
      phone: foundUser.phone,
    }

    // Save to localStorage and state
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser))
    setUser(sessionUser)

    return { success: true }
  }

  const logout = () => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
    router.push("/login")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Role display names
export function getRoleDisplayName(role: UserRole): string {
  switch (role) {
    case "admin":
      return "Administrador"
    case "docente":
      return "Docente"
    case "padre":
      return "Familia"
    case "saanee":
      return "Especialista SAANEE"
    default:
      return "Usuario"
  }
}

// Role colors
export function getRoleColor(role: UserRole): { bg: string; text: string; border: string } {
  switch (role) {
    case "admin":
      return { bg: "bg-[#FEF3C7]", text: "text-[#D97706]", border: "border-[#FDE68A]" }
    case "docente":
      return { bg: "bg-[#EEF2FF]", text: "text-[#3B82F6]", border: "border-[#C7D2FE]" }
    case "padre":
      return { bg: "bg-[#ECFDF5]", text: "text-[#059669]", border: "border-[#A7F3D0]" }
    case "saanee":
      return { bg: "bg-[#F3E8FF]", text: "text-[#7C3AED]", border: "border-[#DDD6FE]" }
    default:
      return { bg: "bg-[#F3F4F6]", text: "text-[#6B7280]", border: "border-[#E5E7EB]" }
  }
}
