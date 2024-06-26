import Alert from "@mui/material/Alert";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const ErrorMessage = () => {
  return (
    <Alert sx={{ mt: 3 }} severity="error">
      Data hasn't been get.
    </Alert>
  );
};

export const NoDataMessage = () => {
  return (
    <Alert sx={{ mt: 3 }} severity="warning">
      That's not find anything for showing
    </Alert>
  );
};

//__ Burada CardSkeleton hangi card verilirse verirsin sarmalasın istiyoruz o yüzden children veririz.
export const CardSkeleton = ({ children }) => {
  return (
    <Stack spacing={1} sx={{ mt: 3 }} alignItems={"center"}>
      <Skeleton variant="rectangular">{children}</Skeleton>
    </Stack>
  );
};

const TableSkeleton = () => {
  return (
    <Stack spacing={1} sx={{ mt: 3 }}>
      <Skeleton variant="rectangular" width="100%" height={90} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={30} />
    </Stack>
  );
};

export default TableSkeleton;
