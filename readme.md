# Discounts book shop

book shelft [1, 2, 3 ,4  5]

Books price $8

- 1º book NO discount
- 2º 5% dicount
- 3º 10% dicount
- 4º 20% dicount
- 5º 25% dicount

If the book is repetead in the order made by the client should be separate into a different set and charged.

**To run type:** `yarn dev`

**To build and run type:** `yarn start`

## Examples

### 1º example

input: [1, 2, 3 ,4]

output: $29,2
#### expanation:
(1+0,95+0,9+0,8)*8

### 2º example
input: [1, 1, 2, 2 ,4]

output: $38,4

#### expanation:
- books:  ([1,2,4] + [1,2])
- values: ((1+0,95+0,9) + (1+0,95))*8