// React Import
// import React from 'react'
import Head from 'next/head';

// Style Import  
import styles from './Blog.module.scss';


// Image Import's 
import Image from 'next/image';
import Default from '../../../public/images/l.webp';


// Links Import  
import Link from 'next/link';


// React Icons


// Construct Page
function Blog() {

    return (
        <>
            <Head>
                <title>
                    Blog dLs
                </title>
            </Head>
            <section className={`${styles.blog} container_flex`}>

                <article>test
                    <h1><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, obcaecati.</b></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem, quae eveniet dicta veniam doloribus fugit. Provident dignissimos adipisci sunt iusto, quidem autem cumque voluptatem sed eveniet odio ut repudiandae!</p>
                </article>

            </section>
        </>
    )

}


// Export Page
export default Blog