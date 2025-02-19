interface ModalOverlayProps {
    children: React.ReactNode;
    onClose: () => void;
  }
  
  export default function ModalOverlay({ children, onClose }: ModalOverlayProps) {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {children}
      </div>
    );
  }
  