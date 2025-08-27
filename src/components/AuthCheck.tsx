'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface AuthCheckProps {
  children: React.ReactNode
  requireAuth?: boolean
}

export default function AuthCheck({ children, requireAuth = false }: AuthCheckProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Still loading

    if (requireAuth && !session) {
      router.push('/login')
      return
    }
  }, [session, status, requireAuth, router])

  // Show loading while checking auth
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  // If auth required but not authenticated, don't render children
  if (requireAuth && !session) {
    return null
  }

  return <>{children}</>
}