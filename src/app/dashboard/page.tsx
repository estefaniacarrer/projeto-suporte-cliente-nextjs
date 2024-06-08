import { Container } from '@/components/container'
import Link from 'next/link'
import { TicketItem } from '@/app/dashboard/components/ticket'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import prismaClient from '@/lib/prisma'
import { ButtonRefresh } from './components/button';

export default async function Dashboard() {

  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect("/")
  }

  const tickets = await prismaClient.ticket.findMany({
    where:{
      //userId: session.user.id,
      status: "ABERTO",
      customer: {
        userId: session.user.id
      }
    },
    include: {
      customer: true,
    },
    orderBy:{
      created_at: "desc"
    }
  })

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Chamados</h1>

          <div className="flex items-center gap-3">
            <ButtonRefresh/>
            <Link href="/dashboard/new" className="bg-blue-500 px-4 py-1 rounded text-white">
              Abrir Chamado
            </Link>
          </div>
        </div>


        <table className="min-w-full my-4">
          <thead>
            <tr>
              <th className="font-medium text-left pl-1">CLIENTE</th>
              <th className="font-medium text-left hidden sm:block">DATA CADASTRO</th>
              <th className="font-medium text-left">STATUS</th>
              <th className="font-medium text-left"> </th> 
            </tr>
          </thead>
          <tbody>
          {tickets.map(ticket => (
            <TicketItem 
              key={ticket.id}
              customer={ticket.customer}
              ticket={ticket}
            />
          ))}

          </tbody>
        </table>
        {tickets.length === 0 && (
          <h1 className="px-2 md:px-0 text-gray-600">Nenhum ticket aberto foi encontrado...</h1>
        )}


      </main>
    </Container>
  )
}





















// import { Container } from '@/components/container'
// // import { redirect } from 'next/navigation'
// // import { authOptions } from '@/lib/auth'
// // import { getServerSession } from 'next-auth'


// export default /*async*/ function Dashboard(){
// //  const session = await getServerSession(authOptions) //-> permissão para entrar na pagina apenas logado
// //  if(!session || session.user){
// //    redirect("/")
// //  }


//     return(
//         <Container>
//             <h1>Pagina dashboard</h1>
//         </Container>
//     )
// }