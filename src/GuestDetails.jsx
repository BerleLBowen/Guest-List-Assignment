const dummyDetails = {
  1: { name: "Alice", email: "alice@example.com", phone: "123-456", bio: "Loves coding.", job: "Engineer" },
  2: { name: "Bob", email: "bob@example.com", phone: "987-654", bio: "Enjoys hiking.", job: "Designer" }
};

const GuestDetails = ({ guestId, deselectGuest }) => {
  const guest = dummyDetails[guestId];

  return (
    <div className="details">
      <h2>{guest.name}</h2>
      <p><strong>Email:</strong> {guest.email}</p>
      <p><strong>Phone:</strong> {guest.phone}</p>
      <p><strong>Job:</strong> {guest.job}</p>
      <p><strong>Bio:</strong> {guest.bio}</p>
      
      <button onClick={deselectGuest}>Back to List</button>
    </div>
  );
};

export default GuestDetails;