import { useState, useEffect } from 'react';
import Link from "next/link";
import "@/CSS/style.css";

export default function WarningModal() {
const [showModal, setShowModal] = useState(true); // Modal başlangıçta açık

const handleClose = () => {
    setShowModal(false); // Modal kapatıldığında sadece state değişir
};

if (!showModal) return null; // Eğer modal kapalıysa hiçbir şey render edilmez

return (
    <div style={modalStyles.overlay}>
    <div style={modalStyles.modal}>
        <p>
            Bu site hala yapım aşamasındadır. Anlayışınız için teşekkür ederiz.
            <br />
            -------------------------------------------------------------------
            <br />
            This site is still under construction. Thank you for your understanding.
        </p>
        <div onClick={handleClose} className="more-container">
                <Link href="" className="more">Tamam</Link>
        </div>
    </div>
    </div>
);
}

const modalStyles = {
overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
},
modal: {
    margin: '16px',
    backgroundColor: '#000',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
},
};
