import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

const certificates = [
    {
        recipient: 'John Doe',
        course: 'Introduction to gving',
        date: 'February 5, 2024',
        issuer: 'Material-UI Academy',
    },
    {
        recipient: 'John Doe',
        course: 'Introduction to gving',
        date: 'February 5, 2024',
        issuer: 'Material-UI Academy',
    },
    {
        recipient: 'John Doe',
        course: 'Introduction to gving',
        date: 'January 5, 2024',
        issuer: 'Material-UI Academy',
    },
    {
        recipient: 'John Doe',
        course: 'Introduction to gving',
        date: 'January 5, 2024',
        issuer: 'Material-UI Academy',
    }
    // this is temp array before firebase setup
];

const useStyles = makeStyles((theme) => ({
    certificateContainer: {
        padding: theme.spacing(2),
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(4),
    },
    certificateTitle: {
        marginBottom: theme.spacing(2),
    },
    certificateText: {
        marginBottom: theme.spacing(1),
    },
}));

const Certificate = () => {
    const classes = useStyles();

    return (
        <>
            <div id="Somestuff" className="some-stuff">
                <p className="sectionSubText">
                    My volunteer journey
                </p>
            </div>
    
            <div className='timeline'>
                <VerticalTimeline>
                    {certificates.map((certificate, index) => (
                        <Paper key={index} className={classes.certificateContainer} elevation={3}>
                            <Typography variant="h4" className={classes.certificateTitle}>
                                Certificate of Completion
                            </Typography>
                            <Typography variant="body1" className={classes.certificateText}>
                                This is to certify that {certificate.recipient} has successfully completed the course on {certificate.course} on {certificate.date}.
                            </Typography>
                            <Typography variant="body1" className={classes.certificateText}>
                                Issued by: {certificate.issuer}
                            </Typography>
                        </Paper>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Certificate;
