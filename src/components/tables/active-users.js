import React from "react";
import { useTranslation } from "react-i18next";

export default function ActiveUsers({ activeUsers }) {
  const { t } = useTranslation();
  const removeUser = (userId) => {
    console.log(userId, "silindi.");
  };

  if (activeUsers.length < 1 || activeUsers === "" || activeUsers === null || activeUsers === undefined) {
    return (
      <div className="table-is-empty">{t("admin.users_page.active_users.table_is_empty")}</div>
    );
  }

  return (
    <table className="table">
      <thead>
        <tr className="table-row">
          <td className="user-info">{t("admin.users_page.active_users.table.thead.username")}</td>
          <td className="user-mail">{t("admin.users_page.active_users.table.thead.email")}</td>
          <td className="user-room">{t("admin.users_page.active_users.table.thead.room_name")}</td>
          <td className="action-user">{t("admin.users_page.active_users.table.thead.action")}</td>
        </tr>
      </thead>
      <tbody>
        {activeUsers.map(({ id, name, surname, mail, room }) => {
          return (
            <tr key={id} className="table-row">
              <td data-label={t("admin.users_page.active_users.table.thead.username")}>
                {name} {surname}
              </td>
              <td data-label={t("admin.users_page.active_users.table.thead.email")}>{mail}</td>
              <td data-label={t("admin.users_page.active_users.table.thead.room_name")}>{room}</td>
              <td data-label={t("admin.users_page.active_users.table.thead.action")}>
                <div className="btn-group">
                  <div className="btn small delete" onClick={() => removeUser(id)}>
                    {t("admin.users_page.active_users.table.tbody.btn_group.remove_btn")}
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
