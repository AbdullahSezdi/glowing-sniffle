import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function UserDebtTable() {
  const { t } = useTranslation();
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Eren",
      surname: "Sarac",
      phone: "244",
      debt: -15,
      rooms: "101",
    },
    {
      id: 2,
      name: "Alp",
      surname: "Turk",
      phone: "230",
      debt: 0,
      rooms: "302",
    },
    {
      id: 3,
      name: "Ayse",
      surname: "Yilmaz",
      phone: "35",
      debt: -15,
      rooms: "101",
    },
    {
      id: 4,
      name: "Ali",
      surname: "Bozkurt",
      phone: "201",
      debt: -15,
      rooms: "301",
    },
    {
      id: 5,
      name: "A",
      surname: "B",
      phone: "Kantin",
      debt: -5,
      rooms: "Kantin",
    },
    {
      id: 6,
      name: "Poyraz",
      surname: "Ulubey",
      phone: "554",
      debt: 10,
      rooms: "201",
    },
  ]);

  /* SortTable Functions can be in identy-context */
  const sortTableByName = () => {
    const usersAsc = users.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    setUsers([...users], usersAsc);
  };

  const sortTableByPhone = () => {
    const phoneAsc = users.sort((a, b) =>
      a.phone > b.phone ? 1 : b.phone > a.phone ? -1 : 0
    );
    setUsers([...users], phoneAsc);
  };

  const sortTableByRoom = () => {
    const roomAsc = users.sort((a, b) =>
      a.rooms > b.rooms ? 1 : b.rooms > a.rooms ? -1 : 0
    );
    setUsers([...users], roomAsc);
  };

  const sortTableByDebt = () => {
    const debtAsc = users.sort((a, b) =>
      a.debt > b.debt ? 1 : b.debt > a.debt ? -1 : 0
    );
    setUsers([...users], debtAsc);
  };

  if (users === "" || users === undefined || users === null) {
    return <div className="table-is-empty">{t("admin.user_debts.table_is_empty")}</div>;
  }

  return (
    <table className="table">
      <thead>
        <tr className="table-row">
          <td onClick={() => sortTableByName()}>
            {t("admin.user_debts.table.thead.username")}
          </td>
          <td onClick={() => sortTableByPhone()}>
            {t("admin.user_debts.table.thead.phone")}
          </td>
          <td onClick={() => sortTableByRoom()}>
            {t("admin.user_debts.table.thead.room_name")}
          </td>
          <td onClick={() => sortTableByDebt()}>
            {t("admin.user_debts.table.thead.debt_status")}
          </td>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, name, surname, phone, debt, rooms }) => {
          return (
            <tr key={id} className="table-row">
              <td data-label="Ad Soyad">
                {name} {surname}
              </td>
              <td data-label="Sabit Hat Numarasi">{phone}</td>
              <td data-label="Bulunduğu Odalar">{rooms}</td>
              <td data-label="Borç Durumu" className="user-debt-value">
                <div className="user-debt" style={{ color: "red" }}>
                  {debt}₺
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserDebtTable;
