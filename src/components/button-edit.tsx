import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
  onClick: () => void;
}

export default function ButtonEdit({ onClick }: Props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={onClick} variant="contained" color="success">
        Editar
      </Button>
    </Stack>
  );
}
