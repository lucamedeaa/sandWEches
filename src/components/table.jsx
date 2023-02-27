import { Table, NextUIProvider, Container } from "@nextui-org/react";
import "../App.css";

const Tab = ({ rows, columns, width, rowsPerPage, setSelectedIndex }) => {
  return (
    <NextUIProvider>
      <Container css={{ width: width }}>
        <Table
          aria-label="Table"
          lined
          bordered
          selectionMode="single"
          style={{ background: "white" }}
          shadow={false}
          onSelectionChange={(e) => setSelectedIndex(e.currentKey)}
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.key}>{column.label}</Table.Column>
            )}
          </Table.Header>
          <Table.Body items={rows}>
            {(item) => (
              <Table.Row key={item.id} allowsSorting>
                {(key) => <Table.Cell>{item[key]}</Table.Cell>}
              </Table.Row>
            )}
          </Table.Body>
          <Table.Pagination
            shadow
            noMargin
            align="center"
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </Container>
    </NextUIProvider>
  );
};

export default Tab;
