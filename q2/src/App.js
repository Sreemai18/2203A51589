import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('API fetch error:', err));
  }, []);

  const filtered = users
    .filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Sort A–Z</option>
        <option value="desc">Sort Z–A</option>
      </select>

      <ul>
        {filtered.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

