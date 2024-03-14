import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  activeModal,
  closeActiveModal,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <form action="#" className="modal__form">
          <h2 className="modal__title">{title}</h2>
          <button
            onClick={closeActiveModal}
            type="button"
            className="modal__close"
          ></button>
          {children}
          <button
            type="submit"
            className="modal__submit  modal__submit_disabled"
            disabled
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
