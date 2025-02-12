import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from "react";
import { FaGem, FaHeart } from "react-icons/fa";
const Sidebar2 = () => {
    return (
        <div>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    );
}
export default Sidebar2;