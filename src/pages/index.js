import React from 'react';
import { Container } from 'react-bootstrap';
import Icon, { iconNames } from '../components/icon/';
import {
  DarkModeToggle,
  Footer,
  Layout,
  MainContent,
  TopBar,
} from '../components';

const IndexSubLink = ({ url, children }) => (
  <li className="list-inline-item">
    <a href={url} className="d-inline-block px-3 align-middle">
      {children}
    </a>
  </li>
);

export default () => (
  <Layout
    pageMeta={{
      description:
        'EDB supercharges Postgres with products, services, and support to help you control database risk, manage costs, and scale efficiently.',
    }}
    background="white"
  >
    <TopBar />
    <Container fluid className="p-0 d-flex bg-white">
      {/* TODO connect an updated IndexNavagation file to this index page */}
      <MainContent searchNavLogo={true}>
        <h1 className="balance-text mb-5">EDB Docs</h1>

        <div className="card-columns mb-4">
          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.POSTGRESQL}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">
                  PostgreSQL Journey
                </h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-2">
                  <a href="/postgresql_journey/02_installing">
                    Installing PostgreSQL
                  </a>
                </li>
                <li className="my-2">
                  <a href="/postgresql_journey/04_developing/connecting_to_postgres">
                    Developing with PostgreSQL
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.BIG_DATA}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">Databases</h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-2">
                  <a href="/epas/latest">EDB Postgres Advanced Server</a>
                </li>
                <li className="my-2">
                  <a href="/#">PostgreSQL</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.CONTROL}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">
                  Monitoring &amp; Admin Tools
                </h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-2">
                  <a href="/pem/latest">Postgres Enterprise Manager</a>
                </li>
                <li className="my-2">
                  <a href="/#">pgAdmin</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.HIGH_AVAILABILITY}
                    className="fill-orange ny-n2"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">
                  High Availability Tools
                </h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-2">
                  <a href="/eprs/latest">EDB Replication Server</a>
                </li>
                <li className="my-2">
                  <a href="/efm/latest">Failover Manager</a>
                </li>
                <li className="my-2">
                  <a href="/ark/latest">Ark Platform</a>
                </li>
                <li className="my-2">
                  <a href="/slony/latest">Slony</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.CONVERT}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">
                  Migration Tools
                </h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-2">
                  <a href="/migration_portal/latest">Migration Portal</a>
                </li>
                <li className="my-2">
                  <a href="/migration_toolkit/latest">Migration Toolkit</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.DRIVES}
                    className="fill-orange"
                    width="22"
                    height="22"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">
                  Backup &amp; Recovery Tools
                </h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-2">
                  <a href="/barman/">Barman</a>
                </li>
                <li className="my-2">
                  <a href="/pgbackrest/">pgBackrest</a>
                </li>
                <li className="my-2">
                  <a href="/bart/latest">Backup &amp; Recovery Tool</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.KUBERNETES}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">Kubernetes</h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-2">
                  <a href="/kubernetes">Cloud Native PostgreSQL Operator</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.MODULE}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">Extensions</h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-2">
                  <a href="/postgis/latest">PostGIS</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.CODE_WRITING}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">
                  PostgreSQL Development
                </h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-2">
                  <span className="text-muted">Foreign Data Wrappers</span>
                  <ul className="list-unstyled mb-0">
                    <li className="my-2">
                      <span className="text-muted small pr-2">∟</span>
                      <a href="/hadoop_data_adapter/latest" className="px-2">
                        Hadoop
                      </a>
                      <a href="/mongo_data_adapter/latest" className="px-2">
                        Mongo
                      </a>
                      <a href="/mysql_data_adapter/latest" className="px-2">
                        MySQL
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="my-2">
                  <span className="text-muted">EDB Connectors</span>
                  <ul className="list-unstyled mb-0">
                    <li className="my-2">
                      <span className="text-muted small pr-2">∟</span>
                      <a href="/jdbc_connector/latest" className="px-2">
                        JDBC
                      </a>
                      <a href="/net_connector/latest" className="px-2">
                        .NET
                      </a>
                      <a href="/ocl_connector/latest" className="px-2">
                        OCL
                      </a>
                      <a href="/odbc_connector/latest" className="px-2">
                        ODBC
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="my-2">
                  <a href="/pgbouncer/latest">pgBouncer</a>
                </li>
                <li className="my-2">
                  <a href="/pgpool/latest">pgPool-II</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className="mt-5 d-flex justify-content-center">
          <ul className="list-inline mr-3">
            <IndexSubLink url="/postgresql-docs/postgresql/">
              PostgreSQL Docs
            </IndexSubLink>
            <IndexSubLink url="/community/contribute/">Contribute</IndexSubLink>
            <IndexSubLink url="/community/authoring/">Authoring</IndexSubLink>
            <IndexSubLink url="https://support.enterprisedb.com">
              Support
            </IndexSubLink>
            <IndexSubLink url="https://enterprisedb.com/contact">
              Contact Us
            </IndexSubLink>
            <IndexSubLink url="/community/feedback/">Feedback?</IndexSubLink>
          </ul>
          <DarkModeToggle />
        </div>

        <Footer />
      </MainContent>
    </Container>
  </Layout>
);
