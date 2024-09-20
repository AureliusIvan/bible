// "use server";
//
// import type {Bible} from "@/interface/kjv";
// import kjv from "@/asset/en_kjv.json"
//
// const bibleData: Bible = kjv as unknown as Bible;
//
// async function getBibleData(
//     book: number,
//     chapter: number,
//     verse: number) {
//   // convert bibleData to array
//   const data = bibleData.map((verse: never) => verse);
//   const _book = data[book]
//
//   // convert chapter to integer
//   if (chapter <= 0 || chapter > _book.chapters.length) {
//     chapter = 1
//   }
//
//   // TODO: add fallback, so even tho params not match, error will not occurs
//   console.log(_book.chapters[chapter - 1 || 0])
//   return _book.chapters[chapter - 1 || 0][verse]
// }
//
//
// export {getBibleData};