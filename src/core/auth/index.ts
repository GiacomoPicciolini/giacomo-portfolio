import { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'password',
      credentials: {
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        console.log({credentials})
        if (credentials?.password === 'PilatusAircraft') {
          return { id: '0' }
        } else {
          return null
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: 'pilatus',
  pages: {
    signIn: '/login',
  },
}
