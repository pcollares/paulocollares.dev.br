import { Container, Header, Image, List, Segment } from 'semantic-ui-react'

export default function Home() {

  return (
    <Container text >

      <br />

      <Segment>
        <Image
          circular
          src='/images/foto.jpeg'
          size="small"
          centered
        />
        <Header as='h1' textAlign='center' >
          Paulo Collares
        <Header.Subheader>
            Analista de sistemas
        </Header.Subheader>
        </Header>
      </Segment>

      <br />

      <p>
        &emsp;Sou formado em Sistemas de Informações pela Unigranrio, e pós graduado em Engenharia de Softwares pelo instituto INFNET. Já trabalhei com desenvolvimentos de sites comerciais e administração de redes e servidores e atualmente com desenvolvimento Java para desktop e para web e React no front-end
    </p>
      <p>
        &emsp;Trabalho bem em equipe e tenho experiências na coordenação de times de desenvolvimento e gerenciamento de grandes projetos.
    </p>

      <Header as="h2">
        Habilidades
        </Header>

      <List bulleted>
        <List.Item>Java, JavaFX, Spring</List.Item>
        <List.Item>HTML, CSS, JavaScript</List.Item>
        <List.Item>ReactJS</List.Item>
        <List.Item>GIT e SVN</List.Item>
        <List.Item>PostgreSQL e MongoDB</List.Item>
        <List.Item>MQTT</List.Item>
        <List.Item>Linux</List.Item>
      </List>

      <Header as="h2">
        Links
    </Header>

      <List bulleted>
        <List.Item href='https://www.paulocollares.com.br'>Blog pessoal</List.Item>
        <List.Item href='https://twitter.com/pcollares'>Twitter</List.Item>
        <List.Item href='https://br.linkedin.com/in/pcollares'>Linkedin</List.Item>
        <List.Item href='https://github.com/pcollares'>Github</List.Item>

      </List>


    </Container>
  )
}
