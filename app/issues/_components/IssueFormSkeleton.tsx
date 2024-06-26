import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

const IssueFormSkeleton = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleton height={"3rem"} />
      <Skeleton height='15rem' />
    </Box>
  );
};

export default IssueFormSkeleton;
