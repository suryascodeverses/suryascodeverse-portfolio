import { useEffect } from 'react';

export function useAnalytics(type: string, resourceId: string, resourceTitle: string) {
  useEffect(() => {
    const track = async () => {
      try {
        await fetch('http://localhost:5000/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type, resourceId, resourceTitle }),
        });
      } catch (error) {
        console.error('Analytics error:', error);
      }
    };

    track();
  }, [type, resourceId, resourceTitle]);
}