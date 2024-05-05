import './Modals.css';

const ModalObject = ({ member, handleClose, handleChange }) => {
    if (member.id === 0) {
        return (
            <dialog id="modal-thing" open>
                <article>
                    <a href="#pika" aria-label="Close" className="close" data-target="modal-thing" onClick={handleClose}>Close</a>
                    <hgroup>
                        <h3>{member.name}, ID #{member.id} in a modal</h3>
                        <p id="pika">{member.bio}</p>
                    </hgroup>
                    <hgroup>
                        <a style={{ color: "red" }} role="button" aria-label="Next" className="outline" onClick={() => {
                            handleChange(member.id + 1)
                            //}}>Next {(member.id + 1)}</a>
                        }}>Next </a>
                    </hgroup>
                </article>
            </dialog>
        )
    }
    else if (member.id === 1) {
        return (
            <dialog id="modal-thing" open>
                <article>
                    <a href="#pika" aria-label="Close" className="close" data-target="modal-thing" onClick={handleClose}>Close</a>
                    <hgroup>
                        <h3>{member.name}, ID #{member.id} in a modal</h3>
                        <p id="pika">{member.bio}</p>
                    </hgroup>
                    <hgroup>
                        <a style={{ color: "green" }} role="button" aria-label="Previous" className="outline" onClick={() => {
                            handleChange(member.id - 1)
                            //}}>Previous { (member.id  - 1)}</a>
                        }}>Previous</a>
                    </hgroup>
                </article>
            </dialog>
        )
    }
    else {
        return (
            <dialog id="modal-thing" open>
                <article>
                    <a href="#pika" aria-label="Close" className="close" data-target="modal-thing" onClick={handleClose}>Close</a>
                    <hgroup>
                        <h3>{member.name}, ID #{member.id} in a modal</h3>
                        <p id="pika">{member.bio}</p>
                    </hgroup>
                    <hgroup>
                        <a style={{ color: "red" }} role="button" aria-label="Next" className="outline" onClick={() => {
                        handleChange(member.id + 1)
                        //}}>Next {(member.id + 1)}</a>
                    }}>Next </a>
                        <a style={{ color: "green" }} role="button" aria-label="Previous" className="outline" onClick={() => {
                            handleChange(member.id - 1)
                            //}}>Previous { (member.id  - 1)}</a>
                        }}>Previous</a>
                    </hgroup>
                </article>
            </dialog>
        )
    }
}

export default ModalObject;