import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    padding:0,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    marginRight: '40px',
    alignItems: 'center',
  },
  btn: {
    marginLeft: '450px',
    background: '#0ecfe0',
    borderRadius:  '20px',
  	width: '80px',
	  fontWeight: 'bold',
	  fontSize: '14px',
  },
}));