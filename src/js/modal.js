(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-events-open]'),
      closeModalBtn: document.querySelector('[data-modal-events-close]'),
      modal: document.querySelector('[data-modal-events]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();