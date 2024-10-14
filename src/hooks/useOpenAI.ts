import { useState } from "react";
import OpenAI from "openai"; // Assuming OpenAI SDK is installed

interface UseOpenAIBriefingReturn {
  result: Record<string, any> | null;
  loading: boolean;
  error: string | null;
  fetchOpenAI: (prompt: string) => Promise<void>;
  cancelRequest: () => void;
}

const useOpenAI = (): UseOpenAIBriefingReturn => {
  const [result, setResult] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fetchOpenAI = async (prompt: string): Promise<void> => {
    setLoading(true);

    setError(null);

    setResult(null);

    const openai = new OpenAI({
      apiKey:
        process.env.REACT_APP_OPENAI_API_KEY ||
        "sk-svcacct-wP5x_jaYNSEzg9bGfMnHrkXQCLg1FdQPRgwav9hq8la7UGu88x_ifg-eqXvwHI5zRVj7NvNpcTSsKPT3BlbkFJo_MTsPk17hdU_NOB4embPKuz-9L0aFn9_ZKaGJQhOq8qrRTX0X-DDX-RJTwIzWprnCRCluIdnXhvMA",
      dangerouslyAllowBrowser: true,
    });

    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      const messageContent =
        chatCompletion.choices[0]?.message?.content?.trim() ?? "";

      setResult(
        JSON.parse(messageContent.replace(/```json|```/g, "").trim()) ?? {
          summary: "",
          summaryTitle: "",
          category: "",
          preview: "",
        },
      );
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const cancelRequest = () => {
    if (loading) {
      return;
    }
    setResult(null);

    setLoading(false);

    setError(null);
  };

  return { result, loading, error, fetchOpenAI, cancelRequest };
};

export default useOpenAI;
