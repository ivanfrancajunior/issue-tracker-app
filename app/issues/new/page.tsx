"use client";
import { ErrorsMessage, Spinner } from "@/app/components";
import { createIssueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type IssueForm = z.infer<typeof createIssueSchema>;

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const NewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmiting(true);
      await axios.post("/api/issues", data);
      setIsSubmiting(false);
      router.push("/issues");
    } catch (error) {
      setError("An unexpected error occurred.");
      setIsSubmiting(false);
    }
  });

  return (
    <div className='max-w-xl'>
      {error && (
        <Callout.Root className='mb-5'>
          <Callout.Text color='red'>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className='space-y-3'
        onSubmit={onSubmit}
      >
        <TextField.Root>
          <TextField.Input
            placeholder='Type a title'
            {...register("title")}
          />
        </TextField.Root>
        <ErrorsMessage>{errors.title?.message}</ErrorsMessage>
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <SimpleMDE
              placeholder='Type a description for your issue.'
              {...field}
            />
          )}
        />
        <ErrorsMessage>{errors.description?.message}</ErrorsMessage>

        <Button disabled={isSubmiting}>
          {" "}
          Submit New Issue {isSubmiting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
