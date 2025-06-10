import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// Value proposition flow
const ValueFlow = ({ isCompact }) => (
  <div className={`transition-all duration-500 ${isCompact ? 'mb-4' : 'mb-8'}`}>
    <div className="flex flex-row items-center justify-center space-x-6 max-w-5xl mx-auto px-4 overflow-x-auto">
      {/* Step 1: Join a New Book */}
      <div className={`bg-gray-800 border border-gray-700 rounded-xl p-4 text-center flex-shrink-0 ${isCompact ? 'w-36' : 'w-44'} transition-all duration-300`}>
        <div className="text-2xl mb-2">
          <svg className="w-8 h-8 mx-auto text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
          </svg>
        </div>
        <div className="text-white font-semibold text-sm">Join a New Book</div>
        {!isCompact && <div className="text-gray-400 text-xs mt-1">Select your state</div>}
      </div>

      {/* Arrow 1 */}
      <div className="text-blue-400 text-xl flex-shrink-0">→</div>

      {/* Step 2: Claim Your Bonus */}
      <div className={`bg-gray-800 border border-gray-700 rounded-xl p-4 text-center flex-shrink-0 ${isCompact ? 'w-36' : 'w-44'} transition-all duration-300`}>
        <div className="text-2xl mb-2">
          <svg className="w-8 h-8 mx-auto text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
        </div>
        <div className="text-white font-semibold text-sm">Claim Your Bonus</div>
        {!isCompact && <div className="text-gray-400 text-xs mt-1">Offers vary</div>}
      </div>

      {/* Arrow 2 */}
      <div className="text-blue-400 text-xl flex-shrink-0">→</div>

      {/* Step 3: Take our Best Bets */}
      <div className={`bg-gray-800 border border-gray-700 rounded-xl p-4 text-center flex-shrink-0 ${isCompact ? 'w-36' : 'w-44'} transition-all duration-300`}>
        <div className="text-2xl mb-2">
          <svg className="w-8 h-8 mx-auto text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
          </svg>
        </div>
        <div className="text-white font-semibold text-sm">Take our Best Bets</div>
        {!isCompact && <div className="text-gray-400 text-xs mt-1">30 days free!</div>}
      </div>

      {/* Arrow 3 */}
      <div className="text-blue-400 text-xl flex-shrink-0">→</div>

      {/* Step 4: Enjoy Your Profits */}
      <div className={`bg-gradient-to-br from-gray-900 to-green-900 border border-green-400 rounded-xl p-4 text-center flex-shrink-0 ${isCompact ? 'w-36' : 'w-44'} transition-all duration-300`}>
        <div className="text-2xl mb-2">
          <svg className="w-8 h-8 mx-auto text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
          </svg>
        </div>
        <div className="text-white font-semibold text-sm">Enjoy Your Profits</div>
        {!isCompact && <div className="text-gray-400 text-xs mt-1">Minimal risk involved</div>}
      </div>
    </div>
  </div>
);

// State selector dropdown
const StateSelector = ({ states, selectedState, onSelect }) => (
  <div className="mb-8">
    <select
      value={selectedState?.state_code || ''}
      onChange={(e) => {
        const state = states.find(s => s.state_code === e.target.value);
        onSelect(state);
      }}
      className="bg-gray-800 border border-gray-700 text-gray-300 rounded-lg px-4 py-3 text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:border-gray-600 outline-none min-w-64 appearance-none cursor-pointer hover:bg-gray-750 transition-colors"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.5rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        paddingRight: '2.5rem'
      }}
    >
      <option value="" className="bg-gray-800 text-gray-300">Select Your State</option>
      {states.map(state => (
        <option key={state.state_code} value={state.state_code} className="bg-gray-800 text-gray-300">
          {state.state_name}
        </option>
      ))}
    </select>
  </div>
);

// Sportsbook offer card
const OfferCard = ({ sportsbook, onViewDetails }) => (
  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
    {/* Header with logo and badge */}
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {sportsbook.book_name.slice(0, 2).toUpperCase()}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{sportsbook.book_name}</h3>
          <div className="inline-flex items-center bg-green-900 text-green-300 px-2 py-1 rounded-md text-sm font-medium mt-1">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Active Bonus
          </div>
        </div>
      </div>
    </div>

    {/* Bonus offer */}
    <div className="mb-4">
      <div className="text-gray-300 text-sm mb-2">Bonus Offer</div>
      <div className="text-white font-medium">{sportsbook.book_bonus_info}</div>
    </div>

    {/* Min deposit */}
    <div className="mb-4">
      <div className="text-gray-300 text-sm mb-2">Minimum Deposit</div>
      <div className="text-white font-medium">${(sportsbook.minimum_deposit / 100).toFixed(0)}</div>
    </div>

    {/* Insider bonus preview */}
    <div className="mb-6">
      <div className="text-gray-300 text-sm mb-2">Insider Bonus</div>
      <div className="text-blue-400 font-medium">{sportsbook.insider_bonus_info}</div>
    </div>

    {/* Action button */}
    <button
      onClick={() => onViewDetails(sportsbook)}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
    >
      View Details
    </button>
  </div>
);

