const fs = require("fs");

const BlocksData = [
  {
    color: "#144A75",
    shape: [[true]] as boolean[][],
    value: 0
  },
  {
    color: "#D52053",
    shape: [[true], [true]] as boolean[][],
    value: 0
  },
  {
    color: "#068541",
    shape: [[true], [true], [true]] as boolean[][],
    value: 0
  },
  {
    color: "#DD701C",
    shape: [
      [true, false],
      [true, true]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#FED524",
    shape: [[true], [true], [true], [true]] as boolean[][],
    value: 0
  },
  {
    color: "#03A192",
    shape: [
      [false, true],
      [false, true],
      [false, true],
      [true, true]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#04444E",
    shape: [
      [true, false],
      [true, true],
      [true, false]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#D753C2",
    shape: [
      [true, true],
      [true, true]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#AD5E17",
    shape: [
      [true, true, false],
      [false, true, true]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#1172D6",
    shape: [[true], [true], [true], [true], [true]] as boolean[][],
    value: 0
  },
  {
    color: "#A71898",
    shape: [
      [false, true],
      [false, true],
      [false, true],
      [true, true]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#8D232C",
    shape: [
      [false, true],
      [false, true],
      [true, true],
      [true, false]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#B551E3",
    shape: [
      [false, true],
      [true, true],
      [true, true]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#038053",
    shape: [
      [true, true],
      [false, true],
      [true, true]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#5E7CF4",
    shape: [[true], [true], [true], [true]] as boolean[][],
    value: 0
  },
  {
    color: "#D52053",
    shape: [
      [true, false],
      [true, true],
      [true, false],
      [true, false]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#8CB08E",
    shape: [
      [false, true, false],
      [false, true, false],
      [true, true, true]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#EB48CB",
    shape: [
      [true, false, false],
      [true, false, false],
      [true, true, true]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#59DDB3",
    shape: [
      [true, true, false],
      [false, true, true],
      [false, false, true]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#D89CF6",
    shape: [
      [true, false, false],
      [true, true, true],
      [false, false, true]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#EB9E7B",
    shape: [
      [true, false, false],
      [true, true, true],
      [false, true, false]
    ] as boolean[][],
    value: 0
  },
  {
    color: "#ff3333",
    shape: [
      [false, true, false],
      [true, true, true],
      [false, true, false]
    ] as boolean[][],
    value: 0
  }
];

function colorToNumber(color: string): Int32Array {
  let byte1 = characterToNumber([color[1], color[2]].join(""));
  let byte2 = characterToNumber([color[3], color[4]].join(""));
  let byte3 = characterToNumber([color[5], color[6]].join(""));
  let byteArray = new Uint8ClampedArray(4);
  byteArray[0] = byte1;
  byteArray[1] = byte2;
  byteArray[2] = byte3;
  byteArray[3] = 255;
  return new Int32Array(byteArray.buffer);
}

function characterToNumber(character: string): number {
  return Number.parseInt(character, 16);
}
function blockHeight(shape: boolean[][]): number {
  return shape[0].length;
}
function blockWidth(shape: boolean[][]): number {
  return shape.length;
}

let totalSize = 0;

let offsets = [];
let offsetTotal = 0;
let int32BlockRep = BlocksData.map((block, index) => {
  let colorBytes = colorToNumber(block.color);
  let w = blockWidth(block.shape);
  let h = blockHeight(block.shape);
  let size = w * h + 3;
  let arrayView = new Int32Array(size);
  let i = 0;
  let offset = w * h + 2;
  offsetTotal += offset;
  offsets.push(offsetTotal);
  arrayView[i++] = w;
  arrayView[i++] = h;
  block.shape.forEach(col => {
    col.forEach(el => {
      if (el) {
        arrayView[i++] = colorBytes[0];
      } else {
        arrayView[i++] = 0;
      }
    });
  });
  totalSize += size;
  return arrayView;
});

console.log(totalSize);
let i = 0;
let arrayView = new Int32Array(totalSize);
int32BlockRep.forEach((block, index) => {
  console.log(index, block);
  block.forEach(data => {
    arrayView[i++] = data;
  });
});

console.log(i);
console.log(offsets.length);

let plainText = [];
arrayView.forEach(x => {
  if (x === -1) {
    plainText.push("\n");
  } else {
    plainText.push(`${x},`);
  }
});

let writer = fs.createWriteStream("./data.txt");
writer.write(plainText.join(""));
writer.write("\n");
writer.write(offsets.join(","));
