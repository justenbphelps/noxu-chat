import { Button, ButtonGroup, Image, Text } from "@mantine/core";
import { makeAccountsData, Query } from "../makeChatData";
import QueryTable from "./QueryTable";
import { useMemo } from "react";

const alertCircle = <Image src="/assets/alert-circle.svg" alt="alert-circle" />;
const rightArrow = <Image src="/assets/arrow-right.svg" alt="arrow-right" />;
const logoMark = <Image src="/assets/logo-mark.svg" alt="logo-mark" />;

const Module = ({ query }: { query: Query }) => {
  const data = useMemo(() => makeAccountsData(), []);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[800px] flex gap-4 justify-start items-center py-8">
        <div className="w-10 rounded-full bg-gray-500">
          <Image
            src={query.user.avatar}
            alt={query.user.name}
            radius={40}
            width={40}
            height={40}
          />
        </div>
        {query.text}
      </div>
      <div className="w-full bg-[#f0f3f8] p-6 flex flex-col justify-start items-center">
        <div className="w-full max-w-[800px] flex flex-col gap-4">
          <ButtonGroup>
            <Button variant="default" radius="md" leftSection={alertCircle}>
              <Text fw={700} c="#F0671A">
                Not Confident
              </Text>
            </Button>
            <Button variant="default" radius="md" rightSection={rightArrow}>
              <Text fw={700} c="#F0671A">
                Human Help
              </Text>
            </Button>
          </ButtonGroup>
          <div className="flex gap-4 items-center">
            {logoMark}
            <Text>Here is your result:</Text>
          </div>
          <div>
            <QueryTable accounts={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module;
