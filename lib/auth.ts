// This file contains utility functions for authentication

/**
 * Validates a password against security requirements
 * @param password The password to validate
 * @returns An object with isValid and message properties
 */
export function validatePassword(password: string): { isValid: boolean; message: string } {
    // Password must be at least 8 characters
    if (password.length < 8) {
      return {
        isValid: false,
        message: "Password must be at least 8 characters long",
      }
    }
  
    // Password should contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return {
        isValid: false,
        message: "Password must contain at least one uppercase letter",
      }
    }
  
    // Password should contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return {
        isValid: false,
        message: "Password must contain at least one lowercase letter",
      }
    }
  
    // Password should contain at least one number
    if (!/\d/.test(password)) {
      return {
        isValid: false,
        message: "Password must contain at least one number",
      }
    }
  
    // Password should contain at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return {
        isValid: false,
        message: "Password must contain at least one special character",
      }
    }
  
    return {
      isValid: true,
      message: "Password is valid",
    }
  }
  
  /**
   * Checks if a user is authenticated
   * @returns A boolean indicating if the user is authenticated
   */
  export function isAuthenticated(): boolean {
    // In a real application, you would check for a valid token
    // For this example, we'll just check if there's a user in localStorage
    return localStorage.getItem("user") !== null
  }
  
  /**
   * Redirects unauthenticated users
   * @param destination The destination to redirect to
   */
  export function redirectIfUnauthenticated(destination = "/login"): void {
    if (!isAuthenticated()) {
      window.location.href = destination
    }
  }
  
  /**
   * Gets the current user from localStorage
   * @returns The current user or null if not authenticated
   */
  export function getCurrentUser() {
    const userJson = localStorage.getItem("user")
    return userJson ? JSON.parse(userJson) : null
  }
  
  /**
   * Checks if the current user has a specific role
   * @param role The role to check for
   * @returns A boolean indicating if the user has the role
   */
  export function hasRole(role: string): boolean {
    const user = getCurrentUser()
    return user?.role === role
  }
  
  