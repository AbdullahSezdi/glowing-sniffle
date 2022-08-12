import { ArrowLeft, Home, Inbox, LogOut, Package, Percent, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from "react-router-dom";

export default function AdminNavbar() {
  const { t } = useTranslation();
  const currentlyLocation = useLocation().pathname;

  return (
    <div className="navbar admin">
      <div className="nav-menu-list">
        <Link to="./" className={`nav-menu-item ${currentlyLocation === "/admin/" && "active"}`}>
          <Home color='#05153f' size={20} />
          <span>{t("admin.navbar.home")}</span>
        </Link>
        <Link to="kullanicilar" className={`nav-menu-item ${currentlyLocation === "/admin/kullanicilar" && "active"}`}>
          <Users color='#05153f' size={20} />
          <span>{t("admin.navbar.users")}</span>
        </Link>
        <Link to="urunler/guncelleme" className={`nav-menu-item ${currentlyLocation === `/admin/urunler/guncelleme` || currentlyLocation === "/admin/urunler/stok-durumu" || currentlyLocation === "/admin/urunler/ekleme" ? "active" : ''}`}>
          <Package color='#05153f' size={20} />
          <span>{t("admin.navbar.products")}</span>
        </Link>
        <Link to="gelen-siparisler" className={`nav-menu-item ${currentlyLocation === "/admin/gelen-siparisler" && "active"}`}>
          <Inbox color='#05153f' size={20} />
          <span>{t("admin.navbar.incoming_orders")}</span>
        </Link>
        <Link to="kullanici-borclari" className={`nav-menu-item ${currentlyLocation === "/admin/kullanici-borclari" && "active"}`}>
          <Percent color='#05153f' size={20} />
          <span>{t("admin.navbar.user_debt_list")}</span>
        </Link>
      </div>
      <Link to="../kantin/" className='nav-menu-list go-back'>
        <div className='nav-menu-item go-back'>
          <ArrowLeft color='#05153f' size={20} />
          <span>{t('admin.navbar.go_back')}</span>
        </div>
        <div className='nav-menu-item logout'>
          <LogOut color='#05153f' size={20} />
          <span>{t('admin.navbar.logout')}</span>
        </div>
      </Link>
    </div>
  )
}