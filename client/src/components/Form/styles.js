import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  fileInput: {
    width: '95%',
    marginBottom: 10,
    margin: '20px 10px',
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginUp: '10px',
    borderRadius:  '20px',
  	width: '180px',
	  fontWeight: 'bold',
	  fontSize: '14px',
  },
  buttonClear: {
    marginBottom: 10,
    marginUp: 10,
    borderRadius:  '20px',
  	width: '180px',
	  fontWeight: 'bold',
	  fontSize: '14px',
  },
}));