export const getWordCount = (content: string) => content.split(' ').length;
export const getReadTime = (content: string) => Math.ceil(getWordCount(content) / 200);
