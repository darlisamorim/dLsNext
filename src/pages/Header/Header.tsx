// React Import
// import React from 'react'

// Style Import  
import styles from './header.module.scss';


// Image Import's 
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';


// Links Import  
import Link from 'next/link';


// React Icons


// Construct Page
function Header() {

    return (
        <>
            <header className={`${styles.header} container_flex`}>
            
                <div className={`${styles.header_content} content_flex`}>

                    <h1>
                        <a title="" href="/">
                            <strong>Darlis</strong> Alves Amorim<b>_</b>
                        </a>
                    </h1>

                    <nav className={styles.nav_header}>
                        <h4 className='dn'>Testando Nol</h4>
                                            
                        <ul className={styles.nav_header}>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/sobre-mim">Sobre Mim</Link>
                            </li>
                            <li>
                                <Link href="/notfound">404!!!</Link>
                            </li>
                            <li>
                                <Link href="/contato">Contato!!!</Link>
                            </li>

                        </ul>

                    </nav>                    

                    <ul className="{styles.nav_header}">
                            
                        <li>
                            <Link href="#.ENV">LinkedIn</Link>
                        </li>
                        <li>
                            <Link href="#.ENV">GitHub</Link>
                        </li>
                        <li>
                            <Link href="/sign-in">Entrar</Link>
                        </li>
                        <li>
                            <Link href="/sign-up">Inscreva-se</Link>
                        </li>
                        <li>
                            <Link href="/forget">Recuperar Acesso</Link>
                        </li>
                    </ul>

                </div>
            </header>
        </>
    )

}


// Export Page
export default Header