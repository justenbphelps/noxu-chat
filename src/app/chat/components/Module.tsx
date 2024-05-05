import {
  Button,
  ButtonGroup,
  Image,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { makeAccountsData, Query } from "../makeChatData";
import QueryTable from "./QueryTable";
import { useMemo } from "react";

import styles from "./styles.module.css";

const alertCircle = <Image src="/assets/alert-circle.svg" alt="alert-circle" />;
const rightArrow = <Image src="/assets/arrow-right.svg" alt="arrow-right" />;
const logoMark = <Image src="/assets/logo-mark.svg" alt="logo-mark" />;
const messageCircle = (
  <Image src="/assets/message-circle.svg" alt="message-circle" />
);

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
      <div className="w-full bg-[#f0f3f8] p-6 flex flex-col justify-start items-center border-y border-slate-300">
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
      <div className="w-full max-w-[800px] pt-2 flex flex-col gap-2">
        <div className="flex gap-4 items-center py-2">
          <Button variant="outline" color="lightgray">
            <Text c="black" size="sm">
              Suggest question 1
            </Text>
          </Button>
          <Button variant="outline" color="lightgray">
            <Text c="black" size="sm">
              Suggest question 2
            </Text>
          </Button>
          <Button variant="outline" color="lightgray">
            <Text c="black" size="sm">
              Suggest question 3
            </Text>
          </Button>
        </div>
        <div className="w-full flex gap-4">
          <div className="w-full flex items-center border border-slate-300 rounded-lg">
            <Select
              data={[
                { value: "chat", label: "Chat" },
                { value: "help", label: "Help" },
              ]}
              withCheckIcon={false}
              defaultValue="chat"
              leftSection={messageCircle}
              className="w-32 border border-transparent rounded-none border-r border-slate-300"
              classNames={{
                wrapper: styles.wrapper,
                input: styles.input,
              }}
            />
            <TextInput
              className="w-full px-2"
              placeholder="Start a new chat"
              variant="unstyled"
              rightSection={
                <Image
                  src="/assets/send.svg"
                  width={16}
                  height={16}
                  alt="send"
                />
              }
            />
          </div>
          <Button
            variant="outline"
            color="#F0671A"
            className="w-auto"
            classNames={{ label: styles.buttonLabel }}
          >
            End Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Module;
