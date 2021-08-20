import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Grid, Container } from "@material-ui/core";
import Video_Image from "./../../assets/video.png";
import Play_Icon from "./../../assets/play-icon.png";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    outline: "none !important",
  },
  paper: {
    height: 400,
  },
}));

export default function SpeedSecurity() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Fade left>
          <div className="_speed_txt">Speed, Security, Scalability</div>
        </Fade>
        <Zoom>
          <div className="_about_us_txt">
            Africeum is the fastest, most secure, and most scalable blockchain
            platform on the market.
          </div>
        </Zoom>
      </div>
      <Grid container justifyContent="center">
        <Grid item lg={10} xs={10}>
          <Zoom>
            <div className="_video_div">
              <img
                className="_play_icon"
                src={Play_Icon}
                onClick={handleOpen}
              />
            </div>
          </Zoom>
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* <Fade in={open}> */}
        <Grid container justifyContent="center">
          <Grid item lg={8} xs={10}>
            <div className="_paper">
              <iframe
                style={{ width: "100%", height: "100%" }}
                src="https://www.youtube.com/embed/9l6i_mtYP0Q?list=PLOD_OdAxOoc1W985OaY6IbWIl31SU-_Jt"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Grid>
        </Grid>
        {/* </Fade> */}
      </Modal>
    </div>
  );
}
