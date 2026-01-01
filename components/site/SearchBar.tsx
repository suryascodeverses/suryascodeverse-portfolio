'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getProjects, getBlogPosts } from '@/lib/services';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchTimeout = setTimeout(async () => {
      setLoading(true);
      try {
        const [projects, posts] = await Promise.all([
          getProjects(),
          getBlogPosts()
        ]);

        const searchLower = query.toLowerCase();
        
        const filteredProjects = projects.filter(p =>
          p.title.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower) ||
          p.technologies.some(t => t.toLowerCase().includes(searchLower))
        ).map(p => ({ ...p, type: 'project' }));

        const filteredPosts = posts.filter(p =>
          p.published && (
            p.title.toLowerCase().includes(searchLower) ||
            p.excerpt.toLowerCase().includes(searchLower) ||
            p.tags.some(t => t.toLowerCase().includes(searchLower))
          )
        ).map(p => ({ ...p, type: 'blog' }));

        setResults([...filteredProjects, ...filteredPosts]);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  const handleResultClick = (result: any) => {
    if (result.type === 'blog') {
      router.push(`/blog/${result.slug}`);
    }
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search projects & blog..."
          className="w-64 bg-white/5 border border-white/10 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
      </div>

      {isOpen && query.length >= 2 && (
        <div className="absolute top-full mt-2 w-full md:w-96 bg-gray-900 border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
          {loading ? (
            <div className="p-4 text-center text-gray-400">Searching...</div>
          ) : results.length === 0 ? (
            <div className="p-4 text-center text-gray-400">No results found</div>
          ) : (
            <div className="max-h-96 overflow-y-auto">
              {results.map((result, idx) => (
                <div
                  key={idx}
                  onClick={() => handleResultClick(result)}
                  className="p-4 hover:bg-white/5 cursor-pointer border-b border-white/5 last:border-0 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">
                      {result.type === 'project' ? '💼' : '📝'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-semibold truncate">{result.title}</h4>
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">
                          {result.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 line-clamp-1">
                        {result.type === 'project' ? result.description : result.excerpt}
                      </p>
                      {result.type === 'project' && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {result.technologies.slice(0, 3).map((tech: string) => (
                            <span key={tech} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}