import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import CarouselHome from '../components/CarouselHome';

const Home: React.FC = () => {
  return (
    <>
      <Container
        fluid
        style={{
          // background: '#00a5b5',
          height: '91vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="d-flex"
      >
        <CarouselHome />
      </Container>
      <Container>
        <Row className="mt-5">
          <Col md={3} className="mb-5">
            <Card style={{ width: '100%' }}>
              <Card.Img
                variant="top"
                src="https://cosbiome.com/wp-content/uploads/2020/02/cosmetology-20-512.png"
              />
              <Card.Body>
                <Card.Title>INSTITUTO COSBIOME APARATOLOGÍA Y LÍNEA COSMÉTICA</Card.Title>
                <Card.Text>
                  En INSTITUTO COSBIOME, además encontraras aparatología estética y línea cosmética,
                  cumpliendo con los estándares por el medio y que coadyuven a cosmetólogas,
                  cosmiatras y médicos estéticos a generar resultados en tratamientos faciales y
                  corporales hacia sus pacientes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-5">
            <Card style={{ width: '100%' }}>
              <Card.Img
                variant="top"
                src="https://cosbiome.com/wp-content/uploads/2020/02/cosmetology-14-512.png"
              />
              <Card.Body>
                <Card.Title>CINSTITUTO COSBIOME CAPACITACIÓN MÉDICO ESTÉTICA</Card.Title>
                <Card.Text>
                  Así mismo en INSTITUTO COSBIOME se otorgan cursos de actualización para el
                  segmento MEDICO en diversas técnicas, que le permitan ampliar la gama de servicios
                  a los profesionales de la salud, que se desempeñan en el rubro médico-estético. Es
                  importante mencionar que estos cursos son impartidos por profesionales de la
                  salud, especialistas en las técnicas que se imparten. Se otorga constancia STPS.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-5">
            <Card style={{ width: '100%' }}>
              <Card.Img
                variant="top"
                src="https://cosbiome.com/wp-content/uploads/2020/02/cosmetology_vol2-15-512.png"
              />
              <Card.Body>
                <Card.Title>MODALIDADES EN LA CARRERA</Card.Title>
                <Card.Text>
                  Presencial: Acude en horarios flexibles de lunes a viernes, solo viernes o solo
                  sábados. El línea: Podrás cursar tu carrera en línea al tener acceso a clases en
                  nuestra plataforma en tiempo real solo ingresando a nuestro portal en el apartado
                  de escuela con tu usuario y contraseña, si por alguna razón no puedes ver la clase
                  el día que se transmite en vivo tu clase se quedara grabada para que puedas verla
                  el día y las veces que lo necesites. Para esta modalidad necesitas una computadora
                  o celular con acceso a internet.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-5">
            <Card style={{ width: '100%' }}>
              <Card.Img
                variant="top"
                src="https://cosbiome.com/wp-content/uploads/2020/02/6758850_preview.png"
              />
              <Card.Body>
                <Card.Title>CINSTITUTO COSBIOME CARRERA COSMETOLOGIA (SEP)</Card.Title>
                <Card.Text>
                  Nuestro compromiso es la correcta formación de profesionales en el segmento de la
                  COSMETOLOGIA y para ello impartimos la carrera de cosmetología con validez
                  oficial, con lo cual se da certeza al alumnado de que sus conocimientos son
                  impartidos por un instituto registrado ante la secretaria de educación pública
                  SEP, y brindando así la posibilidad de desempeñarse como un profesional que se
                  adecue al entorno social en su ramo. El profesional al concluir su carrera contara
                  con las bases sólidas para desempeñarse en cualquier institución o trabajar por
                  independencia propia.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mb-5" style={{ backgroundColor: 'rgba(97,204,204,0.16)' }}>
          <Col md={6} className="text-center mt-2">
            <iframe
              title="video1"
              width="379"
              height="284"
              src="https://www.youtube.com/embed/X66DeKkTs94"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col md={6} className="text-center mt-2">
            <iframe
              title="video1"
              width="379"
              height="284"
              src="https://www.youtube.com/embed/X66DeKkTs94"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
