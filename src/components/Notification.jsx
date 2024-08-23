import { useState } from 'react';

function Notification(onClose) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onclose();
  };

  if (!isVisible) return null;

  return (
    <div>
      <p>message</p>
      <button onClick={handleClose}>X</button>
    </div>
  );
}
export default Notification;
