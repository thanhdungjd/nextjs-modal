import React, { useState } from "react";

import Modal from "@/components/modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main>
      <div className="p-5">NextJs Modal</div>

      {/* Modal Trigger */}
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Open regular modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-5">Modal Content</div>
      </Modal>
    </main>
  );
}
