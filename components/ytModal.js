import { useState } from "react";
import ReactModal from "react-modal";

// CSS modules don't seem to work for the ReactModal... at least in Next.js
// i.e. overlayClassName = {styles.overlay}

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgb(0, 0, 0, 0.7)"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    height: "66.6%",
    aspectRatio: "16 / 9",
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column"
  }
};

const ytModal = ({vidKey}) => {
  const [state, setState] = useState({ showModal: false });

  const handleOpenModal = () => {
    setState({ showModal: true });
  };

  const handleCloseModal = () => {
      if(state.showModal){
        setState({ showModal: false });
      }
  };

  return (
    <div onClick={handleCloseModal}>
      {ReactModal.setAppElement('.app')}
      <img src={`https://img.youtube.com/vi/${vidKey}/sddefault.jpg`} onClick={handleOpenModal}/>
      <ReactModal 
      isOpen={state.showModal} style={modalStyle}>
        <iframe
        //   title={props.title}
          width="100%"
          height="100%"
          src={"https://www.youtube.com/embed/" + vidKey}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
          allowFullScreen
        />
      </ReactModal>
    </div>
  );
};

export default ytModal;
