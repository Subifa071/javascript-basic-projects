const Modal = ({ modalOpen, setOpenModal }) => {
  const handleSubmitNewTodo = (e) => {
    e.preventDefault()
  }
  return (
    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
      <div className='modal-box relative'>
        {/* The button to open modal */}
        <label htmlFor='my_modal_6' className='btn'>
          Add new task
        </label>

        {/* Put this part before </body> tag */}
        <input type='checkbox' id='my_modal_6' className='modal-toggle' />
        <div className='modal'>
          <div className='modal-box'>
            {/* <h3 className='font-bold text-lg'>Hello!</h3>
            <p className='py-4'>This modal works with a hidden checkbox!</p> */}
            <form onSubmit={handleSubmitNewTodo}>
              <div className='modal-action'>
                <input
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered w-full'
                />
                <button type='submit' className='btn'>
                  Submit
                </button>
                <label
                  onClick={() => setOpenModal(false)}
                  htmlFor='my_modal_6'
                  className='btn'
                >
                  Close!
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
