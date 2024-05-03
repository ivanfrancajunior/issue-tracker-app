import { Box, Card, Flex, Heading } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const LoadingIssueDetails = () => {
  return (
    <Box className='max-w-xl'>
      <Heading>
        <Skeleton />
      </Heading>
      <Flex
        gap={"3"}
        my={"2"}
      >
        <Skeleton width={"5rem"} />
        <Skeleton width={"8rem"} />
      </Flex>
      <Card
        className='prose'
        mt={"5"}
      >
        <Skeleton count={5} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetails;
