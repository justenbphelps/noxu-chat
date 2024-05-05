import { useState } from "react";
import { Account } from "../makeChatData";
import { ActionIcon, Button, Table, Text } from "@mantine/core";
import Image from "next/image";

const QueryTable = ({ accounts }: { accounts: Account[] }) => {
  const [data, setData] = useState<Account[]>(accounts);

  const rows = data.map((element) => {
    return (
      <Table.Tr key={element.id}>
        <Table.Td>{element.id}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.industry}</Table.Td>
        <Table.Td className="w-4 max-w-20 truncate">{element.city}</Table.Td>
        <Table.Td>{element.state}</Table.Td>
        <Table.Td>{element.segment}</Table.Td>
        <Table.Td>{element.ownerId}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <div className="ml-12">
      <Table className="bg-white border border-slate-300">
        <Table.Thead className="border border-t border-x border-slate-300">
          <Table.Tr className="text-md text-gray-400">
            <Table.Th />
            <Table.Th>Name</Table.Th>
            <Table.Th>Industry</Table.Th>
            <Table.Th>City</Table.Th>
            <Table.Th>State</Table.Th>
            <Table.Th>Segment</Table.Th>
            <Table.Th>Owner Id</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody className="border-x border-slate-300">{rows}</Table.Tbody>
      </Table>
      <div className="flex gap-2 justify-between items-center w-full p-2 bg-[#f7f9fb] border-t border-l border-r border-slate-300">
        <div className="flex gap-2 justify-between items-center text-slate-600">
          <Image
            src="/assets/info.svg"
            alt="alert-circle"
            width={20}
            height={20}
          />
          <Text fw={500}>Only X rows are shown. View full list for more</Text>
        </div>
        <ActionIcon size="xs" variant="transparent" color="gray">
          <Image src="/assets/x.svg" alt="arrow-right" width={20} height={20} />
        </ActionIcon>
      </div>
      <div className="w-full bg-white flex items-center gap-4 p-4 border border-slate-300 rounded-b-lg">
        <Button variant="outline" color="lightgray">
          <Text c="black" size="sm">
            Show Full List
          </Text>
        </Button>
        <Button variant="outline" color="lightgray">
          <Text c="black" size="sm">
            Show Query
          </Text>
        </Button>
        <Button variant="outline" color="lightgray">
          <Text c="black" size="sm">
            Show Chart
          </Text>
        </Button>
        <Button variant="outline" color="lightgray">
          <Text c="black" size="sm">
            Pin to Dashboard
          </Text>
        </Button>
      </div>
    </div>
  );
};
export default QueryTable;
