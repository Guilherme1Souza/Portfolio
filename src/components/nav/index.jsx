import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { Navegação, Overlay } from "./style";
import { useState } from "react";

export function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Navegação>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <FiAlignJustify />
            </div>

            <header className={`header ${menuOpen ? "open" : ""}`}>
                <nav className="nav">
                    <ul className="nav-list">
                        <li>
                            <Link to="/" className="nav-a-list" onClick={toggleMenu}>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-a-list" onClick={toggleMenu}>
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link to="/experience" className="nav-a-list" onClick={toggleMenu}>
                                Experiência
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="nav-a-list" onClick={toggleMenu}>
                                Projetos
                            </Link>
                        </li>
                        <li
                            className="dropdown"
                            onMouseEnter={(e) => {
                                e.currentTarget.classList.add("open");
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.classList.remove("open");
                            }}
                        >
                            <button className="nav-a-list">
                                Contato
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/email">Telefone</Link>
                                </li>
                                <li>
                                    <Link to="/phone">WhatsApp</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>

            {menuOpen && <Overlay onClick={toggleMenu} />}
        </Navegação>
    );
}
