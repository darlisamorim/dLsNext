// React Import
// import React from 'react'

// Style Import  
import styles from './Home.module.scss';


// Image Import's 
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';


// Links Import  
import Link from 'next/link';

// React Icons


// Construct Page
function Home() {

    return (
        <>


        <section className={`${styles.abount} container_flex`}>
            <div className="content_flex">
                <article>

                    <h1>
                        <b>
                            Software Engineer end Full Stack Developer of São Paulo/SP
                        </b>
                        Olá! meu nome é <strong>Darlis Alves Amorim</strong>, um entusiasta do desenvolvimento. Trabalho com PHP, Laravel, Node, JavaScript, React, Vue e outras tecnologias incríveis. Tenho uma bagagem sólida e adoro transformar ideias em soluções digitais inovadoras. Minha jornada no mundo da programação é guiada pelo comprometimento e pela busca constante de aprimoramento. Adoro criar projetos web eficientes e escaláveis. Vamos construir algo incrível juntos! 🚀✨
                    </h1>
                    <p>
                        
                    </p>
                </article>

                <figure>
                    <img src="/Images/l.webp" title="Software Engineer end Full Stack Developer of São Paulo/SP" alt="Olá! meu nome é Darlis Alves Amorim, um entusiasta do desenvolvimento. Trabalho com PHP, Laravel, Node, JavaScript, React, Vue e outras tecnologias incríveis. Tenho uma bagagem sólida e adoro transformar ideias em soluções digitais inovadoras. Minha jornada no mundo da programação é guiada pelo comprometimento e pela busca constante de aprimoramento. Adoro criar projetos web eficientes e escaláveis. Vamos construir algo incrível juntos!" />
                </figure>
            </div>
        </section>

            <section className={`${styles.project} container_flex`}>
                <div className="content_flex">
                    <article className="">
                        <div className="">
                            <h1>
                                Titulo -
                                <b>
                                    Software 
                                </b>
                                <b>
                                    Engineer 
                                </b>
                                <b>
                                    Full Stack
                                </b>
                                <b>
                                    Developer
                                </b>
                                <b>
                                    São Paulo/SP
                                </b>
                            </h1>
                            <p>
                                Olá! meu nome é <strong>Darlis Alves Amorim</strong>, um entusiasta do desenvolvimento. Trabalho com PHP, Laravel, Node, JavaScript, React, Vue e outras tecnologias incríveis. Tenho uma bagagem sólida e adoro transformar ideias em soluções digitais inovadoras. Minha jornada no mundo da programação é guiada pelo comprometimento e pela busca constante de aprimoramento. Adoro criar projetos web eficientes e escaláveis. Vamos construir algo incrível juntos! 🚀✨
                            </p>
                        </div>
                        <div className="">
                            <button>View GitHub</button>
                            <a title="" href="">View Project -/</a>
                        </div>
                    </article>

                    <figure>
                        <img src="/Images/l.webp" title="Software Engineer end Full Stack Developer of São Paulo/SP" alt="Olá! meu nome é Darlis Alves Amorim, um entusiasta do desenvolvimento. Trabalho com PHP, Laravel, Node, JavaScript, React, Vue e outras tecnologias incríveis. Tenho uma bagagem sólida e adoro transformar ideias em soluções digitais inovadoras. Minha jornada no mundo da programação é guiada pelo comprometimento e pela busca constante de aprimoramento. Adoro criar projetos web eficientes e escaláveis. Vamos construir algo incrível juntos!" />
                    </figure>
                </div>
            </section>
        </>
    )

}


// Export Page
export default Home