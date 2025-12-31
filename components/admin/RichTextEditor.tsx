'use client';

import { useEffect, useRef } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const editorRef = useRef<any>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || isInitialized.current) return;

    const script = document.createElement('script');
    script.src = 'https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js';
    script.referrerPolicy = 'origin';
    
    script.onload = () => {
      // @ts-ignore
      window.tinymce.init({
        selector: '#richTextEditor',
        height: 500,
        menubar: true,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'codesample'
        ],
        toolbar: 'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | codesample | link image | code',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        skin: 'oxide-dark',
        content_css: 'dark',
        setup: (editor: any) => {
          editorRef.current = editor;
          editor.on('change keyup', () => {
            onChange(editor.getContent());
          });
        },
        init_instance_callback: (editor: any) => {
          editor.setContent(value || '');
        },
      });
      isInitialized.current = true;
    };

    document.head.appendChild(script);

    return () => {
      if (editorRef.current) {
        editorRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (editorRef.current && editorRef.current.getContent() !== value) {
      editorRef.current.setContent(value || '');
    }
  }, [value]);

  return (
    <div>
      <textarea
        id="richTextEditor"
        placeholder={placeholder}
        defaultValue={value}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
      />
    </div>
  );
}