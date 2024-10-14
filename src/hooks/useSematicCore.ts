import { useCallback, useEffect, useState } from "react";
import nlp from "compromise";

// Define stopwords (common words to exclude)
const stopwords = [
  "the",
  "is",
  "in",
  "and",
  "of",
  "to",
  "a",
  "with",
  "that",
  "it",
  "on",
  "for",
  "as",
  "this",
  "by",
  "an",
  "be",
  "at",
  "which",
  "from",
  "or",
  "but",
  "has",
  "was",
  "have",
  "will",
  "its",
  "per",
  "after",
  "against",
  "not",
  "when",
  "may",
  "also",
  "only",
  "been",
  "we",
  "he",
  "she",
  "they",
  "them",
  "who",
  "what",
  "you",
  "all",
  "over",
  "more",
  "other",
  "out",
  "said",
  "up",
];

// Helper function to check if a term is meaningful (proper noun or relevant category)
const isMeaningfulTerm = (term: string): boolean => {
  const cleanedTerm = term.replace(/[^a-zA-Z]/g, "");
  return (
    cleanedTerm.length > 1 &&
    /^[A-Z]/.test(cleanedTerm) && // Check if it's a capitalized word (likely proper noun or category)
    !stopwords.includes(cleanedTerm.toLowerCase()) // Exclude stopwords
  );
};

// Main hook to extract the semantic core and named entities
export const useSemanticCore = (text: string) => {
  const [semanticCore, setSemanticCore] = useState<string[]>([]);
  const [entities, setEntities] = useState<{
    organizations: string[];
    people: string[];
    dates: string[];
    products: string[];
  }>({
    organizations: [],
    people: [],
    dates: [],
    products: [],
  });

  // Function to extract both semantic core terms and named entities
  const extractSemanticCoreAndEntities = useCallback(
    (inputText: string): { semanticCore: string[]; entities: any } => {
      const doc = nlp(inputText);
      // Extract semantic core (meaningful terms)
      const terms = doc.terms().out("array");
      const filteredTerms = terms.filter((term: string) =>
        isMeaningfulTerm(term),
      );
      const termFreq: { [key: string]: number } = {};
      filteredTerms.forEach((term: string) => {
        termFreq[term] = (termFreq[term] || 0) + 1;
      });

      const sortedTerms = Object.entries(termFreq)
        .sort(([, a], [, b]) => b - a)
        .map(([word]) => word);
      const organizations = doc.match("#Organization").out("array");
      const people = doc.match("#Person").out("array");
      const dates = doc.match("#Date").out("array");
      const products = doc.match("#Product").out("array");

      return {
        semanticCore: sortedTerms.slice(0, 100), // Return top 100 semantic core terms
        entities: {
          organizations,
          people,
          dates,
          products,
        },
      };
    },
    [text],
  );

  // Run the extraction whenever the input text changes
  useEffect(() => {
    if (text) {
      const { semanticCore, entities } = extractSemanticCoreAndEntities(text);
      setSemanticCore(semanticCore);

      setEntities(entities);
    }
  }, [text, extractSemanticCoreAndEntities]);

  return { semanticCore: [...semanticCore, ...Object.values(entities)].flat() };
};
