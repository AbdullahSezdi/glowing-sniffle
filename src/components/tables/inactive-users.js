import { useState } from "react";
import { useTranslation } from "react-i18next";
import SelectUserRoom from "../dropdowns/select-user-room";

export default function InactiveUsers({ inactiveUsers, roomData }) {
  const { t } = useTranslation();
  const [selectedRooms, setSelectedRooms] = useState("");

  const manageUser = (userId, decision) => {
    if (
      selectedRooms[userId] === undefined ||
      selectedRooms[userId] === t("components.dropdown.select_user_room.place_holder")
    ) {
      alert("Oda seçimi yapmadınız!"); // Alert notification //
    } else {
      console.log({
        userId: userId,
        roomNumber: selectedRooms[userId],
        result: decision,
      });
    }
  };

  if (inactiveUsers.length < 1 || inactiveUsers === "" || inactiveUsers === null || inactiveUsers === undefined) {
    return (
      <div className="table-is-empty">{t("admin.users_page.pending_users.table_is_empty")}</div>
    );
  }

  return (
    <table className="table">
      <thead>
        <tr className="table-row">
          <td>{t("admin.users_page.pending_users.table.thead.username")}</td>
          <td>{t("admin.users_page.pending_users.table.thead.email")}</td>
          <td>{t("admin.users_page.pending_users.table.thead.room_name")}</td>
          <td>{t("admin.users_page.pending_users.table.thead.action")}</td>
        </tr>
      </thead>
      <tbody>
        {inactiveUsers.map(({ id, name, surname, mail }) => {
          return (
            <tr key={id} className="table-row">
              <td data-label="Ad Soyad">
                {name} {surname}
              </td>
              <td data-label="E-Posta">{mail}</td>
              <td data-label="Oda Numarası">
                <SelectUserRoom
                  userId={id}
                  roomData={roomData}
                  selectedRooms={selectedRooms}
                  setSelectedRooms={setSelectedRooms}
                />
              </td>
              <td data-label="Etkileşim">
                <div className="btn-group">
                  <div className="btn small reject" onClick={() => manageUser(id, "reject")} >
                    {t("admin.users_page.pending_users.table.tbody.btn_group.reject_btn")}
                  </div>
                  <div className="btn small approve" onClick={() => manageUser(id, "approve")}>
                    {t("admin.users_page.pending_users.table.tbody.btn_group.approve_btn")}
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
