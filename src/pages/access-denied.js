import React from "react";
import { Container } from "react-bootstrap";
import { Footer, Layout, MainContent } from "../components";

const AccessDenied = (data) => {
  return (
    <Layout pageMeta={{ title: "Access Denied" }}>
      <Container fluid className="p-0 d-flex bg-white">
        <div className="d-flex align-items-center flex-column">
          <div className="mb-5">
            <div className="mb-3">
              The requested page cannot be served to your location.
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AccessDenied;
