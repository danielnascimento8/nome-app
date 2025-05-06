import db from "@/lib/db";

export default async () => {
    const usuario = await db.query("select * from usuario");

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
 
                <div style={{ width: "100%", height: "84px", backgroundColor: "#ff4791" }}>
                    
                </div>

     
                <div style={{ width: "100%", height: "118px", backgroundColor: "#ffd7d7" }}>
                    
                </div>
            </div>

            <div class="topnav">
                <input type="text" placeholder="Pesquisar"/>
                
                </div>
        </>
    );
};