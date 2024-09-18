// Define the structure of a Chapter, which is an array of arrays, where each array contains strings (verses)
interface Chapter {
  [index: number]: string[];  // Each chapter is an array of strings (verses)
}

// Define the structure for a Book, which has an abbreviation and an array of chapters
interface Book {
  abbrev: string;
  chapters: Chapter[];
}

// Define the overall structure, which is an array of Book objects
interface Bible {
  [index: number]: Book;
}

export {
  Bible,
  Book,
  Chapter
}