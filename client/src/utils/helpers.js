// export const groupBy = function(xs, key) {
//     return xs.reduce(function(rv, x) {
//       (rv[x[key]] = rv[x[key]] || []).push(x);
//       return rv;
//     }, {});
//   };

//   console.log(groupBy(['one', 'two', 'three'], 'length'));

// // => {"3": ["one", "two"], "5": ["three"]}

export const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

// const calcCals = ateRich.reduce((a, i) => {
//   return {
//     ...a,
//     [i.date]: (Number(a[i.date]) || 0) + Number(i.meal.calories),
//   };
// }, {});
