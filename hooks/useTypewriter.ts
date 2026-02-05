"use client";

import { useEffect, useState } from "react";

export function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, char + 1));
        setChar(char + 1);
        if (char === current.length) setTimeout(() => setDeleting(true), 1200);
      } else {
        setText(current.slice(0, char - 1));
        setChar(char - 1);
        if (char === 0) {
          setDeleting(false);
          setIndex((index + 1) % words.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [char, deleting, index, words]);

  return text;
}
