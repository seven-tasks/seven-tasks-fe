import { useState } from "react";

export default function ContributionGrid(){
  const[days,setDays] = useState(Array(300).fill(false));
  
  return(

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(40, 1fr)",
      gap: "6px",
    }}
    >
       {days.map((done, index) => (
        <div
          key={index}
          onClick={ () =>{
            const newDays = [...days];
            newDays[index] = !newDays[index];
            setDays(newDays);
            
          }
          }
    
      
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "4px",
            background: done ? "#7c3aed" : "#e5e5e5",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
    
  )

}