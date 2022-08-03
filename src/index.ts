// const input: number[] = [1, 1, 2, 2, 4];
// const input: number[] = [1, 2, 3, 4, 5];
const input: number[] = [1, 2, 3, 4];
// const input: number[] = [2, 2, 2];
// const input: number[] = [];

const BOOK_PRICE = 8;

function getBooksUniqSets(booksOrder: number[]): Set<number>[] {
  const booksSets: Set<number>[] = [];
  if (booksOrder.length === 0) {
    return booksSets;
  }

  const bookSet = new Set<number>();
  const book1º = booksOrder[0];
  bookSet.add(book1º);
  booksSets.push(bookSet);

  for (let index = 1; index < booksOrder.length; index++) {
    const book = booksOrder[index];

    let allCurrentSetsHaveTheBook = true;
    for (let j = 0; j < booksSets.length; j++) {
      const currentBookSet = booksSets[j];
      const bookNotIsInTheSet = !currentBookSet.has(book);

      if (bookNotIsInTheSet) {
        currentBookSet.add(book);
        allCurrentSetsHaveTheBook = false;
        break;
      }
      allCurrentSetsHaveTheBook = true;
    }

    if (allCurrentSetsHaveTheBook) {
      const newBoookSet = new Set<number>();
      newBoookSet.add(book);
      booksSets.push(newBoookSet);
    }
  }
  return booksSets;
}

function booksChargeCal(booksOrder: number[]): string {
  const sets = getBooksUniqSets(booksOrder);
  console.log("TCL ~ file: index.ts ~ line 49 ~ booksChargeCal ~ sets", sets);
  let totalPrice = 0;
  for (const bookSet of sets) {
    let bookSetPrice = 0;
    let distinticBook = 0;
    let discountPercentage = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _book of bookSet) {
      distinticBook += 1;
      let percentage = 0;
      switch (distinticBook) {
        case 1:
          percentage = 1;
          break;
        case 2:
          percentage = 1 - 0.05;
          break;
        case 3:
          percentage = 1 - 0.1;
          break;
        case 4:
          percentage = 1 - 0.2;
          break;
        case 5:
          percentage = 1 - 0.25;
          break;
      }
      discountPercentage += percentage;
    }
    bookSetPrice = BOOK_PRICE * discountPercentage;
    totalPrice += bookSetPrice;
  }
  return totalPrice.toFixed(2);
}

const output = booksChargeCal(input);
console.log("TCL ~ file: index.ts ~ line 80 ~ output", output);
