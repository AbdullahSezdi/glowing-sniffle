import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function SelectUserRoom({ userId, selectedRooms, setSelectedRooms, roomData }) {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (selectedRooms[userId] === undefined) {
      setSelectedRooms({
        ...selectedRooms, [userId]: t("components.dropdown.select_user_room.place_holder")
      })
    }
  }, [selectedRooms])

  const SelectRoom = (roomNumber) => {
    if (selectedRooms[userId] === roomNumber) {
      setSelectedRooms({
        ...selectedRooms,
        [userId]: t("components.dropdown.select_user_room.place_holder")
      })
    } else {
      setSelectedRooms({
        ...selectedRooms,
        [userId]: roomNumber
      })
    }
    setShowDropdown(false)
  }

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={ref} className={showDropdown ? "select-user-room active" : "select-user-room"}>
      <div className="dropdown-selected" onClick={() => setShowDropdown(!showDropdown)}>
        <div className='selected-label'>{selectedRooms === t("components.dropdown.select_user_room.place_holder") ? selectedRooms : selectedRooms[userId]}</div>
        <ChevronDown color='#212121' size={16} />
      </div>
      {
        showDropdown ?
          <div className='dropdown-options' >
            {
              roomData.map((e) => <div key={e} className={`option ${selectedRooms[userId] === e ? "selected" : ""}`} onClick={() => SelectRoom(e)}>{e}</div>)
            }
          </div>
          : <></>
      }
    </div>
  )
}