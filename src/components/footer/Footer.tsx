// React Import
// import React from 'react'

// Style Import  
import styles from './Footer.module.scss';


// Image Import's 
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';


// Links Import  
import Link from 'next/link';


// React Icons


// Construct Page
function Footer() {

    return (
        <>

            <footer className={`${styles.footer} container_flex`}>

                <div className="content_flex">
                    
                    <strong>Darlis Alves Amorim</strong>
                    <br/>
                    

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

            </footer>

        </>
    )
}


// Export Page
export default Footer