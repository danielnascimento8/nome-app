import db from "@/lib/db";

export default async ({params}) => {
    const alunos = await db.query("select * from usuario where id = "+params.id);
    return (
        <>
            <h1>Pagina do usuario: {alunos.rows[0].nome}</h1>
            <p>O Usuario faz parte do cargo {alunos.rows[0].cargo}</p>
        </>
    )
}

