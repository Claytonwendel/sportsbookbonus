import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { state } = req.query;
  
  try {
    const { data, error } = await supabase
      .from('sportsbooks')
      .select('*')
      .contains('state_availability', [state])
      .eq('is_active', true);
    
    if (error) throw error;
    
    // Your existing deduplication logic for Fanatics
    const uniqueSportsbooks = [];
    const seenBooks = new Set();
    
    data?.forEach(book => {
      if (book.book_name === 'Fanatics') {
        if (!seenBooks.has('Fanatics')) {
          const fanaticsEntries = data.filter(b => 
            b.book_name === 'Fanatics' && 
            b.state_availability.includes(state)
          );
          uniqueSportsbooks.push(fanaticsEntries[0]);
          seenBooks.add('Fanatics');
        }
      } else {
        uniqueSportsbooks.push(book);
      }
    });
    
    res.status(200).json(uniqueSportsbooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
