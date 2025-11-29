
import { GoogleGenAI } from "@google/genai";
import { COURSES, CONTACT_INFO } from '../constants';

// Initialize Gemini Client
// WARNING: API_KEY must be in import.meta.env.VITE_GEMINI_API_KEY
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
Bạn là trợ lý ảo AI của trung tâm Anh ngữ "English Note". 
Phong cách của bạn: Năng động, chuyên nghiệp, thân thiện, và ngắn gọn.
Nhiệm vụ: Tư vấn khóa học, giải đáp thắc mắc tiếng Anh, và cung cấp thông tin liên hệ.

Thông tin trung tâm:
- Địa chỉ: ${CONTACT_INFO.address}
- SĐT: ${CONTACT_INFO.phone}
- Email: ${CONTACT_INFO.email}

Danh sách khóa học hiện có:
${COURSES.map(c => `- ${c.title} (${c.level}): ${c.description}. Thời gian: ${c.duration}`).join('\n')}

Quy tắc trả lời:
1. Nếu người dùng hỏi về khóa học, hãy gợi ý dựa trên nhu cầu của họ (tuổi, mục đích).
2. Nếu người dùng hỏi kiến thức tiếng Anh, hãy giải thích dễ hiểu.
3. Luôn khuyến khích người dùng đến trực tiếp hoặc gọi hotline để được tư vấn kỹ hơn.
4. Trả lời bằng tiếng Việt.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "Xin lỗi, tôi không thể trả lời ngay lúc này. Vui lòng thử lại.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hệ thống đang bận. Bạn vui lòng liên hệ hotline " + CONTACT_INFO.phone + " nhé!";
  }
};
