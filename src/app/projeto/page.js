import db from "@/lib/db"
export default async () => {
    const usuarios = await db.query("select * from usuario")
 return (<>
    <h1>Lista de usuários</h1>
    <div>
      {
          usuarios.rows.map( 
            a => (
               <div key={a.id} >
                  {a.nome} faz parte do cargo {a.cargo}
               </div>
            ) 
         )
      }
   </div>
 </>);
}
