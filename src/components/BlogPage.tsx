import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar, User, Search, BookOpen, AlertCircle } from 'lucide-react';
import { BLOGS } from '../data';
import { BlogPostItem } from '../types';

interface BlogProps {
  activeBlogId: string | null;
  navigate: (page: string, params?: { blogId?: string }) => void;
  onSelectBlog: (id: string | null) => void;
}

export default function BlogPage({ activeBlogId, navigate, onSelectBlog }: BlogProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle article view vs list view
  const activeBlog = BLOGS.find((b) => b.id === activeBlogId);

  const filteredBlogs = BLOGS.filter((b) => 
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (activeBlog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Link */}
        <button 
          onClick={() => onSelectBlog(null)}
          className="inline-flex items-center gap-1.5 text-xs text-white font-bold hover:underline mb-8 hover:text-secondary select-none"
        >
          <ArrowLeft size={14} />
          Back to Blog List
        </button>

        {/* Full Article details */}
        <article className="bg-white border border-legal-border rounded-3xl p-6 md:p-12 shadow-premium">
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-text mb-6">
            <span className="bg-[#147A5D]/10 text-[#147A5D] px-2.5 py-1 rounded font-bold uppercase tracking-wide">
              {activeBlog.category}
            </span>
            <span className="flex items-center gap-1"><Calendar size={13} /> {activeBlog.date}</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {activeBlog.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 leading-tight">
            {activeBlog.title}
          </h1>

          {/* Author Board */}
          <div className="flex items-center gap-3 pb-6 border-b border-legal-border mb-8">
            <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center font-bold text-primary text-sm font-mono">
              AD
            </div>
            <div>
              <p className="text-xs font-bold text-primary">{activeBlog.author}</p>
              <p className="text-[10px] text-muted-text">Verified High Court Panel Advocate • NyaySetu.in</p>
            </div>
          </div>

          {/* Detailed Paragraph text */}
          <div className="flex flex-col gap-5 text-sm md:text-base text-muted-text leading-relaxed">
            {activeBlog.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Editorial Tip block */}
          <div className="bg-[#1F6F5B]/5 border border-[#1F6F5B]/15 p-6 rounded-2xl mt-12 flex items-start gap-4 text-muted-text text-xs leading-relaxed">
            <AlertCircle className="text-secondary shrink-0 mt-0.5" size={18} />
            <div>
              <h5 className="font-bold text-primary text-sm mb-1">Editor’s Action Checklist</h5>
              <p>Legal guidelines are highly subject to case-specific evidence and localized territorial notices. Keep your documents registry updated and always do a quick 7-minute match talk to clarify specific clause boundaries.</p>
            </div>
          </div>

          {/* Back button bottom */}
          <div className="mt-12 pt-6 border-t border-legal-border flex justify-center">
            <button 
              onClick={() => navigate('talk')}
              className="bg-primary hover:bg-accent text-white font-bold py-3 px-8 rounded-xl text-xs transition-colors shadow-md"
            >
              Discuss your case with {activeBlog.author} →
            </button>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary via-accent to-primary text-white py-16 px-4 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <span className="bg-secondary/20 text-secondary border border-secondary/40 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Legal Literacy Guides
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mt-4 text-white">
            NyaySetu Education Blog
          </h1>
          <p className="text-sm text-[#D8E7E3] mt-3 leading-relaxed max-w-xl mx-auto">
            Demystifying complex litigation procedures. Read plain-Hindi-English guides outlining RERA clauses, section 13B mutual divorce timelines, and Section 138 cheque return regulations.
          </p>

          {/* Local Search input */}
          <div className="max-w-md mx-auto mt-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text" size={16} />
            <input 
              type="text"
              placeholder="Search guides, e.g. Divorce, Cheque, Vetting..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-primary rounded-xl pl-10 pr-4 py-2.5 text-xs shadow-md focus:outline-none placeholder-muted-text/70"
            />
          </div>
        </div>
      </section>

      {/* Grid listing */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12 bg-white border border-legal-border rounded-2xl max-w-lg mx-auto p-6">
            <BookOpen size={30} className="text-secondary mx-auto mb-2" />
            <p className="text-sm font-bold text-primary">No legal articles found</p>
            <p className="text-xs text-muted-text mt-1">Try resetting your keyboard search filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBlogs.map((blog) => (
              <div 
                key={blog.id}
                onClick={() => onSelectBlog(blog.id)}
                className="bg-white rounded-3xl border border-legal-border hover:border-secondary shadow-premium hover:shadow-premium-hover transition-all cursor-pointer flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between gap-4 mb-4 text-xs text-muted-text">
                    <span className="bg-[#1F6F5B]/5 text-[#1F6F5B] px-2.5 py-0.5 rounded font-bold uppercase tracking-wide">
                      {blog.category}
                    </span>
                    <span className="font-mono text-[11px]">{blog.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="bg-primary/5 px-8 py-5 border-t border-legal-border flex items-center justify-between text-xs mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary">{blog.author}</span>
                  </div>
                  <span className="text-primary font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Guide <ArrowLeft className="rotate-180" size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Final call block */}
        <div className="mt-16 bg-primary text-white p-8 md:p-12 rounded-3xl text-center relative overflow-hidden flex flex-col items-center gap-4">
          <h3 className="font-serif text-xl font-bold text-white">Need formal legal research assistance?</h3>
          <p className="text-xs text-[#D8E7E3] max-w-md mx-auto">
            Book a dedicated session to conduct structured vetting across supreme court judgments related to your active real estate or trademark case.
          </p>
          <button 
            onClick={() => navigate('talk')}
            className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-xs px-6 py-2.5 rounded-xl transition-all shadow-md select-none"
          >
            Match with Senior Vetting counsel
          </button>
        </div>

      </section>
    </div>
  );
}