// Detailed offer modal
const OfferModal = ({ sportsbook, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
    <div className="bg-gray-800 rounded-2xl p-6 max-w-md w-full max-h-96 overflow-y-auto border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">{sportsbook.book_name}</h2>
        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-white text-2xl font-bold"
        >
          ×
        </button>
      </div>
      
      {/* Bonus details */}
      <div className="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-700">
        <h3 className="font-semibold text-white mb-3">Complete Bonus Details</h3>
        <div className="space-y-2 text-sm">
          <div>
            <span className="text-gray-400">Sportsbook Bonus:</span>
            <div className="text-white font-medium">{sportsbook.book_bonus_info}</div>
          </div>
          <div>
            <span className="text-gray-400">Min Deposit:</span>
            <div className="text-white font-medium">${(sportsbook.minimum_deposit / 100).toFixed(0)}</div>
          </div>
          <div>
            <span className="text-gray-400">Insider Bonus:</span>
            <div className="text-blue-400 font-medium">{sportsbook.insider_bonus_info}</div>
          </div>
        </div>
      </div>
      
      {/* Promo code */}
      {sportsbook.promo_code && (
        <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-4 mb-4">
          <div className="text-yellow-300 font-semibold mb-2">Required Promo Code:</div>
          <div className="text-2xl font-mono font-bold text-yellow-100 bg-yellow-800 p-3 rounded text-center">
            {sportsbook.promo_code}
          </div>
        </div>
      )}
      
      {/* Instructions */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-6">
        <div className="text-white font-semibold mb-2">How to claim your insider bonus:</div>
        <div className="text-gray-300 text-sm leading-relaxed">
          1. Sign up using the link below<br/>
          2. Make your deposit{sportsbook.promo_code ? ' with the promo code' : ''}<br/>
          3. Email a screenshot to{' '}
          <span className="font-mono bg-gray-800 px-1 rounded text-blue-400">
            sportsbook@thebettinginsider.com
          </span>
        </div>
      </div>
      
      {/* Sign up button */}
      
        href={sportsbook.affiliate_link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors duration-200"
      >
        Sign Up Now
      </a>
    </div>
  </div>
);

// Main app component
export default function FreeMoneyApp() {
  const [states, setStates] = useState([]);
  const [sportsbooks, setSportsbooks] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch states on component mount
  useEffect(() => {
    fetchStates();
  }, []);

  // Fetch sportsbooks when state is selected
  useEffect(() => {
    if (selectedState) {
      fetchSportsbooks(selectedState.state_code);
    }
  }, [selectedState]);

  const fetchStates = async () => {
    try {
      const { data, error } = await supabase
        .from('states')
        .select('*')
        .eq('is_betting_legal', true)
        .order('state_name');
      
      if (error) throw error;
      setStates(data || []);
    } catch (error) {
      console.error('Error fetching states:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSportsbooks = async (stateCode) => {
    try {
      const { data, error } = await supabase
        .from('sportsbooks')
        .select('*')
        .contains('state_availability', [stateCode])
        .eq('is_active', true);
      
      if (error) throw error;
      
      // Deduplicate Fanatics entries - show only one but keep state-specific link
      const uniqueSportsbooks = [];
      const seenBooks = new Set();
      
      data?.forEach(book => {
        if (book.book_name === 'Fanatics') {
          if (!seenBooks.has('Fanatics')) {
            // Find the correct Fanatics entry for this state
            const fanaticsEntries = data.filter(b => 
              b.book_name === 'Fanatics' && 
              b.state_availability.includes(stateCode)
            );
            // Use the first matching entry
            uniqueSportsbooks.push(fanaticsEntries[0]);
            seenBooks.add('Fanatics');
          }
        } else {
          uniqueSportsbooks.push(book);
        }
      });
      
      setSportsbooks(uniqueSportsbooks);
    } catch (error) {
      console.error('Error fetching sportsbooks:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-2xl font-bold text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="text-center py-12">
        <div className="text-sm font-medium text-blue-400 mb-4 tracking-wider uppercase">
          Your Ticket to Winning
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Claim Your Free Money
        </h1>
        
        {/* State Selector - ABOVE everything else */}
        <StateSelector 
          states={states}
          selectedState={selectedState}
          onSelect={setSelectedState}
        />
        
        {/* Value Flow - shown prominently when no state selected */}
        {!selectedState && <ValueFlow isCompact={false} />}
      </div>

      {/* Offers section */}
      {selectedState && (
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Available in {selectedState.state_name}
            </h2>
            <p className="text-gray-400">
              {sportsbooks.length} sportsbook{sportsbooks.length !== 1 ? 's' : ''} available
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsbooks.map((sportsbook) => (
              <OfferCard
                key={sportsbook.id}
                sportsbook={sportsbook}
                onViewDetails={setSelectedOffer}
              />
            ))}
          </div>
          
          {/* Compact Value Flow - shown at bottom after state selection */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-center text-lg font-semibold text-white mb-6">How It Works</h3>
            <ValueFlow isCompact={true} />
          </div>
        </div>
      )}

      {/* Empty state */}
      {selectedState && sportsbooks.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg">
            No sportsbooks available in {selectedState.state_name}
          </div>
        </div>
      )}

      {/* Offer details modal */}
      {selectedOffer && (
        <OfferModal
          sportsbook={selectedOffer}
          onClose={() => setSelectedOffer(null)}
        />
      )}
    </div>
  );
}
