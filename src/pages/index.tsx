import { GetStaticProps } from 'next';
import Head from 'next/head'
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter'
import Image from 'next/image'

type HomeProps = {
  content: String;
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

  const content = await import(`../content/home.md`)

  const data = matter(content.default)

  return {
    props: {
      content: data.content
    },

  }

}
