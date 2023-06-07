'use client'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'
const AddTask = () => {
  const [modalOpen, setOpenModal] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className='btn btn-primary w-full '
      >
        Add new task
        <AiOutlinePlus className='ml-2' size={10} />
      </button>
      <Modal modalOpen={modalOpen} setOpenModal={setOpenModal}>
        Modal for Add todo
      </Modal>
    </div>
  )
}

export default AddTask
