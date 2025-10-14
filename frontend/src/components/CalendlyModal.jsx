import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

const CalendlyModal = ({ isOpen, onClose, calendlyUrl }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Load Calendly widget script if not already loaded
      if (!document.querySelector('script[src*="calendly"]')) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl mx-4 h-[90vh] bg-gray-900 rounded-lg shadow-2xl border border-gray-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/95">
          <h3 className="text-xl font-bold text-white">Schedule a Meeting</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <X size={20} />
          </Button>
        </div>
        
        {/* Calendly Widget */}
        <div className="h-[calc(100%-64px)] bg-white">
          <div 
            className="calendly-inline-widget" 
            data-url={calendlyUrl}
            style={{ minWidth: '320px', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;
