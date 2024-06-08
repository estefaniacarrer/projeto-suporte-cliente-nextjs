import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

//este manipulador de rota lidará tanto com a exibição da página de login quanto com o envio do formulário de login.