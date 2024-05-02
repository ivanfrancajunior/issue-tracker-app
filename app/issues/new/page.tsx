"use client";
import { Button, TextArea, TextField, ThemePanel } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input placeholder='Type a title' />
      </TextField.Root>
      <TextArea placeholder='Type a description' />
      <Button>Submit New Issue</Button>
      <ThemePanel />
    </div>
  );
};

export default NewIssuePage;
