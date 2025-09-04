'use client';

import { useState, useEffect } from 'react';
import { SiteContent } from '@/lib/site-content';

interface AdminDataLoaderProps {
  children: (props: {
    content: SiteContent | null;
    loading: boolean;
    error: string | null;
    saveContent: (section: string, sectionContent: any) => Promise<boolean>;
    reload: () => void;
  }) => React.ReactNode;
}

export default function AdminDataLoader({ children }: AdminDataLoaderProps) {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/site-content');
      if (!response.ok) {
        throw new Error('Error al cargar el contenido');
      }
      const data = await response.json();
      setContent(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async (section: string, sectionContent: any): Promise<boolean> => {
    try {
      setError(null);
      const response = await fetch(`/api/site-content/${section}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sectionContent),
      });
      
      if (!response.ok) {
        throw new Error('Error al guardar el contenido');
      }

      // Recargar contenido después de guardar
      await loadContent();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return false;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Cargando contenido del sitio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Error al cargar el contenido</h2>
          <p className="text-slate-600 mb-4">{error}</p>
          <button
            onClick={loadContent}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {children({
        content,
        loading,
        error,
        saveContent,
        reload: loadContent
      })}
    </>
  );
}
