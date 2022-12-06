import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import { FooterContainer } from './style'

function Footer() {
  return (
    <FooterContainer>
        <div className='footer__top'>
            <div className='footer__top__col1'>
                <p>Ainda não é aluno? <br/> Inscreva-se</p>
                <a
                    className='header__btn__wpp'
                    href="http://api.whatsapp.com/send?1=pt_BR&phone=5538988266009"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FaWhatsapp />
                    Pelo Whats
                </a>
                <Link href="/#form">
                    Pelo site
                </Link>
            </div>
            <div className='footer__top__col2'>
                <p>A Proz</p>
                <div>
                    <Link href="/quem-somos">
                        Quem Somos
                    </Link>
                    <Link href="/blog">
                        Blog
                    </Link>

                    <Link href="/">
                        Canal de Ética
                    </Link>
                    <Link href="/">
                        Trabalhe Conosco
                    </Link>
                </div>
            </div>
            <div className='footer__top__col3'>
                <p>Cursos Técnicos</p>
                <div>
                    <Link href="/">Área da Saúde</Link>
                    <Link href="/">Área de Tecnologia</Link>
                    <Link href="/">Área de Gestão</Link>
                    <Link href="/">Cursos de Aprimoramento</Link>
                    <Link href="/">Cursos de Capacitação</Link>
                </div>
            </div>
            <div className='footer__top__col4'>
                <a href="https://cuiabacebrac.com.br/">
                    Unidades <br/>Cuiabá
                </a>
                <a href="https://www.londrinacebrac.com.br/">
                    Unidades <br/>Londrina
                </a>
                <Link href="/">
                    Unidades <br/>Montes Claros
                </Link>
            </div>
            <div className='footer__top__col5'>
                <p>Siga nossas redes</p>
                <a href="https://www.facebook.com/cebracmontesclaros">
                    <FaFacebookSquare />
                </a>
                <a href="https://www.instagram.com/cebrac.montesclaros/">
                    <FaInstagramSquare />
                </a>
                <a
                    href="http://api.whatsapp.com/send?1=pt_BR&phone=5538988266009"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FaWhatsappSquare />
                </a>
            </div>
        </div>
        <div className='footer__bottom'>
            <p>© 2022 CEBRAC Montes Claros - Desenvolvido por <a href="https://digitalcloudbrasil.com.br/">Digital Cloud Brasil</a>.</p>
        </div>
    </FooterContainer>
  )
}

export default Footer