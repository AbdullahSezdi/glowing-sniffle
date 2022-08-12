import styled from "styled-components"

const Msg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100%;
`
const Content = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const Icon = styled.div`
  svg {
    stroke: #05153f;
    width: 7rem;
    height: 7rem;
  }
`
const Title = styled.h1`
  color: #05153f;
  font-size: 2.75rem;
`
const Desc = styled.p`
  padding: 10px 0;
  color: #05153f;
  font-weight: 400;
  font-size: 1.15rem;
`

export default function Message({ icon, title, desc, button }) {
  return (
    <Msg>
      <Content>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        {button}
      </Content>
    </Msg>
  )
}