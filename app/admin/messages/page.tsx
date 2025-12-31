'use client';

import { useEffect, useState } from 'react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  replied: boolean;
  createdAt: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedMessage, setSelectedMessage] = useState<Contact | null>(null);

  useEffect(() => {
    loadMessages();
  }, [filterStatus]);

  async function loadMessages() {
    try {
      const token = localStorage.getItem('token');
      const url = filterStatus === 'all' 
        ? 'http://localhost:5000/api/contact'
        : `http://localhost:5000/api/contact?status=${filterStatus}`;
        
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      const data = await response.json();
      setMessages(data.data || []);
    } catch (error) {
      console.error('Failed to load messages:', error);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      
      await loadMessages();
      setSelectedMessage(null);
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  }

  async function deleteMessage(id: string) {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      await loadMessages();
      setSelectedMessage(null);
    } catch (error) {
      console.error('Failed to delete message:', error);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
          Contact Messages
        </h1>
        <p className="text-gray-400">Manage incoming contact form submissions</p>
      </div>

      {/* Status Filter */}
      <div className="flex gap-3 mb-8">
        {['all', 'new', 'read', 'replied', 'archived'].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
              filterStatus === status
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Messages List */}
      {messages.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-400">No messages found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all cursor-pointer"
              onClick={() => setSelectedMessage(msg)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{msg.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      msg.status === 'new' ? 'bg-blue-500/20 text-blue-300' :
                      msg.status === 'read' ? 'bg-yellow-500/20 text-yellow-300' :
                      msg.status === 'replied' ? 'bg-green-500/20 text-green-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}>
                      {msg.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{msg.email}</p>
                  <p className="text-white font-semibold mb-2">{msg.subject}</p>
                  <p className="text-gray-400 line-clamp-2">{msg.message}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Message Details</h2>
              <button
                onClick={() => setSelectedMessage(null)}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">From</label>
                <p className="text-white font-semibold">{selectedMessage.name}</p>
              </div>

              <div>
                <label className="text-sm text-gray-400">Email</label>
                <p className="text-white">{selectedMessage.email}</p>
              </div>

              <div>
                <label className="text-sm text-gray-400">Subject</label>
                <p className="text-white font-semibold">{selectedMessage.subject}</p>
              </div>

              <div>
                <label className="text-sm text-gray-400">Message</label>
                <p className="text-white whitespace-pre-wrap bg-white/5 p-4 rounded-lg">
                  {selectedMessage.message}
                </p>
              </div>

              <div>
                <label className="text-sm text-gray-400">Status</label>
                <select
                  value={selectedMessage.status}
                  onChange={(e) => updateStatus(selectedMessage._id, e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white mt-2"
                >
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <a
                  href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center"
                >
                  Reply via Email
                </a>
                <button
                  onClick={() => deleteMessage(selectedMessage._id)}
                  className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}