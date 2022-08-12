import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const SwitchTabGroup = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  justify-content: left;
  align-items: center;
`

const Tab = styled.div`
  cursor: pointer;
  user-select: none;
  padding: 10px 20px;
  height: 100%;
  border: 1px solid rgba(5, 21, 63, 0.1882352941);
  color: ${props => props.active ? '#fff' : '##05153f'};
  background-color: ${props => props.active ? '#25d24b' : '#fff'};
  font-weight: 500;
`

export default function SwitchTab({ currentTab, setCurrentTab, tabs }) {
  const currenltyLocation = useLocation();
  console.log(currenltyLocation);
  return (
    <SwitchTabGroup>
      {
        tabs.map(tab => {
          console.log(tab.tabUrl);
          return (
            <Link style={{ all: 'unset'}} to={tab.tabUrl}>
              <Tab active={currenltyLocation.pathname === `/admin/urunler/${tab.tabUrl}`}>
                {tab.tabName}
              </Tab>
            </Link>
            )
        })
      }
    </SwitchTabGroup>
  )
}