import ContributionGrid from "./ContributionGrid";

export default function HomePage() {
    return (
        <div>
            <h1 style={{ marginBottom: '20px' }}>Home</h1>

            <div style={{ display: "flex", gap: "20px" }}>

                <div style={card(2)}>
                    Ofensiva <br/> <br/>
                 <ContributionGrid/>
                </div>
                
                <div style={card(1)}>
                    Atividades recentes
                </div>

            </div>

            <div style={{ ...card(1), marginTop: "20px" }}>
                Lista de tasks + stats
            </div>
        </div>
    );
}

function card(flex = 1) {
    return {
        flex,
        background: "#fff",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
    };
}