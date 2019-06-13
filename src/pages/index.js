import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./bootstrap.css"
import { Tab, Row, ListGroup, Col } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Начало работы
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Landing Page с Gatsby
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <h1>
                <strong>Быстрый старт</strong>
              </h1>
              <br></br>
              <p>
                Эта инструкция предназначена для тех, кто уже имеет
                представление о npm и базовые навыки работы с командной строкой.
              </p>
              <h6>
                <strong>
                  1. Устанавливаем приложение для командной строки:
                </strong>
              </h6>
              <code>npm install -g gatsby-cli</code>
              <h6>
                <strong>2. Создаем новый сайт:</strong>
              </h6>
              <code>gatsby new gatsby-site</code>
              <h6>
                <strong>3. Переходим в директорию сайта:</strong>
              </h6>
              <code>cd gatsby-site</code>
              <h6>
                <strong>4. Запускаем сервер для разработки:</strong>
              </h6>
              <code>gatsby develop</code>
              <br></br>
              <h4 style={{ marginTop: "20px" }}>
                <b>Вуаля!</b>
              </h4>
              <p>
                {" "}
                Если всё хорошо, то вы запустили стартовый gatsby сайт.
                Перейдите на{" "}
                <a href="http://localhost:8000" target="blank">
                  localhost:8000
                </a>{" "}
                и убедитесь, что всё работает.
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <h1>
                <strong>Лэндинг с Gatsby</strong>
              </h1>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </Layout>
)

export default IndexPage
