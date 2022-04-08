import { GetStaticProps } from 'next';
import Head from 'next/head'
import ReactMarkdown from 'react-markdown';
import Image from 'next/image'

type HomeProps = {
  content: string;
};

export default function Home({ content }: HomeProps) {

  return (
    <>
      <Head><title>Paulo Collares | Analista de Sistemas</title></Head>

      <div className="site">

        <div className="header">
          <Image width={128} height={120} src='/images/foto.jpeg' objectFit="cover" />
          <h1>Paulo Collares</h1>
          <h2>Analista de Sistemas</h2>
        </div>

        <div className="content">
          <ReactMarkdown children={content} />
        </div>

        <div className="footer">
            <a href='https://www.collares.net.br' target='_blank'>COLLARES.net.br</a>
        </div>

      </div>

    </>
  )

}

export const getStaticProps: GetStaticProps = async () => {

  const content=`Profissional de TI com vasta experiência no desenvolvimento de sistemas em Java.  Amplo conhecimento nas áreas da Engenharia de Software e da Ciência da Computação. Habilidades práticas na coordenação de equipes de programação e no gerenciamento de grandes projetos de Pesquisa e Desenvolvimento.

  # Habilidades
   
  -	Java, Spring e Hibernate
  -	HTML, CSS, JavaScript e ES6
  -	ReactJS e React Native
  -	PostgreSQL e MongoDB
  -	JavaFx
  -	GIT e SVN
  -	MQTT e RabbitMq
  -	Linux e redes 
  
  # Educação
  
  - Bacharel em sistemas de informação pela Universidade do Grande Rio (Unigranrio)
  - Pós-graduado em engenharia de software (desenvolvimento Java) pelo Instituto Infnet
  
  # Experiência
  
    OBS: Por motivos de privacidade irei omitir o nome das instituições e empresas
  
  ## Analista de sistemas em um orgão público (desde 2012)
  
  -	Desenvolvimento de sistemas de alto desempenho para pesquisa científica;
  -	Coordenação de equipes de desenvolvimento;
  -	Planejamento da arquitetura de software; 
  -	Monitoração e manutenção dos sistemas em produção.
  
  ## Analista de sistemas em um projeto comercial (2018 - 2020)
  
  -	Desenvolvimento do protótipo de um sistema para a área da saúde;
  -	Elaboração da arquitetura de software;
  -	Integração com equipamentos de IoT (Internet das coisas);
  -	Coordenação de programadores autônomos.
  
  ## Suporte e redes em um departamento público (2010 - 2012)
  
  -	Desenvolvimento e manutenção de sistemas internos;
  -	Manutenção do parque de computacional da instituição;
  -	Elaboração e administração da infraestrutura da rede.
  
  ## Programador em uma empresa comercial (2007 - 2009)
  
  -	Desenvolvimento de sites para o comércio e a indústria local;
  -	Elaboração dos sites internos da empresa;
  -	Manutenção da hospedagem dos sites dos clientes.
  
  # Publicações
  
  - Contador de Palavras paralelizado com o uso do MPI. 4º Congresso Científico da Semana Tecnológica – IFSP (2013)
  - Classificador de embarcações marítimas utilizando lógica Fuzzy. SPOLM (2014)
  
  
  # Links
  
  - [Blog pessoal](https://www.paulocollares.com.br/)
  - [Twitter](https://twitter.com/pcollares)
  - [Linkedin](https://br.linkedin.com/in/pcollares)
  - [Github](https://github.com/pcollares)
  - [Alura](https://cursos.alura.com.br/user/pcollares)
  
  # Código fonte
  
  Este site foi desenvolvido com Next.js, o código fonte está disponível em [github.com/pcollares/paulocollares.dev.br](https://github.com/pcollares/paulocollares.dev.br)`

  return {
    props: {
      content
    },

  }

}
