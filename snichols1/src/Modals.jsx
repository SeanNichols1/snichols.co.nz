const modalObject = ({thingInfo, handleClose}) => {
    return (
        <dialog id="modal-thing" open>
            <article>
                <a href="javascript:void(0);" aria-label="Close" className="close" data-target="modal-thing" onClick={handleClose}>Close</a>
            <hgroup>
                <p>This is stuff in a modal?</p>
            </hgroup>
            </article>
        </dialog>
    )
}

export default modalObject;