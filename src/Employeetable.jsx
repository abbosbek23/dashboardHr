import { useEffect, useState } from 'react';
import './Employeetable.css';
import personicon from "../src/assets/personicon.png";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`https://dev.ikramovna.me/api/v1/employee?page=${currentPage}&page_size=10`);
        const data = await response.json();
        setEmployees(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEmployees();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: '20px', fontFamily: "Inter, sans-serif" }}>Employees Information</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Born Date</th>
            <th>Information</th>
            <th>Language</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>
                <div className="avatar">
                  <img src={personicon} alt="Avatar" />
                </div>
              </td>
              <td>{employee.Born_date}</td>
              <td>{employee.Information}</td>
              <td>{employee['Language knowledge in general (for analysis)']}</td>
              <td>{employee.Sex}</td>
              <td>{employee['Nationality analysis']}</td>
              <td>{employee.Position}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <span style={{fontFamily:"Inter,sans-serif"}}>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default EmployeeTable;
