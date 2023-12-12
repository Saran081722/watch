import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 10px @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`
export const HeaderLogo = styled.img`
  width: 80px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  border: none;
  background: none;
  margin-right: 10px;
`

export const LogoutButton = styled.button`
  border: 1px solid;
  background-color: ${props => props.bgColor};
  border-radius: 3px;
  color: ${props => props.color};
  border-color: ${props => props.color}
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: 'Roboto';
  margin-left: 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  border: none;
  background: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 400px;
  }
`
export const CloseButton = styled.button`
  border: 1px solid gray;
  background-color: transparent;
  border-radius: 6px;
  color: gray;
  margin: 12px;
  outline: none;
  cursor: pointer;
  padding-left: 12px;
  padding-right: 12px;
  padding: 8px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 12px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding: 13px;
  }
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  border: 1px solid #3b82f6;
  background-color: #3b82f6;
  border-radius: 6px;
  color: white;
  margin: 10px;
  outline: none;
  cursor: pointer;
  padding-left: 12px;
  padding-right: 12px;
  padding: 8px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding: 13px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: black;
  text-align: center;
  margin: 10px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
