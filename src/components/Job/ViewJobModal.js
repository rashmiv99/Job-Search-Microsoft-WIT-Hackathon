import React, { useState } from "react";
import { CircularProgress, Box, Grid, Typography, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, Button, IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
    info: {
        '& > *': {
            margin: '4px'
        },
    },
    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        transition: ".3s",
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    },
}));

export default (props) => {
    const classes = useStyles();
    return (
        <Dialog open={!!Object.keys(props.job).length} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    {props.job.title} @ {props.job.companyName}
                    <IconButton onClick={props.closeModal}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box>
                    <Box className={classes.info} display="flex">
                        <Typography variant="body2">Posted On: </Typography>
                        <Typography variant="caption">{props.job.postedOn && format(props.job.postedOn, "dd/MMM/yyyy HH:MM")}</Typography>
                    </Box>
                    <Box className={classes.info} display="flex">
                        <Typography variant="body2">Job Type: </Typography>
                        <Typography variant="caption">{props.job.type}</Typography>
                    </Box>
                    <Box className={classes.info} display="flex">
                        <Typography variant="body2">Job Location: </Typography>
                        <Typography variant="caption">{props.job.location}</Typography>
                    </Box>
                    <Box className={classes.info} display="flex">
                        <Typography variant="body2">Job Description: </Typography>
                        <Typography variant="caption">{props.job.description}</Typography>
                    </Box>
                    <Box className={classes.info} display="flex">
                        <Typography variant="body2">Company Name: </Typography>
                        <Typography variant="caption">{props.job.companyName}</Typography>
                    </Box>
                    <Box className={classes.info} display="flex">
                        <Typography variant="body2">Company Website: </Typography>
                        <Typography variant="caption">{props.job.companyUrl}</Typography>
                    </Box>
                    <Box className={classes.info} display="flex">
                        <Typography variant="body2">Experience: </Typography>
                        <Typography variant="caption">{props.job.experience}</Typography>
                    </Box>
                    <Box className={classes.info} display="flex">
                        <Typography variant="body2">Education: </Typography>
                        <Typography variant="caption">{props.job.education}</Typography>
                    </Box>
                    <Box className={classes.info} display="flex">
                        <Typography variant="body2">Salary: </Typography>
                        <Typography variant="caption">{props.job.salary}</Typography>
                    </Box>
                    <Box ml={0.5}>
                        <Typography variant="body2">Skills: </Typography>
                        <Grid container alignItems="center">{props.job.skills && props.job.skills.map((skill) => (
                            <Grid item key={skill} className={classes.skillChip}>
                                {skill}
                            </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outline" component="a" href={props.job.link} target="_blank">Apply</Button>
            </DialogActions>
        </Dialog>
    )
}