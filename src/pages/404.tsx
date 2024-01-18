// React Import
// import React from 'react'
import Head from 'next/head';

// Style Import  
// import styles from './Blog.module.scss';


// Image Import's 
// import Image from 'next/image';
// import Default from '../../../public/images/l.webp';


// Links Import  
import Link from 'next/link';


// React Icons


// Construct Page
function NotFound() {

    return (
        <>
            <Head>
                <title>
                    404 Página não encontrada
                </title>
            </Head>
            <h1>404 - Page Not Found</h1>
           
            <Link href="/">
                404!!!
            </Link>
        </>
    )

}


// Export Page
export default NotFound