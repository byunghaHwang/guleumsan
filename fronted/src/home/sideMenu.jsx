import { Route, Routes, Link } from 'react-router-dom';
import classNames from 'classnames';

function SideMenu({isOpen}){
    return (
    <>
      <aside className={classNames('sidebar', { sideOpen: isOpen })}>
            {
            !isOpen 
            ?
            <nav>
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/about">소개</Link></li>
                    <li><Link to="/board">공지사항</Link></li>
                </ul>
            </nav>
            : <></>
            }
            
        </aside>
    </>
  )

};

export default SideMenu;