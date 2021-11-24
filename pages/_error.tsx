import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface Props {
  err: Error;
}

function ErrorPage({ err }: Props) {
  return (
    <Alert severity='error'>
      <AlertTitle>Error</AlertTitle>
      {err.toString()}
    </Alert>
  );
}

// for developing error page locally
// function ErrorPage() {
//   const err = new Error('test');
//   return (
//     <Alert severity='error'>
//       <AlertTitle>Error</AlertTitle>
//       {err.toString()}
//     </Alert>
//   );
// }

ErrorPage.getInitialProps = ({ err }: Props) => {
  return { err };
};

export default ErrorPage;
