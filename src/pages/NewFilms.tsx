import { useState } from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "../gql";
import {
  Pagination,
  Spinner,
  Alert,
  Container,
  Image,
  Row,
  Col,
} from "react-bootstrap";

import { DateTime } from "luxon";

import { getTokenFromSession } from "../common/helpers/session";

const NEWFILMS = graphql(`
  query NewFilms($input: NewFilmsInput!) {
    newFilms(input: $input) {
      count
      schedules {
        id
        title
        startAt
        channel {
          title
          logoURL
        }
        asset {
          imageURL
        }
      }
    }
  }
`);

const PAGE_ITEMS = 15;

const today = DateTime.utc();

function getDateString(scheduleDateString: string) {
  const scheduleDate = DateTime.fromISO(scheduleDateString);
  if (today.toISODate() === scheduleDate.toISODate()) {
    return "Today";
  } else {
    return scheduleDate.toFormat("EEE dd MMM");
  }
}
function getDateStringTime(scheduleDateString: string) {
  const scheduleDate = DateTime.fromISO(scheduleDateString);
  if (today.toISODate() === scheduleDate.toISODate()) {
    return scheduleDate.toFormat("h:mma").toLowerCase();
  } else {
    return scheduleDate.toFormat("");
  }
}

export default function NewFilms() {
  const [activePage, setActivePage] = useState(0);
  const { loading, error, data } = useQuery(NEWFILMS, {
    context: {
      headers: {
        Authorization: getTokenFromSession(),
        "Content-Type": "application/json",
      },
    },
    variables: {
      input: {
        pagination: {
          skip: activePage * PAGE_ITEMS,
          take: PAGE_ITEMS,
        },
      },
    },
  });
  console.log("newFilms__data", data?.newFilms.schedules);
  const totalCount = data?.newFilms.count;
  const totalPagination = Math.ceil(totalCount! / PAGE_ITEMS);
  let pgCount = totalPagination - 5;
  let pageNumber = activePage > 0 ? activePage : 0;
  let floop = totalPagination < 5 ? 5 : activePage + 5;
  let firstPage = totalPagination - totalPagination;
  let lastPage = totalPagination - 1;
  if (
    (pgCount <= activePage && activePage < totalPagination) ||
    floop >= totalPagination
  ) {
    pageNumber = pgCount;
    floop = totalPagination;
  }
  const renderPageItems = () => {
    const items = [];
    for (let page = pageNumber; page < floop; page++) {
      items.push(
        <Pagination.Item
          key={page}
          active={page === activePage}
          onClick={() => setActivePage(page)}
          className="tv__pagination"
        >
          {page + 1}
        </Pagination.Item>
      );
      if (page === floop) {
        items.push(<Pagination.Ellipsis key={page} />);
      }
    }
    return items;
  };

  return (
    <>
      <div style={{ backgroundColor: "#292929" }}>
        <Container
          fluid
          className="text-white d-none d-xl-flex flex-column justify-content-end"
          id="listing-search"
        >
          <Row>
            <Col className="form-wrapper">
              <h1>New Films</h1>
            </Col>
          </Row>
        </Container>
        {error ? (
          <Alert
            variant="info"
            className="c-card text-dark d-flex flex-column justify-content-between align-items-center"
            style={{ backgroundColor: "#1b2739d1" }}
          >
            <Alert.Heading style={{ color: "#fff" }}>
              No Data found!
            </Alert.Heading>
          </Alert>
        ) : (
          ""
        )}
        {loading ? (
          <Row className="tv__loader">
            <Col className="common-loader">
              <Image
                src={require("../../src/assets/loading.gif")}
                alt="loading..."
                style={{ width: "40px" }}
              />
            </Col>
          </Row>
        ) : (
          <>
            <Container fluid style={{ backgroundColor: "#292929" }}>
              <Container>
                <Row>
                  {data &&
                    data?.newFilms.schedules.map((dataFromFilms) => (
                      <Col lg={4} sm={6} key={dataFromFilms.id}>
                        <section id="listing-section" className="px-3 px-md-3">
                          <Row
                            className="c-card text-white d-flex flex-column justify-content-between channel bbc-two"
                            style={{
                              backgroundImage: `url(${dataFromFilms.asset.imageURL})`,
                            }}
                          >
                            <Container className="col p-0 d-flex justify-content-between align-items-start">
                              <Row className="logo">
                                <Col className="d-flex align-items-center">
                                  <Image
                                    src={dataFromFilms.channel.logoURL!}
                                    alt={dataFromFilms.channel.title}
                                  />
                                  <span className="ml-2 date">
                                    {getDateStringTime(dataFromFilms.startAt)}
                                    <br />
                                    {getDateString(dataFromFilms.startAt)}
                                  </span>
                                </Col>
                              </Row>
                            </Container>
                            <div className="desc col d-flex justify-content-end flex-column">
                              <h6 className="title font-weight-bold">
                                {dataFromFilms.title}
                              </h6>
                              <span></span>
                            </div>
                          </Row>
                        </section>
                      </Col>
                    ))}
                </Row>
              </Container>
            </Container>
          </>
        )}
        <Pagination className="justify-content-center pb-5 mt-5 mb-0">
          <Pagination.First onClick={() => setActivePage(firstPage)} />
          <Pagination.Prev onClick={() => setActivePage((prev) => prev - 1)} />
          {renderPageItems()}
          <Pagination.Next onClick={() => setActivePage((prev) => prev + 1)} />
          <Pagination.Last onClick={() => setActivePage(lastPage)} />
        </Pagination>
      </div>
    </>
  );
}
