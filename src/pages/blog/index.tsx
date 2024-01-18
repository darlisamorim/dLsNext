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

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// React Icons
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";


// Construct Page
function Blog() {

    return (
        <>
            <Header/>
            
            <Head>
                <title>
                    Blog | dLs
                </title>
            </Head>
            <main className="content_flex">
                <section className={`${styles.blog} content_flex`}>
                
                    <article className="blog_article">
                        <div className="blog_tags">
                            <Link href="/Tag">
                            - - <b>Tag 1</b> -
                            </Link>
                            <Link href="/Tag">
                            - <b>Tag 2</b> -
                            </Link>
                            <Link href="/Tag">
                            - <b>Tag 3</b> -
                            </Link>
                            <Link href="/Tag">
                            - <b>Tag 4</b> - -
                            </Link>
                        </div>

                        <Link href="/blog/article">
                            <h1>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, obcaecati.
                            </h1>
                        </Link>
                        
                        <Link href="/blog/article">
                            <Image
                                className="blog_thumbnail"
                                src={Default} 
                                width={500}
                                height={250}
                                quality={100}
                                title="Lorem ipsum dolor sit amet." 
                                alt="Lorem ipsum dolor sit amet." 
                            />
                        </Link>
                        <p className="blog_paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem, quae eveniet dicta veniam doloribus fugit. Provident dignissimos adipisci sunt iusto, quidem autem cumque voluptatem sed eveniet odio ut repudiandae!
                        </p>

                        

                        <div className="blog_bar">
                            <span>Author</span> - 
                            - <time>28 de JANEIRO de 2024</time>
                        </div>
                    </article>

                    <div className="blog_navigate">
                        <div>
                            <button>
                                <BsChevronDoubleLeft size={25} />
                            </button>
                            <button>
                                <BsChevronLeft size={25} />
                            </button> -
                            - <button>
                                <BsChevronRight size={25} />
                            </button>
                            <button>
                                <BsChevronDoubleRight size={25} />
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            
            <Footer/>
        </>
    )

}


// Export Page
export default Blog