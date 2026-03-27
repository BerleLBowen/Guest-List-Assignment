import { useState } from 'react';

const dummyGuests = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

const GuestList = ({ selectGuest }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {dummyGuests.map((guest) => (
          <tr key={guest.id} onClick={() => selectGuest(guest.id)} style={{cursor: 'pointer'}}>
            <td>{guest.name}</td>
            <td>{guest.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GuestList;