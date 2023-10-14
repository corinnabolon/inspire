export class Quote {
  constructor(data) {
    this.id = data.id
    this.content = data.content
    this.author = data.author
    this.tags = data.tags
    this.authorSlug = data.authorSlug
    this.length = data.length
  }


  get quoteTemplate() {
    return `<div class="quote-content bg-filter rounded-pill p-2">
    <p>${this.content}</p>
    </div>
    <div class="quote-author p-1 me-3 rounded-pill">
    <p>${this.author}</p>
    </div>    
    `
  }


}


let quoteExample = `{
  "_id": "J4wLYTndmyx8",
  "content": "Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.",
  "author": "Carl Jung",
  "tags": [
      "Famous Quotes"
  ],
  "authorSlug": "carl-jung",
  "length": 142,
  "dateAdded": "2020-03-15",
  "dateModified": "2023-04-14"
}`