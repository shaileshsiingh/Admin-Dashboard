import React from 'react';
import UserRow from './UserRow'

const UserTable = ({ users, handleEdit, handleDelete, selectedRows, setSelectedRows }) => {
  const toggleSelectAll = () => {
    const allCurrentPageIds = users.map((user) => user.id)
    const allSelected = allCurrentPageIds.every((id) => selectedRows.includes(id))

    if(allSelected) {
      const updatedSelectedRows = selectedRows.filter((id) => !allCurrentPageIds.includes(id))
      setSelectedRows(updatedSelectedRows)
    } else {
      const updatedSelectedRows = [...selectedRows, ...allCurrentPageIds.filter((id) => !selectedRows.includes(id))]
      setSelectedRows(updatedSelectedRows)
    }
  }

  const handleRowDelete = (userId) => {
    const updatedSelectedRows = selectedRows.filter((id) => id !== userId)
    setSelectedRows(updatedSelectedRows)
    handleDelete(userId)
  }

  const handleSelectRow = (userId) => {
    const isSelected = selectedRows.includes(userId)
    if (isSelected) {
      const updatedSelectedRows = selectedRows.filter((id) => id !== userId)
      setSelectedRows(updatedSelectedRows)
    } else {
      setSelectedRows([...selectedRows, userId])
    }
  };

  return (
    <div>
      <button onClick={toggleSelectAll}>{selectedRows.length === users.length ? 'Deselect All' : 'Select All'}</button>
      <button onClick={() => handleDelete(selectedRows)}>Delete Selected</button>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              handleEdit={handleEdit}
              handleDelete={handleRowDelete}
              isSelected={selectedRows.includes(user.id)}
              setSelectedRows={setSelectedRows}
              handleSelectRow={handleSelectRow}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;