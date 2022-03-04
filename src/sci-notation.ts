// export type notationName = "scientific" | "engineering" | "e-notation";

// type IsScientific = (x: string | ScientificNotation) => boolean;
// type IsNotScientific = (
//   x: string | ScientificNotation
// ) => (x: string | ScientificNotation, isScientific: boolean) => boolean;

// const isScientific = (
//   x: string | ScientificNotation
// ): x is ScientificNotation => (x.match("x 10^") !== null ? true : false);

// const isNotScientific = (
//   x: string | ScientificNotation,
//   y: boolean
// ): x is ScientificNotation => {
//   if (!y) return y;
//   if (isScientific.length < 5) return true;

//   return false;
// };

// function isENotation(x: string | e): x is e {
//   if (x === undefined || x === null) return false;
//   const a = x.split("e-");

//   if (a === undefined || a === null) return false;

//   if (a.length === 2) {
//     a[0].
//   }
//   return false;
// }

// type e = `${number}e-${number}`;
// type sciNotattion = `${number} x 10^${number}`;
// type Transform = (a: e | string) => string;

// const a: e = "5e-7";
// const d: e = "10e-232";
// const f: e = "10.3e-2";
// const h: sciNotattion = "35 x 10^-2";
// const g: ENotation = "10.3e-008";
// const j: EngineeringNotation = "10.3e-007";
// const transform: Transform = (x) => {
//   if (isENotation(x)) {
//     const a = x.split("e-");
//     const b = parseInt(a[0]);

//     const zerosLength = parseInt(a[1]);
//     // if (a[0].match(".")) {
//     //   const len = a[0].length - 2;
//     //   const
//     //   zerosLength - len
//     // }

//     let zeros = "0.";
//     for (let i = 0; i < a[1].length; i++) {
//       zeros += "0";
//     }
//     return zeros + b;
//   }
//   return x;
// };
