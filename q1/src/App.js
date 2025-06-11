import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.age) return;
    setUsers([...users, formData]);
    setFormData({ name: '', email: '', age: '' });
  };

  const handleDelete = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
        <button type="submit">Add User</button>
      </form>

      <h3>Submitted Users</h3>
      <table border="1" cellPadding="5">
        <thead><tr><th>Name</th><th>Email</th><th>Age</th><th>Action</th></tr></thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td><button onClick={() => handleDelete(i)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

