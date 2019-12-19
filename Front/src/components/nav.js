import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Navb = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <a href="/">
                <NavLink>Home</NavLink>
              </a>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Planning
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  Meals
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Activities
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Clubs
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Inscription
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <a href="/addParent">
                  Add parent
                  </a>
                </DropdownItem>
                <DropdownItem divider />
                
                <DropdownItem>
                  <a href="/addAssistant">
                  Add assistant
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>




            <NavItem>
              <a href='/BabyList'>
                <NavLink >Babies</NavLink>
              </a>
            </NavItem>

            {/* <NavItem>
              <a href='/inscription'>
                <NavLink >Inscription</NavLink>
              </a>
            </NavItem> */}

            <NavItem>
              <NavLink href="/components/">Contacts</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navb;