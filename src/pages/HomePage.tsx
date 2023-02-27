import { useState } from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "../gql";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Modal,
  Form,
  Row,
  Col,
  InputGroup,
  Dropdown,
  DropdownButton,
  Stack,
  NavDropdown,
} from "react-bootstrap";

export default function ChannelPage() {
  const [channelModal, setChannelModal] = useState(false);
  // const [show, setShow] = useState(false);

  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);

  const modalHandler = (stat: boolean): void => {
    setChannelModal(stat);
    console.log(stat);
  };

  return (
    <>
      <div className="page home-page">
        <nav id="sidebar" className="text-white">
          <div className="sidebar-header d-flex position-relative">
            <Link to="#" style={{ textDecoration: "none" }}>
              log out
            </Link>
            <div className="avatar mr-3 d-flex align-items-center">
              <span className="icon-user-solid-circle"></span>
            </div>
            <div>
              <div className="label">Logged in as:</div>
              <div className="email">francisco@tvguide.co.uk</div>
            </div>
          </div>
        </nav>

        <div id="page-content">
          <header id="main-header">
            <div className="position-relative d-flex flex-column align-items-center header-content">
              <div
                className="active-item active-episode-js d-flex"
                style={{ backgroundImage: `url(${"assets/images/bg.jpg"})` }}
              >
                <div className="bg-layer"></div>
                <div className="container-fluid d-flex justify-content-end flex-column">
                  <h1 className="text-white title">Doctor Who</h1>
                  <div className="d-flex align-items-start">
                    <img
                      src="assets/images/channels/bbc-one.png"
                      className="mr-2 mr-sm-3 channel-logo"
                    />
                    <div className="text-white">
                      <div className="start-time font-weight-bold">
                        9.00pm Tomorrow
                      </div>
                      <div className="episode">Season 11 Episode 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* <nav className="nav-b align-items-center">
            <div className="container-fluid d-flex justify-content-center justify-content-md-between">
              <ul className="list-unstyled m-0 d-none d-md-flex">
                <li className="active">
                  <Link to="/channel" style={{ textDecoration: "none" }}>
                    Channel
                  </Link>
                </li>
                <li>
                  <Link to="/genre" style={{ textDecoration: "none" }}>
                    Genre
                  </Link>
                </li>
                <li>
                  <Link to="/vod" style={{ textDecoration: "none" }}>
                    VOD
                  </Link>
                </li>
                <li>
                  <Link to="/trending" style={{ textDecoration: "none" }}>
                    Trending
                  </Link>
                </li>
              </ul>
              <div className="mobile-search d-flex align-items-center">
                <form action="" className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search for Shows or Films ..."
                    aria-label="Search for Shows or Films"
                  />
                  <button type="submit">
                    <span className="icon-search"></span>
                  </button>
                </form>
              </div>
            </div>
          </nav> */}
          {/* <Button variant="primary" onClick={handleShow}>
            Open Modal
          </Button> */}

          {/* <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <ul className="list-unstyled m-0 d-none d-md-flex">
                <li className="active">
                  <Link to="/channel" style={{ textDecoration: "none" }}>
                    Channel
                  </Link>
                </li>
                <li>
                  <Link to="/genre" style={{ textDecoration: "none" }}>
                    Genre
                  </Link>
                </li>
                <li>
                  <Link to="/vod" style={{ textDecoration: "none" }}>
                    VOD
                  </Link>
                </li>
                <li>
                  <Link to="/trending" style={{ textDecoration: "none" }}>
                    Trending
                  </Link>
                </li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <div className="mobile-search d-flex align-items-center">
                <form action="" className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search for Shows or Films ..."
                    aria-label="Search for Shows or Films"
                  />
                  <button type="submit">
                    <span className="icon-search"></span>
                  </button>
                </form>
              </div>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> */}
          <Navbar collapseOnSelect bg="dark" variant="dark">
            <Container>
              <Nav className="align-items-center">
                <Navbar.Brand href="#home">Channel</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Navbar.Brand href="#features">Genre</Navbar.Brand>
                    <Navbar.Brand href="#pricing">VOD</Navbar.Brand>
                    <Navbar.Brand href="#pricing">Trending</Navbar.Brand>
                  </Nav>
                  <div className="mobile-search d-flex align-items-center">
                    <form action="" className="form-inline my-2 my-lg-4">
                      <input
                        style={{ marginLeft: "550px" }}
                        className="form-control"
                        type="search"
                        placeholder="Search for Shows or Films ..."
                        aria-label="Search for Shows or Films"
                      />
                      <Button type="submit">
                        <span className="icon-search"></span>
                      </Button>
                    </form>
                  </div>
                </Navbar.Collapse>
              </Nav>
            </Container>
          </Navbar>

          {/* <nav id="grid-menu" className="text-white d-flex align-items-center">
            <div className="container-fluid d-flex justify-content-between w-100 h-100">
              <ul className="list-unstyled d-flex m-0 nav">
                <li className="d-flex">
                  <a
                    data-toggle="modal"
                    data-target="#settings-modal"
                    data-backdrop="static"
                    className="d-inline-flex"
                  >
                    <span className="icon-cog"></span>
                  </a>
                </li>
                <li className="dropdown ml-3 ml-md-5">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="todayMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ textDecoration: "none" }}
                  >
                    Today <span className="ml-2 icon-chevron-down"></span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="todayMenu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="nowMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ textDecoration: "none" }}
                  >
                    Now <span className="ml-2 icon-chevron-down"></span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="nowMenu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="dropdown d-none d-md-flex">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="genreMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ textDecoration: "none" }}
                  >
                    Genre <span className="ml-2 icon-chevron-down"></span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="genreMenu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="d-none d-xl-flex ml-md-3">
                  <form action="">
                    <label className="m-0 d-flex align-items-center">
                      Find Channel
                      <input type="text" className="text-white ml-2" />
                      <button type="submit">
                        <span className="icon-search text-white"></span>
                      </button>
                    </label>
                  </form>
                </li>
              </ul>
              <div className="right d-inline-flex align-items-center">
                <span className="date-js d-none d-md-inline date"></span>
                <a href="index-b.html" className="ml-5 layout-btn">
                  <img src="assets/images/header/icon-view-a.svg" />
                </a>
              </div>
            </div>
          </nav> */}

          <Navbar
            id="grid-menu"
            variant="dark"
            className="text-white d-flex align-items-center"
          >
            <div className="container-fluid d-flex justify-content-between w-100 h-100">
              <Nav className="list-unstyled d-flex m-0 nav">
                {/* <NavDropdown
                  title={
                    <>
                      <span className="icon-cog"></span>
                    </>
                  }
                  id="settings-modal"
                >
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </NavDropdown> */}
                <a>
                  <span
                    className="icon-cog"
                    onClick={() => modalHandler(true)}
                  ></span>
                </a>
                <Modal
                  show={channelModal}
                  fullscreen={true}
                  onHide={() => modalHandler(false)}
                  className="modal fade"
                  id="settings-modal"
                  role="dialog"
                  aria-labelledby="settings-modal"
                  aria-hidden="true"
                  style={{ background: "#1b2739e3" }}
                >
                  <Modal.Body>
                    <Container className="full-h">
                      <Row className="full-h">
                        <Col md={{ span: 6, offset: 3 }} className="full-h">
                          {/*Sign in Form*/}
                          {/*Error & Success alerts*/}
                          <Form.Group className="mb-3 text-white">
                            <Stack
                              className="mb-3"
                              direction="horizontal"
                              gap={4}
                            >
                              <h4>Customise Channels</h4>
                              <div className="ms-auto">
                                <Button
                                  className="custom-btn-success"
                                  variant="success"
                                  type="submit"
                                  onClick={() => modalHandler(false)}
                                >
                                  CANCEL{" "}
                                </Button>
                              </div>
                              <div className="">
                                <Button
                                  className="custom-btn-secondary"
                                  variant="secondary"
                                  onClick={() => modalHandler(false)}
                                >
                                  DONE
                                </Button>
                              </div>
                            </Stack>
                          </Form.Group>
                          <Form className="d-flex mb-5 align-items-lg-center flex-column flex-lg-row">
                            <h3 className="mb-3 mb-lg-0 text-white">
                              Select Provider and Region
                            </h3>

                            <Col className="d-flex ml-lg-5 p-4">
                              <DropdownButton
                                title="Provider"
                                id="dropdown-menu-align-right"
                                children={undefined}
                              ></DropdownButton>

                              <DropdownButton
                                className="ml-4"
                                title="Provider"
                                id="dropdown-menu-align-right"
                                children={undefined}
                              ></DropdownButton>
                            </Col>
                          </Form>
                          Note that you would need to import the necessary
                          components from React Bootstrap.
                        </Col>
                      </Row>
                    </Container>
                  </Modal.Body>
                </Modal>

                <NavDropdown
                  title={
                    <>
                      <span className="mr-2">Today</span>
                      <span className="icon-chevron-down"></span>
                    </>
                  }
                  id="todayMenu"
                >
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <>
                      <span className="mr-2">Now</span>
                      <span className="icon-chevron-down"></span>
                    </>
                  }
                  id="nowMenu"
                >
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <>
                      <span className="mr-2">Genre</span>
                      <span className="icon-chevron-down"></span>
                    </>
                  }
                  id="genreMenu"
                  className="d-none d-md-block"
                >
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </NavDropdown>
                <Form className="d-none d-xl-block ml-md-3">
                  <Form.Label className="m-0 d-flex align-items-center">
                    Find Channel
                    <Form.Control type="text" className="text-white ml-2" />
                    <Button type="submit">
                      <span className="icon-search text-white"></span>
                    </Button>
                  </Form.Label>
                </Form>
              </Nav>
              <div className="right d-inline-flex align-items-center">
                <span className="date-js d-none d-md-inline date"></span>
                <a href="index-b.html" className="ml-5 layout-btn">
                  <img src="assets/images/header/icon-view-a.svg" />
                </a>
              </div>
            </div>
          </Navbar>

          <div className="container-fluid p-0">
            <div
              id="time-bar"
              className="time-bar-js text-white d-flex align-items-center"
            >
              <div>12:00 AM</div>
              <div>12:30 AM</div>
              <div>1:00 AM</div>
              <div>1:30 AM</div>
              <div>2:00 AM</div>
              <div>2:30 AM</div>
              <div>3:00 AM</div>
              <div>3:30 AM</div>
              <div>4:00 AM</div>
              <div>4:30 AM</div>
              <div>5:00 AM</div>
              <div>5:30 AM</div>
              <div>6:00 AM</div>
              <div>6:30 AM</div>
              <div>7:00 AM</div>
              <div>7:30 AM</div>
              <div>8:00 AM</div>
              <div>8:30 AM</div>
              <div>9:00 AM</div>
              <div>9:30 AM</div>
              <div>10:00 AM</div>
              <div>10:30 AM</div>
              <div>11:00 AM</div>
              <div>11:30 AM</div>

              <div>12:00 PM</div>
              <div>12:30 PM</div>
              <div>1:00 PM</div>
              <div>1:30 PM</div>
              <div>2:00 PM</div>
              <div>2:30 PM</div>
              <div>3:00 PM</div>
              <div>3:30 PM</div>
              <div>4:00 PM</div>
              <div>4:30 PM</div>
              <div>5:00 PM</div>
              <div>5:30 PM</div>
              <div>6:00 PM</div>
              <div>6:30 PM</div>
              <div>7:00 PM</div>
              <div>7:30 PM</div>
              <div>8:00 PM</div>
              <div>8:30 PM</div>
              <div>9:00 PM</div>
              <div>9:30 PM</div>
              <div>10:00 PM</div>
              <div>10:30 PM</div>
              <div>11:00 PM</div>
              <div>11:30 PM</div>
            </div>

            <section
              id="grid"
              className="d-flex"
              style={{ backgroundColor: "#212529" }}
            >
              <div className="pt-3 rows" id="grid-js">
                <div className="time-line"></div>
                <div
                  className="grid-row d-flex special-channel"
                  style={{
                    backgroundImage: `url(${"assets/images/home/grid/spaecial-channel-bg.jpg"})`,
                  }}
                >
                  <div className="channel-info special d-flex flex-column justify-content-center align-items-center">
                    <img src="assets/images/channels/blaze.png" alt="Blaze" />
                    <div className="caption">FREEVIEW 63</div>
                  </div>
                  <div className="position-relative wrapper">
                    <div className="channel-title text-uppercase">
                      Swamp people
                    </div>
                    <div className="row mb-0">
                      <div className="col d-flex">
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card lg"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card-lg.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="channel-secondary-title text-uppercase">
                      Tomorrow 10PM
                    </div>
                  </div>
                </div>
                <div className="grid-row d-flex">
                  <div className="channel-info d-flex flex-column justify-content-center align-items-center">
                    <img
                      src="assets/images/channels/bbc-two.png"
                      alt="BBC Two"
                    />
                    <div className="caption">102</div>
                  </div>
                  <div className="row">
                    <div className="col d-flex">
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid-row d-flex">
                  <div className="channel-info d-flex flex-column justify-content-center align-items-center">
                    <img src="assets/images/channels/itv.png" alt="ITV" />
                    <div className="caption">103</div>
                  </div>
                  <div className="row">
                    <div className="col d-flex">
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid-row d-flex">
                  <div className="channel-info d-flex flex-column justify-content-center align-items-center">
                    <img src="assets/images/channels/four.png" alt="Four" />
                    <div className="caption">104</div>
                  </div>
                  <div className="row">
                    <div className="col d-flex">
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid-row d-flex">
                  <div className="channel-info d-flex flex-column justify-content-center align-items-center">
                    <img src="assets/images/channels/five.png" alt="Five" />
                    <div className="caption">105</div>
                  </div>
                  <div className="row">
                    <div className="col d-flex">
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid-row d-flex">
                  <div className="channel-info d-flex justify-content-center">
                    <div className="caption ad m-0 d-flex align-items-center">
                      Advertisement
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <a href="#" className="ad">
                        <img
                          src="assets/images/banner.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid-row d-flex text-white suggested-channels">
                  <div className="channel-info"></div>

                  <div className="row py-3 pl-2 mb-0">
                    <div className="col">
                      <h5 className="mb-2">
                        Suggested Channels <span>(click to add)</span>
                      </h5>

                      <div className="d-flex mb-1">
                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>
                      </div>

                      <div className="dropup d-inline-flex">
                        <a
                          className="dropdown-toggle text-white quick-add d-inline-flex align-items-center"
                          href="#"
                          role="button"
                          id="quick-suggested-channel"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{ textDecoration: "none" }}
                        >
                          Quick add{" "}
                          <span className="icon-chevron-down d-inline-flex ml-1"></span>
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="quick-suggested-channel"
                        >
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div id="sidenav-overlay"></div>
      </div>

      {/* <!-- Settings Modal --> */}
      <div
        className="modal fade"
        id="settings-modal"
        role="dialog"
        aria-labelledby="settings-modal"
        aria-hidden="true"
        style={{ background: "#1b2739e3" }}
      >
        <div className="modal-dialog mx-auto" role="document">
          <div
            className="modal-content text-white"
            style={{ backgroundColor: "#1b273900 " }}
          >
            <div className="d-flex justify-content-between mb-4 pb-2">
              <h2>Customise Channels</h2>
              <div className="d-none d-xl-block">
                <button
                  data-dismiss="modal"
                  className="c-button s-sm s-md-xs mr-4 muted"
                >
                  Cancel
                </button>
                <button className="c-button s-sm s-md-xs success font-weight-bold">
                  Done
                </button>
              </div>
            </div>
            <div className="d-flex mb-5 align-items-lg-center flex-column flex-lg-row">
              <h3 className="mb-3 mb-lg-0">Select Provider and Region</h3>
              <div className="d-flex flex-fill ml-lg-4">
                <div className="c-select mr-4">
                  <select>
                    <option selected>Freeview</option>
                    <option value="1">Placeholder</option>
                    <option value="2">Placeholder</option>
                  </select>
                  <div className="outline"></div>
                </div>
                <div className="c-select">
                  <select>
                    <option selected>London</option>
                    <option value="1">Placeholder</option>
                    <option value="2">Placeholder</option>
                  </select>
                  <div className="outline"></div>
                </div>
              </div>
            </div>
            <div className="row flex-lg-row-reverse flex-column flex-lg-row">
              <div className="col-lg add-channel mb-4 mb-lg-0 pl-lg-5">
                <h3 className="mb-0 mb-sm-2">Add Channel</h3>
                <div>
                  <div className="d-flex mb-3 mb-sm-4">
                    <input type="search" id="channels-search-js" />
                    <span className="icon-search ml-md-3"></span>
                  </div>
                  <ul className="list-unstyled">
                    <li className="mb-2 mb-sm-3 d-flex justify-content-between align-items-center">
                      <div className="flex-fill">
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="ml-2 text">BBC One</span>
                      </div>
                      <span className="icon-plus"></span>
                    </li>
                    <li className="mb-2 mb-sm-3 d-flex justify-content-between align-items-center">
                      <div className="flex-fill">
                        <img
                          src="assets/images/channels/bbc-two.png"
                          alt="BBC Two"
                        />
                        <span className="ml-2 text">BBC Two</span>
                      </div>
                      <span className="icon-plus"></span>
                    </li>
                    <li className="mb-2 mb-sm-3 d-flex justify-content-between align-items-center">
                      <div className="flex-fill">
                        <img
                          src="assets/images/channels/the_blaze.png"
                          alt="The blaze"
                        />
                        <span className="ml-2 text">The blaze</span>
                      </div>
                      <span className="icon-plus"></span>
                    </li>
                    <li className="mb-2 mb-sm-3 d-flex justify-content-between align-items-center">
                      <div className="flex-fill">
                        <img
                          src="assets/images/channels/itv_be.png"
                          alt="ITV be"
                        />
                        <span className="ml-2 text">ITV be</span>
                      </div>
                      <span className="icon-plus"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg">
                <h3 className="mb-3">Your Channels</h3>
                <div className="channels position-relative" id="channels">
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="d-flex justify-content-end d-xl-none">
          <div className="d-flex flex-fill flex-sm-grow-0">
            <button
              data-dismiss="modal"
              className="c-button s-sm s-md-xs mr-3 mr-sm-4 muted flex-fill"
            >
              Cancel
            </button>
            <button className="c-button s-sm s-md-xs success font-weight-bold flex-fill">
              Done
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}




