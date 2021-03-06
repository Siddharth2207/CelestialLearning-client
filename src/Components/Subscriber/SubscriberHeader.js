import React from 'react';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/CL.png';
import { Button } from 'shards-react';
import { BsPersonSquare } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
} from 'shards-react';
import CategoriesDropdown from "../Utils/CategoriesDropdown"

// import { useDispatch } from 'react-redux';
// import { logout } from '../../actions/subscriberActions';

 export const SubscriberHeader = () => {
    return (
        <div className="subscriberheader">
        <Navbar className="nav" expand="md">
            <NavbarBrand>
                <img src={logo}  width='90' heigh='90' />
            </NavbarBrand>
            <NavbarToggler />

            <Collapse navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink>
                            <CategoriesDropdown />
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav navbar>
                    <InputGroup size="sm" seamless className="headersearch">
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <SearchIcon />
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput className="border-0" placeholder="Search..." />
                    </InputGroup>
                </Nav>
            </Collapse>
            <div className="right">
                <Collapse navbar>
                <div>
                    <ShoppingCartIcon fontSize="large" />
                </div>
                <Dropdown >
                    <Dropdown.Toggle variant="inf" id="dropdown-basic">
                        <BsPersonSquare size="30" />
                    </Dropdown.Toggle>


                        <Dropdown.Menu>
                            <Dropdown.Item href="/subscriber/profile">Profile</Dropdown.Item>
                            <Dropdown.Item href="/subscriber/settings">Account Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Button className="logoutbutton" theme="outline-danger" href="/">Logout</Button>
                        </Dropdown.Menu>
                    </Dropdown>
                <div className="right"></div>
            </Collapse>
            </div>

        </Navbar>
        </div>
    );
};

export default SubscriberHeader;
