export const removeDuplicates = (words: string) => {
  const splittedWords = words.split(',')
  const uniqueWords = [...new Set(splittedWords)]
  return uniqueWords.join(',')
}

console.log(removeDuplicates('кошка,собака,лошадь,корова,кошка'))
