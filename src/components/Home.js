import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const Home = () => {
  const [users, setUsers] = useState([]); // Store fetched users
  const [filteredUsers, setFilteredUsers] = useState([]); // Store users after filtering
  const [selectedRows, setSelectedRows] = useState([]); // Store IDs of selected rows
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const usersPerPage = 10; // Number of users per page

  // Fetch users from the API
  useEffect(() => {
    // Fetch data from the API here using fetch or axios
    // Update the users state with the fetched data
    // Example using fetch:
    fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search/filter
  const handleSearch = (searchTerm) => {
    const filtered = users.filter((user) => {
      // Implement your filtering logic here based on the searchTerm and user properties
      // Example: filtering by name or email
      return user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Handle editing user data
  const handleEdit = (editedUser) => {
    const updatedUsers = users.map((user) => (user.id === editedUser.id ? editedUser : user));
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  // Handle deleting user(s)
  const handleDelete = (idsToDelete) => {
    const updatedUsers = users.filter((user) => !idsToDelete.includes(user.id));
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setSelectedRows([]);
  };

  return (
    <div className="app">
      <SearchBar handleSearch={handleSearch} />
      <UserTable
        users={filteredUsers.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
        handlePageChange={paginate}
      />
    </div>
  );
};

export default Home;
