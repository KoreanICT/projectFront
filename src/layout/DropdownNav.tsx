// DropdownNav.tsx
import React, { useRef, useState } from 'react'
import style from './navbar.module.css'
import { NavLink } from 'react-router-dom';

const DropdownNav: React.FC = () => {
    // true, false에 따라서 드랍다운 여부를 결정하기 위한 상태값
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // dom 요소에 접근할 useRef
    const dropdownRef = useRef<HTMLDivElement>(null);
    // toggleDropdown 클릭이 될때 useState 값에 대한 toggle처리를 한다
    const toggleDropdown = () => { setIsOpen((prev) => !prev) } // 토글 true -> false !부정 연산
    // 드랍다운 메뉴에서 메뉴를 선택시 닫아줘야 한다.
    const closeDropdown = () => { setIsOpen(false) } // false를 해서 무조건 닫는다

    // NavLink를 사용하는 목적이기도 하고 어제 메뉴구현시 설명
    // NavLink -> isActive 제공
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        // 활성화가 된 상태이면 style.active를 추가한다.
        isActive ? `${style.link} ${style.active}` : style.link;


    return (
        <div ref={dropdownRef} className={style.dropdown}>
            <div className={style.link} onClick={toggleDropdown}>
                서비스 <span className={style.arrow}>{isOpen ? '▼' : '▲'}</span>
            </div>
            {
                isOpen && (<div className={style.dropdownContent}>
                    <NavLink to="/" onClick={closeDropdown} className={style.dropdownItem}>공지사항</NavLink>
                    <div className="accordion accordion-flush" id="inventoryAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#inventoryCollapse"
                                >
                                    재고관리
                                </button>
                            </h2>

                            <div id="inventoryCollapse"
                                className="accordion-collapse collapse"
                                data-bs-parent="#inventoryAccordion">
                                <div className="accordion-body p-0">
                                    <NavLink
                                        to="/"
                                        onClick={closeDropdown}
                                        className={style.dropdownItem}>
                                        재고 등록
                                    </NavLink>

                                    <NavLink
                                        to="/"
                                        onClick={closeDropdown}
                                        className={style.dropdownItem}
                                    >
                                        재고 조회
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/" onClick={closeDropdown} className={style.dropdownItem}>매출관리</NavLink>
                    <NavLink to="/" onClick={closeDropdown} className={style.dropdownItem}>발주관리</NavLink>
                    <NavLink to="/" onClick={closeDropdown} className={style.dropdownItem}>커뮤니티</NavLink>
                </div>)
            }
        </div>
    )
}

export default DropdownNav