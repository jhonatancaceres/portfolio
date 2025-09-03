import { useState, type JSX } from "react";
import type React from "react";
import { HiCog, HiHome, HiMiniInformationCircle, HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight, HiOutlineRocketLaunch, HiOutlineUsers } from "react-icons/hi2";
import { NavLink, type NavLinkProps } from "react-router-dom";

interface LocalNavLinkProps extends NavLinkProps {
  label: string;
  icon: JSX.Element;
  isExpanded: boolean;
}

const LocalNavLink: React.FC<LocalNavLinkProps> = ({ label, icon, isExpanded, ...props }) => {
  return <NavLink    {...props} >
    <div className="flex">
      {icon}
      {isExpanded && <span className="ml-2">{label}</span>}
    </div>
  </NavLink>
};

interface Page {
  to: string,
  label: string;
  icon: JSX.Element;
}

const pages: Page[] = [
  { to: '/', label: 'Home', icon: <HiHome size={24} /> },
  { to: '/contacts', label: 'Contacts', icon: <HiOutlineUsers size={24} /> },
  { to: '/lab', label: 'Lab', icon: <HiOutlineRocketLaunch size={24} /> },
  { to: '/about', label: 'About', icon: <HiMiniInformationCircle size={24} /> },
];

export const LeftBar: React.FC = () => {

  const commonNavLinkClassName = "p-2 my-2 rounded-lg hover:bg-gray-700";
  const [isExpanded, setIsExpanded] = useState(false);

  return <div className={"bg-gray-800 text-white p-2 flex flex-col"}>
    <a className="p-2" onClick={() => setIsExpanded(prev => !prev)}>
      {isExpanded ? <HiOutlineChevronDoubleLeft className="text-blue-300" size={24} /> : <HiOutlineChevronDoubleRight className="text-blue-300" size={24} />}
    </a>
    <div className="flex-1 flex flex-col">
      {pages.map(props =>
        <LocalNavLink key={props.to} {...props} className={commonNavLinkClassName} isExpanded={isExpanded} />
      )}
    </div>
    <div className="flex-2 flex flex-col">
      <LocalNavLink to="/settings" label="Settings" icon={<HiCog size={24} />} className={commonNavLinkClassName} isExpanded={isExpanded} />
    </div>
  </div>
};