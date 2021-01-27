import React from 'react';
import { Container } from 'react-bootstrap';
import Icon, { iconNames } from '../components/icon/';
import {
  DarkModeToggle,
  Footer,
  Layout,
  Link,
  MainContent,
  TopBar,
} from '../components';

const IndexSubLink = ({ url, children }) => (
  <li className="list-inline-item">
    <Link to={url} className="d-inline-block px-3 align-middle">
      {children}
    </Link>
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
                  <Link to="/postgresql_journey/02_installing">
                    Installing PostgreSQL
                  </Link>
                </li>
                <li className="my-2">
                  <Link to="/postgresql_journey/04_developing/connecting_to_postgres">
                    Developing with PostgreSQL
                  </Link>
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
                  <Link to="/epas/latest">EDB Postgres Advanced Server</Link>
                </li>
                <li className="my-2">
                  <Link to="/postgresql">PostgreSQL</Link>
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
                  <Link to="/pem/latest">Postgres Enterprise Manager</Link>
                </li>
                <li className="my-2">
                  <Link to="/pgadmin">pgAdmin</Link>
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
                  <Link to="/eprs/latest">EDB Replication Server</Link>
                </li>
                <li className="my-2">
                  <Link to="/efm/latest">Failover Manager</Link>
                </li>
                <li className="my-2">
                  <Link to="/ark/latest">Ark Platform</Link>
                </li>
                <li className="my-2">
                  <Link to="/slony/latest">Slony</Link>
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
                  <Link to="/migration_portal/latest">Migration Portal</Link>
                </li>
                <li className="my-2">
                  <Link to="/migration_toolkit/latest">Migration Toolkit</Link>
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
                  <Link to="/barman/">Barman</Link>
                </li>
                <li className="my-2">
                  <Link to="/pgbackrest/">pgBackrest</Link>
                </li>
                <li className="my-2">
                  <Link to="/bart/latest">Backup &amp; Recovery Tool</Link>
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
                  <Link to="/kubernetes">Cloud Native PostgreSQL Operator</Link>
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
                  <Link to="/postgis/latest">PostGIS</Link>
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
                      <Link to="/hadoop_data_adapter/latest" className="px-2">
                        Hadoop
                      </Link>
                      <Link to="/mongo_data_adapter/latest" className="px-2">
                        Mongo
                      </Link>
                      <Link to="/mysql_data_adapter/latest" className="px-2">
                        MySQL
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="my-2">
                  <span className="text-muted">EDB Connectors</span>
                  <ul className="list-unstyled mb-0">
                    <li className="my-2">
                      <span className="text-muted small pr-2">∟</span>
                      <Link to="/jdbc_connector/latest" className="px-2">
                        JDBC
                      </Link>
                      <Link to="/net_connector/latest" className="px-2">
                        .NET
                      </Link>
                      <Link to="/ocl_connector/latest" className="px-2">
                        OCL
                      </Link>
                      <Link to="/odbc_connector/latest" className="px-2">
                        ODBC
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="my-2">
                  <Link to="/pgbouncer/latest">pgBouncer</Link>
                </li>
                <li className="my-2">
                  <Link to="/pgpool/latest">pgPool-II</Link>
                </li>
                <li className="my-2">
                  <Link to="/edb_plus/latest">EDB*Plus</Link>
                </li>
                <li className="my-2">
                  <Link to="/language_pack/latest">Language Pack</Link>
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
