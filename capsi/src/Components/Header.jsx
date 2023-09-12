import React from 'react';
import "../../src/styles/App.css";
const useStyles = () => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: '#282c34',
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3), 0 2px 2px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
    },
});
const Header = () => {
  return (
      <>
        <div>
            {Component}
        </div>
      </>
  )
}
function Component() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                <button className={classes.root}></button>
            </div>
        </>
    )
}
export default Header