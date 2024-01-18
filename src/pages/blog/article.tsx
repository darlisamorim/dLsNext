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
                    Blog | dLs
                </title>
            </Head>
            <main className="content_flex">
                <section className={`${styles.blog} content_flex`}>
                
                    <article className="blog_article">
                        <div className="blog_tags">
                            - - <b>Tag 1</b> -
                            - <b>Tag 2</b> -
                            - <b>Tag 3</b> -
                            - <b>Tag 4</b> - -
                        </div>

                        <h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, obcaecati.
                        </h1>
                        
                        <Image
                            className="blog_thumbnail"
                            src={Default} 
                            width={500}
                            height={250}
                            quality={100}
                            title="Lorem ipsum dolor sit amet." 
                            alt="Lorem ipsum dolor sit amet." 
                        />
                        <p className="blog_paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem, quae eveniet dicta veniam doloribus fugit. Provident dignissimos adipisci sunt iusto, quidem autem cumque voluptatem sed eveniet odio ut repudiandae!
                        </p>

                        

                        <div className="blog_bar">
                            <span>Author</span> - 
                            - <time>28 de JANEIRO de 2024</time>
                        </div>
                    </article>
                </section>
            </main>

            
        </>
    )

}


// Export Page
export default Blog