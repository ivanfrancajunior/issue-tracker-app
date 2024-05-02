import React from "react";
import { Button } from "@radix-ui/themes";

const IssuesPage = () => {
  return (
    <div className='p-4'>
      <Button
        color='orange'
        radius='full'
      >
        Add Issue
      </Button>
    </div>
  );
};

export default IssuesPage;
