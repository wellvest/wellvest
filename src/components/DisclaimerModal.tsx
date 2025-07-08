import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsOpen(false);
  };

  const handleDecline = () => {
    // Redirect to a safe page or show another message
    alert('You must accept the disclaimer to use this website.');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-navy-header mb-4">Disclaimer</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-brand">Important Notification</h3>
            <p className="text-text-dark">
              At WellVest Consulting, we uphold the highest standards of transparency and integrity. Please note that:
            </p>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-text-dark">No Direct Solicitation:</h4>
              <ul className="list-disc pl-5 space-y-1 text-text-light">
                <li>We do not solicit financiers or customers directly through this website.</li>
                <li>We only accept new clients and work with channel partners through our verified Channel Partners. Please ensure you work exclusively with our authorized representatives to safeguard your interests.</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-text-dark">Anti-Money Laundering (AML) Declaration:</h4>
              <ul className="list-disc pl-5 space-y-1 text-text-light">
                <li>WellVest Consulting strictly adheres to Anti-Money Laundering (AML) regulations.</li>
                <li>We do not accept funds that are suspected to be derived from illegal activities, including but not limited to:
                  <ul className="list-disc pl-5 mt-1">
                    <li>Money laundering</li>
                    <li>Tax evasion</li>
                    <li>Proceeds from narcotics or other unlawful sources</li>
                  </ul>
                </li>
                <li>We reserve the right to decline any funds that raise concerns regarding their origin or legality.</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-text-dark">Transparency Commitment:</h4>
              <p className="text-text-light">
                Our commitment to ethical financial practices ensures that we operate within the legal framework, prioritizing the safety and trust of our clients and partners.
              </p>
            </div>
            
            <div className="mt-4 text-sm text-gray-500 italic">
              <strong>Note:</strong> This website is for informational purposes only and not for solicitation on funds.
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 px-6 py-4 flex justify-end gap-4">
          <Button 
            variant="outline" 
            onClick={handleDecline}
            className="bg-gray-200 hover:bg-gray-300 border-gray-300"
          >
            Decline
          </Button>
          <Button 
            variant="wellvest" 
            onClick={handleAccept}
          >
            I Agree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
