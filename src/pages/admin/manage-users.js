import { useState } from "react";
import { useTranslation } from "react-i18next";
import ActiveUsers from "../../components/tables/active-users";
import InactiveUsers from "../../components/tables/inactive-users";

export default function ManageUsers() {
  const { t } = useTranslation()
  const [currentTab, setCurrentTab] = useState("inactive-users");
  const [inactiveUsers] = useState('');

  const [activeUsers] = useState([
    {
      id: 1,
      name: "Memet",
      surname: "Temiz",
      mail: "memettemiz@gmail.com",
      roles: ["user"],
      balance: 0,
      room: "502",
    },
    {
      id: 2,
      name: "Emre",
      surname: "Turk",
      mail: "emreturk@gmail.com",
      roles: ["user"],
      balance: 0,
      room: "101",
    },
    {
      id: 3,
      name: "Ali",
      surname: "Kaya",
      mail: "alitemiz@gmail.com",
      roles: ["user"],
      balance: 0,
      room: "203",
    },
  ]);

  const [roomData] = useState([
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,
    116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
    131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
  ]);

  return (
    <>
      <div className='switch-tab-group'>
        <div className={`tab-btn ${currentTab === "inactive-users" && "active"}`} onClick={() => setCurrentTab("inactive-users")}>{t("admin.users_page.pending_users.title")} {inactiveUsers.length > 0 && <span className='count-label'>({inactiveUsers.length})</span>}</div>
        <div className={`tab-btn ${currentTab === "active-users" && "active"}`} onClick={() => setCurrentTab("active-users")}>{t("admin.users_page.active_users.title")} {activeUsers.length > 0 && <span className='count-label'>({activeUsers.length})</span>}</div>
      </div>
      {
        currentTab === "inactive-users"
          ? <InactiveUsers inactiveUsers={inactiveUsers} roomData={roomData} />
          : <ActiveUsers activeUsers={activeUsers} roomData={roomData} />
      }
    </>
  )
}
