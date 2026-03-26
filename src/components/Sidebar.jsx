import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div style={{ width: '220px', background: '#06070E', color: '#FFF', padding: '20px' }}>
            <h2>SevenTasks</h2>
            <p>Gerencie suas tarefas</p>
            <hr/> <br/>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                    { to: "/", label: "Home" },
                    { to: "/tasks", label: "Tasks" },
                    { to: "/kanban", label: "Kanban" },
                    { to: "/calendar", label: "Calendar" },
                ].map(item => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        style={({ isActive }) => ({ 
                            padding: "12px 16px", borderRadius: "10px", textDecoration: "none", color: "#fff", background: isActive ? "#F61067" : "transparent", transition: "0.2s" 
                        })}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}