let detail = "my name is nitan"
console.log(detail.startsWith("m"))
console.log(detail.startsWith("my "))
console.log(detail.toUpperCase().startsWith(" my n"))//false
console.log(detail.toUpperCase().startsWith("MY N"))//True

//endsWith()
console.log(detail.endsWith("my"))//false
console.log(detail.endsWith("nitan"))//true