import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useQuery } from "@apollo/client";
import { graphql } from "../../../gql";
import { Link } from "react-router-dom";
import Footer from "../../../pages/components/Footer";

import {
  Navbar,
  Container,
  Nav,
  Button,
  Modal,
  Form,
  Row,
  Col,
  InputGroup,
  Dropdown,
  DropdownButton,
  Stack,
  NavDropdown,
  Image,
} from "react-bootstrap";
import "./style.css";

interface Character {
  id: string;
  name: string;
  thumb: string;
}

const finalSpaceCharacters: Character[] = [
  {
    id: "London",
    name: "BBC Two (London)",
    thumb: "/src/assets/images/channels/bbc-one.jpg",
  },
  {
    id: "London",
    name: "BBC Two (London)",
    thumb: "/src/assets/images/channels/bbc-one.jpg",
  },
  {
    id: "London",
    name: "BBC Two (London)",
    thumb: "/src/assets/images/channels/bbc-one.jpg",
  },
  {
    id: "London",
    name: "BBC Two (London)",
    thumb: "/src/assets/images/channels/bbc-one.jpg",
  },
  {
    id: "London",
    name: "BBC Two (London)",
    thumb: "/src/assets/images/channels/bbc-one.jpg",
  },
];

export default function ChannelPage() {
  const [channelModal, setChannelModal] = useState(false);
  const [characters, updateCharacters] =
    useState<Character[]>(finalSpaceCharacters);
  // const [show, setShow] = useState(false);

  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);

  const modalHandler = (stat: boolean): void => {
    setChannelModal(stat);
    console.log(stat);
  };

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <>
      <div className="page home-page">
        <nav id="sidebar" className="text-white">
          <div className="sidebar-header d-flex position-relative">
            <Link to="#" style={{ textDecoration: "none" }}>
              log out
            </Link>
            <div className="avatar mr-3 d-flex align-items-center">
              <span className="icon-user-solid-circle"></span>
            </div>
            <div>
              <div className="label">Logged in as:</div>
              <div className="email">francisco@tvguide.co.uk</div>
            </div>
          </div>
        </nav>

        <div id="page-content">
          {/* <header id="main-header">
            <div className="position-relative d-flex flex-column align-items-center header-content">
              <div
                className="active-item active-episode-js d-flex"
                style={{ backgroundImage: `url(${"assets/images/bg.jpg"})` }}
              >
                <div className="bg-layer"></div>
                <div className="container-fluid d-flex justify-content-end flex-column">
                  <h1 className="text-white title">Doctor Who</h1>
                  <div className="d-flex align-items-start">
                    <img
                      src="assets/images/channels/bbc-one.png"
                      className="mr-2 mr-sm-3 channel-logo"
                    />
                    <div className="text-white">
                      <div className="start-time font-weight-bold">
                        9.00pm Tomorrow
                      </div>
                      <div className="episode">Season 11 Episode 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header> */}

          {/* <nav className="nav-b align-items-center">
            <div className="container-fluid d-flex justify-content-center justify-content-md-between">
              <ul className="list-unstyled m-0 d-none d-md-flex">
                <li className="active">
                  <Link to="/channel" style={{ textDecoration: "none" }}>
                    Channel
                  </Link>
                </li>
                <li>
                  <Link to="/genre" style={{ textDecoration: "none" }}>
                    Genre
                  </Link>
                </li>
                <li>
                  <Link to="/vod" style={{ textDecoration: "none" }}>
                    VOD
                  </Link>
                </li>
                <li>
                  <Link to="/trending" style={{ textDecoration: "none" }}>
                    Trending
                  </Link>
                </li>
              </ul>
              <div className="mobile-search d-flex align-items-center">
                <form action="" className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search for Shows or Films ..."
                    aria-label="Search for Shows or Films"
                  />
                  <button type="submit">
                    <span className="icon-search"></span>
                  </button>
                </form>
              </div>
            </div>
          </nav> */}
          {/* <Button variant="primary" onClick={handleShow}>
            Open Modal
          </Button> */}

          {/* <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <ul className="list-unstyled m-0 d-none d-md-flex">
                <li className="active">
                  <Link to="/channel" style={{ textDecoration: "none" }}>
                    Channel
                  </Link>
                </li>
                <li>
                  <Link to="/genre" style={{ textDecoration: "none" }}>
                    Genre
                  </Link>
                </li>
                <li>
                  <Link to="/vod" style={{ textDecoration: "none" }}>
                    VOD
                  </Link>
                </li>
                <li>
                  <Link to="/trending" style={{ textDecoration: "none" }}>
                    Trending
                  </Link>
                </li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <div className="mobile-search d-flex align-items-center">
                <form action="" className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search for Shows or Films ..."
                    aria-label="Search for Shows or Films"
                  />
                  <button type="submit">
                    <span className="icon-search"></span>
                  </button>
                </form>
              </div>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> */}
          <Navbar collapseOnSelect bg="dark" variant="dark">
            <Container>
              <Nav className="align-items-center">
                <Navbar.Brand href="#home">Channel</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Navbar.Brand href="#features">Genre</Navbar.Brand>
                    <Navbar.Brand href="#pricing">VOD</Navbar.Brand>
                    <Navbar.Brand href="#pricing">Trending</Navbar.Brand>
                  </Nav>
                  <div className="mobile-search d-flex align-items-center">
                    <form action="" className="form-inline my-2 my-lg-4">
                      <input
                        style={{ marginLeft: "550px" }}
                        className="form-control"
                        type="search"
                        placeholder="Search for Shows or Films ..."
                        aria-label="Search for Shows or Films"
                      />
                      {/* <Button type="submit">
                        <span className="icon-search"></span>
                      </Button> */}
                    </form>
                  </div>
                </Navbar.Collapse>
              </Nav>
            </Container>
          </Navbar>

          {/* <nav id="grid-menu" className="text-white d-flex align-items-center">
            <div className="container-fluid d-flex justify-content-between w-100 h-100">
              <ul className="list-unstyled d-flex m-0 nav">
                <li className="d-flex">
                  <a
                    data-toggle="modal"
                    data-target="#settings-modal"
                    data-backdrop="static"
                    className="d-inline-flex"
                  >
                    <span className="icon-cog"></span>
                  </a>
                </li>
                <li className="dropdown ml-3 ml-md-5">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="todayMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ textDecoration: "none" }}
                  >
                    Today <span className="ml-2 icon-chevron-down"></span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="todayMenu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="nowMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ textDecoration: "none" }}
                  >
                    Now <span className="ml-2 icon-chevron-down"></span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="nowMenu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="dropdown d-none d-md-flex">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="genreMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ textDecoration: "none" }}
                  >
                    Genre <span className="ml-2 icon-chevron-down"></span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="genreMenu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="d-none d-xl-flex ml-md-3">
                  <form action="">
                    <label className="m-0 d-flex align-items-center">
                      Find Channel
                      <input type="text" className="text-white ml-2" />
                      <button type="submit">
                        <span className="icon-search text-white"></span>
                      </button>
                    </label>
                  </form>
                </li>
              </ul>
              <div className="right d-inline-flex align-items-center">
                <span className="date-js d-none d-md-inline date"></span>
                <a href="index-b.html" className="ml-5 layout-btn">
                  <img src="assets/images/header/icon-view-a.svg" />
                </a>
              </div>
            </div>
          </nav> */}

          <Navbar
            id="grid-menu"
            variant="dark"
            className="text-white d-flex align-items-center"
          >
            <div className="container-fluid d-flex justify-content-between w-100 h-100">
              <Nav className="list-unstyled d-flex m-0 nav">
                {/* <NavDropdown
                  title={
                    <>
                      <span className="icon-cog"></span>
                    </>
                  }
                  id="settings-modal"
                >
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </NavDropdown> */}
                <a>
                  <span
                    className="icon-cog"
                    onClick={() => modalHandler(true)}
                  ></span>
                </a>
                <Modal
                  show={channelModal}
                  fullscreen={true}
                  onHide={() => modalHandler(false)}
                  className="modal fade"
                  id="settings-modal"
                  role="dialog"
                  aria-labelledby="settings-modal"
                  style={{ background: "#1b2739e3" }}
                >
                  <Modal.Body>
                    <Container className="full-h ms-0">
                      <Row className="full-h">
                        <Col md={{ span: 7, offset: 3 }} className="full-h">
                          <Form.Group className="mb-3 text-white">
                            <Stack
                              className="mb-3"
                              direction="horizontal"
                              gap={4}
                            >
                              <h2>Customise Channels</h2>
                              <div className="ms-auto">
                                <Button
                                  className="custom-btn-success"
                                  variant="success"
                                  type="submit"
                                  onClick={() => modalHandler(false)}
                                >
                                  CANCEL
                                </Button>
                              </div>
                              <div className="">
                                <Button
                                  className="custom-btn-secondary"
                                  variant="secondary"
                                  onClick={() => modalHandler(false)}
                                >
                                  DONE
                                </Button>
                              </div>
                            </Stack>
                          </Form.Group>
                          <Form className="d-flex mb-5 align-items-lg-center flex-column flex-lg-row">
                            <Row>
                              <h3 className="mb-3 mb-lg-0 text-white">
                                Select Provider and Region
                              </h3>
                            </Row>
                            <Row className="ms-5">
                              <Col>
                                <DropdownButton
                                  className="align"
                                  title="FREEVIEW"
                                  id="dropdown-menu-align-left"
                                  children={undefined}
                                ></DropdownButton>
                              </Col>{" "}
                              <Col>
                                <DropdownButton
                                  className="align"
                                  title="LONDON"
                                  id="dropdown-menu-align-right"
                                  children={undefined}
                                ></DropdownButton>
                              </Col>
                            </Row>
                          </Form>
                          <Col>
                            <Row>
                              <Col>
                                <h3 className="text-white">Yours Channels</h3>
                              </Col>

                              <Col>
                                <h3 className="text-white">Add Channels</h3>
                              </Col>
                              <Form.Label className="m-0 d-flex align-items-center">
                                <Form.Control
                                  type="text"
                                  className="text-white ml-2 add-channel"
                                />
                                <button type="submit">
                                  <span className="icon-search"></span>
                                </button>
                              </Form.Label>
                            </Row>
                            {/* <DragDropContext onDragEnd={handleOnDragEnd}>
                              <Droppable droppableId="characters">
                                {(provided) => (
                                  <ul
                                    className="characters text-white"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                  >
                                    {characters.map(
                                      ({ id, name, thumb }, index) => {
                                        return (
                                          <Draggable
                                            key={id}
                                            draggableId={id}
                                            index={index}
                                          >
                                            {(provided) => (
                                              <li
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                              >
                                                <div className="characters-thumb">
                                                  <img
                                                    src={thumb}
                                                    alt={`${name} Thumb`}
                                                  />
                                                </div>
                                                <p>{name}</p>
                                              </li>
                                            )}
                                          </Draggable>
                                        );
                                      }
                                    )}
                                    {provided.placeholder}
                                  </ul>
                                )}
                              </Droppable>
                            </DragDropContext> */}
                            <div
                              className="alert alert-dismissible fade show draggable settings-modal mb-2"
                              role="alert"
                            >
                              <Row>
                                <div className="channel d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <span className="number mr-2">101</span>
                                    <img
                                      src="assets/images/channels/bbc-one.png"
                                      alt=""
                                    />
                                    <span className="name ml-3">
                                      BBC Two (London)
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <div className="drag-area">
                                      <span></span>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="alert"
                                    aria-label="Close"
                                  >
                                    <span className="icon-close"></span>
                                  </button>
                                </div>
                              </Row>
                              <Row>
                                <div className="channel d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <span className="number mr-2">101</span>
                                    <img
                                      src="assets/images/channels/bbc-one.png"
                                      alt=""
                                    />
                                    <span className="name ml-3">
                                      BBC Two (London)
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <div className="drag-area">
                                      <span></span>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="alert"
                                    aria-label="Close"
                                  >
                                    <span className="icon-close"></span>
                                  </button>
                                </div>
                              </Row>
                              <Row>
                                <div className="channel d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <span className="number mr-2">101</span>
                                    <img
                                      src="assets/images/channels/bbc-one.png"
                                      alt=""
                                    />
                                    <span className="name ml-3">
                                      BBC Two (London)
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <div className="drag-area">
                                      <span></span>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="alert"
                                    aria-label="Close"
                                  >
                                    <span className="icon-close"></span>
                                  </button>
                                </div>
                              </Row>
                              <Row>
                                <div className="channel d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <span className="number mr-2">101</span>
                                    <img
                                      src="assets/images/channels/bbc-one.png"
                                      alt=""
                                    />
                                    <span className="name ml-3">
                                      BBC Two (London)
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <div className="drag-area">
                                      <span></span>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="alert"
                                    aria-label="Close"
                                  >
                                    <span className="icon-close"></span>
                                  </button>
                                </div>
                              </Row>
                            </div>
                          </Col>
                        </Col>
                      </Row>
                    </Container>
                  </Modal.Body>
                </Modal>

                <NavDropdown
                  title={
                    <>
                      <span className="mr-2">Today</span>
                      <span className="icon-chevron-down"></span>
                    </>
                  }
                  id="todayMenu"
                >
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <>
                      <span className="mr-2">Now</span>
                      <span className="icon-chevron-down"></span>
                    </>
                  }
                  id="nowMenu"
                >
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <>
                      <span className="mr-2">Genre</span>
                      <span className="icon-chevron-down"></span>
                    </>
                  }
                  id="genreMenu"
                  className="d-none d-md-block"
                >
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </NavDropdown>
                <Form className="d-none d-xl-block ml-md-3">
                  <Form.Label className="m-0 d-flex align-items-center">
                    Find Channel
                    <Form.Control type="text" className="text-white ml-2" />
                    <Button type="submit">
                      <span className="icon-search text-white"></span>
                    </Button>
                  </Form.Label>
                </Form>
              </Nav>
              {/* <div className="right d-inline-flex align-items-center">
                <span className="date-js d-none d-md-inline date"></span>
                <a href="index-b.html" className="ml-5 layout-btn">
                  <img src="assets/images/header/icon-view-a.svg" />
                </a>
              </div> */}
            </div>
          </Navbar>

          <div className="container-fluid p-0">
            {/* <div
              id="time-bar"
              className="time-bar-js text-white d-flex align-items-center"
            >
              <div>12:00 AM</div>
              <div>12:30 AM</div>
              <div>1:00 AM</div>
              <div>1:30 AM</div>
              <div>2:00 AM</div>
              <div>2:30 AM</div>
              <div>3:00 AM</div>
              <div>3:30 AM</div>
              <div>4:00 AM</div>
              <div>4:30 AM</div>
              <div>5:00 AM</div>
              <div>5:30 AM</div>
              <div>6:00 AM</div>
              <div>6:30 AM</div>
              <div>7:00 AM</div>
              <div>7:30 AM</div>
              <div>8:00 AM</div>
              <div>8:30 AM</div>
              <div>9:00 AM</div>
              <div>9:30 AM</div>
              <div>10:00 AM</div>
              <div>10:30 AM</div>
              <div>11:00 AM</div>
              <div>11:30 AM</div>

              <div>12:00 PM</div>
              <div>12:30 PM</div>
              <div>1:00 PM</div>
              <div>1:30 PM</div>
              <div>2:00 PM</div>
              <div>2:30 PM</div>
              <div>3:00 PM</div>
              <div>3:30 PM</div>
              <div>4:00 PM</div>
              <div>4:30 PM</div>
              <div>5:00 PM</div>
              <div>5:30 PM</div>
              <div>6:00 PM</div>
              <div>6:30 PM</div>
              <div>7:00 PM</div>
              <div>7:30 PM</div>
              <div>8:00 PM</div>
              <div>8:30 PM</div>
              <div>9:00 PM</div>
              <div>9:30 PM</div>
              <div>10:00 PM</div>
              <div>10:30 PM</div>
              <div>11:00 PM</div>
              <div>11:30 PM</div>
            </div> */}

            <section
              id="grid"
              className="d-flex"
              style={{ backgroundColor: "#212529" }}
            >
              <div className="pt-3 rows" id="grid-js">
                <div className="time-line"></div>
                <div
                  className="grid-row d-flex special-channel"
                  style={{
                    backgroundImage: `url(${"assets/images/home/grid/spaecial-channel-bg.jpg"})`,
                  }}
                >
                  <div className="channel-info special d-flex flex-column justify-content-center align-items-center">
                    <img src="assets/images/channels/blaze.png" alt="Blaze" />
                    <div className="caption">FREEVIEW 63</div>
                  </div>
                  <div className="position-relative wrapper">
                    <div className="channel-title text-uppercase">
                      Swamp people
                    </div>
                    <div className="row mb-0">
                      <div className="col d-flex">
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card lg"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card-lg.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="grid-item">
                          <div
                            className="c-card"
                            style={{
                              backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                            }}
                          >
                            <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                              <div className="rating d-none d-sm-block">
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full filled"></span>
                                <span className="icon-star-full"></span>
                              </div>
                              <div>
                                <h6 className="d-none d-sm-block">
                                  S1 E3 “The Bomb”
                                </h6>
                                <h5>The Bodyguard</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="channel-secondary-title text-uppercase">
                      Tomorrow 10PM
                    </div>
                  </div>
                </div>
                <div className="grid-row d-flex">
                  <div className="channel-info d-flex flex-column justify-content-center align-items-center">
                    <img
                      src="assets/images/channels/bbc-two.png"
                      alt="BBC Two"
                    />
                    <div className="caption">102</div>
                  </div>
                  <div className="row">
                    <div className="col d-flex">
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid-row d-flex">
                  <div className="channel-info d-flex flex-column justify-content-center align-items-center">
                    <img src="assets/images/channels/itv.png" alt="ITV" />
                    <div className="caption">103</div>
                  </div>
                  <div className="row">
                    <div className="col d-flex">
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid-row d-flex">
                  <div className="channel-info d-flex flex-column justify-content-center align-items-center">
                    <img src="assets/images/channels/four.png" alt="Four" />
                    <div className="caption">104</div>
                  </div>
                  <div className="row">
                    <div className="col d-flex">
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid-row d-flex">
                  <div className="channel-info d-flex flex-column justify-content-center align-items-center">
                    <img src="assets/images/channels/five.png" alt="Five" />
                    <div className="caption">105</div>
                  </div>
                  <div className="row">
                    <div className="col d-flex">
                      <a className="grid-item">
                        <div
                          className="c-card"
                          style={{
                            backgroundImage: `url(${"assets/images/home/grid/card.jpg"})`,
                          }}
                        >
                          <div className="c-card-content d-flex flex-column justify-content-end justify-content-sm-between">
                            <div className="rating d-none d-sm-block">
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full filled"></span>
                              <span className="icon-star-full"></span>
                            </div>
                            <div>
                              <h6 className="d-none d-sm-block">
                                S1 E3 “The Bomb”
                              </h6>
                              <h5>The Bodyguard</h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid-row d-flex">
                  <div className="channel-info d-flex justify-content-center">
                    <div className="caption ad m-0 d-flex align-items-center">
                      Advertisement
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <a href="#" className="ad">
                        <img
                          src="assets/images/banner.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid-row d-flex text-white suggested-channels">
                  <div className="channel-info"></div>

                  <div className="row py-3 pl-2 mb-0">
                    <div className="col">
                      <h5 className="mb-2">
                        Suggested Channels <span>(click to add)</span>
                      </h5>

                      <div className="d-flex mb-1">
                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>

                        <a className="channel d-inline-flex align-items-center">
                          <div className="logo">
                            <img
                              src="assets/images/channels/cbs-drama.png"
                              alt=""
                            />
                          </div>
                          <span className="icon-add col p-0 text-center"></span>
                        </a>
                      </div>

                      <div className="dropup d-inline-flex">
                        <a
                          className="dropdown-toggle text-white quick-add d-inline-flex align-items-center"
                          href="#"
                          role="button"
                          id="quick-suggested-channel"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{ textDecoration: "none" }}
                        >
                          Quick add{" "}
                          <span className="icon-chevron-down d-inline-flex ml-1"></span>
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="quick-suggested-channel"
                        >
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div id="sidenav-overlay"></div>
      </div>

      {/* <!-- Settings Modal --> */}
      <div
        className="modal fade"
        id="settings-modal"
        role="dialog"
        aria-labelledby="settings-modal"
        aria-hidden="true"
        style={{ background: "#1b2739e3" }}
      >
        <div className="modal-dialog mx-auto" role="document">
          <div
            className="modal-content text-white"
            style={{ backgroundColor: "#1b273900 " }}
          >
            <div className="d-flex justify-content-between mb-4 pb-2">
              <h2>Customise Channels</h2>
              <div className="d-none d-xl-block">
                <button
                  data-dismiss="modal"
                  className="c-button s-sm s-md-xs mr-4 muted"
                >
                  Cancel
                </button>
                <button className="c-button s-sm s-md-xs success font-weight-bold">
                  Done
                </button>
              </div>
            </div>
            <div className="d-flex mb-5 align-items-lg-center flex-column flex-lg-row">
              <h3 className="mb-3 mb-lg-0">Select Provider and Region</h3>
              <div className="d-flex flex-fill ml-lg-4">
                <div className="c-select mr-4">
                  <select>
                    <option selected>Freeview</option>
                    <option value="1">Placeholder</option>
                    <option value="2">Placeholder</option>
                  </select>
                  <div className="outline"></div>
                </div>
                <div className="c-select">
                  <select>
                    <option selected>London</option>
                    <option value="1">Placeholder</option>
                    <option value="2">Placeholder</option>
                  </select>
                  <div className="outline"></div>
                </div>
              </div>
            </div>
            {/* <div className="row flex-lg-row-reverse flex-column flex-lg-row">
              <div className="col-lg add-channel mb-4 mb-lg-0 pl-lg-5">
                <h3 className="mb-0 mb-sm-2">Add Channel</h3>
                <div>
                  <div className="d-flex mb-3 mb-sm-4">
                    <input type="search" id="channels-search-js" />
                    <span className="icon-search ml-md-3"></span>
                  </div>
                  <ul className="list-unstyled">
                    <li className="mb-2 mb-sm-3 d-flex justify-content-between align-items-center">
                      <div className="flex-fill">
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="ml-2 text">BBC One</span>
                      </div>
                      <span className="icon-plus"></span>
                    </li>
                    <li className="mb-2 mb-sm-3 d-flex justify-content-between align-items-center">
                      <div className="flex-fill">
                        <img
                          src="assets/images/channels/bbc-two.png"
                          alt="BBC Two"
                        />
                        <span className="ml-2 text">BBC Two</span>
                      </div>
                      <span className="icon-plus"></span>
                    </li>
                    <li className="mb-2 mb-sm-3 d-flex justify-content-between align-items-center">
                      <div className="flex-fill">
                        <img
                          src="assets/images/channels/the_blaze.png"
                          alt="The blaze"
                        />
                        <span className="ml-2 text">The blaze</span>
                      </div>
                      <span className="icon-plus"></span>
                    </li>
                    <li className="mb-2 mb-sm-3 d-flex justify-content-between align-items-center">
                      <div className="flex-fill">
                        <img
                          src="assets/images/channels/itv_be.png"
                          alt="ITV be"
                        />
                        <span className="ml-2 text">ITV be</span>
                      </div>
                      <span className="icon-plus"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg">
                <h3 className="mb-3">Your Channels</h3>
                <div className="channels position-relative" id="channels">
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">101</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC One (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">102</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">BBC Two (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dismissible fade show draggable settings-modal"
                    role="alert"
                  >
                    <div className="channel d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="number mr-2">103</span>
                        <img
                          src="assets/images/channels/bbc-one.png"
                          alt="BBC One"
                        />
                        <span className="name ml-3">ITV (London)</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="drag-area">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span className="icon-close"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <footer className="d-flex justify-content-end d-xl-none">
          <div className="d-flex flex-fill flex-sm-grow-0">
            <button
              data-dismiss="modal"
              className="c-button s-sm s-md-xs mr-3 mr-sm-4 muted flex-fill"
            >
              Cancel
            </button>
            <button className="c-button s-sm s-md-xs success font-weight-bold flex-fill">
              Done
            </button>
          </div>
        </footer> */}
      </div>
    </>
  );
}

