import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './card.css'


const useStyles = makeStyles({
  root: {
    '.MuiTypography-gutterBottom':{
      marginBottom:"1em"
    },
    display:'flex',
    borderBottom:'1px solid black',
    borderRadius:'0',
  },
  'root:hover':{
    cursor: 'pointer'
  },
  media: {
    width: '100%',
    height: '100px',
    flex:.3,
  },
  right:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding:0,
    marginRight:'1em',
    height: "500px"

  },

  left:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding:0,
    marginRight:'1em',
    borderRight:'1px solid black',
    borderRadius:'0',
    paddingRight: '1em',
    height: "500px",

  },

  cardaction_left:{
    padding:"2% 0",
    display:'flex',
    flex:.3,
    '&:hover': {
      cursor: "pointer",
    }
  },

  cardaction_right:{
    padding:"2% 0",
    display:'flex',
    flex:.7,
    '&:hover': {
      cursor: "pointer",
    }
  },
  title:{
    marginBottom:"1em"
  },
  
});

export default function MediaCard({title,description, image, theme}) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
        
        <Card elevation={0} className={classes.root}>
         
            <div onClick={ () => {window.location.href = "www.youtube.com"}} className={classes.cardaction_left}>
               
                <CardContent className={classes.left}>
                    <div className={classes.title}>
                      <h2>  {title} </h2>
                      <h5>The verge</h5>


                    </div>
                    

                    <p>
                    {description}
                    </p>



                </CardContent>

            </div>

            <div className={classes.cardaction_right}>
               
                <CardContent className={classes.right}>
                    <div className={classes.title}>
                      <h2>  {title} </h2>
                      <h5>The verge</h5>


                    </div>
                    

                    <p>
                    {description}


                    </p>



                </CardContent>

            </div>

        </Card>
    </ThemeProvider>

  );
}
