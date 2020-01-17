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
import {Link } from 'react-router-dom';

const Navb = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
            <Link to='/'> 
              <NavLink>Home</NavLink>
              </Link>

            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Planning
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                <Link to="/mealsPage"> 
                  <NavLink>Meals</NavLink>
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink>Activities</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <Link to='/clubsPlanning'> 
                <NavLink>Clubs</NavLink>
                </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Babies Groups
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                <Link to='/groupsPage'> 
                <NavLink>Groups</NavLink>
                </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <Link to='/babiesListPage'> 
                <NavLink>Babies List</NavLink>
                  </Link>
                </DropdownItem>
                <DropdownItem/>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Inscription
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                <Link to='/parentsPage'> 
                <NavLink >Parent</NavLink>
                </Link> 
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <Link to='/assistantsPage'> 
                <NavLink > Child Care <br/> Assistant</NavLink>
                </Link> 
                </DropdownItem>
                <DropdownItem/>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="/contact">Contacts</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navb;