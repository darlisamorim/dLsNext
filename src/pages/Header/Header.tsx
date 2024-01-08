// React Import
// import React from 'react'

// Import's
import styles from './header.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

// React Icons


// Construct Page
function Header() {

    return (
        <>
            {/* <header className={`${styles.header} container-flex`}> */}
            <header className={`${styles.header} ${styles.classe2}`}>
            
                <div className="content-flex">

                    <h1>
                        <a title="" href="/">
                            <strong>Darlis</strong> Alves Amorim<b>_</b>
                        </a>
                    </h1>

                    <nav className="">

                        <ul className="">
                            <li>
                                <a title="Home | " href="/">Home</a>
                            </li>
                            <li>
                                <a title="Sobre Mim | " href="/single">Sobre Mim</a>
                            </li>
                            <li>
                                <a title="404!!! Página não encontrada. | " href="/notfound">404!!!</a>
                            </li>
                            <li>
                                <a title="Entrar em Contato | " href="/contato">Contato</a>
                            </li>
                        </ul>

                        <ul className="">
                            <li>
                                <a title="LinkedIn | " href="#.ENV">LinkedIn</a>
                            </li>
                            <li>
                                <a title="GitHub | " href="#.ENV">GitHub</a>
                            </li>
                            <li>
                                <a title="Inscreva-se | " href="/sign-up">Inscreva-se</a>
                            </li>
                            <li>
                                <a title="Recuperar senha | " href="/forget">Recuperar senha</a>
                            </li>
                        </ul>

                    </nav>

                </div>
            </header>
        </>
    )

}


// Export Page
export default Header