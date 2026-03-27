import { useState } from 'react';
import GuestList from './GuestList';
import GuestDetails from './GuestDetails';

function App() {
  const [selectedGuestId, setSelectedGuestId] = useState(null);

  return (
    <div className="App">
      <h1>Fullstack Convention Guest List</h1>
      
      {selectedGuestId ? (
        <GuestDetails 
          guestId={selectedGuestId} 
          deselectGuest={() => setSelectedGuestId(null)} 
        />
      ) : (
        <GuestList selectGuest={setSelectedGuestId} />
      )}
    </div>
  );
}

export default App;