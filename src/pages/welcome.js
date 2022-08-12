import { useContext } from 'react';
import { UserPrefences } from "../contexts/user-prefences";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Welcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const BackdropImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background-image: url('https://aosogrenci.anadolu.edu.tr/background.c7b029723e7af8561f6f.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;`

const Logo = styled.div`
  width: 155px;
  min-height: 129px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://seeklogo.com/images/T/T_C__Anadolu_Universitesi-logo-00E647A07F-seeklogo.com.png');
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #05153f;
  font-weight: 700;
`

const Desc = styled.p`
  text-align:center;
  font-size: 1rem;
  font-weight: 400;
  color: #adabab;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`

const Button = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 13px 26px;
  font-size: 1.15em;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  transition: 500ms;
  color: ${props => props.active ? '#f7f7f7' : "#05153f"};
  background-color: ${props => props.active ? '#25d24b' : "#f7f7f7"};

  &:hover {
    color: #f7f7f7;
    background-color: #25d24b;
    transform: translateY(-7px);
    transition: 500ms;
  }
`

const ChangeLanguage = styled.div`
  padding: 5px;
  position: absolute;
  right: 15px;
  top: 15px;
  user-select: none;
  cursor: pointer;
  color: #05153f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1.15rem;

  &:hover {
    text-decoration: 1px underline;
  }
`

export default function WelcomePage() {
  const { t } = useTranslation()
  const { setLanguage, language } = useContext(UserPrefences)
  return (
    <Welcome>
      <BackdropImg />
      <Content>
        <Logo />
        <TextContainer>
          <Title>{t('welcome_page.main_title')}</Title>
          <Desc>{t('welcome_page.main_desc')}</Desc>
        </TextContainer>
        <ButtonGroup>
          <Link to='./kayit-ol'>
            <Button>{t('welcome_page.btn_group.register_btn')}</Button>
          </Link>
          <Link to='./giris-yap'>
            <Button active>{t('welcome_page.btn_group.login_btn')}</Button>
          </Link>
        </ButtonGroup>
        <ChangeLanguage onClick={() => setLanguage(language === "tr" ? "en" : "tr")}>{language.toUpperCase()}</ChangeLanguage>
      </Content>
    </Welcome>
    /* <div className='welcome-page'>
      <div className='main-page-img' />
      <div className='main-page-header'>
        <div id='kantin-logo' />
        <div className='main-page-desc'>
          <h1 className='main-title'>{t('welcome_page.main_title')}</h1>
          <p className='main-desc'>{t('welcome_page.main_desc')}</p>
        </div>
        <ButtonGroup>
          <Link to='./kayit-ol'>
            <Button>{t('welcome_page.btn_group.register_btn')}</Button>
          </Link>
          <Link to='./giris-yap'>
            <Button active>{t('welcome_page.btn_group.login_btn')}</Button>
          </Link>
        </ButtonGroup>
        <div className='btn-group'>
          <Link className="link-btn" to="/kayit-ol">{t('welcome_page.btn_group.register_btn')}</Link>
          <Link className="link-btn" to="/giris-yap">{t('welcome_page.btn_group.login_btn')}</Link>
        </div>
      </div>
    </div> */
  );
}