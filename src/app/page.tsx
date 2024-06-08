
import Image from 'next/image'
import heroImg from '../assets/hero.svg'
// import { trpc } from '@/trpc/client'

export default function Home() {

  //Para teste - implementando o trpc (funcional apenas sem todas as configurações realizadas)
  // const getUsers = trpc.user.getUsers.useQuery();

  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
      <h2 className="font-medium text-2xl mb-2">Gerencie sua empresa</h2>
      <h1 className="font-bold text-3xl mb-8 text-blue-600 md:text-4xl">Atendimentos, clientes</h1>

      <Image
        src={heroImg}
        alt="Imagem do hero do dev controle"
        width={600}
        className="max-w-sm md:max-w-x1"
        />

        {/* {JSON.stringify(getUsers.data)} */}
    </main>
  )
}