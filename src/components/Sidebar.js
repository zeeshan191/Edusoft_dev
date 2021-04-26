import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  
background: #a8c0ff;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #a8c0ff,#3f2b96);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right , #a8c0ff, #3f2b96); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;  

const NavIcon = styled(Link)`
  margin-left: 1.5rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
background: #a8c0ff;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #3f2b96, #a8c0ff);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #3f2b96, #a8c0ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 150px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {

  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {setSidebar(!sidebar);}

  return (
    <>
   
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        
        <SidebarNav sidebar={sidebar}>
               <div className="custom-sidebar-class">
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return (<SubMenu item={item} key={index}/>);
            })}
          </SidebarWrap>
          </div>
        </SidebarNav>
    
      </IconContext.Provider>
   
    </>
  );
};

export default Sidebar;
