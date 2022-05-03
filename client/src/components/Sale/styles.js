import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    display:'flex',
    direction: 'row',
    margin: 100
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  quantity:{
    width: 20,
    
  },
  fileInput: {
    width: '50%',
    margin: '10px 0',
  },
  price:{
    marginBottom: 10,
    marginTop : 10,
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginUp: '10px',
    borderRadius:  '20px',
  	width: '150px',
	  fontWeight: 'bold',
	  fontSize: '14px',
    justifyContent: 'center',
    
  },
}));