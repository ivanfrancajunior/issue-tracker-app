"use client";
import { Button, TextField, ThemePanel } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input placeholder='Type a title' />
      </TextField.Root>
      <SimpleMDE placeholder='Type a description for your issue.' />
      <Button>Submit New Issue</Button>
      <ThemePanel />
    </div>
  );
};

export default NewIssuePage;
