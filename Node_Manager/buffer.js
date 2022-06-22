const str = "Hello World";
const buffer = Buffer.from(str, "utf-8");

console.log(buffer);

for(const val of buffer) {
    console.log(val);
}

const val2 = buffer.toString();
console.log(val2);