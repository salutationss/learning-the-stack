import Link from 'next/link';

//Create a functional component with text, href and active as props and use Link from next/link to link pages
export interface INavItem {
  text: string;
  href: string;
  active: boolean;
}

const NavItem: React.FC<INavItem> = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a className={`nav__item ${active ? 'active' : ''}`}>{text}</a>
    </Link>
  );
};

export default NavItem;