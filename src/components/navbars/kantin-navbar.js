import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User,  Lock, Unlock, Menu } from 'lucide-react';
import { UserPrefences } from "../../contexts/user-prefences";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation()
  const { setLanguage, language } = useContext(UserPrefences)
  const currentlyLocation = useLocation().pathname;
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [user, setUser] = useState({
    name: "",
    surname: "",
    balance: 0,
    role: ["user", "admin"]
  })

  return (
    <div className='navbar kantin'>
      <div className='nav mobile'>
        <Menu className='page-nav-icon' onClick={() => setShowMobileMenu(!showMobileMenu)} />
        {
          showMobileMenu &&
          <div onClick={() => setShowMobileMenu(!showMobileMenu)} className='mobile-nav'>
            <Link to="./" className={`nav-page-link ${currentlyLocation === "/kantin/" && "active"}`}>{t("kantin.navbar.home")}</Link>
            <Link to="urunler" className={`nav-page-link ${currentlyLocation === "/kantin/urunler" && "active"}`}>{t("kantin.navbar.products")}</Link>
            <Link to="siparis-gecmisi" className={`nav-page-link ${currentlyLocation === "/kantin/siparis-gecmisi" && "active"}`}>{t("kantin.navbar.order_history")}</Link>
            <Link to="borc-bilgileri" className={`nav-page-link ${currentlyLocation === "/kantin/borc-bilgileri" && "active"}`}>{t("kantin.navbar.debt_information")}</Link>
          </div>
        }
      </div>
      <div className='nav desktop'>
        <Link to="./" className={`nav-page-link ${currentlyLocation === "/kantin/" && "active"}`}>{t("kantin.navbar.home")}</Link>
        <Link to="urunler" className={`nav-page-link ${currentlyLocation === "/kantin/urunler" && "active"}`}>{t("kantin.navbar.products")}</Link>
        <Link to="siparis-gecmisi" className={`nav-page-link ${currentlyLocation === "/kantin/siparis-gecmisi" && "active"}`}>{t("kantin.navbar.order_history")}</Link>
        <Link to="borc-bilgileri" className={`nav-page-link ${currentlyLocation === "/kantin/borc-bilgileri" && "active"}`}>{t("kantin.navbar.debt_information")}</Link>
      </div>
      <div className="account-nav">
        <Link to="bilgilerim" className={`account-page-link ${currentlyLocation === "/kantin/bilgilerim" && "active"}`}>
          <User />
        </Link>
        <Link to="sepetim" className={`account-page-link ${currentlyLocation === "/kantin/sepetim" && "active"}`}>
          <ShoppingCart />
        </Link>
        {
          user.role.includes("admin") &&
          <Link to="../admin/" className="account-page-link admin">
            <Lock className="page-nav-icon" />
            <Unlock className="page-nav-icon" />
          </Link>
        }
        <div className='current-language' onClick={() => setLanguage(language === "tr" ? "en" : "tr")}>{language.toUpperCase()}</div>
      </div>
    </div>
  )
}