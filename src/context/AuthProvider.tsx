import { api } from '@/services/api'
import { createContext, PropsWithChildren, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'

type SignInSchema = { username: string; password: string }

type Auth = {
  username: string
  userId: string
  signIn: (data: SignInSchema) => Promise<void>
  signOut: () => void
}

export const AuthContext = createContext({} as Auth)

export function AuthProvider({ children }: PropsWithChildren) {
  const [username, setUsername] = useState('')
  const [userId, setUserId] = useState('')

  const router = useRouter()

  async function signIn(schema: SignInSchema) {
    try {
      const { data } = await api.post('/login', schema)

      console.log(data)

      const { username, user_id } = jwt.decode(data.message) as {
        username: string
        user_id: string
      }

      setUserId(user_id)
      setUsername(username)

      localStorage.setItem('farmy_token', data.message)

      router.push('/home')
    } catch (err) {
      console.log(err)
      alert('Ocorreu um erro ao realizar a autenticação')
    }
  }

  function signOut() {
    localStorage.removeItem('farmy_token')

    router.push('/login')
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        userId,
        username
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
