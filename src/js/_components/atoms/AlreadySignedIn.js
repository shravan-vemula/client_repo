import React from 'react';
import { Button } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
function AlreadySignedIn() {
    return (
        <>
        <div id="Already-signedIn" className="alreadySignedIn">
            <div id="Already-signedIn-text" className="alreadySignedInText">
                Already have an account?
            </div>
            <Button variant="contained" size="small" color="primary">
                   <span id="lockIcon" ><LockIcon /></span> Sign In
                </Button>
            </div>
        </>
    )
}

export default AlreadySignedIn
