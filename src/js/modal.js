(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-events-open]'),
    closeModalBtn: document.querySelector('[data-modal-events-close]'),
    modal: document.querySelector('[data-modal-events]'),
  };


  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);


  refs.modal.addEventListener('click', e => {
    if (e.target === refs.modal) closeModal();
  });


  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });


    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
})();
