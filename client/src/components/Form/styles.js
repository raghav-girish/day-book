
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '15px 0',
    justifyContent: 'center'
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#7B1FA2"
  },
  buttonClear: {
    marginBottom: 10,
    backgroundColor: "#C62828"
  },
}));
