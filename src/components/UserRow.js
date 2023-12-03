import React, { useState } from 'react';

const UserRow = ({ user, handleEdit, handleDelete, isSelected, setSelectedRows, handleSelectRow }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleSave = () => {
    handleEdit(editedUser);
    setIsEditing(false);
  };

  const toggleSelect = () => {
    handleSelectRow(user.id);
  };

  return (
    <tr style={{ backgroundColor: isSelected ? '#f0f0f0' : 'inherit' }}>
    <td>
      <input type="checkbox" checked={isSelected} onChange={toggleSelect} />
    </td>
      <td>{isEditing ? <input value={editedUser.name} onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })} /> : user.name}</td>
      <td>{isEditing ? <input value={editedUser.email} onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} /> : user.email}</td>
      <td>{isEditing ? <input value={editedUser.role} onChange={(e) => setEditedUser({ ...editedUser, role: e.target.value })} /> : user.role}</td>

      {/* Add other columns here */}
      <td>
        {isEditing ? (
          <button className="save" onClick={handleSave}>
            Save
          </button>
        ) : (
          <>
            <button className="edit" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete" onClick={() => handleDelete(user.id)}>
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default UserRow;