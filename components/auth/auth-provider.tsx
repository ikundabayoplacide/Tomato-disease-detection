"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
  role: "user" | "admin"
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // This is where you would check if the user is logged in
        // For example, by checking a token in localStorage or making an API call

        // For demo purposes, we'll check localStorage
        const storedUser = localStorage.getItem("user")

        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Authentication error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      // This is where you would make an API call to authenticate the user
      // For demo purposes, we'll simulate a successful login

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Create a mock user
      const mockUser: User = {
        id: "user-1",
        name: "John Doe",
        email,
        role: "user",
      }

      // Store user in localStorage (in a real app, you'd store a token)
      localStorage.setItem("user", JSON.stringify(mockUser))

      // Update state
      setUser(mockUser)

      // Redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Register function
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true)

    try {
      // This is where you would make an API call to register the user
      // For demo purposes, we'll simulate a successful registration

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to login page
      router.push("/login")
    } catch (error) {
      console.error("Registration error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Logout function
  const logout = async () => {
    setIsLoading(true)

    try {
      // This is where you would make an API call to log out the user
      // For demo purposes, we'll just clear localStorage

      // Clear user from localStorage
      localStorage.removeItem("user")

      // Update state
      setUser(null)

      // Redirect to home page
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}

