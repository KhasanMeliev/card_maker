import { Loader, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { Box, Wrapper } from "./Steps.style";
import { TransferList, TransferListData } from "@mantine/core";

const initialValues: TransferListData = [
  [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
    { value: "gatsby", label: "Gatsby.js" },
    { value: "vue", label: "Vue" },
    { value: "jq", label: "jQuery" },
  ],
  [
    { value: "sv", label: "Svelte" },
    { value: "rw", label: "Redwood" },
    { value: "np", label: "NumPy" },
    { value: "dj", label: "Django" },
    { value: "fl", label: "Flask" },
  ],
];
const Steps = () => {
  const [data, setData] = useState < TransferListData > initialValues;

  return (
    <Wrapper>
      <Box>
        <TextInput
          label="Your Name"
          placeholder="Your Name"
          rightSection={<Loader size="xs" />}
        />
        <TextInput
          label="Who are you?"
          placeholder="Developer or Designer"
          rightSection={<Loader size="xs" />}
        />
        <TextInput
          label="Your Followers"
          placeholder="13 786"
          rightSection={<Loader size="xs" />}
        />
        <TextInput
          label="How people you follow?"
          placeholder="109"
          rightSection={<Loader size="xs" />}
        />
        <TransferList
          value={data}
          onChange={setData}
          searchPlaceholder="Search..."
          nothingFound="Nothing here"
          titles={["Frameworks", "Libraries"]}
          breakpoint="sm"
        />
      </Box>
    </Wrapper>
  );
};

export default Steps;
