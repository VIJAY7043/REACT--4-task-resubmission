import React from 'react';
import { useNavigate } from 'react-router-dom';

function Block({ title, description, children }) {
  const navigate = useNavigate()
  return (
    
    <div>
      <header>
        <nav>
          <div className="app-name">application name</div>
          <div className="nav-btn-group">
            <button onClick={() => navigate("/")}>Dashboard</button>
            <button onClick={() => navigate("/Student")}>Student</button>
            <button onClick={() => navigate("/addstudent")}>Add student</button>
           
          </div>
        </nav>
      </header>
      <main>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <div className="content-data">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Block;
